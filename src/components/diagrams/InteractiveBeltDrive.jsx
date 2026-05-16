'use client';

import { useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

export default function InteractiveBeltDrive() {
  const [driverDia, setDriverDia] = useState(300);
  const [drivenDia, setDrivenDia] = useState(150);
  const [rpm, setRpm] = useState(600);
  const [slip, setSlip] = useState(3);
  const [crossed, setCrossed] = useState(false);
  const velocity = Math.PI * (driverDia / 1000) * rpm / 60;
  const idealDriven = rpm * driverDia / drivenDia;
  const actualDriven = idealDriven * (1 - slip / 100);
  const powerLoss = slip;

  return (
    <MechanicalDiagram title="Interactive Belt Drive" caption="Belt slip lowers the actual velocity ratio and wastes power as heat.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive belt drive">
          <rect className="machine-bed" x="90" y="64" width="580" height="280" rx="12" />
          <circle className="belt-pulley belt-spin" cx="240" cy="205" r={driverDia / 6} />
          <circle className="belt-pulley belt-spin-reverse" cx="520" cy="205" r={drivenDia / 6} style={{ animationDuration: `${Math.max(1, 600 / Math.max(100, actualDriven))}s` }} />
          {crossed ? (
            <>
              <path className="belt-path belt-motion" d={`M240 ${205 - driverDia / 6} C330 110, 430 300, 520 ${205 + drivenDia / 6}`} />
              <path className="belt-path belt-motion" d={`M240 ${205 + driverDia / 6} C330 300, 430 110, 520 ${205 - drivenDia / 6}`} />
            </>
          ) : (
            <>
              <path className="belt-path belt-motion" d={`M240 ${205 - driverDia / 6} C330 118, 430 118, 520 ${205 - drivenDia / 6}`} />
              <path className="belt-path belt-motion" d={`M240 ${205 + driverDia / 6} C330 292, 430 292, 520 ${205 + drivenDia / 6}`} />
            </>
          )}
          <text x="240" y="360" className="diagram-label" textAnchor="middle">Driver pulley</text>
          <text x="520" y="360" className="diagram-label" textAnchor="middle">Driven pulley</text>
          <text x="380" y="48" className="diagram-title" textAnchor="middle">{crossed ? 'Crossed belt: opposite side contact, same shaft direction convention changes' : 'Open belt: shafts rotate in the same direction'}</text>
        </svg>
        <aside className="ak-controls">
          <label>Driver diameter: {driverDia} mm</label>
          <input type="range" min="100" max="500" step="10" value={driverDia} onChange={(e) => setDriverDia(Number(e.target.value))} />
          <label>Driven diameter: {drivenDia} mm</label>
          <input type="range" min="100" max="500" step="10" value={drivenDia} onChange={(e) => setDrivenDia(Number(e.target.value))} />
          <label>Driver speed: {rpm} rpm</label>
          <input type="range" min="100" max="1500" step="25" value={rpm} onChange={(e) => setRpm(Number(e.target.value))} />
          <label>Slip: {slip}%</label>
          <input type="range" min="0" max="12" step="0.5" value={slip} onChange={(e) => setSlip(Number(e.target.value))} />
          <label className="ak-check"><input type="checkbox" checked={crossed} onChange={(e) => setCrossed(e.target.checked)} /> Crossed belt</label>
          <div className="ak-output-grid">
            <span>Belt velocity</span><strong>{velocity.toFixed(2)} m/s</strong>
            <span>Ideal driven speed</span><strong>{idealDriven.toFixed(0)} rpm</strong>
            <span>Actual speed</span><strong>{actualDriven.toFixed(0)} rpm</strong>
            <span>Power loss estimate</span><strong>{powerLoss.toFixed(1)}%</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
