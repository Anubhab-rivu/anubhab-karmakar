'use client';

import { useState } from 'react';

export default function MechanicalDiagram({ title, caption, children, height = 420 }) {
  const [scale, setScale] = useState(1);

  return (
    <figure className="ak-diagram-frame">
      <div className="ak-diagram-toolbar">
        <strong>{title || 'Mechanical diagram'}</strong>
        <div>
          <button type="button" onClick={() => setScale((value) => Math.max(0.75, value - 0.1))}>-</button>
          <span>{Math.round(scale * 100)}%</span>
          <button type="button" onClick={() => setScale((value) => Math.min(1.8, value + 0.1))}>+</button>
        </div>
      </div>
      <div className="ak-diagram-canvas" style={{ minHeight: height }}>
        <div className="ak-diagram-zoom" style={{ transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
