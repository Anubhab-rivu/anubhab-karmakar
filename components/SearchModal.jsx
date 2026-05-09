'use client';

import { useEffect, useRef, useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [pagefind, setPagefind] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const pf = await import(/* webpackIgnore: true */ '/pagefind/pagefind.js');
        await pf.init();
        setPagefind(pf);
      } catch {
        // Pagefind not available in dev mode
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!pagefind || !query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      const search = await pagefind.search(query);
      const items = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
      setResults(items);
    }, 200);
    return () => clearTimeout(timer);
  }, [query, pagefind]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    }
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '15vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '90%', maxWidth: 560,
          background: 'var(--paper-card)', borderRadius: 16,
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden', border: '1px solid var(--border)',
        }}
      >
        {/* Search Input */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 20, opacity: 0.5 }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search notes, formulas, topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 16, background: 'transparent',
              color: 'var(--ink)', fontFamily: 'Source Sans 3, sans-serif',
            }}
          />
          <kbd style={{
            fontSize: 11, color: 'var(--ink-muted)', background: 'var(--paper-warm)',
            padding: '2px 8px', borderRadius: 4, border: '1px solid var(--border)',
          }}>ESC</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 400, overflowY: 'auto' }}>
          {query && results.length === 0 && pagefind && (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--ink-muted)', fontSize: 14 }}>
              No results for &quot;{query}&quot;
            </div>
          )}
          {query && !pagefind && (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--ink-muted)', fontSize: 14 }}>
              Search is available in production build only
            </div>
          )}
          {results.map((r, i) => (
            <a
              key={i}
              href={r.url}
              style={{
                display: 'block', padding: '14px 20px',
                borderBottom: '1px solid var(--border-light)',
                textDecoration: 'none', transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-warm)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>
                {r.meta?.title || 'Untitled'}
              </div>
              <div
                style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5 }}
                dangerouslySetInnerHTML={{ __html: r.excerpt }}
              />
            </a>
          ))}
          {!query && (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--ink-muted)', fontSize: 14 }}>
              Start typing to search across all notes...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
