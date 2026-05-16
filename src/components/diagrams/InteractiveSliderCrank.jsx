'use client';

import { useEffect, useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveSliderCrank() {
  const [angle, setAngle] = useState(0);
  const [rpm, setRpm] = useState(300);
  const r = 60;
  const l = 210;
  const omega = (2 * Math.PI * rpm) / 60;
  useEffect(() => {
    const id = window.setInterval(() => setAngle((a) => (a + rpm / 100) % 360), 30);
    return () => window.clearInterval(id);
  }, [rpm]);
  const rad = (angle * Math.PI) / 180;
  const crank = { x: 240 + r * Math.cos(rad), y: 220 + r * Math.sin(rad) };
  const sliderX = 240 + r * Math.cos(rad) + Math.sqrt(l * l - (r * Math.sin(rad)) ** 2);
  const pistonVelocity = r * omega * (Math.sin(rad) + (r / (2 * l)) * Math.sin(2 * rad));
  const pistonAcceleration = r * omega * omega * (Math.cos(rad) + (r / l) * Math.cos(2 * rad));
  const velocityPath = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      const a = (i / 99) * Math.PI * 2;
      const v = r * omega * (Math.sin(a) + (r / (2 * l)) * Math.sin(2 * a));
      return `${i === 0 ? 'M' : 'L'}${470 + i * 2} ${225 - v / 120}`;
    }).join(' ');
  }, [omega]);

  return (
    <MechanicalDiagram title="Animated Slider-Crank Mechanism" caption="The piston speed is zero at TDC and BDC, and maximum between them.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive slider crank mechanism">
          <rect className="machine-bed" x="70" y="50" width="620" height="310" rx="12" />
          <line className="axis-line" x1="140" y1="220" x2="420" y2="220" />
          <circle className="crank-disk" cx="240" cy="220" r="64" />
          <line className="crank-line" x1="240" y1="220" x2={crank.x} y2={crank.y} />
          <circle className="shaft-dot" cx="240" cy="220" r="8" />
          <line className="rod-line" x1={crank.x} y1={crank.y} x2={sliderX} y2="220" />
          <rect className="piston-fill" x={sliderX} y="190" width="74" height="60" rx="8" />
          <rect className="cylinder-wall" x="405" y="174" width="210" height="92" rx="14" />
          <text className="small-label" x="412" y="286">TDC</text>
          <text className="small-label" x="600" y="286">BDC</text>
          <line className="axis-line" x1="460" y1="225" x2="682" y2="225" />
          <path className="cam-curve" d={velocityPath} />
          <circle className="plot-dot active" cx={470 + (angle / 360) * 198} cy={225 - pistonVelocity / 120} r="5" />
          <text className="diagram-label" x="570" y="176" textAnchor="middle">Velocity diagram</text>
        </svg>
        <aside className="ak-controls">
          <label>Speed: {rpm} rpm</label>
          <input type="range" min="60" max="900" step="20" value={rpm} onChange={(e) => setRpm(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>Crank angle</span><strong>{angle.toFixed(1)} deg</strong>
            <span>Piston velocity</span><strong>{(pistonVelocity / 1000).toFixed(2)} m/s</strong>
            <span>Piston acceleration</span><strong>{(pistonAcceleration / 1000).toFixed(2)} m/s2</strong>
            <span>Position</span><strong>{Math.abs(angle) < 5 || angle > 355 ? 'TDC' : Math.abs(angle - 180) < 5 ? 'BDC' : 'stroke travel'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
