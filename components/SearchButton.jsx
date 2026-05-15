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
        <svg aria-hidden="true" className="action-svg search-action-svg" viewBox="0 0 24 24">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.4 15.4 21 21" />
        </svg>
        <span className="action-text">Search</span>
        <kbd>Ctrl K</kbd>
      </button>
      <SearchModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
