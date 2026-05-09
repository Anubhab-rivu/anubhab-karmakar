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

function KinematicsDiagram() {
  const [time, setTime] = useState(4);
  const u = 10; // m/s
  const a = 3;  // m/s²
  const v = u + a * time;
  const s = u * time + 0.5 * a * time * time;
  const barW = Math.min(s, 300);
  return (
    <InteractiveDiagram caption="Interactive: Adjust time to see velocity and displacement update (u = 10 m/s, a = 3 m/s²)">
      <svg viewBox="0 0 500 200" style={{ maxWidth: 500 }}>
        <rect x="0" y="0" width="500" height="200" fill="#faf9f6" rx="6"/>
        {/* Velocity bar */}
        <text x="20" y="45" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Velocity</text>
        <rect x="80" y="30" width="350" height="24" fill="#eee9e0" rx="4"/>
        <rect x="80" y="30" width={Math.min(v * 5, 350)} height="24" fill="#2d6a4f" rx="4"/>
        <text x={85 + Math.min(v * 5, 350) / 2} y="47" textAnchor="middle" fontSize="13" fill="white" fontWeight="700" fontFamily="Source Sans 3">
          v = {v.toFixed(1)} m/s
        </text>
        {/* Distance bar */}
        <text x="20" y="90" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Distance</text>
        <rect x="80" y="75" width="350" height="24" fill="#eee9e0" rx="4"/>
        <rect x="80" y="75" width={Math.min(s / 2, 350)} height="24" fill="#c8951a" rx="4"/>
        <text x={85 + Math.min(s / 2, 350) / 2} y="92" textAnchor="middle" fontSize="13" fill="white" fontWeight="700" fontFamily="Source Sans 3">
          s = {s.toFixed(1)} m
        </text>
        {/* Formulas */}
        <text x="80" y="130" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          v = u + at = 10 + 3({time}) = {v.toFixed(1)} m/s
        </text>
        <text x="80" y="150" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          s = ut + ½at² = 10({time}) + ½(3)({time})² = {s.toFixed(1)} m
        </text>
        <text x="80" y="170" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">
          v² - u² = 2as → {(v*v).toFixed(0)} - 100 = 2(3)({s.toFixed(1)}) = {(6*s).toFixed(0)}
        </text>
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>
          Time: <strong style={{ color: 'var(--accent)' }}>{time} s</strong>
        </label>
        <br/>
        <input type="range" min="0" max="10" step="0.5" value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
          style={{ width: 280, marginTop: 6, accentColor: 'var(--accent)' }}
        />
      </div>
    </InteractiveDiagram>
  );
}

