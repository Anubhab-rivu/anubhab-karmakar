'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import BeamReactionDiagram from '@/components/BeamReactionDiagram';
import ForceParallelogramDiagram from '@/components/ForceParallelogramDiagram';
import { SvgWatermark } from '@/components/Watermark';

export default function Unit3Page() {
  return (
    <UnitLayout
      unitNum={3} unitTitle="Equilibrium of Forces"
      unitDescription="Lami's theorem, Free body diagrams, Beam reactions"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 2, title: "Moments & Couples" }}
      nextUnit={{ num: 4, title: "Friction" }}
      syllabusGroup="A" syllabusMarks="25" examType="End Semester"
    >
      {/* SECTION 3.1 — EQUILIBRIUM */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">3.1</div>
          <h2 id="equilibrium-definition">Definition of Equilibrium</h2>
        </div>
        <DefinitionCard
          term="Equilibrium"
          alternateNames="Static Equilibrium"
          definition="A body is said to be in <strong>equilibrium</strong> when the resultant of all forces acting on it is <strong>zero</strong> and the resultant moment about any point is also <strong>zero</strong>. In this state, the body has no tendency to move (translate) or rotate."
          example="A book lying on a table — its weight is balanced by the normal reaction from the table."
        />
        <p>In engineering, understanding equilibrium is essential for analyzing structures, machines, and mechanisms. Every bridge, building frame, and crane must satisfy equilibrium conditions to remain stable.</p>
        <NoteBox label="Key Concept">
          <p>For a body in equilibrium under concurrent coplanar forces, we need two conditions. For non-concurrent forces, we need three conditions (including moment equilibrium).</p>
        </NoteBox>
      </section>

      {/* SECTION 3.2 — CONCURRENT COPLANAR FORCES */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">3.2</div>
          <h2 id="concurrent-equilibrium">Equilibrium of Concurrent Coplanar Forces</h2>
        </div>
        <p>When all forces pass through a single point (concurrent) and lie in the same plane (coplanar), the conditions for equilibrium reduce to:</p>
        <FormulaBox
          title="Conditions for Equilibrium — Concurrent Forces"
          formula="\\sum F_x = 0 \\quad \\text{and} \\quad \\sum F_y = 0"
          description="The algebraic sum of all force components along any two perpendicular axes must be zero."
          variables={[
            { symbol: 'F_x', name: 'Force component along X', unit: 'N' },
            { symbol: 'F_y', name: 'Force component along Y', unit: 'N' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 3.1 — Three concurrent forces in equilibrium">
          <svg viewBox="0 0 400 300" style={{ maxWidth: 400 }}>
            <rect x="0" y="0" width="400" height="300" fill="#faf9f6" rx="6"/>
            <circle cx="200" cy="150" r="5" fill="#c0392b"/>
            <line x1="200" y1="150" x2="200" y2="40" stroke="#1a2744" strokeWidth="2.5" markerEnd="url(#ah)"/>
            <line x1="200" y1="150" x2="90" y2="230" stroke="#1a2744" strokeWidth="2.5" markerEnd="url(#ah)"/>
            <line x1="200" y1="150" x2="330" y2="210" stroke="#1a2744" strokeWidth="2.5" markerEnd="url(#ah)"/>
            <defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1a2744"/></marker></defs>
            <text x="205" y="35" fontSize="13" fill="#c0392b" fontWeight="600" fontFamily="Source Sans 3">F₁</text>
            <text x="70" y="245" fontSize="13" fill="#c0392b" fontWeight="600" fontFamily="Source Sans 3">F₂</text>
            <text x="335" y="220" fontSize="13" fill="#c0392b" fontWeight="600" fontFamily="Source Sans 3">F₃</text>
            <text x="200" y="170" fontSize="11" fill="#1a2744" textAnchor="middle" fontFamily="Source Sans 3">O (concurrent point)</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <ForceParallelogramDiagram />
      </section>

      {/* SECTION 3.3 — LAMI'S THEOREM */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">3.3</div>
          <h2 id="lamis-theorem">Lami&apos;s Theorem</h2>
        </div>
        <DefinitionCard
          term="Lami's Theorem"
          alternateNames="For 3 concurrent forces in equilibrium"
          definition="If three concurrent coplanar forces are in equilibrium, then each force is <strong>proportional to the sine of the angle between the other two forces</strong>."
        />
        <FormulaBox
          title="Lami's Theorem"
          formula="\\frac{F_1}{\\sin \\alpha} = \\frac{F_2}{\\sin \\beta} = \\frac{F_3}{\\sin \\gamma}"
          description="Where α is the angle opposite to F₁, β opposite to F₂, and γ opposite to F₃."
          variables={[
            { symbol: 'F₁, F₂, F₃', name: 'Three concurrent forces', unit: 'N' },
            { symbol: 'α, β, γ', name: 'Angles opposite to respective forces', unit: 'degrees' },
          ]}
        />
        <ExamTip>
          <p>Lami's theorem applies ONLY when exactly 3 forces act at a point and the body is in equilibrium. If more than 3 forces act, use the resolution method (ΣFx = 0, ΣFy = 0) instead.</p>
        </ExamTip>
        <InteractiveDiagram caption="Fig. 3.2 — Triangle of forces illustrating Lami's Theorem">
          <svg viewBox="0 0 420 320" style={{ maxWidth: 420 }}>
            <rect x="0" y="0" width="420" height="320" fill="#faf9f6" rx="6"/>
            <circle cx="210" cy="160" r="5" fill="#c0392b"/>
            <line x1="210" y1="160" x2="210" y2="40" stroke="#1a2744" strokeWidth="2.5"/>
            <line x1="210" y1="160" x2="100" y2="250" stroke="#2d6a4f" strokeWidth="2.5"/>
            <line x1="210" y1="160" x2="340" y2="230" stroke="#1a4d6b" strokeWidth="2.5"/>
            <text x="215" y="35" fontSize="14" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">F₁</text>
            <text x="80" y="260" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F₂</text>
            <text x="345" y="240" fontSize="14" fill="#1a4d6b" fontWeight="700" fontFamily="Source Sans 3">F₃</text>
            <path d="M210,130 A30,30 0 0,0 185,170" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
            <text x="175" y="145" fontSize="12" fill="#c0392b" fontFamily="Source Sans 3">α</text>
            <path d="M230,175 A30,30 0 0,0 210,130" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
            <text x="235" y="150" fontSize="12" fill="#c0392b" fontFamily="Source Sans 3">β</text>
            <path d="M185,175 A30,30 0 0,0 235,175" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
            <text x="200" y="195" fontSize="12" fill="#c0392b" fontFamily="Source Sans 3">γ</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
        <WorkedExample
          title="Application of Lami's Theorem"
          given={['A 50 N weight is suspended by two strings making angles of 30° and 45° with the horizontal ceiling.']}
          find="Tensions $T_1$ and $T_2$ in the strings"
          steps={[
            'Draw the FBD: Weight W = 50 N acts downward. $T_1$ at 30° to horizontal, $T_2$ at 45° to horizontal.',
            'Find angles opposite each force: α (opp. W) = 180° − 30° − 45° = 105°. β (opp. $T_1$) = 90° + 45° = 135°. γ (opp. $T_2$) = 90° + 30° = 120°.',
            'Apply Lami\'s: $$\\frac{50}{\\sin 105°} = \\frac{T_1}{\\sin 135°} = \\frac{T_2}{\\sin 120°}$$',
            '$T_1 = 50 \\times \\frac{\\sin 135°}{\\sin 105°} = 50 \\times \\frac{0.707}{0.966} = 36.6$ N',
            '$T_2 = 50 \\times \\frac{\\sin 120°}{\\sin 105°} = 50 \\times \\frac{0.866}{0.966} = 44.8$ N',
          ]}
          answer="$T_1 = 36.6$ N, $T_2 = 44.8$ N"
        />
      </section>



      {/* SECTION 3.4 — FREE BODY DIAGRAM */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">3.4</div>
          <h2 id="free-body-diagram">Free Body Diagrams (FBD)</h2>
        </div>
        <DefinitionCard
          term="Free Body Diagram"
          alternateNames="FBD"
          definition="A <strong>free body diagram</strong> is a sketch of a body (or part of a body) showing <strong>all external forces and reactions</strong> acting on it, isolated from its surroundings. It is the most important first step in solving any equilibrium problem."
        />
        <NoteBox label="Steps to Draw an FBD">
          <ol className="step-list">
            <li><div className="step-num" style={{background:'var(--teal)'}}>1</div><div className="step-text">Isolate the body from all supports and connections</div></li>
            <li><div className="step-num" style={{background:'var(--teal)'}}>2</div><div className="step-text">Show all applied loads (forces, moments, distributed loads)</div></li>
            <li><div className="step-num" style={{background:'var(--teal)'}}>3</div><div className="step-text">Replace each support with its equivalent reaction forces</div></li>
            <li><div className="step-num" style={{background:'var(--teal)'}}>4</div><div className="step-text">Include the body's weight at its centre of gravity</div></li>
            <li><div className="step-num" style={{background:'var(--teal)'}}>5</div><div className="step-text">Add dimensions and angles needed for calculation</div></li>
          </ol>
        </NoteBox>
      </section>

      {/* SECTION 3.5 — NON-CONCURRENT FORCES */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">3.5</div>
          <h2 id="non-concurrent">Equilibrium of Non-Concurrent Forces</h2>
        </div>
        <p>When forces do not pass through a single point, we need three conditions for equilibrium:</p>
        <FormulaBox
          title="Conditions for Equilibrium — Non-Concurrent Forces"
          formula="\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0"
          description="The algebraic sum of moments about any point O must also be zero."
          variables={[
            { symbol: 'M_O', name: 'Moment about point O', unit: 'N·m' },
          ]}
        />
      </section>

      {/* SECTION 3.6 — BEAM SUPPORTS */}
      <section className="section" id="section6">
        <div className="section-header">
          <div className="sec-num">3.6</div>
          <h2 id="beam-supports">Types of Beams and Supports</h2>
        </div>
        <div className="two-col">
          <div className="info-card">
            <h4>Pin (Hinge) Support</h4>
            <p>Provides two reaction components: horizontal (Rₓ) and vertical (Rᵧ). Allows rotation but prevents translation.</p>
          </div>
          <div className="info-card">
            <h4>Roller Support</h4>
            <p>Provides one reaction component: perpendicular to the surface. Allows both horizontal movement and rotation.</p>
          </div>
        </div>
        <div style={{marginTop:16}}>
          <div className="info-card">
            <h4>Fixed Support</h4>
            <p>Provides three reactions: horizontal force (Rₓ), vertical force (Rᵧ), and a fixing moment (M). Prevents all movement and rotation.</p>
          </div>
        </div>
        <InteractiveDiagram caption="Fig. 3.3 — Types of supports and their reactions">
          <svg viewBox="0 0 500 200" style={{ maxWidth: 500 }}>
            <rect x="0" y="0" width="500" height="200" fill="#faf9f6" rx="6"/>
            {/* Pin Support */}
            <polygon points="60,100 45,130 75,130" fill="none" stroke="#1a2744" strokeWidth="2"/>
            <circle cx="60" cy="100" r="5" fill="#c0392b"/>
            <line x1="40" y1="130" x2="80" y2="130" stroke="#1a2744" strokeWidth="2"/>
            <text x="60" y="155" fontSize="11" fill="#1a2744" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">Pin</text>
            <text x="60" y="168" fontSize="10" fill="#c0392b" textAnchor="middle" fontFamily="Source Sans 3">Rₓ, Rᵧ</text>
            {/* Roller */}
            <circle cx="200" cy="125" r="8" fill="none" stroke="#1a2744" strokeWidth="2"/>
            <polygon points="200,100 185,117 215,117" fill="none" stroke="#1a2744" strokeWidth="2"/>
            <line x1="180" y1="133" x2="220" y2="133" stroke="#1a2744" strokeWidth="2"/>
            <text x="200" y="155" fontSize="11" fill="#1a2744" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">Roller</text>
            <text x="200" y="168" fontSize="10" fill="#c0392b" textAnchor="middle" fontFamily="Source Sans 3">Rᵧ only</text>
            {/* Fixed */}
            <rect x="330" y="70" width="12" height="60" fill="#1a2744"/>
            <line x1="342" y1="100" x2="380" y2="100" stroke="#1a2744" strokeWidth="3"/>
            <text x="365" y="155" fontSize="11" fill="#1a2744" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">Fixed</text>
            <text x="365" y="168" fontSize="10" fill="#c0392b" textAnchor="middle" fontFamily="Source Sans 3">Rₓ, Rᵧ, M</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
      </section>

      {/* SECTION 3.7 — BEAM REACTIONS */}
      <section className="section" id="section7">
        <div className="section-header">
          <div className="sec-num">3.7</div>
          <h2 id="beam-reactions">Beam Reactions — Simply Supported Beam</h2>
        </div>
        <FormulaBox
          title="Reaction Forces for Simply Supported Beam"
          formula="R_A + R_B = \\sum W_i \\quad \\text{and} \\quad \\sum M_A = 0"
          description="Take moments about one support to find the reaction at the other."
          variables={[
            { symbol: 'R_A', name: 'Reaction at support A', unit: 'N' },
            { symbol: 'R_B', name: 'Reaction at support B', unit: 'N' },
            { symbol: 'W_i', name: 'Applied loads', unit: 'N' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 3.4 — Simply supported beam with point loads">
          <svg viewBox="0 0 520 200" style={{ maxWidth: 520 }}>
            <rect x="0" y="0" width="520" height="200" fill="#faf9f6" rx="6"/>
            <line x1="60" y1="100" x2="460" y2="100" stroke="#1a2744" strokeWidth="3"/>
            <polygon points="80,100 65,130 95,130" fill="none" stroke="#1a2744" strokeWidth="2"/>
            <circle cx="440" cy="120" r="8" fill="none" stroke="#1a2744" strokeWidth="2"/>
            <polygon points="440,100 425,112 455,112" fill="none" stroke="#1a2744" strokeWidth="2"/>
            <line x1="200" y1="40" x2="200" y2="100" stroke="#c0392b" strokeWidth="2"/>
            <polygon points="200,100 195,85 205,85" fill="#c0392b"/>
            <text x="200" y="32" fontSize="13" fill="#c0392b" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">W₁ = 20 kN</text>
            <line x1="350" y1="40" x2="350" y2="100" stroke="#c0392b" strokeWidth="2"/>
            <polygon points="350,100 345,85 355,85" fill="#c0392b"/>
            <text x="350" y="32" fontSize="13" fill="#c0392b" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">W₂ = 30 kN</text>
            <line x1="80" y1="150" x2="200" y2="150" stroke="#2d6a4f" strokeWidth="1"/>
            <text x="140" y="165" fontSize="11" fill="#2d6a4f" textAnchor="middle" fontFamily="Source Sans 3">2m</text>
            <line x1="200" y1="150" x2="350" y2="150" stroke="#2d6a4f" strokeWidth="1"/>
            <text x="275" y="165" fontSize="11" fill="#2d6a4f" textAnchor="middle" fontFamily="Source Sans 3">3m</text>
            <line x1="350" y1="150" x2="440" y2="150" stroke="#2d6a4f" strokeWidth="1"/>
            <text x="395" y="165" fontSize="11" fill="#2d6a4f" textAnchor="middle" fontFamily="Source Sans 3">1m</text>
            <text x="80" y="145" fontSize="12" fill="#1a2744" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">A</text>
            <text x="440" y="145" fontSize="12" fill="#1a2744" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">B</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <BeamReactionDiagram />

        <WorkedExample
          title="Beam Reactions — Two Point Loads"
          given={[
            'Simply supported beam AB, span = 6 m',
            'Point load $W_1 = 20$ kN at 2 m from A',
            'Point load $W_2 = 30$ kN at 5 m from A',
          ]}
          find="Reactions $R_A$ and $R_B$"
          steps={[
            'Apply $\\sum M_A = 0$ (taking moments about A): $$R_B \\times 6 = 20 \\times 2 + 30 \\times 5$$',
            '$$R_B \\times 6 = 40 + 150 = 190$$',
            '$$R_B = \\frac{190}{6} = 31.67 \\text{ kN}$$',
            'Apply $\\sum F_y = 0$: $$R_A + R_B = 20 + 30 = 50$$',
            '$$R_A = 50 - 31.67 = 18.33 \\text{ kN}$$',
          ]}
          answer="$R_A = 18.33$ kN, $R_B = 31.67$ kN"
        />

        <WorkedExample
          title="Beam with UDL"
          given={[
            'Simply supported beam of span 8 m',
            'UDL of 5 kN/m over entire span',
          ]}
          find="Reactions at both supports"
          steps={[
            'Total load from UDL = $w \\times L = 5 \\times 8 = 40$ kN acting at midspan (4 m from each end)',
            'By symmetry: $R_A = R_B = \\frac{40}{2} = 20$ kN',
            'Verify: $\\sum M_A = R_B \\times 8 - 40 \\times 4 = 160 - 160 = 0$ ✓',
          ]}
          answer="$R_A = R_B = 20$ kN (by symmetry)"
        />

        <WorkedExample
          title="Beam with Point Load and UDL"
          given={[
            'SS beam AB, span = 10 m',
            'Point load 50 kN at 3 m from A',
            'UDL of 4 kN/m from 5 m to 10 m from A',
          ]}
          find="Reactions $R_A$ and $R_B$"
          steps={[
            'Total UDL load = $4 \\times 5 = 20$ kN, acting at CG of UDL = $5 + 2.5 = 7.5$ m from A',
            '$\\sum M_A = 0$: $$R_B \\times 10 = 50 \\times 3 + 20 \\times 7.5 = 150 + 150 = 300$$',
            '$$R_B = 30 \\text{ kN}$$',
            '$\\sum F_y = 0$: $$R_A = 50 + 20 - 30 = 40 \\text{ kN}$$',
          ]}
          answer="$R_A = 40$ kN, $R_B = 30$ kN"
        />
      </section>

      {/* QUESTION BANK */}
      <section className="section" id="qbank">
        <div className="section-header">
          <div className="sec-num" style={{background:'#7b3f00'}}>Q</div>
          <h2 id="questions">Expected Questions</h2>
        </div>
        <div className="question-box">
          <div className="q-label">Short Answer (2–3 marks)</div>
          <ul>
            <li>Define equilibrium. State the conditions for equilibrium of concurrent coplanar forces.</li>
            <li>State and explain Lami&apos;s theorem.</li>
            <li>What is a free body diagram? List the steps to draw one.</li>
            <li>Differentiate between pin support and roller support.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (5–10 marks)</div>
          <ul>
            <li>State Lami&apos;s theorem and solve: A 100 N lamp is hung by two cables at 30° and 60° to the ceiling. Find cable tensions.</li>
            <li>A simply supported beam of 8 m span carries loads of 10 kN at 2 m and 15 kN at 5 m from left. Find reactions.</li>
            <li>Draw FBD and find reactions for a beam with a UDL of 3 kN/m over 4 m and a point load of 20 kN.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
