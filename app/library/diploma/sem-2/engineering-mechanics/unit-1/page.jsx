'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import ForceParallelogramDiagram from '@/components/ForceParallelogramDiagram';
import { SvgWatermark } from '@/components/Watermark';

export default function Unit1Page() {
  return (
    <UnitLayout
      unitNum={1} unitTitle="Basics of Mechanics & Force System"
      unitDescription="Statics & Dynamics, Scalars & Vectors, SI Units, Force definition, Bow's notation, Transmissibility, Parallelogram/Triangle/Polygon law, Resolution of forces"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={null}
      nextUnit={{ num: 2, title: "Moments & Couples" }}
    >
      {/* ═══ 1.1 CONCEPT OF ENGINEERING MECHANICS ═══ */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">1.1</div>
          <h2 id="concept">Concept of Engineering Mechanics</h2>
        </div>
        <DefinitionCard
          term="Engineering Mechanics"
          alternateNames="Applied Mechanics"
          definition="<strong>Engineering Mechanics</strong> is the branch of physical science that studies the effect of forces on bodies at rest or in motion. It provides the foundation for all branches of engineering — from designing bridges and machines to analyzing structures."
        />
        <div className="two-col">
          <div className="info-card">
            <h4>Statics</h4>
            <p>Study of bodies <strong>at rest</strong> or in equilibrium under the action of forces. No acceleration is involved. Example: a bridge under load, a book on a table.</p>
          </div>
          <div className="info-card">
            <h4>Dynamics</h4>
            <p>Study of bodies <strong>in motion</strong>. Divided into: <strong>Kinematics</strong> (geometry of motion without forces) and <strong>Kinetics</strong> (forces causing motion). Example: a moving car, a falling ball.</p>
          </div>
        </div>

        <div className="subsection">
          <h3 id="fundamental-concepts">Fundamental Concepts</h3>
          <ul className="bullet-list">
            <li><strong>Space</strong> — The geometric region occupied by bodies. Position is described using coordinates (x, y, z).</li>
            <li><strong>Time</strong> — The measure of succession of events. SI unit: second (s).</li>
            <li><strong>Mass</strong> — The quantity of matter in a body. It is a scalar and remains constant. SI unit: kilogram (kg).</li>
            <li><strong>Particle</strong> — A body whose dimensions are so small compared to its range of motion that it can be treated as a <strong>point</strong>. Example: an aircraft viewed from a satellite.</li>
            <li><strong>Flexible Body</strong> — A body that deforms under applied forces. Example: ropes, belts, chains.</li>
            <li><strong>Rigid Body</strong> — An idealized body where the distance between any two points <strong>remains constant</strong> under all loading conditions. In engineering mechanics, we treat most bodies as rigid.</li>
          </ul>
        </div>
      </section>

      {/* ═══ 1.2 SCALAR & VECTOR ═══ */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">1.2</div>
          <h2 id="scalar-vector">Scalar and Vector Quantities</h2>
        </div>
        <div className="two-col">
          <div className="info-card">
            <h4>Scalar Quantities</h4>
            <p>Have <strong>magnitude only</strong>. Obey ordinary algebra. Examples: mass, temperature, speed, energy, time, distance, volume, work, power.</p>
          </div>
          <div className="info-card">
            <h4>Vector Quantities</h4>
            <p>Have both <strong>magnitude and direction</strong>. Obey vector algebra (parallelogram law). Examples: force, velocity, acceleration, displacement, momentum, torque.</p>
          </div>
        </div>

        <div className="subsection">
          <h3 id="vector-operations">Addition & Subtraction of Vectors</h3>
          <p><strong>Vector Addition:</strong> Two vectors are added using the parallelogram law or triangle law (head-to-tail method). The order does not matter (commutative): A + B = B + A.</p>
          <p><strong>Vector Subtraction:</strong> To subtract vector B from A, reverse the direction of B and add: A − B = A + (−B).</p>
        </div>

        <InteractiveDiagram caption="Fig. 1.1 — Scalar vs Vector representation">
          <svg viewBox="0 0 460 160" style={{ maxWidth: 460 }}>
            <rect x="0" y="0" width="460" height="160" fill="#faf9f6" rx="6"/>
            <text x="115" y="25" textAnchor="middle" fontSize="13" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">Scalar (Temperature)</text>
            <circle cx="115" cy="80" r="35" fill="none" stroke="#c0392b" strokeWidth="2"/>
            <text x="115" y="86" textAnchor="middle" fontSize="18" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">37°C</text>
            <text x="115" y="135" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Magnitude only</text>
            <text x="345" y="25" textAnchor="middle" fontSize="13" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">Vector (Force)</text>
            <line x1="280" y1="90" x2="410" y2="55" stroke="#2d6a4f" strokeWidth="3"/>
            <polygon points="410,55 398,50 400,62" fill="#2d6a4f"/>
            <text x="360" y="48" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F = 50 N</text>
            <text x="345" y="135" textAnchor="middle" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">Magnitude + Direction</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
      </section>

      {/* ═══ 1.3 UNITS ═══ */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">1.3</div>
          <h2 id="units">Units — Basic, Derived & SI System</h2>
        </div>
        <table className="data-table">
          <thead><tr><th>Quantity</th><th>Type</th><th>SI Unit</th><th>Symbol</th></tr></thead>
          <tbody>
            <tr><td>Length</td><td>Basic</td><td>Metre</td><td>m</td></tr>
            <tr><td>Mass</td><td>Basic</td><td>Kilogram</td><td>kg</td></tr>
            <tr><td>Time</td><td>Basic</td><td>Second</td><td>s</td></tr>
            <tr><td>Force</td><td>Derived</td><td>Newton</td><td>N = kg·m/s²</td></tr>
            <tr><td>Work / Energy</td><td>Derived</td><td>Joule</td><td>J = N·m</td></tr>
            <tr><td>Power</td><td>Derived</td><td>Watt</td><td>W = J/s</td></tr>
            <tr><td>Pressure</td><td>Derived</td><td>Pascal</td><td>Pa = N/m²</td></tr>
          </tbody>
        </table>
        <NoteBox label="SI Prefixes (frequently used)">
          <p>kilo (k) = 10³, mega (M) = 10⁶, giga (G) = 10⁹, milli (m) = 10⁻³, micro (μ) = 10⁻⁶. Example: 1 kN = 1000 N, 1 mm = 0.001 m.</p>
        </NoteBox>
      </section>

      {/* ═══ 1.4 FORCE ═══ */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">1.4</div>
          <h2 id="force">Force — Definition, Characteristics & Effects</h2>
        </div>
        <DefinitionCard
          term="Force"
          definition="A <strong>force</strong> is an external agency that changes or tends to change the state of rest or uniform motion of a body. It is a vector quantity — specified by magnitude, direction, point of application, and line of action."
        />

        <div className="subsection">
          <h3 id="characteristics">Characteristics of a Force</h3>
          <ol className="step-list">
            <li><div className="step-num">1</div><div className="step-text"><strong>Magnitude</strong> — How strong the force is (in Newtons)</div></li>
            <li><div className="step-num">2</div><div className="step-text"><strong>Direction</strong> — The line along which the force acts and its sense (push or pull)</div></li>
            <li><div className="step-num">3</div><div className="step-text"><strong>Point of application</strong> — The specific point where the force is applied</div></li>
            <li><div className="step-num">4</div><div className="step-text"><strong>Line of action</strong> — The infinite straight line along which the force acts</div></li>
          </ol>
        </div>

        <div className="subsection">
          <h3 id="effects">Effects of a Force</h3>
          <ul className="bullet-list">
            <li>It can change the <strong>state of rest</strong> of a body (start motion).</li>
            <li>It can change the <strong>state of motion</strong> (speed up, slow down, or change direction).</li>
            <li>It can change the <strong>shape</strong> of a body (deformation).</li>
          </ul>
        </div>

        <div className="subsection">
          <h3 id="bows-notation">Bow&apos;s Notation</h3>
          <p><strong>Bow&apos;s notation</strong> is a method of labelling forces in a force system. Each <strong>space between forces</strong> is given a letter (A, B, C, ...). A force is then identified by the two letters on either side of it. For example, the force between spaces A and B is called force <strong>AB</strong>. This notation is particularly useful in graphical methods (funicular polygon).</p>
        </div>

        <div className="subsection">
          <h3 id="transmissibility">Principle of Transmissibility</h3>
          <DefinitionCard
            term="Principle of Transmissibility"
            definition="The external effect of a force on a <strong>rigid body</strong> remains unchanged if the force is moved along its <strong>line of action</strong>. That is, a force may be applied at any point along its line of action without altering the equilibrium or motion of the rigid body."
          />
          <ExamTip>
            <p>This principle applies ONLY to rigid bodies. For deformable bodies, the point of application matters (internal stresses change). This is a very common 2-mark question.</p>
          </ExamTip>
        </div>
      </section>

      {/* ═══ 1.5 FORCE SYSTEMS ═══ */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">1.5</div>
          <h2 id="force-systems">Force Systems & Classification</h2>
        </div>
        <table className="data-table">
          <thead><tr><th>Force System</th><th>Description</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Coplanar Concurrent</td><td>Forces in same plane, meeting at one point</td><td>Forces on a pin joint</td></tr>
            <tr><td>Coplanar Non-concurrent</td><td>Forces in same plane, NOT meeting at one point</td><td>Forces on a beam</td></tr>
            <tr><td>Coplanar Parallel</td><td>Forces in same plane, parallel to each other</td><td>Loads on a simply supported beam</td></tr>
            <tr><td>Non-coplanar Concurrent</td><td>Forces in 3D, meeting at one point</td><td>Forces on a tripod</td></tr>
            <tr><td>Non-coplanar Non-concurrent</td><td>General 3D force system</td><td>Forces on a building frame</td></tr>
          </tbody>
        </table>
        <NoteBox label="WBSCTE Focus">
          <p>The syllabus emphasizes <strong>Coplanar Force Systems</strong>, especially coplanar concurrent and coplanar non-concurrent (parallel). These are the systems you will solve in this course.</p>
        </NoteBox>
      </section>

      {/* ═══ 1.6 COMPOSITION — PARALLELOGRAM LAW ═══ */}
      <section className="section" id="section6">
        <div className="section-header">
          <div className="sec-num">1.6</div>
          <h2 id="parallelogram">Parallelogram Law of Forces</h2>
        </div>
        <DefinitionCard
          term="Parallelogram Law"
          definition="If two forces acting simultaneously at a point are represented in magnitude and direction by two adjacent sides of a parallelogram, then the <strong>resultant</strong> is represented in magnitude and direction by the diagonal of the parallelogram passing through that point."
        />
        <FormulaBox
          title="Resultant — Analytical Method"
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

        <div className="highlight-band">
          <h4>Special Cases (Must Remember)</h4>
          <p>θ = 0° (same direction): R = P + Q | θ = 90°: R = √(P²+Q²) | θ = 180° (opposite): R = |P−Q| | P = Q, θ = 60°: R = P√3 | P = Q, θ = 120°: R = P</p>
        </div>

        <ForceParallelogramDiagram />

        <WorkedExample
          title="Parallelogram Law — Analytical Method"
          given={['Two forces P = 40 N and Q = 30 N act at a point with angle θ = 60° between them.']}
          find="Magnitude and direction of the resultant"
          steps={[
            'Apply: $R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}$',
            '$R = \\sqrt{40^2 + 30^2 + 2(40)(30)\\cos 60°}$',
            '$= \\sqrt{1600 + 900 + 2400(0.5)} = \\sqrt{3700} = 60.83$ N',
            'Direction: $\\tan\\alpha = \\frac{30 \\sin 60°}{40 + 30 \\cos 60°} = \\frac{25.98}{55} = 0.4724$',
            '$\\alpha = \\tan^{-1}(0.4724) = 25.28°$ from the 40 N force',
          ]}
          answer="$R = 60.83$ N at $\\alpha = 25.28°$ from the 40 N force"
        />
      </section>

      {/* ═══ 1.7 TRIANGLE & POLYGON LAW ═══ */}
      <section className="section" id="section7">
        <div className="section-header">
          <div className="sec-num">1.7</div>
          <h2 id="triangle-polygon">Triangle Law & Polygon Law of Forces</h2>
        </div>
        <DefinitionCard
          term="Triangle Law of Forces"
          definition="If two forces acting at a point are represented in magnitude and direction by the two sides of a triangle taken <strong>in order</strong> (head-to-tail), then the third side taken in the <strong>reverse order</strong> represents the resultant."
        />
        <DefinitionCard
          term="Polygon Law of Forces"
          definition="If a number of concurrent forces acting at a point are represented in magnitude and direction by the sides of a polygon taken in order, then the <strong>closing side</strong> taken in the opposite order represents the resultant. This is an extension of the triangle law."
        />
        <NoteBox label="Graphical Method (Vector Diagram)">
          <p>To find the resultant graphically: (1) Choose a suitable scale (e.g., 1 cm = 10 N). (2) Draw force vectors head-to-tail in order. (3) The closing line from the tail of the first vector to the head of the last gives the resultant. (4) Measure its length and direction using the scale and protractor.</p>
        </NoteBox>
      </section>

      {/* ═══ 1.8 RESOLUTION ═══ */}
      <section className="section" id="section8">
        <div className="section-header">
          <div className="sec-num">1.8</div>
          <h2 id="resolution">Resolution of Forces — Orthogonal Components</h2>
        </div>
        <DefinitionCard
          term="Resolution of a Force"
          definition="The process of splitting a single force into two (or more) components along specified directions. The <strong>reverse of composition</strong>. Most useful when resolved along two mutually perpendicular directions (orthogonal components)."
        />
        <FormulaBox
          title="Rectangular (Orthogonal) Components"
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
            <line x1="80" y1="180" x2="350" y2="180" stroke="#1a2744" strokeWidth="1.5"/>
            <line x1="80" y1="180" x2="80" y2="30" stroke="#1a2744" strokeWidth="1.5"/>
            <text x="360" y="184" fontSize="12" fill="#1a2744" fontWeight="600" fontFamily="Source Sans 3">x</text>
            <text x="75" y="22" fontSize="12" fill="#1a2744" fontWeight="600" fontFamily="Source Sans 3">y</text>
            <line x1="80" y1="180" x2="300" y2="60" stroke="#c0392b" strokeWidth="3"/>
            <polygon points="300,60 290,72 298,76" fill="#c0392b"/>
            <text x="200" y="100" fontSize="15" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">F</text>
            <line x1="80" y1="180" x2="300" y2="180" stroke="#2d6a4f" strokeWidth="2.5" strokeDasharray="6,4"/>
            <text x="190" y="200" fontSize="13" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">Fₓ = F cos θ</text>
            <line x1="300" y1="180" x2="300" y2="60" stroke="#1a4d6b" strokeWidth="2.5" strokeDasharray="6,4"/>
            <text x="310" y="125" fontSize="13" fill="#1a4d6b" fontWeight="700" fontFamily="Source Sans 3">Fᵧ = F sin θ</text>
            <path d="M110,180 A30,30 0 0,0 100,158" fill="none" stroke="#c8951a" strokeWidth="1.5"/>
            <text x="120" y="168" fontSize="12" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">θ</text>
            <circle cx="80" cy="180" r="4" fill="#c0392b"/>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <FormulaBox
          title="Resultant of Multiple Coplanar Concurrent Forces"
          formula="R = \\sqrt{(\\Sigma F_x)^2 + (\\Sigma F_y)^2} \\quad ; \\quad \\theta_R = \\tan^{-1}\\left(\\frac{\\Sigma F_y}{\\Sigma F_x}\\right)"
          description="Resolve all forces into x and y components, sum each, then combine."
        />

        <WorkedExample
          title="Resolution & Composition"
          given={[
            'Three concurrent forces at a point O:',
            '$F_1 = 50$ N at 0°, $F_2 = 80$ N at 45°, $F_3 = 60$ N at 120°',
          ]}
          find="Resultant (magnitude and direction)"
          steps={[
            '$\\Sigma F_x = 50\\cos 0° + 80\\cos 45° + 60\\cos 120° = 50 + 56.57 - 30 = 76.57$ N',
            '$\\Sigma F_y = 50\\sin 0° + 80\\sin 45° + 60\\sin 120° = 0 + 56.57 + 51.96 = 108.53$ N',
            '$R = \\sqrt{76.57^2 + 108.53^2} = \\sqrt{5863 + 11779} = 132.82$ N',
            '$\\theta_R = \\tan^{-1}(108.53 / 76.57) = 54.8°$ from x-axis',
          ]}
          answer="$R = 132.82$ N at $54.8°$ from x-axis"
        />

        <WorkedExample
          title="Resolution of a Force"
          given={['A force of 200 N acts at 35° to the horizontal.']}
          find="Horizontal and vertical components"
          steps={[
            '$F_x = 200 \\cos 35° = 200 \\times 0.8192 = 163.83$ N',
            '$F_y = 200 \\sin 35° = 200 \\times 0.5736 = 114.72$ N',
          ]}
          answer="$F_x = 163.83$ N, $F_y = 114.72$ N"
        />
      </section>

      {/* QUESTION BANK */}
      <section className="section" id="qbank">
        <div className="section-header">
          <div className="sec-num" style={{background:'#7b3f00'}}>Q</div>
          <h2 id="questions">Expected Questions (WBSCTE Pattern)</h2>
        </div>
        <div className="question-box">
          <div className="q-label">Short Answer (2–3 marks)</div>
          <ul>
            <li>Define Engineering Mechanics. Name its branches.</li>
            <li>Differentiate between scalar and vector quantities with examples.</li>
            <li>Define a rigid body. How does it differ from a flexible body?</li>
            <li>State the principle of transmissibility of force.</li>
            <li>What is Bow&apos;s notation? Explain with a diagram.</li>
            <li>Classify force systems with examples.</li>
            <li>State the parallelogram, triangle, and polygon laws of forces.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer / Numerical (5–10 marks)</div>
          <ul>
            <li>State and prove the parallelogram law of forces. Two forces 60 N and 40 N act at 45°. Find the resultant analytically.</li>
            <li>Four concurrent forces 10, 20, 30, 40 N act at 0°, 60°, 120°, 210°. Find the resultant by resolution method.</li>
            <li>A force of 500 N acts at 40° to the horizontal. Resolve it into horizontal and vertical components.</li>
            <li>Explain the graphical method (vector diagram) for finding the resultant of three concurrent forces.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
