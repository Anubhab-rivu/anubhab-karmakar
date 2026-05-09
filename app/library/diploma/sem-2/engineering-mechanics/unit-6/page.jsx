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
  const load = 500; const VR = 10;
  const MA = load / effort;
  const eff = (MA / VR) * 100;
  return (
    <InteractiveDiagram caption="Interactive: Adjust effort to see MA and Efficiency change (Load=500N, VR=10)">
      <svg viewBox="0 0 500 180" style={{ maxWidth: 500 }}>
        <rect x="0" y="0" width="500" height="180" fill="#faf9f6" rx="6"/>
        <rect x="40" y="25" width="300" height="28" fill="#eee9e0" rx="4"/>
        <rect x="40" y="25" width={Math.min(eff, 100) * 3} height="28" fill={eff > 80 ? '#2d6a4f' : eff > 50 ? '#c8951a' : '#c0392b'} rx="4"/>
        <text x={45 + Math.min(eff, 100) * 1.5} y="44" textAnchor="middle" fontSize="13" fill="white" fontWeight="700" fontFamily="Source Sans 3">η = {eff.toFixed(1)}%</text>
        <text x="355" y="44" fontSize="12" fill="var(--ink-muted)" fontFamily="Source Sans 3">Efficiency</text>
        <text x="40" y="85" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">MA = W/P = {load}/{effort} = {MA.toFixed(2)}</text>
        <text x="40" y="105" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">VR = {VR} (fixed by geometry)</text>
        <text x="40" y="125" fontSize="12" fill="var(--ink-light)" fontFamily="Source Code Pro, monospace">η = MA/VR = {MA.toFixed(2)}/{VR} = {eff.toFixed(1)}%</text>
        <text x="40" y="155" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Friction loss = (VR − MA) × P/VR = {((VR-MA)*effort/VR).toFixed(1)} N equivalent</text>
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <label style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 600 }}>Effort (P): <strong style={{ color: 'var(--accent)' }}>{effort} N</strong></label><br/>
        <input type="range" min="20" max="200" step="5" value={effort} onChange={(e) => setEffort(parseInt(e.target.value))} style={{ width: 280, marginTop: 6, accentColor: 'var(--accent)' }} />
      </div>
    </InteractiveDiagram>
  );
}

