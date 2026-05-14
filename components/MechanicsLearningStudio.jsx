'use client';

import { useMemo, useState } from 'react';

const modes = [
  { id: 'force', label: 'Force System' },
  { id: 'friction', label: 'Friction' },
  { id: 'machine', label: 'Machine' },
];

export default function MechanicsLearningStudio() {
  const [mode, setMode] = useState('force');
  const [force, setForce] = useState(80);
  const [angle, setAngle] = useState(35);
  const [mu, setMu] = useState(0.32);
  const [effort, setEffort] = useState(65);

  const forceModel = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    return {
      fx: force * Math.cos(rad),
      fy: force * Math.sin(rad),
      x2: 95 + force * 1.65 * Math.cos(rad),
      y2: 190 - force * 1.65 * Math.sin(rad),
    };
  }, [angle, force]);

  const frictionAngle = (Math.atan(mu) * 180) / Math.PI;
  const load = 600;
  const vr = 12;
  const ma = load / effort;
  const eta = (ma / vr) * 100;

  return (
    <section className="mechanics-studio" id="mechanics-studio">
      <div className="mechanics-studio-copy">
        <span className="micro-label">Interactive Mechanics Studio</span>
        <h2>Touch the variables and watch the mechanics become visible.</h2>
        <p>
          Engineering Mechanics becomes easier when every symbol is tied to a physical effect:
          a force splits into components, friction rotates the contact reaction, and a lifting
          machine trades effort distance for load advantage.
        </p>
      </div>

      <div className="mechanics-panel">
        <div className="segmented-control" role="tablist" aria-label="Mechanics studio mode">
          {modes.map((item) => (
            <button
              aria-selected={mode === item.id}
              className={mode === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => setMode(item.id)}
              role="tab"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        {mode === 'force' && (
          <div className="studio-grid">
            <svg className="studio-svg" viewBox="0 0 360 240" role="img" aria-label="Force resolved into components">
              <rect x="0" y="0" width="360" height="240" rx="8" className="svg-bed" />
              <line x1="55" y1="190" x2="320" y2="190" className="axis" />
              <line x1="55" y1="205" x2="55" y2="35" className="axis" />
              <line x1="95" y1="190" x2={forceModel.x2} y2={forceModel.y2} className="force-vector" />
              <polygon
                points={`${forceModel.x2},${forceModel.y2} ${forceModel.x2 - 12},${forceModel.y2 + 3} ${forceModel.x2 - 5},${forceModel.y2 + 12}`}
                className="force-tip"
              />
              <line x1="95" y1="190" x2={forceModel.x2} y2="190" className="component-x" />
              <line x1={forceModel.x2} y1="190" x2={forceModel.x2} y2={forceModel.y2} className="component-y" />
              <circle cx="95" cy="190" r="5" className="pivot-dot" />
              <text x="222" y="214">Fx = {forceModel.fx.toFixed(1)} N</text>
              <text x={Math.min(forceModel.x2 + 8, 275)} y={Math.max(forceModel.y2 + 24, 46)}>Fy = {forceModel.fy.toFixed(1)} N</text>
              <text x="102" y="174">{angle} deg</text>
            </svg>
            <div className="studio-controls">
              <label>
                Force: <strong>{force} N</strong>
                <input type="range" min="20" max="140" value={force} onChange={(event) => setForce(Number(event.target.value))} />
              </label>
              <label>
                Angle: <strong>{angle} deg</strong>
                <input type="range" min="0" max="80" value={angle} onChange={(event) => setAngle(Number(event.target.value))} />
              </label>
              <p>Resultant thinking starts here: split every force into x and y components, add components, then recombine.</p>
            </div>
          </div>
        )}

        {mode === 'friction' && (
          <div className="studio-grid">
            <svg className="studio-svg" viewBox="0 0 360 240" role="img" aria-label="Friction angle and contact reaction">
              <rect x="0" y="0" width="360" height="240" rx="8" className="svg-bed" />
              <line x1="42" y1="182" x2="318" y2="182" className="axis" />
              <rect x="128" y="116" width="102" height="66" rx="5" className="block" />
              <line x1="179" y1="116" x2="179" y2="44" className="component-y" />
              <line x1="128" y1="166" x2="72" y2="166" className="component-x" />
              <line
                x1="179"
                y1="116"
                x2={179 - 80 * Math.sin((frictionAngle * Math.PI) / 180)}
                y2={116 - 80 * Math.cos((frictionAngle * Math.PI) / 180)}
                className="force-vector"
              />
              <path d={`M179 84 A32 32 0 0 0 ${179 - 32 * Math.sin((frictionAngle * Math.PI) / 180)} ${84 + 32 * (1 - Math.cos((frictionAngle * Math.PI) / 180))}`} className="angle-arc" />
              <text x="204" y="54">N</text>
              <text x="72" y="154">F = mu N</text>
              <text x="205" y="96">phi = {frictionAngle.toFixed(1)} deg</text>
            </svg>
            <div className="studio-controls">
              <label>
                Coefficient mu: <strong>{mu.toFixed(2)}</strong>
                <input type="range" min="0.05" max="0.8" step="0.01" value={mu} onChange={(event) => setMu(Number(event.target.value))} />
              </label>
              <p>
                Since tan(phi) = mu, a rougher contact opens the friction cone. The body stays
                at rest while the resultant reaction remains inside that cone.
              </p>
            </div>
          </div>
        )}

        {mode === 'machine' && (
          <div className="studio-grid">
            <svg className="studio-svg" viewBox="0 0 360 240" role="img" aria-label="Machine efficiency meter">
              <rect x="0" y="0" width="360" height="240" rx="8" className="svg-bed" />
              <circle cx="112" cy="120" r="55" className="gear-ring" />
              {Array.from({ length: 10 }).map((_, index) => {
                const a = (index * Math.PI) / 5;
                return (
                  <line
                    className="gear-tooth"
                    key={index}
                    x1={112 + 55 * Math.cos(a)}
                    y1={120 + 55 * Math.sin(a)}
                    x2={112 + 70 * Math.cos(a)}
                    y2={120 + 70 * Math.sin(a)}
                  />
                );
              })}
              <circle cx="112" cy="120" r="12" className="pivot-dot" />
              <rect x="205" y="66" width="32" height="108" className="load-block" />
              <line x1="112" y1="120" x2="221" y2="66" className="axis" />
              <rect x="40" y="202" width="280" height="16" rx="8" className="meter-bed" />
              <rect x="40" y="202" width={Math.min(eta, 100) * 2.8} height="16" rx="8" className="meter-fill" />
              <text x="48" y="195">eta = {eta.toFixed(1)}%</text>
              <text x="250" y="96">W = {load} N</text>
              <text x="250" y="118">P = {effort} N</text>
              <text x="250" y="140">VR = {vr}</text>
            </svg>
            <div className="studio-controls">
              <label>
                Effort: <strong>{effort} N</strong>
                <input type="range" min="35" max="180" value={effort} onChange={(event) => setEffort(Number(event.target.value))} />
              </label>
              <p>
                MA = W/P and efficiency = MA/VR. In a real machine, friction makes effort larger
                than the ideal value, so efficiency always stays below 100%.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
