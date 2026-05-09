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

function CentroidDiagram() {
  const [shape, setShape] = useState('rectangle');
  const shapes = {
    rectangle: { cx: 200, cy: 120, label: 'ȳ = h/2', label2: 'x̄ = b/2', w: 200, h: 120 },
    triangle: { cx: 200, cy: 160, label: 'ȳ = h/3', label2: 'x̄ = b/2' },
    circle: { cx: 200, cy: 140, label: 'ȳ = r', label2: 'x̄ = r', r: 70 },
  };
  const s = shapes[shape];
  return (
    <InteractiveDiagram caption="Interactive: Select a shape to see its centroid location">
      <svg viewBox="0 0 400 280" style={{ maxWidth: 400 }}>
        <rect x="0" y="0" width="400" height="280" fill="#faf9f6" rx="6"/>
        {/* Axes */}
        <line x1="60" y1="240" x2="360" y2="240" stroke="#1a2744" strokeWidth="1.5"/>
        <line x1="60" y1="240" x2="60" y2="30" stroke="#1a2744" strokeWidth="1.5"/>
        <text x="365" y="244" fontSize="12" fill="#1a2744" fontWeight="600" fontFamily="Source Sans 3">x</text>
        <text x="55" y="25" fontSize="12" fill="#1a2744" fontWeight="600" fontFamily="Source Sans 3">y</text>
        {shape === 'rectangle' && (
          <>
            <rect x="100" y="120" width={s.w} height={s.h} fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
            <circle cx={100 + s.w/2} cy={120 + s.h/2} r="6" fill="#c0392b"/>
            <text x={100 + s.w/2 + 10} y={120 + s.h/2 + 5} fontSize="12" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">G</text>
            <line x1="100" y1={120+s.h/2} x2={100+s.w/2} y2={120+s.h/2} stroke="#c8951a" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1={100+s.w/2} y1="240" x2={100+s.w/2} y2={120+s.h/2} stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="5,3"/>
          </>
        )}
        {shape === 'triangle' && (
          <>
            <polygon points="100,240 300,240 200,80" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
            <circle cx="200" cy={240 - (240-80)/3} r="6" fill="#c0392b"/>
            <text x="212" y={240 - (240-80)/3 + 5} fontSize="12" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">G (h/3 from base)</text>
          </>
        )}
        {shape === 'circle' && (
          <>
            <circle cx="200" cy="160" r={s.r} fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
            <circle cx="200" cy="160" r="6" fill="#c0392b"/>
            <text x="212" y="165" fontSize="12" fill="#c0392b" fontWeight="700" fontFamily="Source Sans 3">G (centre)</text>
          </>
        )}
        <text x={100 + (s.w||140)/2} y="265" textAnchor="middle" fontSize="11" fill="#c8951a" fontWeight="600" fontFamily="Source Sans 3">{s.label2}</text>
        <text x="40" y={120 + (s.h||120)/2} fontSize="11" fill="#2d6a4f" fontWeight="600" fontFamily="Source Sans 3">{s.label}</text>
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 16, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        {['rectangle', 'triangle', 'circle'].map(sh => (
          <button key={sh} onClick={() => setShape(sh)}
            style={{
              padding: '8px 18px', borderRadius: 6, border: shape === sh ? '2px solid var(--accent)' : '1px solid var(--border)',
              background: shape === sh ? 'var(--accent-light)' : 'var(--paper-card)',
              color: shape === sh ? 'var(--accent)' : 'var(--ink-light)',
              fontWeight: 600, fontSize: 13, cursor: 'pointer', textTransform: 'capitalize',
              fontFamily: 'Source Sans 3, sans-serif',
            }}>
            {sh}
          </button>
        ))}
      </div>
    </InteractiveDiagram>
  );
}

