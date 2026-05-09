'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import { SvgWatermark } from '@/components/Watermark';

export default function Unit1Page() {
  return (
    <UnitLayout
      unitNum={1} unitTitle="Basics & Force Systems"
      unitDescription="Scalars, Vectors, Laws of forces, Composition and Resolution"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={null}
      nextUnit={{ num: 2, title: "Moments & Couples" }}
      syllabusGroup="A" syllabusMarks="25" examType="End Semester"
    >
      {/* SECTION 1.1 */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">1.1</div>
          <h2 id="introduction">Introduction to Engineering Mechanics</h2>
        </div>
        <DefinitionCard
          term="Engineering Mechanics"
          alternateNames="Applied Mechanics"
          definition="<strong>Engineering Mechanics</strong> is the branch of physical science that deals with the study of forces and their effects on bodies. It forms the foundation for all branches of engineering — from designing bridges to analyzing machine components."
        />
        <div className="two-col">
          <div className="info-card">
            <h4>Statics</h4>
            <p>Study of bodies at rest or in equilibrium under the action of forces. No acceleration involved.</p>
          </div>
          <div className="info-card">
            <h4>Dynamics</h4>
            <p>Study of bodies in motion. Further divided into <strong>Kinematics</strong> (geometry of motion) and <strong>Kinetics</strong> (forces causing motion).</p>
          </div>
        </div>
      </section>

      {/* SECTION 1.2 */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">1.2</div>
          <h2 id="scalars-vectors">Scalars and Vectors</h2>
        </div>
        <div className="two-col">
          <div className="info-card">
            <h4>Scalar Quantities</h4>
            <p>Have <strong>magnitude only</strong>. Examples: mass, temperature, speed, energy, time, distance.</p>
          </div>
          <div className="info-card">
            <h4>Vector Quantities</h4>
            <p>Have both <strong>magnitude and direction</strong>. Examples: force, velocity, acceleration, displacement, momentum.</p>
          </div>
        </div>
        <NoteBox label="Vector Representation">
          <p>A vector is represented by an arrow. The length of the arrow represents magnitude (to scale), and the arrowhead indicates direction. Vectors are denoted by bold letters (F) or with an arrow above (F→).</p>
        </NoteBox>
        <InteractiveDiagram caption="Fig. 1.1 — Scalar vs Vector representation">
          <svg viewBox="0 0 460 160" style={{ maxWidth: 460 }}>
            <rect x="0" y="0" width="460" height="160" fill="#faf9f6" rx="6"/>
            {/* Scalar */}
            <text x="115" y="25" textAnchor="middle" fontSize="13" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">Scalar (Temperature)</text>
            <circle cx="115" cy="80" r="35" fill="none" stroke="#c0392b" strokeWidth="2"/>
            <text x="115" y="86" textAnchor="middle" fontSize="18" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">37°C</text>
            <text x="115" y="135" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Magnitude only</text>
            {/* Vector */}
            <text x="345" y="25" textAnchor="middle" fontSize="13" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">Vector (Force)</text>
            <line x1="280" y1="90" x2="410" y2="55" stroke="#2d6a4f" strokeWidth="3"/>
            <polygon points="410,55 398,50 400,62" fill="#2d6a4f"/>
            <text x="360" y="48" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F = 50 N</text>
            <text x="345" y="135" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Magnitude + Direction</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
      </section>

      {/* SECTION 1.3 */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">1.3</div>
          <h2 id="force-definition">Force — Definition & Characteristics</h2>
        </div>
        <DefinitionCard
          term="Force"
          definition="A <strong>force</strong> is an external agency that changes or tends to change the state of rest or uniform motion of a body. It is a vector quantity with both magnitude and direction."
          example="Pushing a door, gravity pulling an apple, tension in a rope."
        />
        <NoteBox label="Characteristics of a Force">
          <p>A force is completely specified by four characteristics:</p>
        </NoteBox>
        <ol className="step-list">
          <li><div className="step-num">1</div><div className="step-text"><strong>Magnitude</strong> — How strong the force is (in Newtons, N)</div></li>
          <li><div className="step-num">2</div><div className="step-text"><strong>Direction</strong> — The line along which the force acts and its sense (push or pull)</div></li>
          <li><div className="step-num">3</div><div className="step-text"><strong>Point of application</strong> — Where the force is applied on the body</div></li>
          <li><div className="step-num">4</div><div className="step-text"><strong>Line of action</strong> — The straight line along which the force acts (extending infinitely in both directions)</div></li>
        </ol>
        <FormulaBox
          title="SI Unit of Force"
          formula="1 \\text{ N} = 1 \\text{ kg} \\times 1 \\text{ m/s}^2"
          description="One Newton is the force required to give a mass of 1 kg an acceleration of 1 m/s²."
          variables={[
            { symbol: 'N', name: 'Newton (force)', unit: 'kg·m/s²' },
            { symbol: 'kN', name: 'Kilonewton', unit: '1000 N' },
          ]}
        />
      </section>

      {/* SECTION 1.4 */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">1.4</div>
          <h2 id="parallelogram-law">Parallelogram Law of Forces</h2>
        </div>
        <DefinitionCard
          term="Parallelogram Law"
          definition="If two forces acting simultaneously at a point are represented in magnitude and direction by two adjacent sides of a parallelogram, then the <strong>resultant</strong> is represented in magnitude and direction by the diagonal of the parallelogram passing through that point."
        />
        <FormulaBox
          title="Resultant by Parallelogram Law"
          formula="R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}"
          description="Where θ is the angle between forces P and Q."
          variables={[
            { symbol: 'R', name: 'Resultant force', unit: 'N' },
            { symbol: 'P, Q', name: 'Two concurrent forces', unit: 'N' },
            { symbol: 'θ', name: 'Angle between P and Q', unit: 'degrees' },
          ]}
        />
        <FormulaBox
          title="Direction of Resultant"
          formula="\\tan\\alpha = \\frac{Q\\sin\\theta}{P + Q\\cos\\theta}"
          description="α is the angle the resultant makes with force P."
        />
        <ExamTip>
          <p><strong>Special cases to remember:</strong> When θ = 0° (same direction): R = P + Q. When θ = 180° (opposite): R = |P − Q|. When θ = 90°: R = √(P² + Q²).</p>
        </ExamTip>
        <WorkedExample
          title="Parallelogram Law"
          given={['Two forces P = 40 N and Q = 30 N act at a point with angle θ = 60° between them.']}
          find="Magnitude and direction of the resultant"
          steps={[
            'Apply the resultant formula: $$R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}$$',
            'Substituting: $$R = \\sqrt{40^2 + 30^2 + 2(40)(30)\\cos 60°}$$',
            '$$R = \\sqrt{1600 + 900 + 2400 \\times 0.5} = \\sqrt{1600 + 900 + 1200}$$',
            '$$R = \\sqrt{3700} = 60.83 \\text{ N}$$',
            'Direction: $$\\tan\\alpha = \\frac{30 \\sin 60°}{40 + 30 \\cos 60°} = \\frac{30 \\times 0.866}{40 + 15} = \\frac{25.98}{55} = 0.4724$$',
            '$$\\alpha = \\tan^{-1}(0.4724) = 25.28°$$',
          ]}
          answer="$R = 60.83$ N at $25.28°$ from the 40 N force"
        />
      </section>

      {/* SECTION 1.5 */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">1.5</div>
          <h2 id="triangle-law">Triangle Law of Forces</h2>
        </div>
        <DefinitionCard
          term="Triangle Law"
          definition="If two forces acting at a point are represented in magnitude and direction by the two sides of a triangle taken in order, then the <strong>third side</strong> taken in the opposite order represents the resultant in magnitude and direction."
        />
        <NoteBox label="Key Difference">
          <p>In the parallelogram law, both forces start from the same point. In the triangle law, the forces are placed head-to-tail. The resultant closes the triangle from the tail of the first to the head of the second.</p>
        </NoteBox>
      </section>

      {/* SECTION 1.6 */}
      <section className="section" id="section6">
        <div className="section-header">
          <div className="sec-num">1.6</div>
          <h2 id="resolution">Resolution of Forces</h2>
        </div>
        <DefinitionCard
          term="Resolution"
          definition="The process of splitting a single force into two (or more) components along specified directions. This is the <strong>reverse of composition</strong>."
        />
        <FormulaBox
          title="Rectangular Components"
          formula="F_x = F\\cos\\theta \\quad ; \\quad F_y = F\\sin\\theta"
          description="Any force F at angle θ to the x-axis can be resolved into horizontal (Fₓ) and vertical (Fᵧ) components."
          variables={[
            { symbol: 'F_x', name: 'Horizontal component', unit: 'N' },
            { symbol: 'F_y', name: 'Vertical component', unit: 'N' },
            { symbol: 'θ', name: 'Angle with x-axis', unit: 'degrees' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 1.2 — Resolution of a force into rectangular components">
          <svg viewBox="0 0 400 250" style={{ maxWidth: 400 }}>
            <rect x="0" y="0" width="400" height="250" fill="#faf9f6" rx="6"/>
            {/* Axes */}
            <line x1="80" y1="180" x2="350" y2="180" stroke="#1a2744" strokeWidth="1.5"/>
            <line x1="80" y1="180" x2="80" y2="30" stroke="#1a2744" strokeWidth="1.5"/>
            <text x="360" y="184" fontSize="12" fill="#1a2744" fontWeight="600" fontFamily="Source Sans 3">x</text>
            <text x="75" y="22" fontSize="12" fill="#1a2744" fontWeight="600" fontFamily="Source Sans 3">y</text>
            {/* Force F */}
            <line x1="80" y1="180" x2="300" y2="60" stroke="#c0392b" strokeWidth="3"/>
            <polygon points="300,60 290,72 298,76" fill="#c0392b"/>
            <text x="200" y="100" fontSize="15" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">F</text>
            {/* Fx */}
            <line x1="80" y1="180" x2="300" y2="180" stroke="#2d6a4f" strokeWidth="2.5" strokeDasharray="6,4"/>
            <text x="190" y="200" fontSize="13" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">Fₓ = F cos θ</text>
            {/* Fy */}
            <line x1="300" y1="180" x2="300" y2="60" stroke="#1a4d6b" strokeWidth="2.5" strokeDasharray="6,4"/>
            <text x="310" y="125" fontSize="13" fill="#1a4d6b" fontWeight="700" fontFamily="Source Sans 3">Fᵧ = F sin θ</text>
            {/* Angle */}
            <path d="M110,180 A30,30 0 0,0 100,158" fill="none" stroke="#c8951a" strokeWidth="1.5"/>
            <text x="120" y="168" fontSize="12" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">θ</text>
            {/* Origin */}
            <circle cx="80" cy="180" r="4" fill="#c0392b"/>
            <text x="68" y="196" fontSize="11" fill="#1a2744" fontFamily="Source Sans 3">O</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
        <WorkedExample
          title="Resolution of Forces"
          given={['A force of 100 N acts at 30° to the horizontal.']}
          find="Horizontal and vertical components"
          steps={[
            '$F_x = F\\cos\\theta = 100 \\cos 30° = 100 \\times 0.866 = 86.6$ N',
            '$F_y = F\\sin\\theta = 100 \\sin 30° = 100 \\times 0.5 = 50$ N',
            'Verify: $\\sqrt{F_x^2 + F_y^2} = \\sqrt{86.6^2 + 50^2} = \\sqrt{7500 + 2500} = 100$ N ✓',
          ]}
          answer="$F_x = 86.6$ N (horizontal), $F_y = 50$ N (vertical)"
        />
      </section>

      {/* SECTION 1.7 */}
      <section className="section" id="section7">
        <div className="section-header">
          <div className="sec-num">1.7</div>
          <h2 id="resultant-coplanar">Resultant of Coplanar Forces</h2>
        </div>
        <FormulaBox
          title="Resultant of Multiple Coplanar Forces"
          formula="R = \\sqrt{(\\sum F_x)^2 + (\\sum F_y)^2}"
          description="Resolve all forces into x and y components, sum each, then combine."
          variables={[
            { symbol: '\\sum F_x', name: 'Sum of all x-components', unit: 'N' },
            { symbol: '\\sum F_y', name: 'Sum of all y-components', unit: 'N' },
          ]}
        />
        <FormulaBox
          title="Direction of Resultant"
          formula="\\theta_R = \\tan^{-1}\\left(\\frac{\\sum F_y}{\\sum F_x}\\right)"
          description="Angle of the resultant with the x-axis."
        />
        <WorkedExample
          title="Resultant of Three Forces"
          given={[
            'Three concurrent forces at a point:',
            '$F_1 = 50$ N at 0° (along x-axis)',
            '$F_2 = 80$ N at 45°',
            '$F_3 = 60$ N at 120°',
          ]}
          find="Resultant force (magnitude and direction)"
          steps={[
            '$\\sum F_x = 50\\cos 0° + 80\\cos 45° + 60\\cos 120°$',
            '$= 50 + 56.57 + (-30) = 76.57$ N',
            '$\\sum F_y = 50\\sin 0° + 80\\sin 45° + 60\\sin 120°$',
            '$= 0 + 56.57 + 51.96 = 108.53$ N',
            '$R = \\sqrt{76.57^2 + 108.53^2} = \\sqrt{5862.9 + 11778.8} = \\sqrt{17641.7} = 132.82$ N',
            '$\\theta_R = \\tan^{-1}\\left(\\frac{108.53}{76.57}\\right) = \\tan^{-1}(1.417) = 54.8°$',
          ]}
          answer="$R = 132.82$ N at $54.8°$ from x-axis"
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
            <li>Define force. State its SI unit and characteristics.</li>
            <li>Differentiate between scalar and vector quantities with examples.</li>
            <li>State the parallelogram law of forces.</li>
            <li>What is resolution of a force? Write the formulas for rectangular components.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (5–10 marks)</div>
          <ul>
            <li>State and prove the parallelogram law. Two forces 60 N and 40 N act at 45°. Find the resultant.</li>
            <li>Three forces 20 N, 30 N, and 40 N act at 0°, 60°, and 135° respectively. Find the resultant.</li>
            <li>Explain the triangle law and polygon law of forces with diagrams.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
