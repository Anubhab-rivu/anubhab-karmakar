'use client';

import { useEffect, useState } from 'react';
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
        aria-label="Search notes"
        className="nav-icon-btn search-btn"
        onClick={() => setOpen(true)}
        title="Search (Ctrl+K)"
        type="button"
      >
        <span aria-hidden="true" className="search-glyph" />
        <span className="action-text">Search</span>
        <kbd>Ctrl K</kbd>
      </button>
      <SearchModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
