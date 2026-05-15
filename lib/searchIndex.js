import { buildDiplomaSearchExtras } from './diplomaContentBank';
import { syllabusData } from './syllabus';

function normalize(value) {
  return String(value || '').toLowerCase();
}

function subjectItems(degree, program) {
  return Object.entries(program.semesters).flatMap(([semesterKey, semester]) =>
    Object.entries(semester.subjects).flatMap(([subjectSlug, subject]) => {
      const subjectUrl = `/library/${degree}/${semesterKey}/${subjectSlug}`;
      const baseText = [
        program.programme,
        program.board,
        semester.label,
        semester.year,
        subject.label,
        subject.code,
        subject.category,
        subject.topics,
        subject.electiveOptions?.join(' '),
      ].join(' ');

      const items = [
        {
          id: `${degree}-${semesterKey}-${subjectSlug}`,
          type: 'subject',
          degree,
          semester: semesterKey,
          title: subject.label,
          subtitle: `${semester.label} - ${subject.code || 'Subject'} - ${subject.category || program.label}`,
          url: subjectUrl,
          text: baseText,
          tags: [program.label, semester.label, subject.category, subject.code].filter(Boolean),
          sections: ['Syllabus', 'Units'],
        },
      ];

      (subject.units || []).forEach((unit) => {
        items.push({
          id: `${degree}-${semesterKey}-${subjectSlug}-unit-${unit.num}`,
          type: 'unit',
          degree,
          semester: semesterKey,
          title: `Unit ${unit.num}: ${unit.title}`,
          subtitle: `${subject.label} - ${semester.label}`,
          url: `${subjectUrl}/unit-${unit.num}`,
          text: `${baseText} ${unit.title} ${unit.topics} ${unit.hours || ''}`,
          tags: [program.label, semester.label, subject.label, unit.hours, unit.full ? 'Full Content' : 'Module'].filter(Boolean),
          sections: ['Big Picture', 'Formulas', 'Diagram', 'Lab', 'Practice'],
        });
      });

      return items;
    })
  );
}

const baseIndex = Object.entries(syllabusData).flatMap(([degree, program]) =>
  subjectItems(degree, program)
);

const diplomaExtras = buildDiplomaSearchExtras(syllabusData);

const extraByUrl = new Map(diplomaExtras.map((item) => [item.url, item]));

export const searchIndex = baseIndex.map((item) => {
  const extra = extraByUrl.get(item.url);
  if (!extra) return item;
  return {
    ...item,
    text: `${item.text} ${extra.text}`,
    tags: [...new Set([...(item.tags || []), ...(extra.tags || [])])],
    sections: extra.sections || item.sections,
  };
});

const QUICK_PICKS = [
  { label: 'Engineering Mechanics', query: 'engineering mechanics', degree: 'diploma' },
  { label: 'Strength of Materials', query: 'strength of materials', degree: 'diploma' },
  { label: 'Thermal Engineering', query: 'thermal', degree: 'diploma' },
  { label: 'Theory of Machine', query: 'theory of machine', degree: 'diploma' },
  { label: 'Design of Machine Elements', query: 'design of machine', degree: 'diploma' },
  { label: 'Metrology', query: 'metrology', degree: 'diploma' },
  { label: 'Manufacturing', query: 'manufacturing', degree: 'diploma' },
  { label: 'Mathematics', query: 'mathematics', degree: 'diploma' },
];

const SEMESTER_FILTERS = [
  ['all', 'All semesters'],
  ['sem-1', 'Sem 1'],
  ['sem-2', 'Sem 2'],
  ['sem-3', 'Sem 3'],
  ['sem-4', 'Sem 4'],
  ['sem-5', 'Sem 5'],
  ['sem-6', 'Sem 6'],
];

const SECTION_FILTERS = [
  ['all', 'All sections'],
  ['formulas', 'Formulas'],
  ['lab', 'Lab'],
  ['diagram', 'Diagram'],
  ['practice', 'Practice'],
];

export { QUICK_PICKS, SEMESTER_FILTERS, SECTION_FILTERS };

function tokenize(raw) {
  const phraseMatch = raw.match(/"([^"]+)"/g);
  const phrases = (phraseMatch || []).map((p) => p.replace(/"/g, '').trim()).filter(Boolean);
  const withoutPhrases = raw.replace(/"([^"]+)"/g, ' ').trim();
  const tokens = withoutPhrases.split(/\s+/).filter(Boolean);
  return { phrases, tokens };
}

function fuzzyIncludes(haystack, token) {
  if (haystack.includes(token)) return true;
  if (token.length < 4) return false;
  let i = 0;
  for (const ch of haystack) {
    if (ch === token[i]) i += 1;
    if (i === token.length) return true;
  }
  return false;
}

export function getRecentSearches() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('ak-recent-searches') || '[]').slice(0, 6);
  } catch {
    return [];
  }
}

export function saveRecentSearch(query) {
  if (typeof window === 'undefined' || !query.trim()) return;
  const trimmed = query.trim();
  const existing = getRecentSearches().filter((q) => q !== trimmed);
  const next = [trimmed, ...existing].slice(0, 6);
  localStorage.setItem('ak-recent-searches', JSON.stringify(next));
}

export function searchNotes(query, options = {}) {
  const raw = normalize(query).trim();
  if (!raw) return [];

  const { phrases, tokens } = tokenize(raw);
  const degreeFilter = options.degree && options.degree !== 'all' ? options.degree : null;
  const typeFilter = options.type && options.type !== 'all' ? options.type : null;
  const semesterFilter = options.semester && options.semester !== 'all' ? options.semester : null;
  const sectionFilter = options.section && options.section !== 'all' ? normalize(options.section) : null;

  return searchIndex
    .filter((item) => !degreeFilter || item.degree === degreeFilter)
    .filter((item) => !typeFilter || item.type === typeFilter)
    .filter((item) => !semesterFilter || item.semester === semesterFilter)
    .filter((item) => {
      if (!sectionFilter) return true;
      const sections = normalize((item.sections || []).join(' '));
      const text = normalize(item.text);
      return sections.includes(sectionFilter) || text.includes(sectionFilter);
    })
    .map((item) => {
      const title = normalize(item.title);
      const subtitle = normalize(item.subtitle);
      const text = normalize(item.text);
      const tags = normalize((item.tags || []).join(' '));
      let score = 0;

      if (title === raw) score += 80;
      if (title.includes(raw)) score += 45;
      if (subtitle.includes(raw)) score += 22;
      if (tags.includes(raw)) score += 16;
      if (text.includes(raw)) score += 10;

      phrases.forEach((phrase) => {
        if (title.includes(phrase)) score += 30;
        if (text.includes(phrase)) score += 18;
      });

      tokens.forEach((token) => {
        if (title.includes(token)) score += 14;
        else if (fuzzyIncludes(title, token)) score += 9;
        if (subtitle.includes(token)) score += 8;
        if (tags.includes(token)) score += 6;
        if (text.includes(token)) score += 3;
        else if (fuzzyIncludes(text, token)) score += 2;
      });

      if (item.type === 'unit') score += 2;
      if ((item.tags || []).includes('Full Content')) score += 4;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 32);
}

export function highlightMatch(text, query) {
  const token = query.trim().split(/\s+/).find(Boolean);
  if (!token || token.length < 2) return text;
  const re = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}
