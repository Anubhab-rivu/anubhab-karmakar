'use client';

import { useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveMohrCircle() {
  const [sx, setSx] = useState(80);
  const [sy, setSy] = useState(20);
  const [tau, setTau] = useState(35);
  const [theta, setTheta] = useState(0);
  const c = (sx + sy) / 2;
  const r = Math.sqrt(((sx - sy) / 2) ** 2 + tau ** 2);
  const s1 = c + r;
  const s2 = c - r;
  const tmax = r;
  const scale = 220 / Math.max(120, Math.abs(c) + r + 20);
  const origin = { x: 380, y: 210 };
  const cx = origin.x + c * scale;
  const cr = r * scale;
  const p1 = { x: origin.x + sx * scale, y: origin.y - tau * scale };
  const p2 = { x: origin.x + sy * scale, y: origin.y + tau * scale };
  const anglePoint = useMemo(() => {
    const a = (2 * theta * Math.PI) / 180;
    return { x: cx + cr * Math.cos(a), y: origin.y - cr * Math.sin(a) };
  }, [theta, cx, cr, origin.y]);

  return (
    <MechanicalDiagram title="Interactive Mohr Circle" caption="The point on Mohr circle moves through twice the physical plane angle.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive Mohr circle">
          <rect className="machine-bed" x="70" y="48" width="620" height="316" rx="12" />
          <line className="axis-line" x1="110" y1={origin.y} x2="650" y2={origin.y} />
          <line className="axis-line" x1={origin.x} y1="72" x2={origin.x} y2="340" />
          <text className="small-label" x="642" y={origin.y - 10}>sigma</text>
          <text className="small-label" x={origin.x + 10} y="86">tau</text>
          <circle className="mohr-circle" cx={cx} cy={origin.y} r={cr} />
          <line className="dimension-line" x1={cx} y1={origin.y} x2={anglePoint.x} y2={anglePoint.y} />
          <circle className="plot-dot" cx={p1.x} cy={p1.y} r="6" />
          <circle className="plot-dot alt" cx={p2.x} cy={p2.y} r="6" />
          <circle className="plot-dot active" cx={anglePoint.x} cy={anglePoint.y} r="7" />
          <text className="small-label" x={cx} y={origin.y + 24} textAnchor="middle">C = {c.toFixed(1)}</text>
          <text className="diagram-title" x="380" y="36" textAnchor="middle">Principal stresses are circle intercepts on sigma axis</text>
        </svg>
        <aside className="ak-controls">
          <label>sigma x: {sx} MPa</label>
          <input type="range" min="-120" max="160" value={sx} onChange={(e) => setSx(Number(e.target.value))} />
          <label>sigma y: {sy} MPa</label>
          <input type="range" min="-120" max="160" value={sy} onChange={(e) => setSy(Number(e.target.value))} />
          <label>tau xy: {tau} MPa</label>
          <input type="range" min="-100" max="100" value={tau} onChange={(e) => setTau(Number(e.target.value))} />
          <label>Physical angle theta: {theta} deg</label>
          <input type="range" min="0" max="180" value={theta} onChange={(e) => setTheta(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>Centre C</span><strong>{c.toFixed(2)} MPa</strong>
            <span>Radius R</span><strong>{r.toFixed(2)} MPa</strong>
            <span>sigma 1</span><strong>{s1.toFixed(2)} MPa</strong>
            <span>sigma 2</span><strong>{s2.toFixed(2)} MPa</strong>
            <span>tau max</span><strong>{tmax.toFixed(2)} MPa</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