export default function Unit7Page() {
  return (
    <UnitLayout
      unitNum={7} unitTitle="Motion in a Plane"
      unitDescription="Rectilinear motion, Newton's 2nd law, Work, Power, Energy"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 6, title: "Simple Lifting Machines" }}
      nextUnit={null}
    >
      {/* 7.1 */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">7.1</div>
          <h2 id="rectilinear">Rectilinear Motion</h2>
        </div>
        <DefinitionCard
          term="Rectilinear Motion"
          alternateNames="Linear Motion"
          definition="Motion of a body along a <strong>straight line</strong>. All particles of the body move the same distance in the same time. Also called translatory motion."
        />
        <ul className="bullet-list">
          <li><strong>Displacement (s)</strong> — Change in position of a body in a specified direction. Vector quantity. Unit: m.</li>
          <li><strong>Speed</strong> — Rate of change of distance. Scalar. Unit: m/s.</li>
          <li><strong>Velocity (v)</strong> — Rate of change of displacement. Vector. Unit: m/s.</li>
          <li><strong>Acceleration (a)</strong> — Rate of change of velocity. Vector. Unit: m/s².</li>
        </ul>
      </section>

      {/* 7.2 */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">7.2</div>
          <h2 id="equations">Equations of Motion (Uniform Acceleration)</h2>
        </div>
        <FormulaBox
          title="First Equation of Motion"
          formula="v = u + at"
          description="Relates final velocity (v) to initial velocity (u), acceleration (a), and time (t)."
          variables={[
            { symbol: 'v', name: 'Final velocity', unit: 'm/s' },
            { symbol: 'u', name: 'Initial velocity', unit: 'm/s' },
            { symbol: 'a', name: 'Acceleration', unit: 'm/s²' },
            { symbol: 't', name: 'Time', unit: 's' },
          ]}
        />
        <FormulaBox
          title="Second Equation of Motion"
          formula="s = ut + \\frac{1}{2}at^2"
          description="Displacement as a function of time."
          variables={[
            { symbol: 's', name: 'Displacement', unit: 'm' },
          ]}
        />
        <FormulaBox
          title="Third Equation of Motion"
          formula="v^2 = u^2 + 2as"
          description="Relates velocity to displacement (time-independent)."
        />
        <KinematicsDiagram />
        <ExamTip>
          <p><strong>Memory trick:</strong> v = u + at (velocity-time), s = ut + ½at² (displacement-time), v² = u² + 2as (velocity-displacement). For deceleration, use negative &apos;a&apos;. For free fall, a = g = 9.81 m/s².</p>
        </ExamTip>
      </section>

      {/* 7.3 */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">7.3</div>
          <h2 id="newton">Newton&apos;s Second Law of Motion</h2>
        </div>
        <DefinitionCard
          term="Newton's 2nd Law"
          definition="The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force. For constant mass: <strong>F = ma</strong>."
        />
        <FormulaBox
          title="Newton's Second Law"
          formula="F = ma"
          description="Force equals mass times acceleration. This is the foundation of kinetics."
          variables={[
            { symbol: 'F', name: 'Net force', unit: 'N' },
            { symbol: 'm', name: 'Mass', unit: 'kg' },
            { symbol: 'a', name: 'Acceleration', unit: 'm/s²' },
          ]}
        />
        <WorkedExample
          title="Newton's 2nd Law"
          given={['A 1500 kg car accelerates from rest to 72 km/h in 10 seconds.']}
          find="Accelerating force"
          steps={[
            'Convert: $v = 72$ km/h $= \\frac{72 \\times 1000}{3600} = 20$ m/s',
            'Acceleration: $a = \\frac{v - u}{t} = \\frac{20 - 0}{10} = 2$ m/s²',
            'Force: $F = ma = 1500 \\times 2 = 3000$ N $= 3$ kN',
          ]}
          answer="F = 3000 N = 3 kN"
        />
      </section>

      {/* 7.4 */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">7.4</div>
          <h2 id="work">Work</h2>
        </div>
        <DefinitionCard
          term="Work"
          definition="<strong>Work</strong> is done when a force displaces a body in its direction of action. It is the product of force and displacement in the direction of force."
        />
        <FormulaBox
          title="Work Done"
          formula="W = F \\cdot s \\cdot \\cos\\theta"
          description="Where θ is the angle between force and displacement."
          variables={[
            { symbol: 'W', name: 'Work done', unit: 'J (Joule)' },
            { symbol: 'F', name: 'Force', unit: 'N' },
            { symbol: 's', name: 'Displacement', unit: 'm' },
            { symbol: '1 J', name: '= 1 N·m', unit: '' },
          ]}
        />
        <NoteBox label="Special Cases">
          <p>When θ = 0° (force along motion): W = Fs (maximum work). When θ = 90° (force perpendicular): W = 0 (no work — e.g., carrying a bag horizontally). When θ = 180° (force opposite): W = −Fs (negative work — friction).</p>
        </NoteBox>
      </section>

      {/* 7.5 */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">7.5</div>
          <h2 id="power">Power</h2>
        </div>
        <DefinitionCard
          term="Power"
          definition="<strong>Power</strong> is the rate of doing work. It measures how fast work is done or energy is transferred."
        />
        <FormulaBox
          title="Power"
          formula="P = \\frac{W}{t} = F \\cdot v"
          description="Power can also be expressed as force × velocity."
          variables={[
            { symbol: 'P', name: 'Power', unit: 'W (Watt)' },
            { symbol: 'W', name: 'Work done', unit: 'J' },
            { symbol: 't', name: 'Time', unit: 's' },
            { symbol: '1 HP', name: 'Horsepower', unit: '746 W' },
          ]}
        />
      </section>

      {/* 7.6 */}
      <section className="section" id="section6">
        <div className="section-header">
          <div className="sec-num">7.6</div>
          <h2 id="energy">Energy</h2>
        </div>
        <DefinitionCard
          term="Energy"
          definition="The <strong>capacity to do work</strong>. Energy exists in many forms — mechanical energy is the sum of kinetic energy and potential energy."
        />
        <FormulaBox
          title="Kinetic Energy (KE)"
          formula="KE = \\frac{1}{2}mv^2"
          description="Energy due to motion."
          variables={[
            { symbol: 'KE', name: 'Kinetic energy', unit: 'J' },
            { symbol: 'm', name: 'Mass', unit: 'kg' },
            { symbol: 'v', name: 'Velocity', unit: 'm/s' },
          ]}
        />
        <FormulaBox
          title="Potential Energy (PE)"
          formula="PE = mgh"
          description="Energy due to position/height."
          variables={[
            { symbol: 'PE', name: 'Potential energy', unit: 'J' },
            { symbol: 'h', name: 'Height above datum', unit: 'm' },
            { symbol: 'g', name: 'Gravitational acceleration', unit: '9.81 m/s²' },
          ]}
        />
        <div className="highlight-band">
          <h4>Work-Energy Theorem</h4>
          <p>The net work done on a body equals the change in its kinetic energy: W_net = ΔKE = ½mv² − ½mu²</p>
        </div>
        <WorkedExample
          title="Work, Power, Energy"
          given={[
            'A 50 kg box is pushed 20 m along a horizontal floor against a friction force of 100 N.',
            'The push takes 10 seconds.',
          ]}
          find="(a) Work done against friction, (b) Power required"
          steps={[
            '(a) Work = $F \\times s = 100 \\times 20 = 2000$ J = 2 kJ',
            '(b) Power = $\\frac{W}{t} = \\frac{2000}{10} = 200$ W',
            'In HP: $P = \\frac{200}{746} = 0.268$ HP',
          ]}
          answer="(a) W = 2000 J, (b) P = 200 W = 0.268 HP"
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
            <li>State Newton&apos;s three laws of motion.</li>
            <li>Define: work, power, and energy. State their SI units.</li>
            <li>Write the three equations of uniformly accelerated motion.</li>
            <li>Distinguish between kinetic energy and potential energy.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (10–15 marks)</div>
          <ul>
            <li>A car starts from rest and attains 90 km/h in 15 s. Find (a) acceleration, (b) distance covered, (c) force if mass = 1200 kg.</li>
            <li>A 200 kg crate is dragged 30 m at 40° to the horizontal by a 500 N force. Find (a) work done, (b) work against friction (μ = 0.25).</li>
            <li>State and prove the work-energy theorem. A 5 kg ball is dropped from 20 m height. Find its velocity just before hitting the ground.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
