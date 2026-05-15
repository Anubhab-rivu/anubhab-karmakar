'use client';

import { useEffect, useState } from 'react';

function readTheme() {
  if (typeof window === 'undefined') return false;
  return (
    localStorage.getItem('ak-theme') === 'dark' ||
    document.documentElement.getAttribute('data-theme') === 'dark'
  );
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const isDark = readTheme();
    setDark(isDark);
    setReady(true);
    document.documentElement.classList.toggle('theme-ready', true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.add('theme-transition');
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('ak-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('ak-theme', 'light');
    }
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 400);
  };

  return (
    <button
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      className={`nav-icon-btn dark-mode-toggle${ready && dark ? ' is-dark' : ''}${ready ? ' is-ready' : ''}`}
      onClick={toggle}
      title={dark ? 'Use light mode' : 'Use dark mode'}
      type="button"
    >
      <span className="theme-glyph-orbit" aria-hidden="true">
        <span className={dark ? 'theme-glyph theme-glyph-sun' : 'theme-glyph theme-glyph-moon'} />
      </span>
    </button>
  );
}
