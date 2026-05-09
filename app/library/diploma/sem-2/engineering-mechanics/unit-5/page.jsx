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
  return (
    <InteractiveDiagram caption="Interactive: Select a shape to see its centroid position">
      <svg viewBox="0 0 400 280" style={{ maxWidth: 400 }}>
        <rect x="0" y="0" width="400" height="280" fill="#faf9f6" rx="6"/>
        <line x1="60" y1="240" x2="360" y2="240" stroke="#1a2744" strokeWidth="1.5"/>
        <line x1="60" y1="240" x2="60" y2="30" stroke="#1a2744" strokeWidth="1.5"/>
        <text x="365" y="244" fontSize="12" fill="#1a2744" fontWeight="600">x</text>
        <text x="55" y="25" fontSize="12" fill="#1a2744" fontWeight="600">y</text>
        {shape === 'rectangle' && (<>
          <rect x="100" y="120" width="200" height="120" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
          <circle cx="200" cy="180" r="6" fill="#c0392b"/>
          <text x="212" y="185" fontSize="11" fill="#c0392b" fontWeight="700">G (b/2, h/2)</text>
          <line x1="100" y1="180" x2="200" y2="180" stroke="#c8951a" strokeWidth="1.5" strokeDasharray="5,3"/>
          <line x1="200" y1="240" x2="200" y2="180" stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="5,3"/>
          <text x="140" y="172" fontSize="10" fill="#c8951a">b/2</text>
          <text x="206" y="215" fontSize="10" fill="#2d6a4f">h/2</text>
        </>)}
        {shape === 'triangle' && (<>
          <polygon points="100,240 300,240 200,80" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
          <circle cx="200" cy={240-(240-80)/3} r="6" fill="#c0392b"/>
          <text x="212" y={240-(240-80)/3+5} fontSize="11" fill="#c0392b" fontWeight="700">G (h/3 from base)</text>
        </>)}
        {shape === 'circle' && (<>
          <circle cx="200" cy="160" r="70" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
          <circle cx="200" cy="160" r="6" fill="#c0392b"/>
          <text x="212" y="165" fontSize="11" fill="#c0392b" fontWeight="700">G (centre)</text>
        </>)}
        {shape === 'semicircle' && (<>
          <path d="M130,200 A70,70 0 0,1 270,200 L130,200 Z" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
          <circle cx="200" cy={200-4*70/(3*Math.PI)} r="6" fill="#c0392b"/>
          <text x="212" y={200-4*70/(3*Math.PI)+5} fontSize="11" fill="#c0392b" fontWeight="700">G (4r/3π from base)</text>
        </>)}
        {shape === 'quarter' && (<>
          <path d="M130,230 L130,130 A100,100 0 0,1 230,230 Z" fill="rgba(26,39,68,0.08)" stroke="#1a2744" strokeWidth="2"/>
          <circle cx={130+4*100/(3*Math.PI)} cy={230-4*100/(3*Math.PI)} r="6" fill="#c0392b"/>
          <text x={140+4*100/(3*Math.PI)} y={230-4*100/(3*Math.PI)} fontSize="10" fill="#c0392b" fontWeight="700">G (4r/3π, 4r/3π)</text>
        </>)}
        <SvgWatermark />
      </svg>
      <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
        {['rectangle','triangle','circle','semicircle','quarter'].map(sh => (
          <button key={sh} onClick={() => setShape(sh)} style={{
            padding: '6px 14px', borderRadius: 6, border: shape===sh ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: shape===sh ? 'var(--accent-light)' : 'var(--paper-card)', color: shape===sh ? 'var(--accent)' : 'var(--ink-light)',
            fontWeight: 600, fontSize: 12, cursor: 'pointer', textTransform: 'capitalize', fontFamily: 'Source Sans 3, sans-serif',
          }}>{sh === 'quarter' ? 'Quarter Circle' : sh}</button>
        ))}
      </div>
    </InteractiveDiagram>
  );
}

