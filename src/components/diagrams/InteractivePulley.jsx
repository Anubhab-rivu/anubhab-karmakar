'use client';

import { useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractivePulley() {
  const [pulleys, setPulleys] = useState(3);
  const [load, setLoad] = useState(2400);
  const [efficiency, setEfficiency] = useState(75);
  const vr = 2 * pulleys;
  const ma = (efficiency / 100) * vr;
  const effort = load / ma;
  const frictionLoss = load / vr - load / ma;
  const isSelfLocking = efficiency <= 50;
  const lowerY = 250;
  const topY = 90;
  const xs = useMemo(
    () => Array.from({ length: pulleys }, (_, i) => 190 + i * (300 / Math.max(1, pulleys - 1))),
    [pulleys],
  );
  const ropeColor = `hsl(${Math.max(0, 30 - load / 180)}, 80%, ${Math.max(38, 70 - load / 120)}%)`;

  return (
    <MechanicalDiagram title="Animated Pulley Block" caption="VR = 2n because each movable pulley adds two supporting rope segments.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive pulley block">
          <defs>
            <marker id="pulley-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" className="force-fill" />
            </marker>
          </defs>
          <rect className="machine-bed" x="90" y="48" width="580" height="330" rx="12" />
          <rect className="component-metal" x="155" y="58" width="430" height="44" rx="8" />
          <rect className="component-metal" x="155" y="238" width="430" height="48" rx="8" />
          <text x="370" y="84" className="diagram-label" textAnchor="middle">Fixed block</text>
          <text x="370" y="270" className="diagram-label" textAnchor="middle">Movable block with load hook</text>

          {xs.map((x, index) => (
            <g key={x}>
              <circle className="pulley-wheel" cx={x} cy={topY} r="26" />
              <circle className="pulley-wheel" cx={x} cy={lowerY} r="26" />
              <circle className="shaft-dot" cx={x} cy={topY} r="5" />
              <circle className="shaft-dot" cx={x} cy={lowerY} r="5" />
              <line className="rope-line" style={{ stroke: ropeColor }} x1={x - 26} y1={topY} x2={x - 26} y2={lowerY} />
              <line className="rope-line rope-pulse" style={{ stroke: ropeColor, animationDelay: `${index * 0.12}s` }} x1={x + 26} y1={lowerY} x2={x + 26} y2={topY} />
            </g>
          ))}

          <path
            className="rope-line rope-pulse"
            style={{ stroke: ropeColor }}
            d={`M${xs[0] - 26} ${topY} C 120 110, 120 300, 150 330`}
          />
          <path
            className="rope-line rope-pulse"
            style={{ stroke: ropeColor }}
            d={`M${xs[xs.length - 1] + 26} ${topY} C 620 120, 628 165, 628 220`}
          />
          <line className="force-arrow" x1="628" y1="220" x2="628" y2={260 + Math.min(80, effort / 12)} markerEnd="url(#pulley-arrow)" />
          <text x="648" y="246" className="force-label">Effort P</text>

          <line className="reaction-arrow" x1="370" y1="360" x2="370" y2={310 - Math.min(60, load / 100)} markerEnd="url(#pulley-arrow)" />
          <path className="hook-line" d="M370 286 V326 q0 20 20 20 q16 0 16 -16" />
          <rect className="load-block" x="316" y="340" width="108" height="36" rx="5" />
          <text x="370" y="363" className="diagram-label" textAnchor="middle">W = {load} N</text>

          <g transform="translate(96 318)">
            <text className="small-label" x="0" y="0">Rope tension colour rises with load.</text>
            <text className="small-label" x="0" y="22">Each red/green arrow length is proportional to force.</text>
          </g>
        </svg>

        <aside className="ak-controls">
          <label>Movable pulleys: {pulleys}</label>
          <input type="range" min="1" max="5" step="1" value={pulleys} onChange={(e) => setPulleys(Number(e.target.value))} />
          <label>Load W: {load} N</label>
          <input type="range" min="100" max="5000" step="50" value={load} onChange={(e) => setLoad(Number(e.target.value))} />
          <label>Efficiency: {efficiency}%</label>
          <input type="range" min="40" max="95" step="1" value={efficiency} onChange={(e) => setEfficiency(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>VR</span><strong>{vr}</strong>
            <span>MA</span><strong>{ma.toFixed(2)}</strong>
            <span>Effort P</span><strong>{effort.toFixed(1)} N</strong>
            <span>Friction loss</span><strong>{Math.abs(frictionLoss).toFixed(1)} N equivalent</strong>
            <span>Machine</span><strong>{isSelfLocking ? 'SELF-LOCKING' : 'REVERSIBLE'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