export default function Unit6Page() {
  return (
    <UnitLayout unitNum={6} unitTitle="Simple Lifting Machines"
      unitDescription="MA, VR, Efficiency, Law of machine, Ideal machine, Reversibility, Screw jack, Pulley block, Wheel & Axle, Worm wheel, Crab winch"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma" degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 5, title: "Centroid & Centre of Gravity" }}
      nextUnit={{ num: 7, title: "Motion in a Plane" }}>

      {/* 6.1 */}
      <section className="section" id="section1">
        <div className="section-header"><div className="sec-num">6.1</div><h2 id="intro">Definition, Applications & Advantages</h2></div>
        <DefinitionCard term="Lifting Machine" definition="A <strong>lifting machine</strong> is a device that enables a heavy load (W) to be lifted by applying a comparatively small effort (P). It trades distance for force — the effort moves through a larger distance than the load." />
        <NoteBox label="Applications"><p>Cranes, screw jacks (car repair), pulley blocks (construction), winches (ship docks), levers, gears, elevators.</p></NoteBox>
      </section>

      {/* 6.2 MA, VR, EFF */}
      <section className="section" id="section2">
        <div className="section-header"><div className="sec-num">6.2</div><h2 id="ma-vr">MA, VR, Efficiency & Relationships</h2></div>
        <FormulaBox title="Mechanical Advantage" formula="MA = \\frac{W}{P}" variables={[{ symbol: 'W', name: 'Load', unit: 'N' },{ symbol: 'P', name: 'Effort', unit: 'N' }]} />
        <FormulaBox title="Velocity Ratio" formula="VR = \\frac{\\text{Distance moved by effort}}{\\text{Distance moved by load}} = \\frac{d_P}{d_W}" description="VR depends ONLY on machine geometry — NOT on friction." />
        <FormulaBox title="Efficiency" formula="\\eta = \\frac{MA}{VR} \\times 100\\% = \\frac{W \\times d_W}{P \\times d_P} \\times 100\\%" description="Output work / Input work. Always < 100% due to friction." />
        <EfficiencyDiagram />
        <div className="subsection">
          <h3 id="ideal">Ideal Machine & Friction</h3>
          <p><strong>Ideal machine:</strong> No friction → η = 100% → MA = VR → P_ideal = W/VR.</p>
          <FormulaBox title="Effort Lost to Friction" formula="P_{\\text{friction}} = P_{\\text{actual}} - P_{\\text{ideal}} = P - \\frac{W}{VR}" />
        </div>
      </section>

      {/* 6.3 LAW OF MACHINE */}
      <section className="section" id="section3">
        <div className="section-header"><div className="sec-num">6.3</div><h2 id="law">Law of Machine & Max Efficiency</h2></div>
        <FormulaBox title="Law of a Machine" formula="P = mW + C" description="Linear relationship: m = slope, C = effort at no load (friction)." variables={[{ symbol: 'm', name: 'Constant (slope)', unit: '—' },{ symbol: 'C', name: 'Effort at no load', unit: 'N' }]} />
        <FormulaBox title="Maximum MA & Efficiency" formula="MA_{\\max} = \\frac{1}{m} \\quad ; \\quad \\eta_{\\max} = \\frac{1}{m \\times VR} \\times 100\\%" description="As W → ∞, the C becomes negligible, so MA approaches 1/m." />
      </section>

      {/* 6.4 REVERSIBILITY */}
      <section className="section" id="section4">
        <div className="section-header"><div className="sec-num">6.4</div><h2 id="reversible">Reversible & Non-Reversible Machines</h2></div>
        <DefinitionCard term="Reversible Machine" definition="A machine in which the load <strong>moves down</strong> (lowers itself) when the effort is removed. This happens when η &gt; 50%." />
        <DefinitionCard term="Non-Reversible (Self-Locking)" definition="A machine that does NOT reverse when effort is removed. The load stays in place due to friction. This happens when <strong>η ≤ 50%</strong>." />
        <FormulaBox title="Condition for Reversibility" formula="\\eta > 50\\% \\quad \\text{i.e.,} \\quad \\frac{MA}{VR} > \\frac{1}{2}" />
        <ExamTip><p>A screw jack is self-locking (η &lt; 50%). This is desirable — you don&apos;t want the car to fall when you stop turning! A pulley block may be reversible (η &gt; 50%).</p></ExamTip>
      </section>

      {/* 6.5 MACHINE TYPES */}
      <section className="section" id="section5">
        <div className="section-header"><div className="sec-num">6.5</div><h2 id="types">VR of Specific Machines</h2></div>

        <table className="data-table">
          <thead><tr><th>Machine</th><th>Velocity Ratio</th><th>Key Variables</th></tr></thead>
          <tbody>
            <tr><td>Simple Axle & Wheel</td><td>R / r</td><td>R = wheel radius, r = axle radius</td></tr>
            <tr><td>Differential Axle & Wheel</td><td>2R / (r₁ − r₂)</td><td>R = wheel, r₁ &amp; r₂ = axle radii</td></tr>
            <tr><td>Worm & Worm Wheel</td><td>T / n</td><td>T = teeth on worm wheel, n = starts of worm</td></tr>
            <tr><td>Single Purchase Crab Winch</td><td>(T₂/T₁) × (L/r)</td><td>Gear ratio × handle/drum ratio</td></tr>
            <tr><td>Double Purchase Crab Winch</td><td>(T₂/T₁) × (T₄/T₃) × (L/r)</td><td>Two gear stages</td></tr>
            <tr><td>Simple Screw Jack</td><td>2πL / p</td><td>L = handle, p = pitch</td></tr>
            <tr><td>Simple Pulley Block (n pulleys)</td><td>n</td><td>n = number of pulleys in movable block</td></tr>
          </tbody>
        </table>

        <div className="subsection">
          <h3 id="screw-jack">Simple Screw Jack</h3>
          <FormulaBox title="VR of Screw Jack" formula="VR = \\frac{2\\pi L}{p}" variables={[{ symbol: 'L', name: 'Handle length', unit: 'mm' },{ symbol: 'p', name: 'Pitch of screw', unit: 'mm' }]} />
        </div>

        <div className="subsection">
          <h3 id="diff-wheel">Differential Axle & Wheel</h3>
          <FormulaBox title="VR of Differential Wheel & Axle" formula="VR = \\frac{2R}{r_1 - r_2}" description="R = radius of effort wheel, r₁ and r₂ are the two axle radii (r₁ > r₂). The load rope winds on one axle and unwinds from the other." />
        </div>

        <div className="subsection">
          <h3 id="worm">Worm & Worm Wheel</h3>
          <FormulaBox title="VR of Worm & Worm Wheel" formula="VR = \\frac{T}{n}" description="T = number of teeth on the worm wheel, n = number of starts (threads) on the worm." />
        </div>

        <WorkedExample title="Screw Jack"
          given={['Pitch = 10 mm, handle = 500 mm, effort = 30 N lifts 6000 N.']}
          find="VR, MA, η, Is it self-locking?"
          steps={[
            '$VR = 2\\pi L/p = 2\\pi(500)/10 = 314.16$',
            '$MA = W/P = 6000/30 = 200$',
            '$\\eta = 200/314.16 \\times 100 = 63.66\\%$',
            'Since η > 50%, it is <strong>reversible</strong>. (In practice, screw jacks are self-locking due to thread friction.)',
          ]}
          answer="VR=314.16, MA=200, η=63.66%" />

        <WorkedExample title="Law of Machine"
          given={['P = 0.04W + 8 (law of machine), VR = 30.']}
          find="(a) P for W=3000N, (b) MA, (c) η, (d) η_max"
          steps={[
            '(a) $P = 0.04(3000) + 8 = 128$ N',
            '(b) $MA = W/P = 3000/128 = 23.44$',
            '(c) $\\eta = 23.44/30 \\times 100 = 78.1\\%$',
            '(d) $\\eta_{max} = 1/(m \\times VR) = 1/(0.04 \\times 30) = 83.33\\%$',
          ]}
          answer="(a) 128 N, (b) 23.44, (c) 78.1%, (d) 83.33%" />
      </section>

      {/* QUESTIONS */}
      <section className="section" id="qbank">
        <div className="section-header"><div className="sec-num" style={{background:'#7b3f00'}}>Q</div><h2 id="questions">Expected Questions (WBSCTE)</h2></div>
        <div className="question-box">
          <div className="q-label">Short (2–5 marks)</div>
          <ul>
            <li>Define MA, VR, Efficiency. Derive η = MA/VR.</li>
            <li>What is the law of a machine? Derive max efficiency formula.</li>
            <li>Differentiate between reversible and non-reversible machines.</li>
            <li>Write VR formulas for screw jack, worm wheel, differential axle.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Numerical (5–10 marks)</div>
          <ul>
            <li>P = 0.05W + 10, VR = 25. Find (a) P for 2000N, (b) MA, (c) η, (d) η_max, (e) is it reversible?</li>
            <li>Screw jack: pitch 8mm, handle 400mm, η=40%. What effort lifts 10kN?</li>
            <li>Differential wheel: R=300mm, r₁=120mm, r₂=100mm. Find VR. If η=60% and W=5kN, find P.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
