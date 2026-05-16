'use client';

import { useEffect, useState } from 'react';

export default function ProgressTracker({ unitKey }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    try {
      const progress = JSON.parse(localStorage.getItem('ak-progress') || '{}');
      setCompleted(!!progress[unitKey]);
    } catch {}
  }, [unitKey]);

  const toggle = () => {
    try {
      const progress = JSON.parse(localStorage.getItem('ak-progress') || '{}');
      if (completed) {
        delete progress[unitKey];
      } else {
        progress[unitKey] = Date.now();
      }
      localStorage.setItem('ak-progress', JSON.stringify(progress));
      setCompleted(!completed);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      style={{
        padding: '8px 16px',
        fontSize: 14,
        fontWeight: 600,
        border: completed
          ? '2px solid var(--green)'
          : '2px solid var(--border)',
        borderRadius: 8,
        background: completed ? 'var(--green-light)' : 'var(--paper-card)',
        color: completed ? 'var(--green)' : 'var(--ink-muted)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      {completed ? 'Completed' : 'Mark as Read'}
    </button>
  );
}

export function ProgressBar({ subjectSlug, totalUnits }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      const progress = JSON.parse(localStorage.getItem('ak-progress') || '{}');
      let c = 0;
      for (let i = 1; i <= totalUnits; i++) {
        if (progress[`${subjectSlug}/unit-${i}`] || Object.keys(progress).some((key) => key.endsWith(`${subjectSlug}-unit-${i}`))) c++;
      }
      setCount(c);
    } catch {}
  }, [subjectSlug, totalUnits]);

  const pct = totalUnits > 0 ? Math.round((count / totalUnits) * 100) : 0;

  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 13,
          color: 'var(--ink-muted)',
          marginBottom: 4,
        }}
      >
        <span>
          {count}/{totalUnits} units completed
        </span>
        <span>{pct}%</span>
      </div>
      <div
        style={{
          height: 6,
          background: 'var(--border-light)',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: pct === 100 ? 'var(--green)' : 'var(--accent)',
            borderRadius: 3,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
