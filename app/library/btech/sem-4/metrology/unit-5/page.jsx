'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import ScrewThreadDiagram from '@/components/ScrewThreadDiagram';
import { SvgWatermark } from '@/components/Watermark';

export default function MetrologyUnit5() {
  return (
    <UnitLayout
      unitNum={5} unitTitle="Metrology of Screw Threads"
      unitDescription="Thread terminology, measurement methods, thread gauges"
      subject="Metrology & Measurement" subjectSlug="metrology"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT • B.Tech Mechanical Engineering"
      prevUnit={{ num: 4, title: "Surface Finish Measurement" }}
      nextUnit={null}
    >
      {/* 5.1 — INTRODUCTION */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">5.1</div>
          <h2 id="introduction">Introduction to Screw Thread Metrology</h2>
        </div>
        <p>Screw threads are fundamental machine elements used for fastening, power transmission, and motion conversion. Accurate measurement of thread parameters is crucial for ensuring interchangeability and proper fit between mating components.</p>
        <DefinitionCard
          term="Screw Thread"
          alternateNames="Helical Ridge"
          definition="A <strong>screw thread</strong> is a helical ridge of uniform cross-section formed on the external (bolt) or internal (nut) surface of a cylinder or cone. It converts rotary motion into linear motion and is characterized by its pitch, lead, and form."
        />
      </section>

      {/* 5.2 — TERMINOLOGY */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">5.2</div>
          <h2 id="terminology">Thread Terminology</h2>
        </div>
        <InteractiveDiagram caption="Fig. 5.1 — Screw Thread Terminology">
          <svg viewBox="0 0 500 280" style={{ maxWidth: 500 }}>
            <rect x="0" y="0" width="500" height="280" fill="#faf9f6" rx="6"/>
            {/* Thread profile */}
            <path d="M50,180 L90,60 L130,180 L170,60 L210,180 L250,60 L290,180 L330,60 L370,180 L410,60 L450,180" fill="none" stroke="#1a2744" strokeWidth="2.5"/>
            {/* Axis line */}
            <line x1="30" y1="120" x2="470" y2="120" stroke="#c0392b" strokeWidth="1" strokeDasharray="6,4"/>
            <text x="475" y="124" fontSize="10" fill="#c0392b" fontFamily="Source Sans 3">Axis</text>
            {/* Pitch dimension */}
            <line x1="90" y1="45" x2="170" y2="45" stroke="#2d6a4f" strokeWidth="1.5"/>
            <line x1="90" y1="40" x2="90" y2="55" stroke="#2d6a4f" strokeWidth="1"/>
            <line x1="170" y1="40" x2="170" y2="55" stroke="#2d6a4f" strokeWidth="1"/>
            <text x="130" y="40" fontSize="12" fill="#2d6a4f" textAnchor="middle" fontWeight="600" fontFamily="Source Sans 3">Pitch (p)</text>
            {/* Major diameter */}
            <line x1="90" y1="55" x2="90" y2="185" stroke="#1a4d6b" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="455" y1="60" x2="455" y2="180" stroke="#1a4d6b" strokeWidth="1.5"/>
            <text x="465" y="75" fontSize="10" fill="#1a4d6b" fontFamily="Source Sans 3" writingMode="tb">Major Ø</text>
            {/* Minor diameter */}
            <line x1="460" y1="180" x2="460" y2="180" stroke="#7b3f00" strokeWidth="1.5"/>
            {/* Crest and root labels */}
            <text x="90" y="55" fontSize="10" fill="#c0392b" textAnchor="middle" fontFamily="Source Sans 3">Crest</text>
            <text x="130" y="195" fontSize="10" fill="#c0392b" textAnchor="middle" fontFamily="Source Sans 3">Root</text>
            {/* Thread angle */}
            <path d="M80,180 L90,155 L100,180" fill="none" stroke="#7b3f00" strokeWidth="1.5"/>
            <text x="90" y="210" fontSize="10" fill="#7b3f00" textAnchor="middle" fontFamily="Source Sans 3">Thread angle (2α)</text>
            <SvgWatermark />
          </svg>
        </InteractiveDiagram>

        <ul className="bullet-list">
          <li><strong>Major Diameter (d)</strong> — The largest diameter of the thread, measured at the crests for external threads.</li>
          <li><strong>Minor Diameter (d₁)</strong> — The smallest diameter, measured at the roots.</li>
          <li><strong>Pitch Diameter (d₂)</strong> — The diameter of an imaginary cylinder where the thread width equals the groove width. Most critical for fit.</li>
          <li><strong>Pitch (p)</strong> — Distance between adjacent thread crests, measured parallel to the axis.</li>
          <li><strong>Lead (L)</strong> — Axial distance moved in one complete revolution. For single-start: L = p.</li>
          <li><strong>Thread Angle (2α)</strong> — The included angle between thread flanks. For metric threads: 60°.</li>
          <li><strong>Crest</strong> — The top of the thread ridge.</li>
          <li><strong>Root</strong> — The bottom of the thread groove.</li>
          <li><strong>Flank</strong> — The surface connecting crest and root.</li>
        </ul>

        <FormulaBox
          title="Key Relationships"
          formula="L = n \\times p \\quad ; \\quad d_2 = d - 0.6495p \\quad \\text{(ISO Metric)}"
          description="Where n = number of starts, p = pitch, d = major diameter."
          variables={[
            { symbol: 'L', name: 'Lead', unit: 'mm' },
            { symbol: 'n', name: 'Number of starts', unit: '—' },
            { symbol: 'p', name: 'Pitch', unit: 'mm' },
            { symbol: 'd₂', name: 'Pitch diameter', unit: 'mm' },
          ]}
        />

        <ScrewThreadDiagram />
      </section>



      {/* 5.3 — MEASUREMENT METHODS */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">5.3</div>
          <h2 id="measurement-methods">Measurement of Thread Elements</h2>
        </div>

        <div className="subsection">
          <h3 id="major-minor">Major & Minor Diameter Measurement</h3>
          <p>Major diameter is measured using a bench micrometer or an ordinary micrometer. Minor diameter is measured using a special micrometer with pointed anvils or by using cylindrical rods placed in the thread grooves.</p>
        </div>

        <div className="subsection">
          <h3 id="pitch-measurement">Pitch Measurement</h3>
          <p>Pitch can be measured using a pitch gauge, toolmaker's microscope, or by counting threads per inch/mm. For precision, the toolmaker's microscope with a crosshair reticle is used.</p>
        </div>

        <div className="subsection">
          <h3 id="pitch-diameter">Effective (Pitch) Diameter Measurement</h3>
          <p>The pitch diameter is the most critical parameter. It can be measured by:</p>
          <ol className="step-list">
            <li><div className="step-num">1</div><div className="step-text"><strong>Floating Carriage Micrometer</strong> — Direct measurement using a specially designed micrometer with V-shaped anvils.</div></li>
            <li><div className="step-num">2</div><div className="step-text"><strong>Two-Wire / Three-Wire Method</strong> — Wires of known diameter placed in thread grooves; measurement over wires gives pitch diameter.</div></li>
            <li><div className="step-num">3</div><div className="step-text"><strong>Thread Micrometer</strong> — A micrometer with V-anvil and conical spindle tip.</div></li>
          </ol>
        </div>
      </section>

      {/* 5.4 — THREE-WIRE METHOD */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">5.4</div>
          <h2 id="three-wire">Three-Wire Method</h2>
        </div>
        <DefinitionCard
          term="Three-Wire Method"
          alternateNames="Also: Two-Wire Method"
          definition="Three wires of equal and known diameter are placed in the thread grooves — two on one side and one on the opposite side. The measurement over the wires (M) is taken using a micrometer, and the pitch diameter is calculated using a formula."
        />
        <FormulaBox
          title="Three-Wire Method — ISO Metric Thread (60°)"
          formula="d_2 = M - 3w + 0.8660 \\times p"
          description="Where M = measurement over wires, w = wire diameter, p = pitch"
          variables={[
            { symbol: 'd₂', name: 'Pitch diameter', unit: 'mm' },
            { symbol: 'M', name: 'Measurement over wires', unit: 'mm' },
            { symbol: 'w', name: 'Wire diameter', unit: 'mm' },
            { symbol: 'p', name: 'Pitch', unit: 'mm' },
          ]}
        />
        <FormulaBox
          title="Best Wire Size"
          formula="w_{best} = \\frac{p}{2\\cos\\alpha} = \\frac{p}{2\\cos 30°} = 0.5774 \\times p"
          description="The best wire size ensures contact at the pitch diameter line."
        />
        <ExamTip>
          <p>The three-wire method is the most accurate method for measuring pitch diameter. Always use the &quot;best wire size&quot; formula for maximum accuracy. For 60° metric threads, w = 0.5774p.</p>
        </ExamTip>

        <WorkedExample
          title="Three-Wire Method Calculation"
          given={[
            'M12 × 1.75 bolt (Major dia = 12 mm, Pitch = 1.75 mm)',
            'Measurement over wires: $M = 12.45$ mm',
            'Wire diameter: $w = 1.01$ mm',
          ]}
          find="Pitch diameter $d_2$"
          steps={[
            'Using the three-wire formula for 60° metric thread: $$d_2 = M - 3w + 0.8660p$$',
            'Substituting values: $$d_2 = 12.45 - 3(1.01) + 0.8660(1.75)$$',
            '$$d_2 = 12.45 - 3.03 + 1.5155$$',
            '$$d_2 = 10.9355 \\text{ mm}$$',
          ]}
          answer="$d_2 = 10.936$ mm (standard pitch dia for M12×1.75 is 10.863 mm — within tolerance)"
        />
      </section>

      {/* 5.5 — THREAD GAUGES */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">5.5</div>
          <h2 id="thread-gauges">Thread Gauges</h2>
        </div>
        <p>Thread gauges are used for rapid inspection of screw threads in production. They work on the GO / NO-GO principle.</p>

        <div className="gauge-grid">
          <div className="gauge-card">
            <div className="gauge-card-head plug">🔌 Plug Gauge</div>
            <div className="gauge-card-body">
              <div className="badge-row">
                <span className="badge badge-go">GO</span>
                <span className="badge badge-nogo">NO-GO</span>
              </div>
              <p>Used to check <strong>internal threads</strong> (nuts). The GO end must enter fully; the NO-GO end must not.</p>
            </div>
          </div>
          <div className="gauge-card">
            <div className="gauge-card-head ring">🔗 Ring Gauge</div>
            <div className="gauge-card-body">
              <div className="badge-row">
                <span className="badge badge-go">GO</span>
                <span className="badge badge-nogo">NO-GO</span>
              </div>
              <p>Used to check <strong>external threads</strong> (bolts). The GO ring screws on fully; the NO-GO must not.</p>
            </div>
          </div>
          <div className="gauge-card">
            <div className="gauge-card-head snap">📏 Snap Gauge</div>
            <div className="gauge-card-body">
              <div className="badge-row">
                <span className="badge badge-go">GO</span>
                <span className="badge badge-nogo">NO-GO</span>
              </div>
              <p>Caliper-type gauge for quick checking of <strong>external thread diameters</strong> in mass production.</p>
            </div>
          </div>
        </div>

        <NoteBox label="Taylor's Principle of Gauging">
          <p>GO gauge should check maximum material condition — it checks all dimensions simultaneously (full-form). NO-GO gauge checks minimum material condition — it checks each element individually.</p>
        </NoteBox>
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
            <li>Define: pitch, lead, pitch diameter, and thread angle of a screw thread.</li>
            <li>What is the best wire size? Derive its formula for metric threads.</li>
            <li>Explain Taylor&apos;s principle of gauging.</li>
            <li>Differentiate between GO and NO-GO gauges.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (10–15 marks)</div>
          <ul>
            <li>Explain the three-wire method for measuring pitch diameter with a neat diagram and derive the formula.</li>
            <li>Describe thread gauges (plug, ring, snap) with diagrams and their applications.</li>
            <li>An M16×2 bolt has measurement over wires M = 16.8 mm using wires of dia 1.155 mm. Calculate pitch diameter.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
