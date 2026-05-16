'use client';

import { useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveFluidFlow() {
  const [d1, setD1] = useState(100);
  const [d2, setD2] = useState(60);
  const [v1, setV1] = useState(2.2);
  const [z, setZ] = useState(1);
  const rho = 1000;
  const g = 9.81;
  const a1 = Math.PI * (d1 / 1000) ** 2 / 4;
  const a2 = Math.PI * (d2 / 1000) ** 2 / 4;
  const q = a1 * v1;
  const v2 = q / a2;
  const dp = rho * g * z + 0.5 * rho * (v2 ** 2 - v1 ** 2);

  return (
    <MechanicalDiagram title="Interactive Bernoulli Pipe Flow" caption="Continuity raises throat velocity; Bernoulli shows the pressure drop.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive fluid flow">
          <defs>
            <marker id="flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" className="fluid-fill" />
            </marker>
          </defs>
          <rect className="machine-bed" x="80" y="54" width="600" height="298" rx="12" />
          <path className="pipe-wall" d={`M130 ${205 - d1 / 2} C260 ${205 - d1 / 2}, 300 ${205 - d2 / 2}, 380 ${205 - d2 / 2} S500 ${205 - d1 / 2}, 630 ${205 - d1 / 2}`} />
          <path className="pipe-wall" d={`M130 ${205 + d1 / 2} C260 ${205 + d1 / 2}, 300 ${205 + d2 / 2}, 380 ${205 + d2 / 2} S500 ${205 + d1 / 2}, 630 ${205 + d1 / 2}`} />
          {[170, 260, 350, 450, 560].map((x, i) => <line key={x} className="flow-arrow" x1={x} y1="205" x2={x + 44 + i * 4} y2="205" markerEnd="url(#flow-arrow)" />)}
          <line className="dimension-line" x1="165" y1={205 - d1 / 2} x2="165" y2={205 + d1 / 2} />
          <text className="small-label" x="176" y="210">D1</text>
          <line className="dimension-line" x1="380" y1={205 - d2 / 2} x2="380" y2={205 + d2 / 2} />
          <text className="small-label" x="392" y="210">D2</text>
          <text className="diagram-title" x="380" y="42" textAnchor="middle">Venturi effect: velocity increases in the throat</text>
        </svg>
        <aside className="ak-controls">
          <label>Inlet diameter D1: {d1} mm</label>
          <input type="range" min="60" max="180" value={d1} onChange={(e) => setD1(Number(e.target.value))} />
          <label>Throat diameter D2: {d2} mm</label>
          <input type="range" min="30" max="140" value={d2} onChange={(e) => setD2(Number(e.target.value))} />
          <label>Inlet velocity V1: {v1.toFixed(1)} m/s</label>
          <input type="range" min="0.5" max="6" step="0.1" value={v1} onChange={(e) => setV1(Number(e.target.value))} />
          <label>Elevation rise: {z.toFixed(1)} m</label>
          <input type="range" min="-2" max="3" step="0.1" value={z} onChange={(e) => setZ(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>Discharge Q</span><strong>{q.toFixed(4)} m3/s</strong>
            <span>Throat velocity V2</span><strong>{v2.toFixed(2)} m/s</strong>
            <span>Pressure drop</span><strong>{(dp / 1000).toFixed(2)} kPa</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
