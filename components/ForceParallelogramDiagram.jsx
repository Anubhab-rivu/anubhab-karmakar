'use client';

import { useState } from 'react';
import InteractiveDiagram from './InteractiveDiagram';
import { SvgWatermark } from './Watermark';

export default function ForceParallelogramDiagram() {
  const [angle, setAngle] = useState(60);
  const F1 = 40;
  const F2 = 30;

  const rad = (angle * Math.PI) / 180;
  const resultant = Math.sqrt(F1 * F1 + F2 * F2 + 2 * F1 * F2 * Math.cos(rad));
  const alpha = Math.atan2(F2 * Math.sin(rad), F1 + F2 * Math.cos(rad)) * (180 / Math.PI);

  const ox = 160, oy = 180;
  const scl = 2.5;

  const f1x = ox + F1 * scl;
  const f1y = oy;
  const f2x = ox + F2 * scl * Math.cos(rad);
  const f2y = oy - F2 * scl * Math.sin(rad);
  const rx = ox + resultant * scl * Math.cos(alpha * Math.PI / 180);
  const ry = oy - resultant * scl * Math.sin(alpha * Math.PI / 180);

  const px = f1x + (f2x - ox);
  const py = f1y + (f2y - oy);

  return (
    <InteractiveDiagram caption="Interactive: Adjust the angle between forces to see how the resultant changes">
      <svg viewBox="0 0 500 280" style={{ maxWidth: 500 }}>
        <rect x="0" y="0" width="500" height="280" fill="#faf9f6" rx="6" />

        {/* Parallelogram dashed lines */}
        <line x1={f1x} y1={f1y} x2={px} y2={py} stroke="#aaa" strokeWidth="1" strokeDasharray="5,4" />
        <line x1={f2x} y1={f2y} x2={px} y2={py} stroke="#aaa" strokeWidth="1" strokeDasharray="5,4" />

        {/* F1 vector */}
        <line x1={ox} y1={oy} x2={f1x} y2={f1y} stroke="#1a2744" strokeWidth="2.5" />
        <circle cx={f1x} cy={f1y} r="3" fill="#1a2744" />
        <text x={f1x + 8} y={f1y + 4} fontSize="13" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">
          F₁ = {F1} N
        </text>

        {/* F2 vector */}
        <line x1={ox} y1={oy} x2={f2x} y2={f2y} stroke="#2d6a4f" strokeWidth="2.5" />
        <circle cx={f2x} cy={f2y} r="3" fill="#2d6a4f" />
        <text x={f2x + 8} y={f2y - 4} fontSize="13" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">
          F₂ = {F2} N
        </text>

        {/* Resultant */}
        <line x1={ox} y1={oy} x2={rx} y2={ry} stroke="#c0392b" strokeWidth="3" />
        <circle cx={rx} cy={ry} r="4" fill="#c0392b" />
        <text x={rx + 8} y={ry - 6} fontSize="13" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">
          R = {resultant.toFixed(1)} N
        </text>

        {/* Angle arc */}
        <path
          d={`M${ox + 30},${oy} A30,30 0 0,0 ${ox + 30 * Math.cos(rad)},${oy - 30 * Math.sin(rad)}`}
          fill="none" stroke="#c8951a" strokeWidth="1.5"
        />
        <text x={ox + 40} y={oy - 10} fontSize="12" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">
          θ = {angle}°
        </text>

        {/* Origin */}
        <circle cx={ox} cy={oy} r="4" fill="#c0392b" />
        <text x={ox - 14} y={oy + 5} fontSize="11" fill="#1a2744" fontFamily="Source Sans 3">O</text>

        {/* Formula */}
        <text x="250" y="265" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Code Pro, monospace">
          R = √(F₁² + F₂² + 2·F₁·F₂·cos θ) = {resultant.toFixed(1)} N at {alpha.toFixed(1)}°
        </text>

        <SvgWatermark />
      </svg>

      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>
          Angle between forces: <strong style={{ color: 'var(--accent)' }}>{angle}°</strong>
        </label>
        <br />
        <input
          type="range" min="10" max="170" step="5" value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          style={{ width: '80%', maxWidth: 400, marginTop: 8, accentColor: 'var(--accent)' }}
        />
      </div>
    </InteractiveDiagram>
  );
}
