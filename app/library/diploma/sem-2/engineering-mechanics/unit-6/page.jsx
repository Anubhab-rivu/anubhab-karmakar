'use client';
import { useState } from 'react';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import { SvgWatermark } from '@/components/Watermark';

function EfficiencyDiagram() {
  const [effort, setEffort] = useState(50);
  const load = 500;
  const VR = 10;
  const MA = load / effort;
  const efficiency = (MA / VR) * 100;
  return (
    <InteractiveDiagram caption="Interactive: Adjust effort to see MA and efficiency change in real-time">
      <svg viewBox="0 0 500 240" style={{ maxWidth: 500 }}>
        <rect x="0" y="0" width="500" height="240" fill="#faf9f6" rx="6"/>
        {/* Efficiency bar */}
        <rect x="40" y="30" width="300" height="30" fill="#eee9e0" stroke="#ddd8cc" strokeWidth="1" rx="4"/>
        <rect x="40" y="30" width={Math.min(efficiency, 100) * 3} height="30" fill={efficiency > 80 ? '#2d6a4f' : efficiency > 50 ? '#c8951a' : '#c0392b'} rx="4"/>
        <text x={45 + Math.min(efficiency, 100) * 1.5} y="50" textAnchor="middle" fontSize="14" fill="white" fontWeight="700" fontFamily="Source Sans 3">
          η = {efficiency.toFixed(1)}%
        </text>
        <text x="355" y="50" fontSize="12" fill="var(--ink-muted)" fontFamily="Source Sans 3">Efficiency</text>
        {/* Values */}
        <rect x="40" y="80" width="140" height="70" rx="6" fill="rgba(26,39,68,0.06)" stroke="#1a2744" strokeWidth="1"/>
        <text x="110" y="100" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">MECHANICAL</text>
        <text x="110" y="100" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">ADVANTAGE</text>
        <text x="110" y="130" textAnchor="middle" fontSize="24" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">
          {MA.toFixed(1)}
        </text>
        <text x="110" y="145" textAnchor="middle" fontSize="10" fill="var(--ink-muted)" fontFamily="Source Sans 3">MA = W/P</text>

        <rect x="200" y="80" width="140" height="70" rx="6" fill="rgba(26,39,68,0.06)" stroke="#1a2744" strokeWidth="1"/>
        <text x="270" y="100" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">VELOCITY</text>
        <text x="270" y="100" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">RATIO</text>
        <text x="270" y="130" textAnchor="middle" fontSize="24" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">
          {VR}
        </text>
        <text x="270" y="145" textAnchor="middle" fontSize="10" fill="var(--ink-muted)" fontFamily="Source Sans 3">VR (fixed)</text>

        <rect x="360" y="80" width="120" height="70" rx="6" fill="rgba(192,57,43,0.06)" stroke="#c0392b" strokeWidth="1"/>
        <text x="420" y="100" textAnchor="middle" fontSize="11" fill="#c0392b" fontFamily="Source Sans 3">LOAD</text>
        <text x="420" y="130" textAnchor="middle" fontSize="24" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">
          {load} N
        </text>
        <text x="420" y="145" textAnchor="middle" fontSize="10" fill="var(--ink-muted)" fontFamily="Source Sans 3">W (fixed)</text>

        <text x="250" y="190" textAnchor="middle" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          η = MA/VR = ({MA.toFixed(1)}/{VR}) × 100 = {efficiency.toFixed(1)}%
        </text>
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>
          Effort (P): <strong style={{ color: 'var(--accent)' }}>{effort} N</strong>
        </label>
        <br/>
        <input type="range" min="20" max="200" step="5" value={effort}
          onChange={(e) => setEffort(parseInt(e.target.value))}
          style={{ width: 280, marginTop: 6, accentColor: 'var(--accent)' }}
        />
      </div>
    </InteractiveDiagram>
  );
}

