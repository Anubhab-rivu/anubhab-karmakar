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
      unitDescription="Types & Laws of friction, Limiting friction, Coefficient, Angle of friction, Cone of friction, Angle of repose, Bodies on horizontal & inclined planes"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 3, title: "Equilibrium of Forces" }}
      nextUnit={{ num: 5, title: "Centroid & Centre of Gravity" }}
    >
      {/* 4.1 */}
      <section className="section" id="section1">
        <div className="section-header"><div className="sec-num">4.1</div><h2 id="intro">Friction & Its Relevance in Engineering</h2></div>
        <DefinitionCard term="Friction" definition="<strong>Friction</strong> is the resisting force that acts tangentially at the surface of contact between two bodies when one body slides or tends to slide over the other. It always opposes the direction of motion or tendency of motion." />
        <div className="two-col">
          <div className="info-card"><h4>Advantages</h4><p>Walking, braking, gripping, belt drives, writing, nuts/bolts, clutch operation, holding nails in wood.</p></div>
          <div className="info-card"><h4>Disadvantages</h4><p>Wear & tear, heat generation, energy loss, reduced machine efficiency, noise.</p></div>
        </div>
      </section>

      {/* 4.2 TYPES */}
      <section className="section" id="section2">
        <div className="section-header"><div className="sec-num">4.2</div><h2 id="types">Types of Friction</h2></div>
        <ul className="bullet-list">
          <li><strong>Static Friction</strong> — Acts when the body is at rest but has a tendency to move. Adjusts from 0 up to the limiting value.</li>
          <li><strong>Limiting Friction</strong> — The maximum static friction just before motion begins. Beyond this, the body starts sliding.</li>
          <li><strong>Dynamic (Kinetic) Friction</strong> — Acts when the body is in motion. Always less than limiting friction.</li>
          <li><strong>Sliding Friction</strong> — When surfaces slide against each other.</li>
          <li><strong>Rolling Friction</strong> — When a body rolls over a surface. Much smaller than sliding friction.</li>
        </ul>
      </section>

      {/* 4.3 LAWS */}
      <section className="section" id="section3">
        <div className="section-header"><div className="sec-num">4.3</div><h2 id="laws">Laws of Dry Friction (Coulomb&apos;s Laws)</h2></div>
        <ol className="step-list">
          <li><div className="step-num">1</div><div className="step-text">Friction always acts in the direction <strong>opposite</strong> to the motion or tendency of motion.</div></li>
          <li><div className="step-num">2</div><div className="step-text">The magnitude of static friction adjusts itself up to the <strong>limiting value</strong>.</div></li>
          <li><div className="step-num">3</div><div className="step-text"><strong>Limiting friction ∝ Normal reaction</strong> → F = μN.</div></li>
          <li><div className="step-num">4</div><div className="step-text">Friction is <strong>independent of area</strong> of contact (for given pressure).</div></li>
          <li><div className="step-num">5</div><div className="step-text">Friction depends on the <strong>nature and roughness</strong> of surfaces.</div></li>
          <li><div className="step-num">6</div><div className="step-text">Kinetic friction is <strong>less than</strong> limiting static friction and is approximately constant at moderate speeds.</div></li>
        </ol>
      </section>

      {/* 4.4 COEFFICIENT, ANGLE, CONE */}
      <section className="section" id="section4">
        <div className="section-header"><div className="sec-num">4.4</div><h2 id="coefficient">Coefficient, Angle & Cone of Friction</h2></div>
        <FormulaBox title="Coefficient of Friction" formula="\\mu = \\frac{F}{N} \\quad \\Rightarrow \\quad F = \\mu N"
          variables={[ { symbol: 'μ', name: 'Coefficient of friction', unit: '(dimensionless)' }, { symbol: 'F', name: 'Limiting friction', unit: 'N' }, { symbol: 'N', name: 'Normal reaction', unit: 'N' } ]} />

        <DefinitionCard term="Angle of Friction (φ)" definition="The angle which the <strong>resultant reaction R</strong> (of N and F) makes with the normal reaction N. Since tan φ = F/N = μ, we get <strong>φ = tan⁻¹(μ)</strong>." />

        <DefinitionCard term="Cone of Friction" definition="If the resultant R is rotated about the normal N, it traces out a <strong>cone</strong> with semi-vertical angle φ. This is the cone of friction. If the resultant reaction lies within this cone, the body remains in equilibrium." />

        <InteractiveDiagram caption="Fig. 4.1 — Angle of friction and Resultant reaction">
          <svg viewBox="0 0 400 240" style={{ maxWidth: 400 }}>
            <rect x="0" y="0" width="400" height="240" fill="#faf9f6" rx="6"/>
            <line x1="40" y1="180" x2="360" y2="180" stroke="#1a2744" strokeWidth="2"/>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=><line key={i} x1={50+i*24} y1="180" x2={40+i*24} y2="195" stroke="#1a2744" strokeWidth="1" opacity="0.4"/>)}
            <rect x="140" y="110" width="120" height="70" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2" rx="3"/>
            {/* N */}
            <line x1="200" y1="110" x2="200" y2="35" stroke="#2d6a4f" strokeWidth="2.5"/>
            <polygon points="200,35 194,47 206,47" fill="#2d6a4f"/>
            <text x="208" y="40" fontSize="12" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">N</text>
            {/* F friction */}
            <line x1="140" y1="170" x2="70" y2="170" stroke="#c8951a" strokeWidth="2.5"/>
            <polygon points="70,170 82,164 82,176" fill="#c8951a"/>
            <text x="85" y="162" fontSize="12" fill="#c8951a" fontWeight="700" fontFamily="Source Sans 3">F = μN</text>
            {/* R resultant */}
            <line x1="200" y1="110" x2="150" y2="35" stroke="#c0392b" strokeWidth="2.5"/>
            <polygon points="150,35 155,48 162,42" fill="#c0392b"/>
            <text x="135" y="30" fontSize="12" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">R</text>
            {/* Angle φ */}
            <path d="M200,80 A20,20 0 0,0 190,65" fill="none" stroke="#7b3f00" strokeWidth="1.5"/>
            <text x="178" y="78" fontSize="12" fill="#7b3f00" fontWeight="700" fontFamily="Source Sans 3">φ</text>
            <text x="270" y="210" fontSize="11" fill="var(--ink-muted)" fontFamily="Source Sans 3">tan φ = μ = F/N</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
      </section>

      {/* 4.5 ANGLE OF REPOSE */}
      <section className="section" id="section5">
        <div className="section-header"><div className="sec-num">4.5</div><h2 id="repose">Angle of Repose & Relation with μ</h2></div>
        <DefinitionCard term="Angle of Repose (α)" definition="The maximum angle of an inclined plane with the horizontal at which a body placed on it just begins to slide down under its own weight without any external force." />
        <FormulaBox title="Proof: Angle of Repose = Angle of Friction"
          formula="\\alpha = \\phi \\quad \\Rightarrow \\quad \\tan\\alpha = \\mu"
          description="At the point of sliding: component along plane = friction. W sin α = μ W cos α → tan α = μ = tan φ → α = φ." />
        <ExamTip><p>This proof is asked almost every year. Key steps: Resolve W along and perpendicular to the incline. Set W sin α = μN = μW cos α. Cancel W, get tan α = μ.</p></ExamTip>
      </section>

      {/* 4.6 HORIZONTAL SURFACE */}
      <section className="section" id="section6">
        <div className="section-header"><div className="sec-num">4.6</div><h2 id="horizontal">Bodies on Horizontal Surface</h2></div>
        <div className="subsection">
          <h3>Case 1: Force Parallel to Surface</h3>
          <FormulaBox title="Horizontal Push/Pull" formula="P = \\mu N = \\mu W" description="When P is horizontal on a flat surface: N = W, so F = μW." />
        </div>
        <div className="subsection">
          <h3>Case 2: Force Inclined at θ to Horizontal (Pulling UP)</h3>
          <FormulaBox title="Force Inclined Upward" formula="P = \\frac{\\mu W}{\\cos\\theta + \\mu\\sin\\theta}"
            description="Resolving P: N = W − P sin θ, and P cos θ = μN. Solving gives the minimum effort." />
        </div>
        <div className="subsection">
          <h3>Case 3: Force Inclined at θ to Horizontal (Pushing DOWN)</h3>
          <FormulaBox title="Force Inclined Downward" formula="P = \\frac{\\mu W}{\\cos\\theta - \\mu\\sin\\theta}"
            description="N = W + P sin θ (normal increases), P cos θ = μN." />
        </div>
        <WorkedExample title="Horizontal Surface — Inclined Pull"
          given={['Block weight W = 500 N, μ = 0.3, pulling force at 25° to horizontal.']}
          find="Minimum force P to start motion"
          steps={[
            '$P = \\frac{\\mu W}{\\cos\\theta + \\mu\\sin\\theta} = \\frac{0.3 \\times 500}{\\cos 25° + 0.3\\sin 25°}$',
            '$= \\frac{150}{0.9063 + 0.1268} = \\frac{150}{1.0331} = 145.2$ N',
          ]}
          answer="P = 145.2 N" />
      </section>

      {/* 4.7 INCLINED PLANE */}
      <section className="section" id="section7">
        <div className="section-header"><div className="sec-num">4.7</div><h2 id="inclined">Bodies on Inclined Plane</h2></div>
        <div className="subsection">
          <h3>Case A: P parallel to incline, pushing UP</h3>
          <FormulaBox title="Push UP (P ∥ plane)" formula="P = W\\sin\\alpha + \\mu W\\cos\\alpha = W(\\sin\\alpha + \\mu\\cos\\alpha)" />
        </div>
        <div className="subsection">
          <h3>Case B: P parallel to incline, preventing sliding DOWN</h3>
          <FormulaBox title="Prevent sliding (P ∥ plane)" formula="P = W\\sin\\alpha - \\mu W\\cos\\alpha = W(\\sin\\alpha - \\mu\\cos\\alpha)" />
        </div>
        <div className="subsection">
          <h3>Case C: P inclined at θ to the plane, pushing UP</h3>
          <FormulaBox title="Push UP (P at angle θ to plane)" formula="P = \\frac{W(\\sin\\alpha + \\mu\\cos\\alpha)}{\\cos\\theta + \\mu\\sin\\theta}" />
        </div>
        <div className="subsection">
          <h3>Case D: P horizontal, pushing UP the incline</h3>
          <FormulaBox title="Horizontal Push UP incline" formula="P = W\\tan(\\alpha + \\phi)" description="Where φ = angle of friction = tan⁻¹(μ)." />
        </div>

        <InteractiveDiagram caption="Fig. 4.2 — Forces on a body on an inclined plane">
          <svg viewBox="0 0 440 280" style={{ maxWidth: 440 }}>
            <rect x="0" y="0" width="440" height="280" fill="#faf9f6" rx="6"/>
            <line x1="60" y1="230" x2="380" y2="100" stroke="#1a2744" strokeWidth="2.5"/>
            <line x1="40" y1="230" x2="400" y2="230" stroke="#1a2744" strokeWidth="1.5"/>
            <rect x="175" y="130" width="70" height="50" fill="rgba(26,39,68,0.1)" stroke="#1a2744" strokeWidth="2" rx="3" transform="rotate(-22, 210, 155)"/>
            <line x1="210" y1="165" x2="210" y2="245" stroke="#c0392b" strokeWidth="2"/>
            <polygon points="210,245 205,235 215,235" fill="#c0392b"/>
            <text x="222" y="248" fontSize="12" fill="#c0392b" fontWeight="600" fontFamily="Source Sans 3">W</text>
            <line x1="210" y1="145" x2="180" y2="70" stroke="#2d6a4f" strokeWidth="2"/>
            <polygon points="180,70 175,82 187,80" fill="#2d6a4f"/>
            <text x="168" y="65" fontSize="12" fill="#2d6a4f" fontWeight="600" fontFamily="Source Sans 3">N</text>
            <line x1="245" y1="145" x2="330" y2="110" stroke="#1a4d6b" strokeWidth="2.5"/>
            <polygon points="330,110 318,108 320,118" fill="#1a4d6b"/>
            <text x="300" y="100" fontSize="12" fill="#1a4d6b" fontWeight="600" fontFamily="Source Sans 3">P</text>
            <line x1="175" y1="165" x2="105" y2="192" stroke="#c8951a" strokeWidth="2"/>
            <polygon points="105,192 118,188 116,198" fill="#c8951a"/>
            <text x="80" y="210" fontSize="11" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">F = μN</text>
            <path d="M100,230 A50,50 0 0,0 110,210" fill="none" stroke="#7b3f00" strokeWidth="1.5"/>
            <text x="115" y="225" fontSize="13" fill="#7b3f00" fontWeight="600" fontFamily="Source Sans 3">α</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <WorkedExample title="Inclined Plane — P parallel to plane"
          given={['W = 800 N, incline angle α = 25°, μ = 0.25']}
          find="(a) P to push up, (b) P to prevent sliding"
          steps={[
            '(a) $P = W(\\sin\\alpha + \\mu\\cos\\alpha) = 800(\\sin 25° + 0.25\\cos 25°)$',
            '$= 800(0.4226 + 0.2266) = 800(0.6492) = 519.3$ N',
            '(b) $P = W(\\sin\\alpha - \\mu\\cos\\alpha) = 800(0.4226 - 0.2266) = 800(0.196) = 156.8$ N',
          ]}
          answer="(a) P = 519.3 N (up), (b) P = 156.8 N (prevent)" />

        <WorkedExample title="Horizontal force on inclined plane"
          given={['W = 600 N, α = 30°, μ = 0.35']}
          find="Horizontal force P to push body up the incline"
          steps={[
            '$\\phi = \\tan^{-1}(0.35) = 19.29°$',
            '$P = W\\tan(\\alpha + \\phi) = 600\\tan(30° + 19.29°) = 600\\tan(49.29°)$',
            '$= 600 \\times 1.163 = 697.8$ N',
          ]}
          answer="P = 697.8 N (horizontal)" />
      </section>

      {/* QUESTION BANK */}
      <section className="section" id="qbank">
        <div className="section-header"><div className="sec-num" style={{background:'#7b3f00'}}>Q</div><h2 id="questions">Expected Questions (WBSCTE)</h2></div>
        <div className="question-box">
          <div className="q-label">Short Answer (2–5 marks)</div>
          <ul>
            <li>Define friction. State its advantages and disadvantages in engineering.</li>
            <li>State the laws of dry friction.</li>
            <li>Define: coefficient of friction, angle of friction, cone of friction, angle of repose.</li>
            <li>Prove that angle of repose = angle of friction.</li>
            <li>Derive the relation between coefficient of friction and angle of friction.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Numerical (5–10 marks)</div>
          <ul>
            <li>A body of 1000 N on a horizontal surface (μ = 0.3). Find P if applied (a) horizontally, (b) at 30° upward, (c) at 20° downward.</li>
            <li>Derive P = W(sin α + μ cos α) for a body on an incline with P parallel to the plane.</li>
            <li>W = 500 N, α = 35°, μ = 0.3. Find P (a) parallel to plane pushing up, (b) horizontal pushing up.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
