'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import { SvgWatermark } from '@/components/Watermark';

export default function Unit4Page() {
  return (
    <UnitLayout
      unitNum={4} unitTitle="Friction"
      unitDescription="Laws of friction, Limiting friction, Coefficient, Angle of repose, Inclined planes"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 3, title: "Equilibrium of Forces" }}
      nextUnit={{ num: 5, title: "Centroid & Centre of Gravity" }}
    >
      {/* 4.1 — INTRODUCTION */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">4.1</div>
          <h2 id="introduction">Introduction to Friction</h2>
        </div>
        <DefinitionCard
          term="Friction"
          definition="<strong>Friction</strong> is the resisting force that acts tangentially at the surface of contact between two bodies when one body slides or tends to slide over the other. It always acts opposite to the direction of motion (or tendency of motion)."
        />
        <div className="two-col">
          <div className="info-card">
            <h4>Advantages of Friction</h4>
            <p>Walking, braking, holding objects, belt drives, writing, nuts & bolts staying tight.</p>
          </div>
          <div className="info-card">
            <h4>Disadvantages of Friction</h4>
            <p>Wear & tear, heat generation, energy loss, reduced machine efficiency.</p>
          </div>
        </div>
      </section>

      {/* 4.2 — TYPES OF FRICTION */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">4.2</div>
          <h2 id="types">Types of Friction</h2>
        </div>
        <ul className="bullet-list">
          <li><strong>Static Friction</strong> — Friction when the body is at rest. It adjusts itself up to a maximum value called limiting friction.</li>
          <li><strong>Dynamic (Kinetic) Friction</strong> — Friction when the body is in motion. It is always less than limiting static friction.</li>
          <li><strong>Sliding Friction</strong> — When one body slides over another (e.g., block on a surface).</li>
          <li><strong>Rolling Friction</strong> — When one body rolls over another (e.g., wheel on road). Much smaller than sliding friction.</li>
        </ul>
        <NoteBox label="Important">
          <p>Static friction ≥ Dynamic friction. The force needed to start motion is always greater than the force needed to maintain motion.</p>
        </NoteBox>
      </section>

      {/* 4.3 — LAWS OF FRICTION */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">4.3</div>
          <h2 id="laws">Laws of Dry Friction (Coulomb's Laws)</h2>
        </div>
        <ol className="step-list">
          <li><div className="step-num">1</div><div className="step-text">The force of friction always acts in a direction opposite to the motion (or tendency of motion) of the body.</div></li>
          <li><div className="step-num">2</div><div className="step-text">The magnitude of friction is exactly equal to the applied force (up to the limiting value).</div></li>
          <li><div className="step-num">3</div><div className="step-text"><strong>Limiting friction is directly proportional to the normal reaction</strong> (F ∝ N).</div></li>
          <li><div className="step-num">4</div><div className="step-text">Friction is <strong>independent of the area of contact</strong> between the surfaces.</div></li>
          <li><div className="step-num">5</div><div className="step-text">Friction depends on the <strong>nature and roughness</strong> of the surfaces in contact.</div></li>
        </ol>
        <ExamTip>
          <p>Law 3 is the most important — it gives us the friction formula F = μN. Law 4 is counter-intuitive but exam-important: doubling the contact area does NOT change friction!</p>
        </ExamTip>
      </section>

      {/* 4.4 — COEFFICIENT OF FRICTION */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">4.4</div>
          <h2 id="coefficient">Coefficient of Friction</h2>
        </div>
        <DefinitionCard
          term="Coefficient of Friction (μ)"
          definition="The <strong>coefficient of friction</strong> is the ratio of the limiting frictional force to the normal reaction between two surfaces. It is a dimensionless quantity that depends on the nature of surfaces."
        />
        <FormulaBox
          title="Coefficient of Friction"
          formula="\\mu = \\frac{F}{N} \\quad \\Rightarrow \\quad F = \\mu N"
          description="Where F = limiting frictional force, N = normal reaction."
          variables={[
            { symbol: 'μ', name: 'Coefficient of friction', unit: '—' },
            { symbol: 'F', name: 'Friction force (limiting)', unit: 'N' },
            { symbol: 'N', name: 'Normal reaction', unit: 'N' },
            { symbol: 'μₛ', name: 'Static coefficient (≈ 0.2–0.6)', unit: '—' },
            { symbol: 'μₖ', name: 'Kinetic coefficient (< μₛ)', unit: '—' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 4.1 — Forces on a body resting on a rough surface">
          <svg viewBox="0 0 420 250" style={{ maxWidth: 420 }}>
            <rect x="0" y="0" width="420" height="250" fill="#faf9f6" rx="6"/>
            {/* Surface */}
            <line x1="40" y1="180" x2="380" y2="180" stroke="#1a2744" strokeWidth="2"/>
            {/* Hatching */}
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(i => (
              <line key={i} x1={50+i*24} y1="180" x2={40+i*24} y2="195" stroke="#1a2744" strokeWidth="1" opacity="0.4"/>
            ))}
            {/* Block */}
            <rect x="150" y="110" width="120" height="70" fill="rgba(26,39,68,0.1)" stroke="#1a2744" strokeWidth="2" rx="3"/>
            <text x="210" y="150" textAnchor="middle" fontSize="14" fill="#1a2744" fontWeight="700" fontFamily="Source Sans 3">W</text>
            {/* Weight W */}
            <line x1="210" y1="180" x2="210" y2="230" stroke="#c0392b" strokeWidth="2.5"/>
            <polygon points="210,230 204,218 216,218" fill="#c0392b"/>
            <text x="222" y="228" fontSize="12" fill="#c0392b" fontWeight="600" fontFamily="Source Sans 3">W</text>
            {/* Normal N */}
            <line x1="210" y1="110" x2="210" y2="50" stroke="#2d6a4f" strokeWidth="2.5"/>
            <polygon points="210,50 204,62 216,62" fill="#2d6a4f"/>
            <text x="222" y="58" fontSize="12" fill="#2d6a4f" fontWeight="600" fontFamily="Source Sans 3">N</text>
            {/* Applied force P */}
            <line x1="270" y1="145" x2="360" y2="145" stroke="#1a4d6b" strokeWidth="2.5"/>
            <polygon points="360,145 348,139 348,151" fill="#1a4d6b"/>
            <text x="320" y="138" fontSize="12" fill="#1a4d6b" fontWeight="600" fontFamily="Source Sans 3">P</text>
            {/* Friction F */}
            <line x1="150" y1="170" x2="80" y2="170" stroke="#c8951a" strokeWidth="2.5"/>
            <polygon points="80,170 92,164 92,176" fill="#c8951a"/>
            <text x="100" y="164" fontSize="12" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">F = μN</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
      </section>

      {/* 4.5 — ANGLE OF FRICTION & ANGLE OF REPOSE */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">4.5</div>
          <h2 id="angle-friction">Angle of Friction & Angle of Repose</h2>
        </div>
        <DefinitionCard
          term="Angle of Friction (φ)"
          definition="The angle which the <strong>resultant reaction</strong> (R) of the normal reaction (N) and the frictional force (F) makes with the normal reaction. tan φ = μ."
        />
        <DefinitionCard
          term="Angle of Repose (α)"
          definition="The maximum angle of an inclined plane with the horizontal at which a body placed on it just begins to slide down. <strong>Angle of repose = Angle of friction</strong> (α = φ)."
        />
        <FormulaBox
          title="Angle of Friction"
          formula="\\tan\\phi = \\mu = \\frac{F}{N}"
          description="The angle of friction equals the angle of repose for the same surfaces."
          variables={[
            { symbol: 'φ', name: 'Angle of friction', unit: 'degrees' },
            { symbol: 'μ', name: 'Coefficient of friction', unit: '—' },
          ]}
        />
        <ExamTip>
          <p><strong>Key identity:</strong> α (angle of repose) = φ (angle of friction). This is a very frequently asked proof in exams. The proof involves equating the weight component along the incline with the friction force.</p>
        </ExamTip>
      </section>

      {/* 4.6 — MOTION ON INCLINED PLANES */}
      <section className="section" id="section6">
        <div className="section-header">
          <div className="sec-num">4.6</div>
          <h2 id="inclined-plane">Bodies on Inclined Planes</h2>
        </div>

        <div className="subsection">
          <h3 id="case-upward">Case 1: Force P parallel to the incline (pushing up)</h3>
          <FormulaBox
            title="Force to push body UP the incline"
            formula="P = W\\sin\\theta + \\mu W\\cos\\theta = W(\\sin\\theta + \\mu\\cos\\theta)"
            description="Where θ = angle of incline, W = weight of body."
          />
        </div>

        <div className="subsection">
          <h3 id="case-downward">Case 2: Force P parallel to the incline (preventing sliding)</h3>
          <FormulaBox
            title="Force to prevent body sliding DOWN"
            formula="P = W\\sin\\theta - \\mu W\\cos\\theta = W(\\sin\\theta - \\mu\\cos\\theta)"
            description="Applied when the body tends to slide down under gravity (θ > α)."
          />
        </div>

        <InteractiveDiagram caption="Fig. 4.2 — Forces on a body on an inclined plane">
          <svg viewBox="0 0 440 280" style={{ maxWidth: 440 }}>
            <rect x="0" y="0" width="440" height="280" fill="#faf9f6" rx="6"/>
            {/* Incline */}
            <line x1="60" y1="230" x2="380" y2="100" stroke="#1a2744" strokeWidth="2.5"/>
            {/* Ground */}
            <line x1="40" y1="230" x2="400" y2="230" stroke="#1a2744" strokeWidth="1.5"/>
            {/* Block */}
            <rect x="175" y="130" width="70" height="50" fill="rgba(26,39,68,0.1)" stroke="#1a2744" strokeWidth="2" rx="3"
              transform="rotate(-22, 210, 155)"/>
            {/* Weight W */}
            <line x1="210" y1="165" x2="210" y2="240" stroke="#c0392b" strokeWidth="2"/>
            <polygon points="210,240 205,230 215,230" fill="#c0392b"/>
            <text x="220" y="242" fontSize="12" fill="#c0392b" fontWeight="600" fontFamily="Source Sans 3">W</text>
            {/* Normal N */}
            <line x1="210" y1="145" x2="180" y2="70" stroke="#2d6a4f" strokeWidth="2"/>
            <polygon points="180,70 175,82 187,80" fill="#2d6a4f"/>
            <text x="168" y="68" fontSize="12" fill="#2d6a4f" fontWeight="600" fontFamily="Source Sans 3">N</text>
            {/* Force P (up incline) */}
            <line x1="245" y1="145" x2="330" y2="110" stroke="#1a4d6b" strokeWidth="2.5"/>
            <polygon points="330,110 318,108 320,118" fill="#1a4d6b"/>
            <text x="300" y="102" fontSize="12" fill="#1a4d6b" fontWeight="600" fontFamily="Source Sans 3">P</text>
            {/* Friction F */}
            <line x1="175" y1="165" x2="105" y2="192" stroke="#c8951a" strokeWidth="2"/>
            <polygon points="105,192 118,188 116,198" fill="#c8951a"/>
            <text x="118" y="210" fontSize="12" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">F = μN</text>
            {/* Angle θ */}
            <path d="M100,230 A50,50 0 0,0 110,210" fill="none" stroke="#7b3f00" strokeWidth="1.5"/>
            <text x="115" y="225" fontSize="13" fill="#7b3f00" fontWeight="600" fontFamily="Source Sans 3">θ</text>
            {/* Component labels */}
            <text x="235" y="205" fontSize="10" fill="var(--ink-muted)" fontFamily="Source Sans 3">W sin θ</text>
            <text x="175" y="108" fontSize="10" fill="var(--ink-muted)" fontFamily="Source Sans 3">W cos θ</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <WorkedExample
          title="Body on Inclined Plane"
          given={[
            'A block of weight 500 N rests on an inclined plane at 30°.',
            'Coefficient of friction μ = 0.3',
          ]}
          find="Force P parallel to the incline to (a) push it up, (b) prevent it from sliding down"
          steps={[
            '(a) Pushing UP: $$P = W(\\sin\\theta + \\mu\\cos\\theta)$$',
            '$$P = 500(\\sin 30° + 0.3\\cos 30°) = 500(0.5 + 0.3 \\times 0.866)$$',
            '$$P = 500(0.5 + 0.2598) = 500 \\times 0.7598 = 379.9 \\text{ N}$$',
            '(b) Preventing sliding DOWN: $$P = W(\\sin\\theta - \\mu\\cos\\theta)$$',
            '$$P = 500(0.5 - 0.2598) = 500 \\times 0.2402 = 120.1 \\text{ N}$$',
          ]}
          answer="(a) P = 379.9 N (up), (b) P = 120.1 N (prevent sliding)"
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
            <li>Define friction. State its advantages and disadvantages.</li>
            <li>State the laws of dry friction (Coulomb&apos;s laws).</li>
            <li>Define: coefficient of friction, angle of friction, angle of repose.</li>
            <li>Prove that angle of repose equals angle of friction.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (10–15 marks)</div>
          <ul>
            <li>Derive the expression for force required to push a body up a rough inclined plane when force is applied (a) parallel to plane, (b) horizontally.</li>
            <li>A body of weight 800 N is placed on a plane inclined at 25° to the horizontal. μ = 0.25. Find the force parallel to the plane to (i) pull it up, (ii) prevent sliding.</li>
            <li>Two blocks A (200 N) and B (100 N) are connected by a string over a pulley. Block A rests on a rough surface (μ = 0.3). Find if the system moves and the acceleration.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
