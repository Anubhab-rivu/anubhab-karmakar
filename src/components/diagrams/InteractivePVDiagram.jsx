'use client';

import { useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

const cycles = {
  Otto: { labels: ['1-2 Isentropic compression', '2-3 Constant volume heat addition', '3-4 Isentropic expansion', '4-1 Constant volume heat rejection'] },
  Diesel: { labels: ['1-2 Isentropic compression', '2-3 Constant pressure heat addition', '3-4 Isentropic expansion', '4-1 Constant volume heat rejection'] },
  Carnot: { labels: ['1-2 Isothermal expansion', '2-3 Isentropic expansion', '3-4 Isothermal compression', '4-1 Isentropic compression'] },
  Rankine: { labels: ['1-2 Pumping', '2-3 Boiler heat addition', '3-4 Turbine expansion', '4-1 Condenser heat rejection'] },
};

export default function InteractivePVDiagram() {
  const [cycle, setCycle] = useState('Otto');
  const [r, setR] = useState(8);
  const [cutoff, setCutoff] = useState(1.8);
  const [th, setTh] = useState(900);
  const [tl, setTl] = useState(300);
  const gamma = 1.4;
  const efficiency = useMemo(() => {
    if (cycle === 'Otto') return 1 - 1 / r ** (gamma - 1);
    if (cycle === 'Diesel') return 1 - (1 / r ** (gamma - 1)) * ((cutoff ** gamma - 1) / (gamma * (cutoff - 1)));
    if (cycle === 'Carnot') return 1 - tl / th;
    return 0.32 + Math.min(0.1, (th - 600) / 5000);
  }, [cycle, r, cutoff, th, tl]);

  const path = cycle === 'Rankine'
    ? 'M170 290 C205 236, 235 172, 302 132 L486 132 C548 174, 540 264, 458 300 Z'
    : cycle === 'Carnot'
      ? 'M178 286 C234 188, 392 138, 512 162 C560 208, 488 298, 374 318 C276 332, 198 318, 178 286 Z'
      : cycle === 'Diesel'
        ? 'M190 300 C218 206, 278 112, 356 92 L488 92 C546 164, 512 268, 430 314 Z'
        : 'M190 300 C218 206, 278 112, 356 92 L356 170 C514 182, 536 264, 430 314 Z';

  return (
    <MechanicalDiagram title="Interactive P-V Diagram" caption="The shaded area represents indicated work of the cycle.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive pressure volume diagram">
          <rect className="machine-bed" x="78" y="50" width="604" height="310" rx="12" />
          <line className="axis-line" x1="130" y1="318" x2="630" y2="318" />
          <line className="axis-line" x1="130" y1="318" x2="130" y2="78" />
          <text className="small-label" x="616" y="342">Volume V</text>
          <text className="small-label" x="100" y="94">Pressure P</text>
          <path className="pv-area" d={path} />
          <path className="pv-path" d={path} />
          {cycles[cycle].labels.map((item, index) => (
            <text className="small-label" key={item} x="430" y={90 + index * 24}>{item}</text>
          ))}
          <text className="diagram-title" x="380" y="38" textAnchor="middle">{cycle} cycle</text>
        </svg>
        <aside className="ak-controls">
          <label>Cycle</label>
          <select value={cycle} onChange={(e) => setCycle(e.target.value)}>
            {Object.keys(cycles).map((item) => <option key={item}>{item}</option>)}
          </select>
          <label>Compression ratio r: {r}</label>
          <input type="range" min="4" max="22" step="1" value={r} onChange={(e) => setR(Number(e.target.value))} />
          <label>Diesel cutoff ratio: {cutoff.toFixed(1)}</label>
          <input type="range" min="1.1" max="3" step="0.1" value={cutoff} onChange={(e) => setCutoff(Number(e.target.value))} />
          <label>High temperature: {th} K</label>
          <input type="range" min="500" max="1500" step="25" value={th} onChange={(e) => setTh(Number(e.target.value))} />
          <label>Low temperature: {tl} K</label>
          <input type="range" min="250" max="500" step="10" value={tl} onChange={(e) => setTl(Number(e.target.value))} />
          <div className="ak-output-grid">
            <span>Efficiency</span><strong>{(efficiency * 100).toFixed(1)}%</strong>
            <span>Formula</span><strong>{cycle === 'Otto' ? '1 - 1/r^(gamma-1)' : cycle === 'Carnot' ? '1 - TL/TH' : cycle === 'Diesel' ? 'Diesel air-standard' : 'Rankine estimate'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
