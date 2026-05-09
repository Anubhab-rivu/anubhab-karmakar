'use client';

import { useState } from 'react';
import InteractiveDiagram from './InteractiveDiagram';
import { SvgWatermark } from './Watermark';

export default function ScrewThreadDiagram() {
  const [pitch, setPitch] = useState(2);
  const [starts, setStarts] = useState(1);
  const lead = pitch * starts;
  const majorD = 12;
  const pitchD = majorD - 0.6495 * pitch;
  const minorD = majorD - 1.2269 * pitch;

  const ox = 80, oy = 120;
  const scl = 18;
  const threadH = 40;
  const threadCount = 5;

  const points = [];
  for (let i = 0; i < threadCount; i++) {
    const x0 = ox + i * pitch * scl;
    points.push(`${x0},${oy}`);
    points.push(`${x0 + (pitch * scl) / 2},${oy - threadH}`);
    points.push(`${x0 + pitch * scl},${oy}`);
  }

  const bottomPoints = [];
  for (let i = 0; i < threadCount; i++) {
    const x0 = ox + i * pitch * scl;
    bottomPoints.push(`${x0},${oy + 10}`);
    bottomPoints.push(`${x0 + (pitch * scl) / 2},${oy + 10 + threadH}`);
    bottomPoints.push(`${x0 + pitch * scl},${oy + 10}`);
  }

  return (
    <InteractiveDiagram caption="Interactive: Adjust pitch and number of starts to see how lead changes">
      <svg viewBox="0 0 520 300" style={{ maxWidth: 520 }}>
        <rect x="0" y="0" width="520" height="300" fill="#faf9f6" rx="6" />

        {/* Axis */}
        <line x1="40" y1={oy + 5} x2="500" y2={oy + 5} stroke="#c0392b" strokeWidth="1" strokeDasharray="6,4" />
        <text x="505" y={oy + 9} fontSize="10" fill="#c0392b" fontFamily="Source Sans 3">Axis</text>

        {/* Top thread profile */}
        <polyline points={points.join(' ')} fill="none" stroke="#1a2744" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Bottom thread profile (mirror) */}
        <polyline points={bottomPoints.join(' ')} fill="none" stroke="#1a2744" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Pitch dimension */}
        <line x1={ox} y1={oy - threadH - 15} x2={ox + pitch * scl} y2={oy - threadH - 15} stroke="#2d6a4f" strokeWidth="1.5" />
        <line x1={ox} y1={oy - threadH - 10} x2={ox} y2={oy - threadH - 20} stroke="#2d6a4f" strokeWidth="1" />
        <line x1={ox + pitch * scl} y1={oy - threadH - 10} x2={ox + pitch * scl} y2={oy - threadH - 20} stroke="#2d6a4f" strokeWidth="1" />
        <text x={ox + (pitch * scl) / 2} y={oy - threadH - 20} textAnchor="middle" fontSize="12" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">
          p = {pitch.toFixed(1)} mm
        </text>

        {/* Lead dimension */}
        <line x1={ox} y1={oy + 10 + threadH + 25} x2={ox + lead * scl} y2={oy + 10 + threadH + 25} stroke="#c8951a" strokeWidth="1.5" />
        <line x1={ox} y1={oy + 10 + threadH + 20} x2={ox} y2={oy + 10 + threadH + 30} stroke="#c8951a" strokeWidth="1" />
        <line x1={ox + lead * scl} y1={oy + 10 + threadH + 20} x2={ox + lead * scl} y2={oy + 10 + threadH + 30} stroke="#c8951a" strokeWidth="1" />
        <text x={ox + (lead * scl) / 2} y={oy + 10 + threadH + 42} textAnchor="middle" fontSize="12" fill="#c8951a" fontWeight="700" fontFamily="Source Sans 3">
          Lead = {lead.toFixed(1)} mm
        </text>

        {/* Crest and root labels */}
        <text x={ox + (pitch * scl) / 2} y={oy - threadH - 2} textAnchor="middle" fontSize="10" fill="#c0392b" fontFamily="Source Sans 3">
          Crest
        </text>
        <text x={ox + pitch * scl} y={oy + 8} textAnchor="middle" fontSize="10" fill="#c0392b" fontFamily="Source Sans 3">
          Root
        </text>

        {/* Thread angle */}
        <text x={ox + (pitch * scl) / 2 - 18} y={oy - 5} fontSize="10" fill="#7b3f00" fontFamily="Source Sans 3">60°</text>

        {/* Calculated values box */}
        <rect x="320" y="15" width="185" height="90" rx="6" fill="rgba(26,39,68,0.06)" stroke="#1a2744" strokeWidth="1" />
        <text x="335" y="35" fontSize="11" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">Calculated Values</text>
        <text x="335" y="52" fontSize="11" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          Major Ø  = {majorD.toFixed(2)} mm
        </text>
        <text x="335" y="67" fontSize="11" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          Pitch Ø  = {pitchD.toFixed(2)} mm
        </text>
        <text x="335" y="82" fontSize="11" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          Minor Ø  = {minorD.toFixed(2)} mm
        </text>
        <text x="335" y="97" fontSize="11" fill="#c8951a" fontWeight="600" fontFamily="Source Code Pro, monospace">
          Lead     = {lead.toFixed(2)} mm
        </text>

        <SvgWatermark />
      </svg>

      <div style={{ marginTop: 16, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>
            Pitch: <strong style={{ color: 'var(--accent)' }}>{pitch.toFixed(1)} mm</strong>
          </label>
          <br />
          <input type="range" min="1" max="4" step="0.25" value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            style={{ width: 200, marginTop: 6, accentColor: 'var(--accent)' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>
            Starts: <strong style={{ color: 'var(--accent)' }}>{starts}</strong>
          </label>
          <br />
          <input type="range" min="1" max="4" step="1" value={starts}
            onChange={(e) => setStarts(parseInt(e.target.value))}
            style={{ width: 200, marginTop: 6, accentColor: 'var(--accent)' }}
          />
        </div>
      </div>
    </InteractiveDiagram>
  );
}
