'use client';

import { useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveCentroid() {
  const [bf, setBf] = useState(220);
  const [tf, setTf] = useState(36);
  const [dw, setDw] = useState(180);
  const [tw, setTw] = useState(42);
  const a1 = bf * tf;
  const y1 = dw + tf / 2;
  const a2 = tw * dw;
  const y2 = dw / 2;
  const ybar = (a1 * y1 + a2 * y2) / (a1 + a2);

  return (
    <MechanicalDiagram title="Interactive Composite Centroid" caption="Area moment method: ybar = sum(Ay) / sum(A).">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive centroid of T section">
          <rect className="machine-bed" x="80" y="46" width="600" height="320" rx="12" />
          <g transform="translate(380 326) scale(1 -1)">
            <rect className="section-fill" x={-tw / 2} y="0" width={tw} height={dw} />
            <rect className="section-fill flange" x={-bf / 2} y={dw} width={bf} height={tf} />
            <line className="centroid-line" x1="-160" y1={ybar} x2="160" y2={ybar} />
            <circle className="plot-dot active" cx="0" cy={ybar} r="7" />
          </g>
          <text className="diagram-label" x="380" y={326 - ybar - 12} textAnchor="middle">Centroid C</text>
          <line className="dimension-line" x1="520" y1="326" x2="520" y2={326 - ybar} />
          <text className="small-label" x="532" y={326 - ybar / 2}>ybar = {ybar.toFixed(1)} mm</text>
        </svg>
        <aside className="ak-controls">
          <label>Flange width: {bf} mm</label>
          <input type="range" min="120" max="320" value={bf} onChange={(e) => setBf(Number(e.target.value))} />
          <label>Flange thickness: {tf} mm</label>
          <input type="range" min="20" max="70" value={tf} onChange={(e) => setTf(Number(e.target.value))} />
          <label>Web depth: {dw} mm</label>
          <input type="range" min="100" max="260" value={dw} onChange={(e) => setDw(Number(e.target.value))} />
          <label>Web thickness: {tw} mm</label>
          <input type="range" min="20" max="80" value={tw} onChange={(e) => setTw(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>Area flange</span><strong>{a1.toFixed(0)} mm2</strong>
            <span>Area web</span><strong>{a2.toFixed(0)} mm2</strong>
            <span>Total area</span><strong>{(a1 + a2).toFixed(0)} mm2</strong>
            <span>Centroid from base</span><strong>{ybar.toFixed(2)} mm</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
