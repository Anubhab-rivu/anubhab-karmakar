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
  const u = 10, a = 3;
  const v = u + a * time;
  const s = u * time + 0.5 * a * time * time;
  return (
    <InteractiveDiagram caption="Interactive: Adjust time to see velocity and displacement update (u=10 m/s, a=3 m/s²)">
      <svg viewBox="0 0 500 170" style={{ maxWidth: 500 }}>
        <rect x="0" y="0" width="500" height="170" fill="#faf9f6" rx="6"/>
        <text x="20" y="40" fontSize="11" fill="var(--ink-muted)">Velocity</text>
        <rect x="80" y="25" width="350" height="24" fill="#eee9e0" rx="4"/>
        <rect x="80" y="25" width={Math.min(v*5,350)} height="24" fill="#2d6a4f" rx="4"/>
        <text x={85+Math.min(v*5,350)/2} y="42" textAnchor="middle" fontSize="13" fill="white" fontWeight="700">v = {v.toFixed(1)} m/s</text>
        <text x="20" y="82" fontSize="11" fill="var(--ink-muted)">Distance</text>
        <rect x="80" y="67" width="350" height="24" fill="#eee9e0" rx="4"/>
        <rect x="80" y="67" width={Math.min(s/2,350)} height="24" fill="#c8951a" rx="4"/>
        <text x={85+Math.min(s/2,350)/2} y="84" textAnchor="middle" fontSize="13" fill="white" fontWeight="700">s = {s.toFixed(1)} m</text>
        <text x="80" y="115" fontSize="11" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">v = u + at = 10 + 3({time}) = {v.toFixed(1)} m/s</text>
        <text x="80" y="133" fontSize="11" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">s = ut + ½at² = {s.toFixed(1)} m</text>
        <text x="80" y="151" fontSize="11" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">v² − u² = 2as → {(v*v-u*u).toFixed(0)} = {(2*a*s).toFixed(0)} ✓</text>
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>Time: <strong style={{ color: 'var(--accent)' }}>{time} s</strong></label><br/>
        <input type="range" min="0" max="10" step="0.5" value={time} onChange={(e) => setTime(parseFloat(e.target.value))} style={{ width: 280, marginTop: 6, accentColor: 'var(--accent)' }} />
      </div>
    </InteractiveDiagram>
  );
}

function CircularMotionDiagram() {
  const [rpm, setRpm] = useState(60);
  const omega = (2 * Math.PI * rpm) / 60;
  const r = 0.5;
  const vLinear = omega * r;
  const ac = omega * omega * r;
  return (
    <InteractiveDiagram caption="Interactive: Adjust RPM to see angular & linear quantities (radius = 0.5 m)">
      <svg viewBox="0 0 500 180" style={{ maxWidth: 500 }}>
        <rect x="0" y="0" width="500" height="180" fill="#faf9f6" rx="6"/>
        <circle cx="100" cy="90" r="55" fill="none" stroke="#1a2744" strokeWidth="2" strokeDasharray="6,4"/>
        <circle cx="100" cy="90" r="4" fill="#1a2744"/>
        <circle cx={100+55*Math.cos(-Math.PI/4)} cy={90+55*Math.sin(-Math.PI/4)} r="6" fill="#c0392b"/>
        <line x1="100" y1="90" x2={100+55*Math.cos(-Math.PI/4)} y2={90+55*Math.sin(-Math.PI/4)} stroke="#c0392b" strokeWidth="1.5"/>
        <text x="120" y="55" fontSize="10" fill="#c0392b">r = 0.5 m</text>
        <path d="M120,90 A20,20 0 0,0 115,75" fill="none" stroke="#c8951a" strokeWidth="1.5"/>
        <text x="128" y="82" fontSize="11" fill="#c8951a" fontWeight="600">ω</text>
        <text x="210" y="35" fontSize="12" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">ω = {omega.toFixed(2)} rad/s</text>
        <text x="210" y="60" fontSize="12" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">v = ωr = {vLinear.toFixed(2)} m/s</text>
        <text x="210" y="85" fontSize="12" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">aᶜ = ω²r = {ac.toFixed(2)} m/s²</text>
        <text x="210" y="110" fontSize="12" fill="#7b3f00" fontWeight="700" fontFamily="Source Sans 3">Fᶜ = mω²r (centripetal)</text>
        <text x="210" y="140" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Code Pro, monospace">N = {rpm} RPM, ω = 2πN/60</text>
        <text x="210" y="160" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Code Pro, monospace">Period T = {(60/rpm).toFixed(3)} s</text>
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>RPM: <strong style={{ color: 'var(--accent)' }}>{rpm}</strong></label><br/>
        <input type="range" min="10" max="300" step="10" value={rpm} onChange={(e) => setRpm(parseInt(e.target.value))} style={{ width: 280, marginTop: 6, accentColor: 'var(--accent)' }} />
      </div>
    </InteractiveDiagram>
  );
}