export default function Unit5Page() {
  return (
    <UnitLayout
      unitNum={5} unitTitle="Centroid & Centre of Gravity"
      unitDescription="Centroid of plane figures, Composite sections (T, I, L, Z), CG of simple solids"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 4, title: "Friction" }}
      nextUnit={{ num: 6, title: "Simple Lifting Machines" }}
    >
      {/* 5.1 */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">5.1</div>
          <h2 id="introduction">Introduction</h2>
        </div>
        <DefinitionCard
          term="Centroid"
          definition="The <strong>centroid</strong> is the geometric centre of a plane area. It is the point where the entire area can be assumed to be concentrated. For a uniform lamina, the centroid coincides with the centre of gravity."
        />
        <DefinitionCard
          term="Centre of Gravity (CG)"
          definition="The <strong>centre of gravity</strong> is the point through which the entire weight of a body acts, irrespective of its orientation. For 2D laminae of uniform thickness and density, CG = Centroid."
        />
      </section>

      {/* 5.2 */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">5.2</div>
          <h2 id="centroids-simple">Centroids of Simple Shapes</h2>
        </div>
        <CentroidDiagram />
        <table className="data-table">
          <thead>
            <tr><th>Shape</th><th>x̄ (from left)</th><th>ȳ (from base)</th><th>Area</th></tr>
          </thead>
          <tbody>
            <tr><td>Rectangle (b × h)</td><td>b/2</td><td>h/2</td><td>b × h</td></tr>
            <tr><td>Triangle (base b, height h)</td><td>b/3 or b/2 *</td><td>h/3</td><td>½bh</td></tr>
            <tr><td>Circle (radius r)</td><td>r</td><td>r</td><td>πr²</td></tr>
            <tr><td>Semicircle (radius r)</td><td>r</td><td>4r/3π</td><td>πr²/2</td></tr>
            <tr><td>Quarter circle</td><td>4r/3π</td><td>4r/3π</td><td>πr²/4</td></tr>
          </tbody>
        </table>
        <NoteBox label="* Note on Triangle">
          <p>For a triangle with one vertex at origin: x̄ = (x₁+x₂+x₃)/3, ȳ = (y₁+y₂+y₃)/3. For a triangle with base along x-axis and apex above: x̄ = b/2 from left vertex, ȳ = h/3 from base.</p>
        </NoteBox>
      </section>

      {/* 5.3 */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">5.3</div>
          <h2 id="composite">Composite Sections</h2>
        </div>
        <FormulaBox
          title="Centroid of Composite Area"
          formula="\\bar{x} = \\frac{\\sum A_i \\bar{x}_i}{\\sum A_i} \\quad ; \\quad \\bar{y} = \\frac{\\sum A_i \\bar{y}_i}{\\sum A_i}"
          description="Divide the composite shape into simple shapes, find each area and its centroid, then use the weighted average formula."
          variables={[
            { symbol: 'A_i', name: 'Area of each part', unit: 'mm²' },
            { symbol: '\\bar{x}_i', name: 'x-centroid of each part', unit: 'mm' },
            { symbol: '\\bar{y}_i', name: 'y-centroid of each part', unit: 'mm' },
          ]}
        />
        <ExamTip>
          <p><strong>For cutouts/holes:</strong> Use negative area. Subtract the moment of the hole from the total. This is the most common exam problem — T-section, I-section, and L-section centroids.</p>
        </ExamTip>
        <WorkedExample
          title="T-Section Centroid"
          given={[
            'A T-section with:',
            'Flange: 120 mm × 20 mm (top)',
            'Web: 20 mm × 80 mm (below flange)',
          ]}
          find="Centroid from the bottom of the section"
          steps={[
            'Divide into two rectangles:',
            'Part 1 (Flange): $A_1 = 120 \\times 20 = 2400$ mm², $\\bar{y}_1 = 80 + 10 = 90$ mm',
            'Part 2 (Web): $A_2 = 20 \\times 80 = 1600$ mm², $\\bar{y}_2 = 40$ mm',
            'Total area: $A = 2400 + 1600 = 4000$ mm²',
            'Centroid: $$\\bar{y} = \\frac{A_1 \\bar{y}_1 + A_2 \\bar{y}_2}{A_1 + A_2} = \\frac{2400(90) + 1600(40)}{4000}$$',
            '$$\\bar{y} = \\frac{216000 + 64000}{4000} = \\frac{280000}{4000} = 70 \\text{ mm}$$',
          ]}
          answer="Centroid is at $\\bar{y} = 70$ mm from the bottom"
        />
        <WorkedExample
          title="L-Section Centroid"
          given={[
            'An L-section with:',
            'Vertical leg: 20 mm × 100 mm',
            'Horizontal leg: 80 mm × 20 mm (at the bottom)',
          ]}
          find="Position of centroid (x̄, ȳ) from the bottom-left corner"
          steps={[
            'Part 1 (Vertical): $A_1 = 20 \\times 100 = 2000$ mm², $\\bar{x}_1 = 10$ mm, $\\bar{y}_1 = 50$ mm',
            'Part 2 (Horizontal): $A_2 = 80 \\times 20 = 1600$ mm², $\\bar{x}_2 = 40$ mm, $\\bar{y}_2 = 10$ mm',
            '$A = 2000 + 1600 = 3600$ mm²',
            '$\\bar{x} = \\frac{2000(10) + 1600(40)}{3600} = \\frac{20000 + 64000}{3600} = \\frac{84000}{3600} = 23.33$ mm',
            '$\\bar{y} = \\frac{2000(50) + 1600(10)}{3600} = \\frac{100000 + 16000}{3600} = \\frac{116000}{3600} = 32.22$ mm',
          ]}
          answer="Centroid at $(\\bar{x}, \\bar{y}) = (23.33, 32.22)$ mm from bottom-left"
        />
      </section>

      {/* 5.4 */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">5.4</div>
          <h2 id="cg-solids">CG of Simple Solids</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Solid</th><th>Position of CG</th><th>Volume</th></tr>
          </thead>
          <tbody>
            <tr><td>Cylinder</td><td>At mid-height on the axis (h/2)</td><td>πr²h</td></tr>
            <tr><td>Cone</td><td>h/4 from base on the axis</td><td>⅓πr²h</td></tr>
            <tr><td>Sphere</td><td>At the geometric centre</td><td>⁴⁄₃πr³</td></tr>
            <tr><td>Hemisphere</td><td>3r/8 from the flat base</td><td>⅔πr³</td></tr>
          </tbody>
        </table>
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
            <li>Define centroid and centre of gravity. How are they related?</li>
            <li>State the centroid positions for rectangle, triangle, and circle.</li>
            <li>Write the formula for centroid of a composite section.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (10–15 marks)</div>
          <ul>
            <li>Find the centroid of a T-section: flange 150×25 mm, web 25×100 mm.</li>
            <li>Find the centroid of an I-section: top flange 100×20, web 20×80, bottom flange 120×20.</li>
            <li>An L-section has legs 100×15 mm (vertical) and 80×15 mm (horizontal). Find the centroid position.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
