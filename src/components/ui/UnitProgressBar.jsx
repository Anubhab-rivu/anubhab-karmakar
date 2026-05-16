'use client';

import { useEffect, useState } from 'react';

export default function UnitProgressBar({ unitId }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    try {
      const progress = JSON.parse(localStorage.getItem('ak-unit-progress') || '{}');
      setDone(!!progress[unitId]);
    } catch {}
  }, [unitId]);

  const toggle = () => {
    try {
      const progress = JSON.parse(localStorage.getItem('ak-unit-progress') || '{}');
      const legacy = JSON.parse(localStorage.getItem('ak-progress') || '{}');
      if (done) delete progress[unitId];
      else progress[unitId] = Date.now();
      if (done) delete legacy[unitId];
      else legacy[unitId] = Date.now();
      localStorage.setItem('ak-unit-progress', JSON.stringify(progress));
      localStorage.setItem('ak-progress', JSON.stringify(legacy));
      setDone(!done);
    } catch {}
  };

  return <button className={`unit-complete-btn ${done ? 'done' : ''}`} type="button" onClick={toggle}>{done ? 'Completed' : 'Mark Complete'}</button>;
}
