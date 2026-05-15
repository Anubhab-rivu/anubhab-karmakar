'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  QUICK_PICKS,
  SEMESTER_FILTERS,
  SECTION_FILTERS,
  getRecentSearches,
  highlightMatch,
  saveRecentSearch,
  searchNotes,
} from '@/lib/searchIndex';

const degreeFilters = [
  ['all', 'All'],
  ['diploma', 'Diploma'],
  ['btech', 'B.Tech'],
];

const typeFilters = [
  ['all', 'Everything'],
  ['subject', 'Subjects'],
  ['unit', 'Units'],
];

function makeSnippet(item, query) {
  const source = item.text || item.subtitle || '';
  const token = query.trim().split(/\s+/)[0]?.toLowerCase();
  const lower = source.toLowerCase();
  const index = token ? lower.indexOf(token) : -1;
  const start = Math.max(index - 70, 0);
  const picked = index >= 0 ? source.slice(start, start + 180) : source.slice(0, 180);
  return `${start > 0 ? '...' : ''}${picked}${picked.length >= 180 ? '...' : ''}`;
}

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [degree, setDegree] = useState('all');
  const [type, setType] = useState('all');
  const [semester, setSemester] = useState('all');
  const [section, setSection] = useState('all');
  const [selected, setSelected] = useState(0);
  const [recent, setRecent] = useState([]);

  const results = useMemo(
    () => searchNotes(query, { degree, type, semester, section }),
    [degree, query, section, semester, type]
  );

  useEffect(() => {
    if (isOpen) {
      setRecent(getRecentSearches());
      inputRef.current?.focus();
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelected(0);
  }, [query, degree, type, semester, section]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((current) => Math.min(current + 1, Math.max(results.length - 1, 0)));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((current) => Math.max(current - 1, 0));
      }
      if (e.key === 'Enter' && results[selected]) {
        saveRecentSearch(query);
        window.location.href = results[selected].url;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
    }

    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, query, results, selected]);

  const runSearch = (value, opts = {}) => {
    setQuery(value);
    if (opts.degree) setDegree(opts.degree);
    if (opts.semester) setSemester(opts.semester);
  };

  if (!isOpen) return null;

  return (
    <motion className="search-overlay" onClick={onClose}>
      <motion
        aria-modal="true"
        className="search-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <motion className="search-input-row">
          <span aria-hidden="true" className="search-modal-icon search-glyph" />
          <input
            aria-label="Search notes"
            ref={inputRef}
            type="search"
            placeholder='Search units, formulas, labs… try "steam" or "unit 3"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>ESC</kbd>
        </motion>

        <motion className="search-filter-row" aria-label="Degree filter">
          {degreeFilters.map(([value, label]) => (
            <button
              className={degree === value ? 'active' : ''}
              key={value}
              onClick={() => setDegree(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </motion>

        <motion className="search-filter-row" aria-label="Type and semester filters">
          {typeFilters.map(([value, label]) => (
            <button
              className={type === value ? 'active' : ''}
              key={value}
              onClick={() => setType(value)}
              type="button"
            >
              {label}
            </button>
          ))}
          <span className="search-filter-divider" />
          {SEMESTER_FILTERS.map(([value, label]) => (
            <button
              className={semester === value ? 'active' : ''}
              key={value}
              onClick={() => setSemester(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </motion>

        <motion className="search-filter-row search-filter-row-compact" aria-label="Section filter">
          {SECTION_FILTERS.map(([value, label]) => (
            <button
              className={section === value ? 'active' : ''}
              key={value}
              onClick={() => setSection(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </motion>

        <motion className="search-results">
          {!query.trim() && (
            <motion className="search-suggestions">
              {recent.length > 0 && (
                <motion className="search-suggestion-block">
                  <span className="search-suggestion-label">Recent</span>
                  <motion className="search-chip-row">
                    {recent.map((item) => (
                      <button key={item} onClick={() => runSearch(item)} type="button">
                        {item}
                      </button>
                    ))}
                  </motion>
                </motion>
              )}
              <motion className="search-suggestion-block">
                <span className="search-suggestion-label">Popular topics</span>
                <motion className="search-chip-row">
                  {QUICK_PICKS.map((pick) => (
                    <button
                      key={pick.label}
                      onClick={() => runSearch(pick.query, { degree: pick.degree })}
                      type="button"
                    >
                      {pick.label}
                    </button>
                  ))}
                </motion>
              </motion>
              <p className="search-empty">Tip: use quotes for exact phrases, e.g. &quot;factor of safety&quot;</p>
            </motion>
          )}

          {query.trim() && results.length === 0 && (
            <motion className="search-empty">
              No results for &quot;{query}&quot;. Try fewer words or a semester filter.
            </motion>
          )}

          {results.map((item, index) => (
            <a
              className={index === selected ? 'search-result active' : 'search-result'}
              href={item.url}
              key={item.id}
              onClick={() => saveRecentSearch(query)}
              onMouseEnter={() => setSelected(index)}
            >
              <motion className="search-result-top">
                <span>{item.type}</span>
                <strong>{item.tags.slice(0, 2).join(' / ')}</strong>
              </motion>
              <h3 dangerouslySetInnerHTML={{ __html: highlightMatch(item.title, query) }} />
              <p>{item.subtitle}</p>
              <em>{makeSnippet(item, query)}</em>
            </a>
          ))}
        </motion>
      </motion>
    </motion>
  );
}

function motion({ className, children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
