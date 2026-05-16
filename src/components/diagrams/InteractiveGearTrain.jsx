'use client';

import { useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

function Gear({ cx, cy, r, teeth, direction, duration, label }) {
  const marks = useMemo(
    () => Array.from({ length: Math.min(48, Math.max(12, teeth)) }, (_, i) => {
      const a = (i / Math.min(48, Math.max(12, teeth))) * Math.PI * 2;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r, cx + Math.cos(a) * (r + 12), cy + Math.sin(a) * (r + 12)];
    }),
    [cx, cy, r, teeth],
  );

  return (
    <g className={direction === 'cw' ? 'gear-spin-cw' : 'gear-spin-ccw'} style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: `${duration}s` }}>
      <circle className="gear-body" cx={cx} cy={cy} r={r} />
      <circle className="gear-pitch" cx={cx} cy={cy} r={r - 12} />
      {marks.map(([x1, y1, x2, y2], i) => <line key={i} className="gear-tooth" x1={x1} y1={y1} x2={x2} y2={y2} />)}
      <circle className="shaft-dot" cx={cx} cy={cy} r="7" />
      <text className="diagram-label" x={cx} y={cy + 4} textAnchor="middle">{teeth}</text>
      <text className="small-label" x={cx} y={cy + r + 36} textAnchor="middle">{label}</text>
    </g>
  );
}

export default function InteractiveGearTrain() {
  const [driver, setDriver] = useState(24);
  const [driven, setDriven] = useState(60);
  const [idler, setIdler] = useState(36);
  const [compound, setCompound] = useState(false);
  const ratio = driven / driver;
  const speedRatio = driver / driven;
  const driverTorque = 10;
  const torque = driverTorque * ratio;
  const drivenDuration = Math.max(1.2, 4 * ratio);
  const thirdRatio = compound ? (idler / driver) * (driven / idler) : ratio;

  return (
    <MechanicalDiagram title="Interactive Gear Train" caption="Changing the tooth count changes angular speed and torque in real time.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive gear train">
          <rect className="machine-bed" x="84" y="62" width="592" height="286" rx="12" />
          <line className="dimension-line" x1="198" y1="92" x2="198" y2="318" />
          <line className="dimension-line" x1={compound ? 374 : 432} y1="92" x2={compound ? 374 : 432} y2="318" />
          {compound && <line className="dimension-line" x1="548" y1="92" x2="548" y2="318" />}
          <Gear cx="198" cy="205" r="58" teeth={driver} direction="cw" duration="4" label="Driver clockwise" />
          {compound ? (
            <>
              <Gear cx="374" cy="205" r="46" teeth={idler} direction="ccw" duration={Math.max(1.4, 4 * (idler / driver))} label="Compound idler" />
              <Gear cx="548" cy="205" r="66" teeth={driven} direction="cw" duration={drivenDuration} label="Driven clockwise" />
            </>
          ) : (
            <Gear cx="432" cy="205" r="76" teeth={driven} direction="ccw" duration={drivenDuration} label="Driven counter-clockwise" />
          )}
          <text className="diagram-title" x="380" y="48" textAnchor="middle">Pitch circles touch at the pitch point</text>
          <text className="small-label" x="380" y="372" textAnchor="middle">Driver torque = 10 N m, driven torque = {torque.toFixed(1)} N m</text>
        </svg>
        <aside className="ak-controls">
          <label>Driver teeth T1: {driver}</label>
          <input type="range" min="10" max="100" value={driver} onChange={(e) => setDriver(Number(e.target.value))} />
          <label>Driven teeth T2: {driven}</label>
          <input type="range" min="10" max="100" value={driven} onChange={(e) => setDriven(Number(e.target.value))} />
          <label>Intermediate teeth: {idler}</label>
          <input type="range" min="10" max="100" value={idler} onChange={(e) => setIdler(Number(e.target.value))} />
          <label className="ak-check"><input type="checkbox" checked={compound} onChange={(e) => setCompound(e.target.checked)} /> Compound train view</label>
          <div className="ak-output-grid">
            <span>Gear ratio T2/T1</span><strong>{ratio.toFixed(2)}</strong>
            <span>Speed ratio T1/T2</span><strong>{speedRatio.toFixed(2)}</strong>
            <span>Compound ratio</span><strong>{thirdRatio.toFixed(2)}</strong>
            <span>Driven torque</span><strong>{torque.toFixed(1)} N m</strong>
            <span>Direction</span><strong>{compound ? 'same as driver' : 'opposite to driver'}</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
