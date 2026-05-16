'use client';

import { useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

const materials = {
  'Mild steel': { e: 200, yield: 250, uts: 410, fracture: 330, ductile: true },
  'Cast iron': { e: 110, yield: 0, uts: 180, fracture: 180, ductile: false },
  Aluminium: { e: 70, yield: 150, uts: 260, fracture: 210, ductile: true },
};

export default function InteractiveStressStrain() {
  const [material, setMaterial] = useState('Mild steel');
  const data = materials[material];
  const path = useMemo(() => {
    if (!data.ductile) return 'M130 312 C210 220, 300 130, 420 78';
    return 'M130 312 L238 154 C260 146, 270 176, 292 170 C330 162, 410 104, 492 94 C548 98, 574 146, 602 182';
  }, [data]);

  return (
    <MechanicalDiagram title="Interactive Stress-Strain Curve" caption="Material choice changes slope, yield behavior and fracture strain.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive stress strain diagram">
          <rect className="machine-bed" x="76" y="46" width="608" height="320" rx="12" />
          <line className="axis-line" x1="118" y1="316" x2="642" y2="316" />
          <line className="axis-line" x1="118" y1="316" x2="118" y2="72" />
          <text className="small-label" x="622" y="342">Strain</text>
          <text className="small-label" x="86" y="86">Stress</text>
          <path className="stress-path" d={path} />
          {data.ductile ? (
            <>
              <circle className="plot-dot" cx="238" cy="154" r="5" /><text className="small-label" x="248" y="144">upper yield</text>
              <circle className="plot-dot" cx="292" cy="170" r="5" /><text className="small-label" x="302" y="190">lower yield</text>
              <circle className="plot-dot active" cx="492" cy="94" r="6" /><text className="small-label" x="502" y="88">UTS</text>
              <circle className="plot-dot alt" cx="602" cy="182" r="6" /><text className="small-label" x="612" y="186">fracture</text>
            </>
          ) : (
            <>
              <circle className="plot-dot active" cx="420" cy="78" r="6" /><text className="small-label" x="430" y="80">brittle fracture</text>
            </>
          )}
        </svg>
        <aside className="ak-controls">
          <label>Material</label>
          <select value={material} onChange={(e) => setMaterial(e.target.value)}>
            {Object.keys(materials).map((item) => <option key={item}>{item}</option>)}
          </select>
          <div className="ak-output-grid">
            <span>Young modulus</span><strong>{data.e} GPa</strong>
            <span>Yield stress</span><strong>{data.yield || 'no clear yield'} MPa</strong>
            <span>UTS</span><strong>{data.uts} MPa</strong>
            <span>Fracture stress</span><strong>{data.fracture} MPa</strong>
            <span>Behavior</span><strong>{data.ductile ? 'ductile yielding' : 'brittle fracture'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
