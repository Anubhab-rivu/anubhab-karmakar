'use client';

import { useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

function toPath(values, yBase, scale, x0 = 110, width = 540) {
  return values.map((v, i) => `${i === 0 ? 'M' : 'L'}${x0 + (i / (values.length - 1)) * width} ${yBase - v * scale}`).join(' ');
}

export default function InteractiveSFDBMD() {
  const [p, setP] = useState(20);
  const [a, setA] = useState(4);
  const [udl, setUdl] = useState(3);
  const length = 10;
  const rb = (p * a + udl * length * (length / 2)) / length;
  const ra = p + udl * length - rb;
  const samples = useMemo(() => Array.from({ length: 80 }, (_, i) => {
    const x = (i / 79) * length;
    const shear = ra - udl * x - (x >= a ? p : 0);
    const moment = ra * x - (udl * x * x) / 2 - (x >= a ? p * (x - a) : 0);
    return { x, shear, moment };
  }), [ra, p, a, udl]);
  const maxM = samples.reduce((best, item) => (item.moment > best.moment ? item : best), samples[0]);
  const maxShear = Math.max(...samples.map((s) => Math.abs(s.shear)), 1);
  const maxMoment = Math.max(...samples.map((s) => Math.abs(s.moment)), 1);

  return (
    <MechanicalDiagram title="SFD and BMD Builder" caption="Reactions and diagrams update for a point load plus UDL on a simply supported beam.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 480" role="img" aria-label="Interactive shear force and bending moment diagram">
          <defs>
            <marker id="beam-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" className="force-fill" />
            </marker>
          </defs>
          <rect className="machine-bed" x="70" y="40" width="620" height="398" rx="12" />
          <line className="beam-line" x1="110" y1="125" x2="650" y2="125" />
          <polygon className="support-fill" points="110,125 90,160 130,160" />
          <circle className="support-fill" cx="650" cy="150" r="11" />
          <line className="reaction-arrow" x1="110" y1="190" x2="110" y2="140" markerEnd="url(#beam-arrow)" />
          <line className="reaction-arrow" x1="650" y1="190" x2="650" y2="140" markerEnd="url(#beam-arrow)" />
          <text className="force-label green" x="124" y="184">RA {ra.toFixed(1)} kN</text>
          <text className="force-label green" x="530" y="184">RB {rb.toFixed(1)} kN</text>
          <line className="force-arrow" x1={110 + (a / length) * 540} y1="62" x2={110 + (a / length) * 540} y2="116" markerEnd="url(#beam-arrow)" />
          <text className="force-label" x={124 + (a / length) * 540} y="82">P {p} kN</text>
          {Array.from({ length: 12 }, (_, i) => (
            <line key={i} className="force-arrow thin" x1={120 + i * 45} y1="84" x2={120 + i * 45} y2="116" markerEnd="url(#beam-arrow)" />
          ))}
          <text className="small-label" x="380" y="74" textAnchor="middle">UDL {udl} kN/m over full span</text>
          <line className="axis-line" x1="110" y1="260" x2="650" y2="260" />
          <path className="sfd-path" d={toPath(samples.map((s) => s.shear), 260, 70 / maxShear)} />
          <text className="diagram-label" x="92" y="260" textAnchor="end">SFD</text>
          <line className="axis-line" x1="110" y1="390" x2="650" y2="390" />
          <path className="bmd-area" d={`${toPath(samples.map((s) => s.moment), 390, 92 / maxMoment)} L650 390 L110 390 Z`} />
          <path className="bmd-path" d={toPath(samples.map((s) => s.moment), 390, 92 / maxMoment)} />
          <circle className="plot-dot active" cx={110 + (maxM.x / length) * 540} cy={390 - maxM.moment * (92 / maxMoment)} r="5" />
          <text className="diagram-label" x="92" y="390" textAnchor="end">BMD</text>
          <text className="small-label" x="380" y="454" textAnchor="middle">Max BM near x = {maxM.x.toFixed(2)} m, M = {maxM.moment.toFixed(2)} kN m</text>
        </svg>
        <aside className="ak-controls">
          <label>Point load P: {p} kN</label>
          <input type="range" min="5" max="60" value={p} onChange={(e) => setP(Number(e.target.value))} />
          <label>Point load position: {a} m</label>
          <input type="range" min="1" max="9" step="0.5" value={a} onChange={(e) => setA(Number(e.target.value))} />
          <label>UDL: {udl} kN/m</label>
          <input type="range" min="0" max="8" step="0.5" value={udl} onChange={(e) => setUdl(Number(e.target.value))} />
          <button type="button" className="ak-tool-btn">Calculate</button>
          <div className="ak-output-grid">
            <span>RA</span><strong>{ra.toFixed(2)} kN</strong>
            <span>RB</span><strong>{rb.toFixed(2)} kN</strong>
            <span>Zero shear</span><strong>near {maxM.x.toFixed(2)} m</strong>
            <span>Point of contraflexure</span><strong>none for this load case</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
