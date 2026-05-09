'use client';

import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';

export default function SearchButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="Search (Ctrl+K)"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 6,
          padding: '6px 12px',
          color: 'rgba(255,255,255,0.7)',
          fontSize: 13,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          transition: 'background 0.2s',
          fontFamily: 'Source Sans 3, sans-serif',
        }}
      >
        🔍 <span style={{ opacity: 0.7 }}>Search</span>
        <kbd style={{
          fontSize: 10,
          background: 'rgba(255,255,255,0.1)',
          padding: '1px 5px',
          borderRadius: 3,
          marginLeft: 4,
        }}>⌘K</kbd>
      </button>
      <SearchModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
