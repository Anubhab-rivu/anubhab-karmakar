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
        });
      });

      return items;
    })
  );
}

export const searchIndex = Object.entries(syllabusData).flatMap(([degree, program]) =>
  subjectItems(degree, program)
);

export function searchNotes(query, options = {}) {
  const raw = normalize(query).trim();
  if (!raw) return [];

  const tokens = raw
    .replace(/["']/g, '')
    .split(/\s+/)
    .filter(Boolean);

  const degreeFilter = options.degree && options.degree !== 'all' ? options.degree : null;
  const typeFilter = options.type && options.type !== 'all' ? options.type : null;

  return searchIndex
    .filter((item) => !degreeFilter || item.degree === degreeFilter)
    .filter((item) => !typeFilter || item.type === typeFilter)
    .map((item) => {
      const title = normalize(item.title);
      const subtitle = normalize(item.subtitle);
      const text = normalize(item.text);
      const tags = normalize(item.tags.join(' '));
      let score = 0;

      if (title.includes(raw)) score += 45;
      if (subtitle.includes(raw)) score += 22;
      if (tags.includes(raw)) score += 16;
      if (text.includes(raw)) score += 10;

      tokens.forEach((token) => {
        if (title.includes(token)) score += 14;
        if (subtitle.includes(token)) score += 8;
        if (tags.includes(token)) score += 6;
        if (text.includes(token)) score += 3;
      });

      if (item.type === 'unit') score += 2;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 24);
}
