'use client';

import { useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveFriction() {
  const [angle, setAngle] = useState(22);
  const [mu, setMu] = useState(0.32);
  const weight = 500;
  const rad = (angle * Math.PI) / 180;
  const normal = weight * Math.cos(rad);
  const friction = mu * normal;
  const effort = weight * Math.sin(rad) + friction;
  const repose = Math.atan(mu) * 180 / Math.PI;

  return (
    <MechanicalDiagram title="Interactive Friction on Inclined Plane" caption="At angle of repose, the block is just about to slide and tan(phi) = mu.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive friction inclined plane">
          <defs>
            <marker id="friction-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" className="force-fill" />
            </marker>
          </defs>
          <rect className="machine-bed" x="80" y="48" width="600" height="310" rx="12" />
          <g transform={`translate(210 285) rotate(${-angle})`}>
            <rect className="incline-plane" x="0" y="0" width="380" height="18" rx="4" />
            <rect className="load-block" x="148" y="-70" width="82" height="58" rx="6" />
            <line className="force-arrow" x1="188" y1="-42" x2="188" y2="52" markerEnd="url(#friction-arrow)" />
            <text className="force-label" x="198" y="30">W</text>
            <line className="reaction-arrow" x1="188" y1="-42" x2="188" y2="-118" markerEnd="url(#friction-arrow)" />
            <text className="force-label green" x="196" y="-100">N</text>
            <line className="force-arrow" x1="148" y1="-24" x2="74" y2="-24" markerEnd="url(#friction-arrow)" />
            <text className="force-label" x="82" y="-34">f</text>
            <line className="dimension-line" x1="230" y1="-24" x2="318" y2="-24" markerEnd="url(#friction-arrow)" />
            <text className="small-label" x="286" y="-34">P</text>
          </g>
          <path className="dimension-line" d="M210 285 A70 70 0 0 1 275 258" />
          <text className="small-label" x="250" y="306">theta = {angle} deg</text>
        </svg>
        <aside className="ak-controls">
          <label>Inclination angle: {angle} deg</label>
          <input type="range" min="0" max="45" step="1" value={angle} onChange={(e) => setAngle(Number(e.target.value))} />
          <label>Coefficient of friction mu: {mu.toFixed(2)}</label>
          <input type="range" min="0.05" max="0.8" step="0.01" value={mu} onChange={(e) => setMu(Number(e.target.value))} />
          <button type="button" className="ak-tool-btn" onClick={() => setAngle(Math.round(repose))}>Set angle of repose</button>
          <div className="ak-output-grid">
            <span>Angle of repose</span><strong>{repose.toFixed(1)} deg</strong>
            <span>Normal reaction</span><strong>{normal.toFixed(1)} N</strong>
            <span>Friction force</span><strong>{friction.toFixed(1)} N</strong>
            <span>Effort up plane</span><strong>{effort.toFixed(1)} N</strong>
            <span>Condition</span><strong>{angle >= repose ? 'sliding begins' : 'static equilibrium possible'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
