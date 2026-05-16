'use client';

import { useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveGovernor() {
  const [speed, setSpeed] = useState(140);
  const [spring, setSpring] = useState(18);
  const omega = (2 * Math.PI * speed) / 60;
  const height = 9.81 / (omega * omega);
  const radius = Math.min(120, Math.max(34, 42 + (speed - 80) * 0.75 - spring * 0.7));
  const sleeve = Math.max(0, Math.min(110, (radius - 34) * 0.9));

  return (
    <MechanicalDiagram title="Interactive Governor" caption="Higher speed moves the balls outward and lifts the sleeve.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive centrifugal governor">
          <rect className="machine-bed" x="112" y="48" width="536" height="318" rx="12" />
          <line className="shaft-line governor-spin" x1="380" y1="72" x2="380" y2="330" />
          <circle className="shaft-dot" cx="380" cy="96" r="10" />
          <rect className="component-metal" x="348" y={250 - sleeve} width="64" height="34" rx="6" />
          <text className="diagram-label" x="420" y={272 - sleeve}>Sleeve</text>
          <line className="link-line" x1="380" y1="124" x2={380 - radius} y2={214 - sleeve * 0.3} />
          <line className="link-line" x1="380" y1="124" x2={380 + radius} y2={214 - sleeve * 0.3} />
          <line className="link-line" x1={380 - radius} y1={214 - sleeve * 0.3} x2="380" y2={250 - sleeve} />
          <line className="link-line" x1={380 + radius} y1={214 - sleeve * 0.3} x2="380" y2={250 - sleeve} />
          <circle className="governor-ball" cx={380 - radius} cy={214 - sleeve * 0.3} r="22" />
          <circle className="governor-ball" cx={380 + radius} cy={214 - sleeve * 0.3} r="22" />
          <line className="dimension-line" x1="380" y1="214" x2={380 + radius} y2="214" />
          <text className="small-label" x={410 + radius / 2} y="204">ball radius</text>
          <text className="diagram-title" x="380" y="40" textAnchor="middle">Watt/Hartnell governor principle</text>
        </svg>
        <aside className="ak-controls">
          <label>Speed: {speed} rpm</label>
          <input type="range" min="80" max="260" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
          <label>Spring load index: {spring}</label>
          <input type="range" min="0" max="40" value={spring} onChange={(e) => setSpring(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>Angular speed</span><strong>{omega.toFixed(2)} rad/s</strong>
            <span>Watt height h</span><strong>{(height * 1000).toFixed(1)} mm</strong>
            <span>Ball radius</span><strong>{radius.toFixed(1)} mm</strong>
            <span>Sleeve lift</span><strong>{sleeve.toFixed(1)} mm</strong>
            <span>Governor action</span><strong>{speed > 180 ? 'throttle closes' : 'fuel/steam admits more'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
