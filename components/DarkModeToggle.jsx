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
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="dark-mode-toggle"
      style={{
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.25)',
        borderRadius: 8,
        padding: '6px 10px',
        cursor: 'pointer',
        fontSize: 18,
        lineHeight: 1,
        color: 'white',
        transition: 'background 0.2s',
      }}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