export default function Unit5Page() {
  return (
    <UnitLayout unitNum={5} unitTitle="Centroid & Centre of Gravity"
      unitDescription="Centroid of plane figures (triangle, rectangle, circle, semicircle, quarter circle), Composite sections (T, I, L, Z, Channel, Cut-outs, Built-up), CG of simple solids, Composite solids"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma" degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 4, title: "Friction" }} nextUnit={{ num: 6, title: "Simple Lifting Machines" }}>

      {/* 5.1 */}
      <section className="section" id="section1">
        <div className="section-header"><div className="sec-num">5.1</div><h2 id="concept">Concept & Definition</h2></div>
        <DefinitionCard term="Centroid" definition="The <strong>centroid</strong> is the geometric centre of a plane area. It is the point at which the entire area can be assumed to be concentrated for moment calculations. For a uniform lamina, the centroid coincides with the centre of gravity." />
        <DefinitionCard term="Centre of Gravity (CG)" definition="The <strong>centre of gravity</strong> is the point through which the entire weight of a body acts, regardless of orientation. For 2D uniform laminae: CG = Centroid. For 3D solids, CG is found by the same principle extended to volumes." />
        <NoteBox label="Key Difference"><p><strong>Centroid</strong> is a property of geometry (area/line/volume). <strong>CG</strong> is a property of weight distribution. For homogeneous bodies, they coincide.</p></NoteBox>
      </section>

      {/* 5.2 */}
      <section className="section" id="section2">
        <div className="section-header"><div className="sec-num">5.2</div><h2 id="plane-figures">Centroid of Plane Figures</h2></div>
        <CentroidDiagram />
        <table className="data-table">
          <thead><tr><th>Shape</th><th>x̄</th><th>ȳ</th><th>Area</th></tr></thead>
          <tbody>
            <tr><td>Rectangle (b × h)</td><td>b/2</td><td>h/2</td><td>bh</td></tr>
            <tr><td>Triangle (base b, height h)</td><td>(x₁+x₂+x₃)/3</td><td>h/3 from base</td><td>½bh</td></tr>
            <tr><td>Circle (radius r)</td><td>r (centre)</td><td>r (centre)</td><td>πr²</td></tr>
            <tr><td>Semicircle (radius r, base on x-axis)</td><td>r</td><td>4r/3π ≈ 0.424r</td><td>πr²/2</td></tr>
            <tr><td>Quarter circle (r)</td><td>4r/3π</td><td>4r/3π</td><td>πr²/4</td></tr>
          </tbody>
        </table>
        <ExamTip><p>4r/3π = 4r/(3 × 3.1416) = 0.4244r. For a semicircle of r = 100mm, ȳ = 42.44mm from the diameter. This value appears in almost every composite section problem.</p></ExamTip>
      </section>

      {/* 5.3 */}
      <section className="section" id="section3">
        <div className="section-header"><div className="sec-num">5.3</div><h2 id="composite">Centroid of Composite Sections</h2></div>
        <FormulaBox title="Composite Section Formula" formula="\\bar{x} = \\frac{\\sum A_i \\bar{x}_i}{\\sum A_i} \\quad ; \\quad \\bar{y} = \\frac{\\sum A_i \\bar{y}_i}{\\sum A_i}"
          description="Divide into simple shapes → find A and centroid of each → apply weighted average. For cutouts/holes: use NEGATIVE area." />

        <NoteBox label="Method (Step-by-Step)">
          <p>1. Choose a reference axis (usually bottom edge for ȳ, left edge for x̄). 2. Divide the shape into rectangles, triangles, circles. 3. Find A, x̄, ȳ for each part. 4. Tabulate: Part | A | x̄ | ȳ | Ax̄ | Aȳ. 5. Apply the formula. For holes: subtract area and moments.</p>
        </NoteBox>

        <WorkedExample title="T-Section" given={['Flange: 120 mm × 20 mm (top)', 'Web: 20 mm × 80 mm (below flange)']}
          find="ȳ from the bottom" steps={[
            'Part 1 (Flange): $A_1 = 120 \\times 20 = 2400$ mm², $\\bar{y}_1 = 80 + 10 = 90$ mm',
            'Part 2 (Web): $A_2 = 20 \\times 80 = 1600$ mm², $\\bar{y}_2 = 40$ mm',
            '$\\bar{y} = \\frac{2400(90) + 1600(40)}{2400 + 1600} = \\frac{216000 + 64000}{4000} = \\frac{280000}{4000} = 70$ mm',
          ]} answer="ȳ = 70 mm from bottom" />

        <WorkedExample title="Unequal I-Section" given={['Top flange: 150 × 20 mm', 'Web: 20 × 100 mm', 'Bottom flange: 100 × 20 mm', 'Total height = 140 mm']}
          find="ȳ from bottom" steps={[
            'Part 1 (Top): $A_1 = 3000$ mm², $\\bar{y}_1 = 130$ mm',
            'Part 2 (Web): $A_2 = 2000$ mm², $\\bar{y}_2 = 70$ mm',
            'Part 3 (Bottom): $A_3 = 2000$ mm², $\\bar{y}_3 = 10$ mm',
            '$A = 3000 + 2000 + 2000 = 7000$ mm²',
            '$\\bar{y} = \\frac{3000(130) + 2000(70) + 2000(10)}{7000} = \\frac{390000 + 140000 + 20000}{7000} = 78.57$ mm',
          ]} answer="ȳ = 78.57 mm from bottom" />

        <WorkedExample title="L-Section (Unequal Angle)" given={['Vertical leg: 20 × 100 mm', 'Horizontal leg: 80 × 20 mm (at bottom)']}
          find="(x̄, ȳ) from bottom-left corner" steps={[
            'Part 1 (V): $A_1=2000$, $\\bar{x}_1=10$, $\\bar{y}_1=50$',
            'Part 2 (H): $A_2=1600$, $\\bar{x}_2=40$, $\\bar{y}_2=10$',
            '$\\bar{x} = \\frac{2000(10)+1600(40)}{3600} = \\frac{84000}{3600} = 23.33$ mm',
            '$\\bar{y} = \\frac{2000(50)+1600(10)}{3600} = \\frac{116000}{3600} = 32.22$ mm',
          ]} answer="(23.33, 32.22) mm from bottom-left" />

        <WorkedExample title="Rectangular Section with Circular Cutout" given={['Rectangle: 200 × 150 mm', 'Circular hole: diameter 60 mm, centre at (100, 100) from bottom-left']}
          find="Centroid of remaining section" steps={[
            'Rectangle: $A_1 = 30000$ mm², $\\bar{x}_1=100$, $\\bar{y}_1=75$',
            'Circle (cutout): $A_2 = \\pi(30)^2 = 2827.4$ mm² (negative), $\\bar{x}_2=100$, $\\bar{y}_2=100$',
            'Net area: $A = 30000 - 2827.4 = 27172.6$ mm²',
            '$\\bar{y} = \\frac{30000(75) - 2827.4(100)}{27172.6} = \\frac{2250000 - 282740}{27172.6} = \\frac{1967260}{27172.6} = 72.39$ mm',
            '$\\bar{x} = 100$ mm (symmetric about vertical centre line)',
          ]} answer="(100, 72.39) mm — shifted down from rectangle centroid due to hole" />
      </section>

      {/* 5.4 CG SOLIDS */}
      <section className="section" id="section4">
        <div className="section-header"><div className="sec-num">5.4</div><h2 id="solids">CG of Simple & Composite Solids</h2></div>
        <table className="data-table">
          <thead><tr><th>Solid</th><th>CG Position</th><th>Volume</th></tr></thead>
          <tbody>
            <tr><td>Cube (side a)</td><td>At geometric centre (a/2, a/2, a/2)</td><td>a³</td></tr>
            <tr><td>Cuboid (l × b × h)</td><td>At centre (l/2, b/2, h/2)</td><td>lbh</td></tr>
            <tr><td>Cylinder (r, h)</td><td>On axis at h/2 from base</td><td>πr²h</td></tr>
            <tr><td>Sphere (r)</td><td>At geometric centre</td><td>⁴⁄₃πr³</td></tr>
            <tr><td>Cone (r, h)</td><td>On axis at h/4 from base</td><td>⅓πr²h</td></tr>
            <tr><td>Hemisphere (r)</td><td>On axis at 3r/8 from flat base</td><td>⅔πr³</td></tr>
          </tbody>
        </table>

        <div className="subsection">
          <h3>Composite Solids (max 2 simple solids)</h3>
          <FormulaBox title="CG of Composite Solid" formula="\\bar{y} = \\frac{V_1 \\bar{y}_1 + V_2 \\bar{y}_2}{V_1 + V_2}" description="Same principle as area — use volume instead of area as the weight." />
        </div>
        <NoteBox label="WBSCTE Note"><p>The syllabus says &quot;No Problem&quot; for CG of solids — meaning theory only, no numerical problems. But knowing the table above is essential for viva and short answers.</p></NoteBox>
      </section>

      {/* QUESTIONS */}
      <section className="section" id="qbank">
        <div className="section-header"><div className="sec-num" style={{background:'#7b3f00'}}>Q</div><h2 id="questions">Expected Questions (WBSCTE)</h2></div>
        <div className="question-box">
          <div className="q-label">Short (2–5 marks)</div>
          <ul>
            <li>Define centroid and CG. How are they related?</li>
            <li>State the centroid positions for rectangle, triangle, circle, semicircle, quarter circle.</li>
            <li>Write the formula for centroid of a composite section.</li>
            <li>State the CG positions for cube, cylinder, cone, sphere, hemisphere.</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Numerical (10–15 marks)</div>
          <ul>
            <li>Find centroid of a T-section: flange 150×25, web 25×100.</li>
            <li>Find centroid of an unequal I-section: top 100×20, web 20×80, bottom 120×20.</li>
            <li>Find centroid of a channel section (C-section): flanges 80×15, web 15×100.</li>
            <li>A rectangle 200×150 has a circular hole of 50mm dia at centre. Find centroid of remaining area.</li>
            <li>Find centroid of a Z-section composed of three rectangles.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
