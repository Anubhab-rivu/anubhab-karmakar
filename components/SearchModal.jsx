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
    <div className="search-overlay" onClick={onClose}>
      <div
        aria-modal="true"
        className="search-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <div className="search-input-row">
          <span aria-hidden="true" className="search-modal-icon search-glyph" />
          <input
            aria-label="Search notes"
            ref={inputRef}
            type="search"
            placeholder='Search formulas, labs, viva... try "steam", sem:4, unit:5'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>ESC</kbd>
        </div>

        <div className="search-filter-row" aria-label="Degree filter">
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
        </div>

        <div className="search-filter-row" aria-label="Type and semester filters">
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
        </div>

        <div className="search-filter-row search-filter-row-compact" aria-label="Section filter">
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
        </div>

        <div className="search-results">
          {!query.trim() && (
            <div className="search-suggestions">
              {recent.length > 0 && (
                <div className="search-suggestion-block">
                  <span className="search-suggestion-label">Recent</span>
                  <div className="search-chip-row">
                    {recent.map((item) => (
                      <button key={item} onClick={() => runSearch(item)} type="button">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="search-suggestion-block">
                <span className="search-suggestion-label">Popular topics</span>
                <div className="search-chip-row">
                  {QUICK_PICKS.map((pick) => (
                    <button
                      key={pick.label}
                      onClick={() => runSearch(pick.query, { degree: pick.degree })}
                      type="button"
                    >
                      {pick.label}
                    </button>
                  ))}
                </div>
              </div>
              <p className="search-empty">Advanced: use quotes plus filters like <strong>sem:4</strong>, <strong>unit:5</strong>, <strong>type:unit</strong>, <strong>section:lab</strong>.</p>
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="search-empty">
              No results for &quot;{query}&quot;. Try fewer words or a semester filter.
            </div>
          )}

          {query.trim() && results.length > 0 && (
            <div className="search-count">{results.length} strong matches for &quot;{query}&quot;</div>
          )}

          {results.map((item, index) => (
            <a
              className={index === selected ? 'search-result active' : 'search-result'}
              href={item.url}
              key={item.id}
              onClick={() => saveRecentSearch(query)}
              onMouseEnter={() => setSelected(index)}
            >
              <div className="search-result-top">
                <span>{item.type}</span>
                <strong>{item.tags.slice(0, 2).join(' / ')}</strong>
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: highlightMatch(item.title, query) }} />
              <p>{item.subtitle}</p>
              <em>{makeSnippet(item, query)}</em>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
