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
      unitDescription="Moment of a force, Varignon's theorem, Couples, Resultant of coplanar couples"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 1, title: "Basics & Force Systems" }}
      nextUnit={{ num: 3, title: "Equilibrium of Forces" }}
    >
      {/* 2.1 — MOMENT OF A FORCE */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">2.1</div>
          <h2 id="moment">Moment of a Force</h2>
        </div>
        <DefinitionCard
          term="Moment of a Force"
          alternateNames="Torque, Turning Effect"
          definition="The <strong>moment of a force</strong> about a point is the product of the force and the perpendicular distance of the point from the line of action of the force. It measures the turning tendency of the force about that point."
        />
        <FormulaBox
          title="Moment of a Force"
          formula="M = F \\times d"
          description="Where F is the force and d is the perpendicular distance from the point (moment centre) to the line of action of F."
          variables={[
            { symbol: 'M', name: 'Moment', unit: 'N·m' },
            { symbol: 'F', name: 'Force', unit: 'N' },
            { symbol: 'd', name: 'Perpendicular distance (moment arm)', unit: 'm' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 2.1 — Moment of a force about point O">
          <svg viewBox="0 0 420 220" style={{ maxWidth: 420 }}>
            <rect x="0" y="0" width="420" height="220" fill="#faf9f6" rx="6"/>
            {/* Pivot O */}
            <circle cx="100" cy="140" r="5" fill="#c0392b"/>
            <text x="85" y="160" fontSize="14" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">O</text>
            {/* Beam */}
            <line x1="100" y1="140" x2="340" y2="140" stroke="#1a2744" strokeWidth="3"/>
            {/* Force F */}
            <line x1="300" y1="140" x2="300" y2="50" stroke="#2d6a4f" strokeWidth="2.5"/>
            <polygon points="300,50 294,62 306,62" fill="#2d6a4f"/>
            <text x="312" y="55" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F</text>
            {/* Distance d */}
            <line x1="100" y1="175" x2="300" y2="175" stroke="#c8951a" strokeWidth="1.5"/>
            <line x1="100" y1="170" x2="100" y2="180" stroke="#c8951a" strokeWidth="1"/>
            <line x1="300" y1="170" x2="300" y2="180" stroke="#c8951a" strokeWidth="1"/>
            <text x="200" y="195" textAnchor="middle" fontSize="13" fill="#c8951a" fontWeight="700" fontFamily="Source Sans 3">d (moment arm)</text>
            {/* Rotation arrow */}
            <path d="M130,120 A30,30 0 0,1 130,160" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="140" y="100" fontSize="11" fill="#c0392b" fontFamily="Source Sans 3">↻ M = F × d</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>
        <NoteBox label="Sign Convention">
          <p><strong>Clockwise (CW)</strong> moments are taken as <strong>negative</strong>. <strong>Counter-clockwise (CCW)</strong> moments are taken as <strong>positive</strong>. (Some textbooks use the opposite — follow your syllabus convention.)</p>
        </NoteBox>
      </section>

      {/* 2.2 — VARIGNON'S THEOREM */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">2.2</div>
          <h2 id="varignon">Varignon&apos;s Theorem (Principle of Moments)</h2>
        </div>
        <DefinitionCard
          term="Varignon's Theorem"
          alternateNames="Principle of Moments"
          definition="The algebraic sum of the moments of a system of coplanar forces about any point is equal to the moment of their <strong>resultant</strong> about the same point."
        />
        <FormulaBox
          title="Varignon's Theorem"
          formula="M_R = \\sum M_i \\quad \\Rightarrow \\quad R \\times d_R = F_1 \\times d_1 + F_2 \\times d_2 + \\cdots"
          description="The moment of the resultant equals the sum of moments of individual forces."
          variables={[
            { symbol: 'M_R', name: 'Moment of resultant', unit: 'N·m' },
            { symbol: 'R', name: 'Resultant force', unit: 'N' },
            { symbol: 'd_R', name: 'Perpendicular distance of R from O', unit: 'm' },
          ]}
        />
        <ExamTip>
          <p>Varignon&apos;s theorem is extremely useful for finding the <strong>position of the resultant</strong>. If you know the resultant magnitude (from composition), use this theorem to find where its line of action passes.</p>
        </ExamTip>
        <WorkedExample
          title="Varignon's Theorem Application"
          given={[
            'Three parallel forces: 20 N, 40 N, and 30 N act at distances 1 m, 3 m, and 5 m from point A respectively.',
            'All forces act vertically downward.',
          ]}
          find="Position of the resultant from point A"
          steps={[
            'Resultant: $R = 20 + 40 + 30 = 90$ N (downward)',
            'By Varignon\'s theorem: $R \\times \\bar{x} = \\sum F_i \\times x_i$',
            '$90 \\times \\bar{x} = 20(1) + 40(3) + 30(5)$',
            '$90\\bar{x} = 20 + 120 + 150 = 290$',
            '$\\bar{x} = \\frac{290}{90} = 3.22$ m from A',
          ]}
          answer="Resultant = 90 N at $\\bar{x} = 3.22$ m from point A"
        />
      </section>

      {/* 2.3 — COUPLE */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">2.3</div>
          <h2 id="couple">Couple</h2>
        </div>
        <DefinitionCard
          term="Couple"
          definition="A <strong>couple</strong> is a pair of two equal, parallel, and opposite forces that do not share the same line of action. A couple produces pure rotation without translation."
        />
        <FormulaBox
          title="Moment of a Couple"
          formula="M = F \\times d"
          description="Where F = magnitude of either force, d = perpendicular distance between the two forces (arm of the couple)."
          variables={[
            { symbol: 'M', name: 'Moment of couple', unit: 'N·m' },
            { symbol: 'F', name: 'One of the two equal forces', unit: 'N' },
            { symbol: 'd', name: 'Arm of the couple', unit: 'm' },
          ]}
        />
        <InteractiveDiagram caption="Fig. 2.2 — A couple: two equal and opposite parallel forces">
          <svg viewBox="0 0 400 200" style={{ maxWidth: 400 }}>
            <rect x="0" y="0" width="400" height="200" fill="#faf9f6" rx="6"/>
            {/* Force F up */}
            <line x1="120" y1="140" x2="120" y2="50" stroke="#2d6a4f" strokeWidth="2.5"/>
            <polygon points="120,50 114,62 126,62" fill="#2d6a4f"/>
            <text x="100" y="45" fontSize="14" fill="#2d6a4f" fontWeight="700" fontFamily="Source Sans 3">F</text>
            {/* Force F down */}
            <line x1="280" y1="60" x2="280" y2="150" stroke="#c0392b" strokeWidth="2.5"/>
            <polygon points="280,150 274,138 286,138" fill="#c0392b"/>
            <text x="292" y="155" fontSize="14" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">F</text>
            {/* Distance d */}
            <line x1="120" y1="170" x2="280" y2="170" stroke="#c8951a" strokeWidth="1.5"/>
            <line x1="120" y1="165" x2="120" y2="175" stroke="#c8951a" strokeWidth="1"/>
            <line x1="280" y1="165" x2="280" y2="175" stroke="#c8951a" strokeWidth="1"/>
            <text x="200" y="188" textAnchor="middle" fontSize="13" fill="#c8951a" fontWeight="700" fontFamily="Source Sans 3">d (arm of couple)</text>
            {/* Rotation */}
            <path d="M185,80 A30,30 0 1,1 215,80" fill="none" stroke="#7b3f00" strokeWidth="1.5"/>
            <polygon points="215,80 210,72 220,75" fill="#7b3f00"/>
            <text x="200" y="110" textAnchor="middle" fontSize="12" fill="#7b3f00" fontWeight="600" fontFamily="Source Sans 3">M = F × d</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <div className="highlight-band">
          <h4>Properties of a Couple</h4>
          <p>1. A couple produces rotation only — no translation. 2. The resultant force of a couple is zero. 3. The moment of a couple is the same about every point in its plane. 4. A couple can only be balanced by another couple of equal magnitude and opposite sense.</p>
        </div>
      </section>

      {/* 2.4 — RESULTANT OF COPLANAR COUPLES */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">2.4</div>
          <h2 id="resultant-couples">Resultant of Coplanar Couples</h2>
        </div>
        <FormulaBox
          title="Resultant of Multiple Couples"
          formula="M_R = M_1 + M_2 + M_3 + \\cdots = \\sum M_i"
          description="The resultant of multiple coplanar couples is found by algebraic addition of individual moments (considering sign: CW negative, CCW positive)."
        />
        <WorkedExample
          title="Resultant Couple"
          given={[
            'Three couples act on a body:',
            '$M_1 = 30$ N·m (CCW)',
            '$M_2 = 20$ N·m (CW)',
            '$M_3 = 15$ N·m (CCW)',
          ]}
          find="Resultant couple"
          steps={[
            'Taking CCW as positive and CW as negative:',
            '$M_R = M_1 - M_2 + M_3$',
            '$M_R = 30 - 20 + 15 = 25$ N·m',
            'Since the result is positive, the resultant couple is <strong>counter-clockwise</strong>.',
          ]}
          answer="Resultant couple = 25 N·m (CCW)"
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
            <li>Define moment of a force. State its SI unit.</li>
            <li>State Varignon&apos;s theorem (Principle of Moments).</li>
            <li>Define a couple. State its properties.</li>
            <li>Differentiate between a moment and a couple.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (10–15 marks)</div>
          <ul>
            <li>State and prove Varignon&apos;s theorem. Three forces 10, 20, 30 N act at 2, 4, 6 m from a point. Find the position of resultant.</li>
            <li>Four parallel forces 10, 20, 30, 40 N act at 1, 2, 4, 5 m from end A of a beam. Find the resultant and its position from A.</li>
            <li>Explain the concept of a couple. Prove that the moment of a couple is the same about every point in its plane.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