export default function Unit6Page() {
  return (
    <UnitLayout
      unitNum={6} unitTitle="Simple Lifting Machines"
      unitDescription="MA, VR, Efficiency, Law of machine, Screw jack, Pulley systems"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 5, title: "Centroid & Centre of Gravity" }}
      nextUnit={{ num: 7, title: "Motion in a Plane" }}
    >
      {/* 6.1 */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">6.1</div>
          <h2 id="introduction">Introduction to Simple Machines</h2>
        </div>
        <DefinitionCard
          term="Simple Machine"
          definition="A <strong>simple machine</strong> is a device that enables us to lift a heavy load (W) by applying a small effort (P). It works on the principle of mechanical advantage — trading distance for force."
        />
        <div className="two-col">
          <div className="info-card">
            <h4>Effort (P)</h4>
            <p>The force applied by the user to operate the machine. Measured in Newtons (N).</p>
          </div>
          <div className="info-card">
            <h4>Load (W)</h4>
            <p>The heavy weight to be lifted or moved by the machine. Also in Newtons (N).</p>
          </div>
        </div>
      </section>

      {/* 6.2 */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">6.2</div>
          <h2 id="definitions">MA, VR, and Efficiency</h2>
        </div>
        <FormulaBox
          title="Mechanical Advantage (MA)"
          formula="MA = \\frac{W}{P} = \\frac{\\text{Load}}{\\text{Effort}}"
          description="The ratio of load lifted to effort applied. Higher MA means less effort needed."
          variables={[
            { symbol: 'MA', name: 'Mechanical Advantage', unit: '—' },
            { symbol: 'W', name: 'Load', unit: 'N' },
            { symbol: 'P', name: 'Effort', unit: 'N' },
          ]}
        />
        <FormulaBox
          title="Velocity Ratio (VR)"
          formula="VR = \\frac{d_P}{d_W} = \\frac{\\text{Distance moved by effort}}{\\text{Distance moved by load}}"
          description="A property of the machine geometry — it does NOT depend on friction."
          variables={[
            { symbol: 'VR', name: 'Velocity Ratio', unit: '—' },
            { symbol: 'd_P', name: 'Distance moved by effort', unit: 'm' },
            { symbol: 'd_W', name: 'Distance moved by load', unit: 'm' },
          ]}
        />
        <FormulaBox
          title="Efficiency"
          formula="\\eta = \\frac{MA}{VR} \\times 100\\%"
          description="Efficiency is always less than 100% due to friction. For an ideal (frictionless) machine, η = 100% and MA = VR."
        />
        <EfficiencyDiagram />
        <ExamTip>
          <p><strong>Key relationship:</strong> η = MA/VR. In an ideal machine: MA = VR, η = 100%. In a real machine: MA &lt; VR, η &lt; 100%. VR is constant for a given machine — it depends only on geometry.</p>
        </ExamTip>
      </section>

      {/* 6.3 */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">6.3</div>
          <h2 id="law-of-machine">Law of a Machine</h2>
        </div>
        <DefinitionCard
          term="Law of a Machine"
          definition="The linear relationship between effort (P) and load (W) for a given machine: <strong>P = mW + C</strong>, where m is the slope and C is the effort needed to run the machine at no load."
        />
        <FormulaBox
          title="Law of a Machine"
          formula="P = mW + C"
          description="A straight-line equation relating effort to load."
          variables={[
            { symbol: 'P', name: 'Effort', unit: 'N' },
            { symbol: 'm', name: 'Slope (constant)', unit: '—' },
            { symbol: 'W', name: 'Load', unit: 'N' },
            { symbol: 'C', name: 'Effort at no load (friction)', unit: 'N' },
          ]}
        />
        <FormulaBox
          title="Maximum Efficiency"
          formula="\\eta_{max} = \\frac{1}{m \\times VR} \\times 100\\%"
          description="The maximum possible efficiency of the machine, achieved at very high loads."
        />
      </section>

      {/* 6.4 */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">6.4</div>
          <h2 id="types">Types of Simple Machines</h2>
        </div>

        <div className="subsection">
          <h3 id="pulley">Simple Pulley Systems</h3>
          <table className="data-table">
            <thead><tr><th>Pulley System</th><th>VR</th><th>MA (ideal)</th></tr></thead>
            <tbody>
              <tr><td>Single fixed pulley</td><td>1</td><td>1 (changes direction only)</td></tr>
              <tr><td>Single movable pulley</td><td>2</td><td>2</td></tr>
              <tr><td>Block and tackle (n pulleys)</td><td>n</td><td>n</td></tr>
            </tbody>
          </table>
        </div>

        <div className="subsection">
          <h3 id="screw-jack">Screw Jack</h3>
          <FormulaBox
            title="VR of Screw Jack"
            formula="VR = \\frac{2\\pi L}{p}"
            description="Where L = length of the handle, p = pitch of the screw."
            variables={[
              { symbol: 'L', name: 'Handle length', unit: 'mm' },
              { symbol: 'p', name: 'Pitch of screw', unit: 'mm' },
            ]}
          />
        </div>

        <div className="subsection">
          <h3 id="wheel-axle">Wheel and Axle</h3>
          <FormulaBox
            title="VR of Wheel and Axle"
            formula="VR = \\frac{R}{r}"
            description="R = radius of wheel (effort side), r = radius of axle (load side)."
          />
        </div>

        <WorkedExample
          title="Screw Jack Problem"
          given={[
            'A screw jack has pitch p = 10 mm, handle length L = 500 mm.',
            'An effort of 30 N raises a load of 6000 N.',
          ]}
          find="VR, MA, and Efficiency"
          steps={[
            '$VR = \\frac{2\\pi L}{p} = \\frac{2\\pi \\times 500}{10} = \\frac{3141.6}{10} = 314.16$',
            '$MA = \\frac{W}{P} = \\frac{6000}{30} = 200$',
            '$\\eta = \\frac{MA}{VR} \\times 100 = \\frac{200}{314.16} \\times 100 = 63.66\\%$',
          ]}
          answer="VR = 314.16, MA = 200, η = 63.66%"
        />
      </section>

      {/* QUESTION BANK */}
      <section className="section" id="qbank">
        <div className="section-header">
          <div className="sec-num" style={{background:'#7b3f00'}}>Q</div>
          <h2 id="questions">Expected Questions</h2>
        </div>
        <div className="question-box">
          <div className="q-label">Short Answer (2–5 marks)</div>
          <ul>
            <li>Define: MA, VR, and Efficiency of a machine.</li>
            <li>What is the law of a machine? Write the equation.</li>
            <li>Prove that η = MA/VR.</li>
            <li>What is the VR of a screw jack?</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (10–15 marks)</div>
          <ul>
            <li>In a lifting machine, an effort of 25 N lifts a load of 1000 N. VR = 50. Find MA, η, ideal effort, and friction effort.</li>
            <li>The law of a machine is P = 0.04W + 8. VR = 30. Find (a) effort for 3000 N load, (b) MA, (c) η, (d) max efficiency.</li>
            <li>A screw jack has pitch 8 mm and handle 400 mm. Find VR. If η = 40%, what effort lifts 10 kN?</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