export default function Unit7Page() {
  return (
    <UnitLayout unitNum={7} unitTitle="Motion in a Plane"
      unitDescription="Rectilinear motion, s-t & v-t diagrams, Equations of motion, Newton's 2nd law, Momentum, Conservation of momentum, Curvilinear motion, Angular velocity/acceleration, Centripetal & centrifugal force, Work, Power, Energy"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma" degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 6, title: "Simple Lifting Machines" }} nextUnit={null}>

      {/* ═══ PART A: RECTILINEAR MOTION ═══ */}
      <div className="highlight-band"><h4>Part A — Rectilinear Motion</h4><p>Motion along a straight line with uniform acceleration</p></div>

      {/* 7.1 */}
      <section className="section" id="section1">
        <div className="section-header"><div className="sec-num">7.1</div><h2 id="rectilinear">Rectilinear Motion — Basic Definitions</h2></div>
        <DefinitionCard term="Rectilinear Motion" alternateNames="Linear / Translatory Motion" definition="Motion of a body along a <strong>straight line</strong>. All particles of the body travel the same distance in equal time intervals." />
        <ul className="bullet-list">
          <li><strong>Displacement (s)</strong> — Change in position in a specified direction. Vector. Unit: m.</li>
          <li><strong>Speed</strong> — Rate of distance covered. Scalar. Unit: m/s.</li>
          <li><strong>Velocity (v)</strong> — Rate of displacement. Vector. Unit: m/s. v = ds/dt.</li>
          <li><strong>Acceleration (a)</strong> — Rate of change of velocity. Vector. Unit: m/s². a = dv/dt.</li>
        </ul>
      </section>

      {/* 7.2 s-t and v-t DIAGRAMS */}
      <section className="section" id="section2">
        <div className="section-header"><div className="sec-num">7.2</div><h2 id="diagrams">Displacement-Time & Velocity-Time Diagrams</h2></div>
        <div className="two-col">
          <div className="info-card">
            <h4>s-t Diagram</h4>
            <p><strong>Slope = velocity</strong>. Straight line → uniform velocity. Parabola → uniform acceleration. Horizontal line → body at rest.</p>
          </div>
          <div className="info-card">
            <h4>v-t Diagram</h4>
            <p><strong>Slope = acceleration</strong>. <strong>Area under curve = displacement</strong>. Straight inclined line → uniform acceleration. Horizontal → constant velocity.</p>
          </div>
        </div>
        <ExamTip><p>In the v-t diagram: slope gives acceleration, area under the graph gives total displacement. These two facts solve 90% of graphical problems.</p></ExamTip>
      </section>

      {/* 7.3 EQUATIONS OF MOTION */}
      <section className="section" id="section3">
        <div className="section-header"><div className="sec-num">7.3</div><h2 id="equations">Equations of Motion (with Deduction)</h2></div>
        <FormulaBox title="First Equation" formula="v = u + at" description="Deduction: a = (v−u)/t → v = u + at." variables={[{symbol:'v',name:'Final velocity',unit:'m/s'},{symbol:'u',name:'Initial velocity',unit:'m/s'},{symbol:'a',name:'Acceleration',unit:'m/s²'},{symbol:'t',name:'Time',unit:'s'}]} />
        <FormulaBox title="Second Equation" formula="s = ut + \\frac{1}{2}at^2" description="Deduction: s = average velocity × t = ((u+v)/2)×t. Substitute v = u+at → s = ut + ½at²." />
        <FormulaBox title="Third Equation" formula="v^2 = u^2 + 2as" description="Deduction: From eq. 1: t = (v−u)/a. Substitute into eq. 2: s = u(v−u)/a + ½a((v−u)/a)². Simplify → v² = u² + 2as." />
        <KinematicsDiagram />
        <NoteBox label="For Free Fall"><p>Replace a with g = 9.81 m/s². For upward motion: a = −g. For a body dropped from rest: u = 0, a = g.</p></NoteBox>
      </section>

      {/* 7.4 NEWTON'S 2ND LAW & MOMENTUM */}
      <section className="section" id="section4">
        <div className="section-header"><div className="sec-num">7.4</div><h2 id="newton">Newton&apos;s 2nd Law & Momentum</h2></div>
        <DefinitionCard term="Momentum" definition="<strong>Momentum (p)</strong> = mass × velocity = mv. It is a vector quantity. SI unit: kg·m/s. It measures the 'quantity of motion' of a body." />
        <FormulaBox title="Newton's Second Law" formula="F = ma = \\frac{d(mv)}{dt}" description="Force = rate of change of momentum. For constant mass: F = ma." variables={[{symbol:'F',name:'Net force',unit:'N'},{symbol:'m',name:'Mass',unit:'kg'},{symbol:'a',name:'Acceleration',unit:'m/s²'}]} />
        <DefinitionCard term="Conservation of Momentum" definition="In the absence of external forces, the <strong>total momentum</strong> of a system remains constant. m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂." />
        <FormulaBox title="Conservation of Linear Momentum" formula="m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2" description="Before collision = After collision. Applies to both elastic and inelastic collisions." />
        <WorkedExample title="Newton's 2nd Law" given={['A 1500 kg car accelerates from rest to 72 km/h in 10 s.']} find="Force" steps={['$v = 72 \\times 1000/3600 = 20$ m/s','$a = (20-0)/10 = 2$ m/s²','$F = ma = 1500 \\times 2 = 3000$ N = 3 kN']} answer="F = 3000 N" />
        <WorkedExample title="Conservation of Momentum" given={['A 5 kg ball moving at 4 m/s collides with a 3 kg ball at rest. After collision, the 5 kg ball moves at 1 m/s.']} find="Velocity of 3 kg ball after collision" steps={['$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$','$5(4) + 3(0) = 5(1) + 3v_2$','$20 = 5 + 3v_2 \\Rightarrow v_2 = 15/3 = 5$ m/s']} answer="v₂ = 5 m/s" />
      </section>

      {/* ═══ PART B: CURVILINEAR MOTION ═══ */}
      <div className="highlight-band"><h4>Part B — Curvilinear Motion</h4><p>Motion along a curved path (circular motion)</p></div>

      {/* 7.5 ANGULAR QUANTITIES */}
      <section className="section" id="section5">
        <div className="section-header"><div className="sec-num">7.5</div><h2 id="angular">Angular Displacement, Velocity & Acceleration</h2></div>
        <DefinitionCard term="Angular Displacement (θ)" definition="The angle swept by the radius vector of a body moving along a circular path. Unit: <strong>radian (rad)</strong>. 1 revolution = 2π rad = 360°." />
        <DefinitionCard term="Angular Velocity (ω)" definition="Rate of change of angular displacement. <strong>ω = dθ/dt</strong>. Unit: rad/s. For N rpm: ω = 2πN/60." />
        <DefinitionCard term="Angular Acceleration (α)" definition="Rate of change of angular velocity. <strong>α = dω/dt</strong>. Unit: rad/s²." />
        <FormulaBox title="Relation: Linear & Angular Velocity" formula="v = \\omega r" description="Linear velocity = angular velocity × radius." variables={[{symbol:'v',name:'Linear velocity',unit:'m/s'},{symbol:'ω',name:'Angular velocity',unit:'rad/s'},{symbol:'r',name:'Radius',unit:'m'}]} />
        <FormulaBox title="Relation: Linear & Angular Acceleration" formula="a_t = \\alpha r" description="Tangential (linear) acceleration = angular acceleration × radius." variables={[{symbol:'a_t',name:'Tangential acceleration',unit:'m/s²'},{symbol:'α',name:'Angular acceleration',unit:'rad/s²'}]} />
        <FormulaBox title="Angular Velocity from RPM" formula="\\omega = \\frac{2\\pi N}{60}" description="N = speed in revolutions per minute (RPM)." />
      </section>

      {/* 7.6 CENTRIPETAL & CENTRIFUGAL FORCE */}
      <section className="section" id="section6">
        <div className="section-header"><div className="sec-num">7.6</div><h2 id="centripetal">Centripetal & Centrifugal Force</h2></div>
        <DefinitionCard term="Centripetal Force" definition="The force directed <strong>towards the centre</strong> of the circular path that keeps a body moving in a circle. Without it, the body would fly off tangentially." />
        <DefinitionCard term="Centrifugal Force" definition="The <strong>pseudo (fictitious) force</strong> experienced in a rotating reference frame, directed <strong>away from the centre</strong>. Equal in magnitude and opposite to centripetal force. It is NOT a real force — it is an inertial effect." />
        <FormulaBox title="Centripetal / Centrifugal Force" formula="F_c = \\frac{mv^2}{r} = m\\omega^2 r" description="Deduction: For circular motion, acceleration towards centre = v²/r. By F = ma: F = mv²/r = mω²r." variables={[{symbol:'F_c',name:'Centripetal force',unit:'N'},{symbol:'m',name:'Mass',unit:'kg'},{symbol:'v',name:'Linear velocity',unit:'m/s'},{symbol:'r',name:'Radius',unit:'m'},{symbol:'ω',name:'Angular velocity',unit:'rad/s'}]} />
        <CircularMotionDiagram />
        <WorkedExample title="Centripetal Force" given={['A 2 kg ball on a string of length 1.5 m rotates at 120 RPM in a horizontal circle.']} find="(a) Angular velocity, (b) Linear velocity, (c) Centripetal force" steps={[
          '(a) $\\omega = 2\\pi N/60 = 2\\pi(120)/60 = 4\\pi = 12.57$ rad/s',
          '(b) $v = \\omega r = 12.57 \\times 1.5 = 18.85$ m/s',
          '(c) $F_c = m\\omega^2 r = 2 \\times (12.57)^2 \\times 1.5 = 2 \\times 158 \\times 1.5 = 474$ N',
        ]} answer="ω = 12.57 rad/s, v = 18.85 m/s, Fc = 474 N" />
      </section>

      {/* ═══ PART C: WORK, POWER, ENERGY ═══ */}
      <div className="highlight-band"><h4>Part C — Work, Power, Energy</h4><p>Fundamental concepts of energy transfer</p></div>

      {/* 7.7 WORK */}
      <section className="section" id="section7">
        <div className="section-header"><div className="sec-num">7.7</div><h2 id="work">Work</h2></div>
        <DefinitionCard term="Work" definition="<strong>Work</strong> is done when a force displaces a body in its direction. W = F × s × cos θ, where θ is the angle between force and displacement." />
        <FormulaBox title="Work Done" formula="W = F \\cdot s \\cdot \\cos\\theta" variables={[{symbol:'W',name:'Work',unit:'J (Joule) = N·m'},{symbol:'F',name:'Force',unit:'N'},{symbol:'s',name:'Displacement',unit:'m'},{symbol:'θ',name:'Angle between F and s',unit:'degrees'}]} />
        <NoteBox label="Special Cases"><p>θ = 0°: W = Fs (max work). θ = 90°: W = 0 (no work — carrying a bag horizontally). θ = 180°: W = −Fs (negative work — friction).</p></NoteBox>
      </section>

      {/* 7.8 POWER */}
      <section className="section" id="section8">
        <div className="section-header"><div className="sec-num">7.8</div><h2 id="power">Power</h2></div>
        <DefinitionCard term="Power" definition="<strong>Power</strong> is the rate of doing work. P = W/t = F × v." />
        <FormulaBox title="Power" formula="P = \\frac{W}{t} = F \\cdot v" variables={[{symbol:'P',name:'Power',unit:'W (Watt) = J/s'},{symbol:'1 kW',name:'Kilowatt',unit:'1000 W'},{symbol:'1 HP',name:'Horsepower',unit:'746 W'}]} />
      </section>

      {/* 7.9 ENERGY */}
      <section className="section" id="section9">
        <div className="section-header"><div className="sec-num">7.9</div><h2 id="energy">Energy</h2></div>
        <DefinitionCard term="Energy" definition="The <strong>capacity to do work</strong>. SI unit: Joule (J). 1 kJ = 1000 J. Mechanical energy = KE + PE." />
        <FormulaBox title="Kinetic Energy" formula="KE = \\frac{1}{2}mv^2" description="Energy due to motion." />
        <FormulaBox title="Potential Energy" formula="PE = mgh" description="Energy due to height/position." variables={[{symbol:'g',name:'Gravitational acceleration',unit:'9.81 m/s²'},{symbol:'h',name:'Height above datum',unit:'m'}]} />
        <div className="highlight-band"><h4>Work-Energy Theorem</h4><p>Net work done = Change in KE: W_net = ½mv² − ½mu²</p></div>
        <WorkedExample title="Work, Power, Energy" given={['A 2000 kg car accelerates from 36 km/h to 72 km/h over 200 m.']} find="(a) Work done, (b) Average power if time = 15s" steps={[
          '$u = 36 \\times 1000/3600 = 10$ m/s, $v = 72 \\times 1000/3600 = 20$ m/s',
          '(a) $W = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = \\frac{1}{2}(2000)(20^2 - 10^2) = 1000(400-100) = 300000$ J = 300 kJ',
          '(b) $P = W/t = 300000/15 = 20000$ W = 20 kW = 26.8 HP',
        ]} answer="W = 300 kJ, P = 20 kW" />
      </section>

      {/* QUESTIONS */}
      <section className="section" id="qbank">
        <div className="section-header"><div className="sec-num" style={{background:'#7b3f00'}}>Q</div><h2 id="questions">Expected Questions (WBSCTE)</h2></div>
        <div className="question-box">
          <div className="q-label">Short (2–5 marks)</div>
          <ul>
            <li>Define displacement, velocity, acceleration. State their SI units.</li>
            <li>Deduce the three equations of uniformly accelerated motion.</li>
            <li>State Newton&apos;s 2nd law. Express it as P = ma.</li>
            <li>State the law of conservation of momentum.</li>
            <li>Define angular velocity, angular acceleration. Write v = ωr.</li>
            <li>Derive the expression for centripetal force.</li>
            <li>Define work, power, energy with SI units.</li>
            <li>Differentiate between centripetal and centrifugal force.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Numerical (5–10 marks)</div>
          <ul>
            <li>A car starts from rest, reaches 90 km/h in 15 s. Find acceleration, distance, and force (mass=1200 kg).</li>
            <li>A 4 kg ball moving at 6 m/s collides with a 2 kg ball at rest. After collision the 4 kg ball moves at 2 m/s. Find the velocity of the 2 kg ball.</li>
            <li>A flywheel rotates at 300 RPM. Find ω. If diameter = 1 m, find linear velocity and centripetal acceleration of a point on the rim.</li>
            <li>A 50 kg body is pulled 30 m by a force of 200 N at 40° to the horizontal. Find work done, and power if time = 20 s.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
