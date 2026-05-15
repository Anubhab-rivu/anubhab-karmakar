'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { searchNotes } from '@/lib/searchIndex';

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
  const [selected, setSelected] = useState(0);

  const results = useMemo(
    () => searchNotes(query, { degree, type }),
    [degree, query, type]
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelected(0);
  }, [query, degree, type]);

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
        window.location.href = results[selected].url;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
    }

    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, results, selected]);

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
          <span aria-hidden="true" className="search-modal-icon" />
          <input
            aria-label="Search notes"
            ref={inputRef}
            type="text"
            placeholder="Search units, formulas, labs, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>ESC</kbd>
        </div>

        <div className="search-filter-row" aria-label="Search filters">
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
          <span className="search-filter-divider" />
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
        </div>

        <div className="search-results">
          {!query.trim() && (
            <div className="search-empty">
              Start typing to search the full notes library.
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="search-empty">
              No results for &quot;{query}&quot;.
            </div>
          )}

          {results.map((item, index) => (
            <a
              className={index === selected ? 'search-result active' : 'search-result'}
              href={item.url}
              key={item.id}
              onMouseEnter={() => setSelected(index)}
            >
              <div className="search-result-top">
                <span>{item.type}</span>
                <strong>{item.tags.slice(0, 2).join(' / ')}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <em>{makeSnippet(item, query)}</em>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
