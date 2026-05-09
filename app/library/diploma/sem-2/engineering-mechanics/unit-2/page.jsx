'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import { SvgWatermark } from '@/components/Watermark';

export default function Unit2Page() {
  return (
    <UnitLayout
      unitNum={2} unitTitle="Moments & Couples"
      unitDescription="Moment of a force, Physical significance, Resultant of parallel & inclined forces, Varignon's Theorem, Couples, Equivalent couples, Replacement of force by force + couple"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 1, title: "Basics & Force Systems" }}
      nextUnit={{ num: 3, title: "Equilibrium of Forces" }}
    >
      {/* ═══ 2.1 MOMENT OF A FORCE ═══ */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">2.1</div>
          <h2 id="moment">Moment of a Force about a Point</h2>
        </div>
        <DefinitionCard
          term="Moment of a Force"
          alternateNames="Torque / Turning Effect"
          definition="The <strong>moment of a force</strong> about a point is the product of the force and the <strong>perpendicular distance</strong> of the point from the line of action of the force. It measures the turning tendency of the force."
        />
        <FormulaBox
          title="Moment of a Force"
          formula="M_O = F \\times d"
          description="Where F is the force and d is the perpendicular distance (moment arm) from point O to the line of action of F."
          variables={[
            { symbol: 'M_O', name: 'Moment about O', unit: 'N·m or kN·m' },
            { symbol: 'F', name: 'Force', unit: 'N' },
            { symbol: 'd', name: 'Perpendicular distance (moment arm)', unit: 'm' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 2.1 — Moment of a force about point O">
          <svg viewBox="0 0 420 220" style={{ maxWidth: 420 }}>
            <rect x="0" y="0" width="420" height="220" fill="#faf9f6" rx="6"/>
            <circle cx="100" cy="140" r="5" fill="#c0392b"/>
            <text x="85" y="160" fontSize="14" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">O</text>
            <line x1="100" y1="140" x2="340" y2="140" stroke="#1a2744" strokeWidth="3"/>
            <line x1="300" y1="140" x2="300" y2="50" stroke="#2d6a4f" strokeWidth="2.5"/>
            <polygon points="300,50 294,62 306,62" fill="#2d6a4f"/>
            <text x="312" y="55" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F</text>
            <line x1="100" y1="175" x2="300" y2="175" stroke="#c8951a" strokeWidth="1.5"/>
            <line x1="100" y1="170" x2="100" y2="180" stroke="#c8951a" strokeWidth="1"/>
            <line x1="300" y1="170" x2="300" y2="180" stroke="#c8951a" strokeWidth="1"/>
            <text x="200" y="195" textAnchor="middle" fontSize="13" fill="#c8951a" fontWeight="700" fontFamily="Source Sans 3">d (moment arm)</text>
            <path d="M130,120 A30,30 0 0,1 130,160" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="140" y="100" fontSize="11" fill="#c0392b" fontFamily="Source Sans 3">↻ M = F × d</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <div className="subsection">
          <h3 id="physical-significance">Physical Significance of Moment</h3>
          <p>Moment represents the <strong>turning effect</strong> of a force. Everyday examples:</p>
          <ul className="bullet-list">
            <li>Opening a <strong>door</strong> — pushing near the handle (large d) requires less force than pushing near the hinge (small d).</li>
            <li>Tightening a <strong>nut</strong> — a longer spanner (larger d) requires less effort.</li>
            <li><strong>See-saw</strong> balance — heavier child sits closer to the pivot to balance moments.</li>
          </ul>
        </div>

        <NoteBox label="Sign Convention">
          <p><strong>Counter-clockwise (CCW) = Positive (+)</strong>, <strong>Clockwise (CW) = Negative (−)</strong>. Always state the convention before solving problems.</p>
        </NoteBox>
      </section>

      {/* ═══ 2.2 RESULTANT OF PARALLEL FORCES ═══ */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">2.2</div>
          <h2 id="parallel-forces">Resultant of Parallel & Inclined Forces</h2>
        </div>
        <div className="subsection">
          <h3>Like Parallel Forces</h3>
          <p>Forces acting in the <strong>same direction</strong>. Resultant R = F₁ + F₂, acting at a point dividing the distance in the <strong>inverse ratio</strong> of forces.</p>
          <FormulaBox
            title="Position of Resultant (Like Parallel)"
            formula="R = F_1 + F_2 \\quad ; \\quad F_1 \\times d_1 = F_2 \\times d_2"
            description="The resultant divides the distance between forces inversely: the larger force is closer to the resultant."
          />
        </div>
        <div className="subsection">
          <h3>Unlike Parallel Forces</h3>
          <p>Forces acting in <strong>opposite directions</strong>. Resultant R = |F₁ − F₂|, acting outside the two forces, closer to the larger one.</p>
          <FormulaBox
            title="Position of Resultant (Unlike Parallel)"
            formula="R = |F_1 - F_2| \\quad ; \\quad F_1 \\times d_1 = F_2 \\times d_2"
            description="The resultant lies outside, on the side of the larger force."
          />
        </div>

        <WorkedExample
          title="Resultant of Like Parallel Forces"
          given={['Two like parallel forces 80 N and 120 N act at points A and B, 2 m apart.']}
          find="Resultant and its position from A"
          steps={[
            '$R = 80 + 120 = 200$ N (same direction)',
            'Let resultant act at distance $x$ from A:',
            '$80 \\times x = 120 \\times (2 - x)$',
            '$80x = 240 - 120x$',
            '$200x = 240 \\Rightarrow x = 1.2$ m from A',
          ]}
          answer="R = 200 N at 1.2 m from A (0.8 m from B)"
        />
      </section>

      {/* ═══ 2.3 VARIGNON'S THEOREM ═══ */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">2.3</div>
          <h2 id="varignon">Varignon&apos;s Theorem (Principle of Moments)</h2>
        </div>
        <DefinitionCard
          term="Varignon's Theorem"
          alternateNames="Principle of Moments"
          definition="The algebraic sum of the moments of a system of coplanar forces about any point is equal to the moment of their <strong>resultant</strong> about the same point."
        />
        <FormulaBox
          title="Varignon's Theorem"
          formula="M_R = \\sum M_i \\quad \\Rightarrow \\quad R \\times d_R = F_1 d_1 + F_2 d_2 + F_3 d_3 + \\cdots"
          description="Used to find the position of the resultant when forces and their positions are known."
        />
        <ExamTip>
          <p>Varignon&apos;s theorem is your go-to tool for finding <strong>where the resultant acts</strong>. Step 1: Find R = ΣF. Step 2: Take moments about any convenient point. Step 3: R × d = ΣMi gives d.</p>
        </ExamTip>

        <WorkedExample
          title="Varignon's Theorem"
          given={[
            'Three parallel forces: 20 N, 40 N, 30 N act vertically downward at 1 m, 3 m, 5 m from point A.',
          ]}
          find="Position of resultant from A"
          steps={[
            '$R = 20 + 40 + 30 = 90$ N (downward)',
            'By Varignon\'s theorem: $R \\times \\bar{x} = \\sum F_i x_i$',
            '$90\\bar{x} = 20(1) + 40(3) + 30(5) = 20 + 120 + 150 = 290$',
            '$\\bar{x} = 290/90 = 3.22$ m from A',
          ]}
          answer="R = 90 N at $\\bar{x} = 3.22$ m from A"
        />

        <WorkedExample
          title="Four Parallel Forces"
          given={['Forces 10, 20, 30, 40 N act downward at 0, 2, 5, 8 m from end A of a beam.']}
          find="Resultant and its line of action"
          steps={[
            '$R = 10 + 20 + 30 + 40 = 100$ N',
            '$R\\bar{x} = 10(0) + 20(2) + 30(5) + 40(8) = 0 + 40 + 150 + 320 = 510$',
            '$\\bar{x} = 510/100 = 5.1$ m from A',
          ]}
          answer="R = 100 N at 5.1 m from A"
        />
      </section>

      {/* ═══ 2.4 COUPLES ═══ */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">2.4</div>
          <h2 id="couple">Couples</h2>
        </div>
        <DefinitionCard
          term="Couple"
          definition="A <strong>couple</strong> consists of two equal, parallel, and opposite forces that do not share the same line of action. A couple produces <strong>pure rotation</strong> without any translation."
          example="Turning a steering wheel, opening a jar lid, using a screwdriver."
        />
        <FormulaBox
          title="Moment of a Couple"
          formula="M = F \\times d"
          description="Where F = magnitude of either force, d = perpendicular distance between the two forces (arm of couple)."
          variables={[
            { symbol: 'M', name: 'Moment of couple', unit: 'N·m' },
            { symbol: 'F', name: 'Each force', unit: 'N' },
            { symbol: 'd', name: 'Arm of couple', unit: 'm' },
          ]}
        />

        <div className="subsection">
          <h3 id="significance-couple">Physical Significance</h3>
          <p>A couple creates only rotation. The net translational force is zero (F − F = 0). The turning effect is the same about <strong>every point</strong> in the plane — this is what makes couples special.</p>
        </div>

        <InteractiveDiagram caption="Fig. 2.2 — A couple: two equal and opposite parallel forces">
          <svg viewBox="0 0 400 200" style={{ maxWidth: 400 }}>
            <rect x="0" y="0" width="400" height="200" fill="#faf9f6" rx="6"/>
            <line x1="120" y1="140" x2="120" y2="50" stroke="#2d6a4f" strokeWidth="2.5"/>
            <polygon points="120,50 114,62 126,62" fill="#2d6a4f"/>
            <text x="100" y="45" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F</text>
            <line x1="280" y1="60" x2="280" y2="150" stroke="#c0392b" strokeWidth="2.5"/>
            <polygon points="280,150 274,138 286,138" fill="#c0392b"/>
            <text x="292" y="155" fontSize="14" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">F</text>
            <line x1="120" y1="170" x2="280" y2="170" stroke="#c8951a" strokeWidth="1.5"/>
            <text x="200" y="188" textAnchor="middle" fontSize="13" fill="#c8951a" fontWeight="700" fontFamily="Source Sans 3">d (arm of couple)</text>
            <path d="M185,80 A30,30 0 1,1 215,80" fill="none" stroke="#7b3f00" strokeWidth="1.5"/>
            <polygon points="215,80 210,72 220,75" fill="#7b3f00"/>
            <text x="200" y="110" textAnchor="middle" fontSize="12" fill="#7b3f00" fontWeight="600" fontFamily="Source Sans 3">M = F × d</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
      </section>

      {/* ═══ 2.5 EQUIVALENT COUPLES & RESULTANT ═══ */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">2.5</div>
          <h2 id="equivalent-couples">Equivalent Couples & Resultant of Couples</h2>
        </div>
        <DefinitionCard
          term="Equivalent Couples"
          definition="Two couples are <strong>equivalent</strong> if they have the same moment (magnitude and sense). The actual forces and arm length may differ — only F × d must be equal."
        />
        <NoteBox label="Example">
          <p>A couple of 100 N × 0.3 m = 30 N·m is equivalent to a couple of 60 N × 0.5 m = 30 N·m. Both produce the same rotational effect.</p>
        </NoteBox>

        <FormulaBox
          title="Resultant of Coplanar Couples"
          formula="M_R = M_1 + M_2 + M_3 + \\cdots = \\sum M_i"
          description="Algebraic sum (CCW +, CW −). A couple can only be balanced by an equal and opposite couple."
        />

        <div className="subsection">
          <h3 id="replacement">Replacement of a Force by a Force + Couple</h3>
          <p>A force F at point A can be <strong>transferred</strong> to another point B by introducing an equal and opposite pair at B. This gives:</p>
          <ol className="step-list">
            <li><div className="step-num">1</div><div className="step-text">The original force F at A, and two forces +F and −F at B.</div></li>
            <li><div className="step-num">2</div><div className="step-text">The force F at A and −F at B form a <strong>couple</strong> (M = F × d, where d = distance AB).</div></li>
            <li><div className="step-num">3</div><div className="step-text">Result: Force F at B <strong>plus</strong> a couple of moment M = F × d.</div></li>
          </ol>
          <ExamTip>
            <p>This concept is used in structural analysis. A force can always be moved to any point by adding a compensating couple. The system remains mechanically equivalent.</p>
          </ExamTip>
        </div>

        <WorkedExample
          title="Resultant of Multiple Couples"
          given={['Four couples: 40 N·m (CCW), 25 N·m (CW), 15 N·m (CCW), 30 N·m (CW).']}
          find="Resultant couple"
          steps={[
            'Taking CCW as +, CW as −:',
            '$M_R = +40 - 25 + 15 - 30 = 0$ N·m',
            'The system is in <strong>rotational equilibrium</strong>.',
          ]}
          answer="Resultant couple = 0 N·m (equilibrium)"
        />
      </section>

      {/* QUESTION BANK */}
      <section className="section" id="qbank">
        <div className="section-header">
          <div className="sec-num" style={{background:'#7b3f00'}}>Q</div>
          <h2 id="questions">Expected Questions (WBSCTE Pattern)</h2>
        </div>
        <div className="question-box">
          <div className="q-label">Short Answer (2–5 marks)</div>
          <ul>
            <li>Define moment of a force. State its SI unit and physical significance.</li>
            <li>State Varignon&apos;s theorem.</li>
            <li>Define a couple. State its properties and physical significance.</li>
            <li>What are equivalent couples? Give an example.</li>
            <li>Explain how a force at a point can be replaced by an equal force at another point plus a couple.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer / Numerical (5–10 marks)</div>
          <ul>
            <li>State and prove Varignon&apos;s theorem. Three forces 10, 20, 30 N act at 2, 4, 6 m from A. Find the resultant and its position.</li>
            <li>Four parallel forces 15, 25, 10, 20 N act downward at 0, 1.5, 3.5, 5 m from end A. Find R and x̄.</li>
            <li>Two unlike parallel forces 100 N and 60 N act 2 m apart. Find the resultant and its position.</li>
            <li>A force of 200 N acts at point A. Transfer it to point B (3 m away). What couple must be added?</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
