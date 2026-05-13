'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('ak-theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('ak-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('ak-theme', 'light');
    }
  };

  return (
    <button
      aria-label="Toggle dark mode"
      className="nav-icon-btn dark-mode-toggle"
      onClick={toggle}
      title={dark ? 'Use light mode' : 'Use dark mode'}
      type="button"
    >
      <span className={dark ? 'theme-glyph theme-glyph-sun' : 'theme-glyph'} />
    </button>
  );
}
