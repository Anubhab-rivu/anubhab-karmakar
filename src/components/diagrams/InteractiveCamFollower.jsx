'use client';

import { useEffect, useMemo, useState } from 'react';

import MechanicalDiagram from './MechanicalDiagram';

function liftFor(profile, angle) {
  const a = angle % 360;
  if (profile === 'heart') return 42 * (1 - Math.cos((a * Math.PI) / 180)) / 2;
  if (a < 120) return 60 * (a / 120) ** 2;
  if (a < 180) return 60;
  if (a < 300) return 60 * (1 - ((a - 180) / 120) ** 2);
  return 0;
}

export default function InteractiveCamFollower() {
  const [profile, setProfile] = useState('disc');
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setAngle((value) => (value + 3) % 360), 40);
    return () => window.clearInterval(id);
  }, []);

  const lift = liftFor(profile, angle);
  const curve = useMemo(() => {
    const pts = Array.from({ length: 120 }, (_, i) => {
      const a = (i / 119) * 360;
      const y = 328 - liftFor(profile, a) * 1.1;
      const x = 420 + i * 2.2;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    });
    return pts.join(' ');
  }, [profile]);

  return (
    <MechanicalDiagram title="Interactive Cam and Follower" caption="The displacement curve is traced as the cam rotates.">
      <div className="ak-interactive-grid">
        <svg className="ak-interactive-svg" viewBox="0 0 760 420" role="img" aria-label="Interactive cam follower">
          <rect className="machine-bed" x="70" y="46" width="620" height="328" rx="12" />
          <g transform={`rotate(${angle} 230 212)`}>
            <circle className="cam-base" cx="230" cy="212" r="74" />
            <circle className={profile === 'disc' ? 'cam-lobe' : 'cam-lobe alt'} cx={profile === 'heart' ? 230 : 260} cy={profile === 'heart' ? 178 : 212} r={profile === 'heart' ? 48 : 38} />
            <line className="dimension-line" x1="230" y1="212" x2="304" y2="212" />
          </g>
          <circle className="shaft-dot" cx="230" cy="212" r="9" />
          <rect className="component-metal" x="212" y={92 - lift} width="36" height="122" rx="8" />
          <polygon className="follower-tip" points={`230,${214 - lift} 212,${184 - lift} 248,${184 - lift}`} />
          <line className="dimension-line" x1="285" y1="154" x2="285" y2={154 - lift} />
          <text className="small-label" x="298" y={154 - lift / 2}>lift {lift.toFixed(1)} mm</text>
          <line className="axis-line" x1="410" y1="328" x2="684" y2="328" />
          <line className="axis-line" x1="410" y1="328" x2="410" y2="238" />
          <path className="cam-curve" d={curve} />
          <circle className="plot-dot active" cx={420 + (angle / 360) * 261} cy={328 - lift * 1.1} r="5" />
          <text className="small-label" x="445" y="250">rise</text>
          <text className="small-label" x="512" y="250">dwell</text>
          <text className="small-label" x="575" y="250">return</text>
        </svg>
        <aside className="ak-controls">
          <label>Cam type</label>
          <select value={profile} onChange={(e) => setProfile(e.target.value)}>
            <option value="disc">Eccentric disc cam</option>
            <option value="heart">Heart cam</option>
            <option value="accel">Uniform acceleration cam</option>
          </select>
          <div className="ak-output-grid">
            <span>Cam angle</span><strong>{angle} deg</strong>
            <span>Base circle radius</span><strong>74 mm</strong>
            <span>Max lift</span><strong>{profile === 'heart' ? '42 mm' : '60 mm'}</strong>
            <span>Current displacement</span><strong>{lift.toFixed(1)} mm</strong>
          </div>
        </aside>
      </div>
    </MechanicalDiagram>
  );
}
