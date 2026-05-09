'use client';

import { useState } from 'react';
import InteractiveDiagram from './InteractiveDiagram';
import { SvgWatermark } from './Watermark';

export default function BeamReactionDiagram() {
  const [loadPos, setLoadPos] = useState(3);
  const span = 6;
  const W = 50;
  const RB = (W * loadPos) / span;
  const RA = W - RB;

  const xA = 60;
  const xB = 460;
  const beamY = 120;
  const scale = (xB - xA) / span;
  const loadX = xA + loadPos * scale;

  return (
    <InteractiveDiagram caption="Interactive: Drag the slider to move the load and see reactions update in real time">
      <svg viewBox="0 0 520 280" style={{ maxWidth: 520 }}>
        <rect x="0" y="0" width="520" height="280" fill="#faf9f6" rx="6" />

        {/* Beam */}
        <line x1={xA} y1={beamY} x2={xB} y2={beamY} stroke="#1a2744" strokeWidth="4" />

        {/* Pin support at A */}
        <polygon points={`${xA},${beamY} ${xA - 15},${beamY + 30} ${xA + 15},${beamY + 30}`} fill="none" stroke="#1a2744" strokeWidth="2" />
        <circle cx={xA} cy={beamY} r="4" fill="#c0392b" />
        <line x1={xA - 20} y1={beamY + 30} x2={xA + 20} y2={beamY + 30} stroke="#1a2744" strokeWidth="2" />

        {/* Roller support at B */}
        <polygon points={`${xB},${beamY} ${xB - 15},${beamY + 22} ${xB + 15},${beamY + 22}`} fill="none" stroke="#1a2744" strokeWidth="2" />
        <circle cx={xB} cy={beamY + 28} r="6" fill="none" stroke="#1a2744" strokeWidth="2" />
        <line x1={xB - 20} y1={beamY + 34} x2={xB + 20} y2={beamY + 34} stroke="#1a2744" strokeWidth="2" />

        {/* Applied load W */}
        <line x1={loadX} y1={35} x2={loadX} y2={beamY} stroke="#c0392b" strokeWidth="2.5" />
        <polygon points={`${loadX},${beamY} ${loadX - 6},${beamY - 12} ${loadX + 6},${beamY - 12}`} fill="#c0392b" />
        <text x={loadX} y="28" textAnchor="middle" fontSize="13" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">
          W = {W} kN
        </text>

        {/* Reaction RA */}
        <line x1={xA} y1={beamY + 50} x2={xA} y2={beamY + 10} stroke="#2d6a4f" strokeWidth="2" strokeDasharray="4,3" />
        <polygon points={`${xA},${beamY + 10} ${xA - 5},${beamY + 22} ${xA + 5},${beamY + 22}`} fill="#2d6a4f" />
        <text x={xA} y={beamY + 65} textAnchor="middle" fontSize="12" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">
          Rₐ = {RA.toFixed(1)} kN
        </text>

        {/* Reaction RB */}
        <line x1={xB} y1={beamY + 50} x2={xB} y2={beamY + 10} stroke="#1a4d6b" strokeWidth="2" strokeDasharray="4,3" />
        <polygon points={`${xB},${beamY + 10} ${xB - 5},${beamY + 22} ${xB + 5},${beamY + 22}`} fill="#1a4d6b" />
        <text x={xB} y={beamY + 65} textAnchor="middle" fontSize="12" fill="#1a4d6b" fontWeight="700" fontFamily="Source Sans 3">
          R_B = {RB.toFixed(1)} kN
        </text>

        {/* Labels */}
        <text x={xA} y={beamY + 80} textAnchor="middle" fontSize="11" fill="#1a2744" fontFamily="Source Sans 3">A</text>
        <text x={xB} y={beamY + 80} textAnchor="middle" fontSize="11" fill="#1a2744" fontFamily="Source Sans 3">B</text>

        {/* Distance markers */}
        <line x1={xA} y1={beamY - 50} x2={loadX} y2={beamY - 50} stroke="#c8951a" strokeWidth="1" />
        <text x={(xA + loadX) / 2} y={beamY - 55} textAnchor="middle" fontSize="11" fill="#c8951a" fontFamily="Source Sans 3">
          {loadPos.toFixed(1)} m
        </text>
        <line x1={loadX} y1={beamY - 50} x2={xB} y2={beamY - 50} stroke="#c8951a" strokeWidth="1" />
        <text x={(loadX + xB) / 2} y={beamY - 55} textAnchor="middle" fontSize="11" fill="#c8951a" fontFamily="Source Sans 3">
          {(span - loadPos).toFixed(1)} m
        </text>

        {/* Span label */}
        <text x={(xA + xB) / 2} y={beamY + 95} textAnchor="middle" fontSize="11" fill="#1a2744" fontFamily="Source Sans 3">
          Span = {span} m
        </text>

        <SvgWatermark />
      </svg>

      {/* Slider */}
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>
          Load position from A: <strong style={{ color: 'var(--accent)' }}>{loadPos.toFixed(1)} m</strong>
        </label>
        <br />
        <input
          type="range"
          min="0.5"
          max="5.5"
          step="0.1"
          value={loadPos}
          onChange={(e) => setLoadPos(parseFloat(e.target.value))}
          style={{ width: '80%', maxWidth: 400, marginTop: 8, accentColor: 'var(--accent)' }}
        />
      </div>
    </InteractiveDiagram>
  );
}
