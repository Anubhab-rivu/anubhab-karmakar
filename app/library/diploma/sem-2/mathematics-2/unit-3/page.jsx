'use client';
import UnitLayout from '@/components/UnitLayout';
import DefinitionCard from '@/components/DefinitionCard';
import FormulaBox from '@/components/FormulaBox';
import WorkedExample from '@/components/WorkedExample';
import NoteBox from '@/components/NoteBox';
import ExamTip from '@/components/ExamTip';


export default function MathUnit3() {
  return (
    <UnitLayout
      unitNum={3} unitTitle="Integral Calculus"
      unitDescription="Indefinite & definite integrals, substitution, parts, applications"
      subject="Mathematics-II" subjectSlug="mathematics-2"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE • Diploma Engineering"
      prevUnit={{ num: 2, title: "Coordinate Geometry 2D" }}
      nextUnit={{ num: 4, title: "Ordinary Differential Equations" }}
      syllabusGroup="B" syllabusMarks="15" examType="End Semester"
    >
      {/* 3.1 — INTRODUCTION */}
      <section className="section" id="section1">
        <div className="section-header">
          <div className="sec-num">3.1</div>
          <h2 id="introduction">Introduction to Integration</h2>
        </div>
        <DefinitionCard
          term="Integration"
          alternateNames="Anti-Differentiation"
          definition="Integration is the <strong>reverse process of differentiation</strong>. If the derivative of F(x) is f(x), then the integral of f(x) is F(x) + C. It is used to find areas, volumes, and accumulated quantities."
          example="Since d/dx(x³) = 3x², we get ∫3x² dx = x³ + C"
        />
        <FormulaBox
          title="Fundamental Theorem"
          formula="\\text{If } \\frac{d}{dx}[F(x)] = f(x), \\text{ then } \\int f(x)\\,dx = F(x) + C"
          description="C is the constant of integration (arbitrary constant)."
        />
      </section>

      {/* 3.2 — STANDARD INTEGRALS */}
      <section className="section" id="section2">
        <div className="section-header">
          <div className="sec-num">3.2</div>
          <h2 id="standard-integrals">Standard Integrals</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Function f(x)</th><th>Integral ∫f(x) dx</th></tr>
          </thead>
          <tbody>
            <tr><td>xⁿ (n ≠ −1)</td><td>xⁿ⁺¹/(n+1) + C</td></tr>
            <tr><td>1/x</td><td>ln|x| + C</td></tr>
            <tr><td>eˣ</td><td>eˣ + C</td></tr>
            <tr><td>aˣ</td><td>aˣ/ln(a) + C</td></tr>
            <tr><td>sin x</td><td>−cos x + C</td></tr>
            <tr><td>cos x</td><td>sin x + C</td></tr>
            <tr><td>sec²x</td><td>tan x + C</td></tr>
            <tr><td>cosec²x</td><td>−cot x + C</td></tr>
            <tr><td>sec x tan x</td><td>sec x + C</td></tr>
            <tr><td>1/√(1−x²)</td><td>sin⁻¹x + C</td></tr>
            <tr><td>1/(1+x²)</td><td>tan⁻¹x + C</td></tr>
          </tbody>
        </table>
        <ExamTip>
          <p>Memorize all standard integrals — they form the building blocks for every integration technique. Most exam problems reduce to standard forms after substitution or manipulation.</p>
        </ExamTip>
      </section>

      {/* 3.3 — INTEGRATION BY SUBSTITUTION */}
      <section className="section" id="section3">
        <div className="section-header">
          <div className="sec-num">3.3</div>
          <h2 id="substitution">Integration by Substitution</h2>
        </div>
        <FormulaBox
          title="Substitution Rule"
          formula="\\int f(g(x)) \\cdot g'(x)\\,dx = \\int f(u)\\,du \\quad \\text{where } u = g(x)"
          description="Replace the inner function with u, compute du, and integrate in terms of u."
        />
        <WorkedExample
          title="Substitution — Basic"
          given={['Evaluate $\\int 2x \\cos(x^2)\\,dx$']}
          find="The indefinite integral"
          steps={[
            'Let $u = x^2$, then $du = 2x\\,dx$',
            'The integral becomes: $\\int \\cos(u)\\,du$',
            '$= \\sin(u) + C$',
            'Substitute back: $= \\sin(x^2) + C$',
          ]}
          answer="$\\sin(x^2) + C$"
        />
        <WorkedExample
          title="Substitution — Trigonometric"
          given={['Evaluate $\\int \\frac{\\sin x}{1 + \\cos^2 x}\\,dx$']}
          find="The indefinite integral"
          steps={[
            'Let $u = \\cos x$, then $du = -\\sin x\\,dx$',
            'Integral becomes: $-\\int \\frac{du}{1 + u^2}$',
            '$= -\\tan^{-1}(u) + C$',
            'Substitute back: $= -\\tan^{-1}(\\cos x) + C$',
          ]}
          answer="$-\\tan^{-1}(\\cos x) + C$"
        />
      </section>



      {/* 3.4 — INTEGRATION BY PARTS */}
      <section className="section" id="section4">
        <div className="section-header">
          <div className="sec-num">3.4</div>
          <h2 id="by-parts">Integration by Parts</h2>
        </div>
        <FormulaBox
          title="Integration by Parts"
          formula="\\int u\\,dv = uv - \\int v\\,du"
          description="Choose u using ILATE rule: Inverse trig → Logarithmic → Algebraic → Trigonometric → Exponential"
        />
        <NoteBox label="ILATE Rule">
          <p>When choosing which function to set as &apos;u&apos;, follow the priority: <strong>I</strong>nverse trig &gt; <strong>L</strong>ogarithmic &gt; <strong>A</strong>lgebraic &gt; <strong>T</strong>rigonometric &gt; <strong>E</strong>xponential. The function higher in the list becomes u.</p>
        </NoteBox>
        <WorkedExample
          title="Integration by Parts"
          given={['Evaluate $\\int x \\cdot e^x\\,dx$']}
          find="The indefinite integral"
          steps={[
            'By ILATE: $u = x$ (Algebraic), $dv = e^x\\,dx$',
            '$du = dx$, $v = e^x$',
            'Apply formula: $\\int x \\cdot e^x\\,dx = x \\cdot e^x - \\int e^x\\,dx$',
            '$= x \\cdot e^x - e^x + C = e^x(x - 1) + C$',
          ]}
          answer="$e^x(x-1) + C$"
        />
      </section>

      {/* 3.5 — PARTIAL FRACTIONS */}
      <section className="section" id="section5">
        <div className="section-header">
          <div className="sec-num">3.5</div>
          <h2 id="partial-fractions">Integration by Partial Fractions</h2>
        </div>
        <p>When integrating rational functions P(x)/Q(x), decompose into simpler fractions:</p>
        <table className="data-table">
          <thead><tr><th>Factor in Q(x)</th><th>Partial Fraction Form</th></tr></thead>
          <tbody>
            <tr><td>(ax + b)</td><td>A/(ax + b)</td></tr>
            <tr><td>(ax + b)²</td><td>A/(ax+b) + B/(ax+b)²</td></tr>
            <tr><td>(ax² + bx + c)</td><td>(Ax + B)/(ax² + bx + c)</td></tr>
          </tbody>
        </table>
        <WorkedExample
          title="Partial Fractions"
          given={['Evaluate $\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx$']}
          find="The indefinite integral"
          steps={[
            'Decompose: $\\frac{3x+5}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$',
            'Multiply through: $3x+5 = A(x+2) + B(x+1)$',
            'Set $x = -1$: $2 = A(1) \\Rightarrow A = 2$',
            'Set $x = -2$: $-1 = B(-1) \\Rightarrow B = 1$',
            '$\\int \\frac{2}{x+1} + \\frac{1}{x+2}\\,dx = 2\\ln|x+1| + \\ln|x+2| + C$',
          ]}
          answer="$2\\ln|x+1| + \\ln|x+2| + C$"
        />
      </section>

      {/* 3.6 — DEFINITE INTEGRALS */}
      <section className="section" id="section6">
        <div className="section-header">
          <div className="sec-num">3.6</div>
          <h2 id="definite-integrals">Definite Integrals</h2>
        </div>
        <FormulaBox
          title="Definite Integral"
          formula="\\int_a^b f(x)\\,dx = F(b) - F(a)"
          description="Evaluate the antiderivative at upper and lower limits, then subtract."
          variables={[
            { symbol: 'a', name: 'Lower limit', unit: '—' },
            { symbol: 'b', name: 'Upper limit', unit: '—' },
            { symbol: 'F(x)', name: 'Antiderivative of f(x)', unit: '—' },
          ]}
        />
        <WorkedExample
          title="Definite Integral — Area"
          given={['Evaluate $\\int_0^2 (3x^2 + 2x)\\,dx$']}
          find="The numerical value"
          steps={[
            'Find antiderivative: $F(x) = x^3 + x^2$',
            'Apply limits: $F(2) - F(0)$',
            '$= (8 + 4) - (0 + 0) = 12$',
          ]}
          answer="$12$"
        />
      </section>

      {/* 3.7 — APPLICATIONS */}
      <section className="section" id="section7">
        <div className="section-header">
          <div className="sec-num">3.7</div>
          <h2 id="applications">Applications of Integration</h2>
        </div>
        <FormulaBox
          title="Area Under a Curve"
          formula="A = \\int_a^b f(x)\\,dx"
          description="Gives the area between the curve y = f(x), the x-axis, and vertical lines x = a, x = b."
        />
        <FormulaBox
          title="Area Between Two Curves"
          formula="A = \\int_a^b [f(x) - g(x)]\\,dx"
          description="Where f(x) ≥ g(x) in the interval [a, b]."
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
            <li>Evaluate: ∫(3x² + 4x − 5) dx</li>
            <li>Integrate by substitution: ∫cos(3x+2) dx</li>
            <li>State the ILATE rule for integration by parts.</li>
            <li>Evaluate: ∫₀¹ eˣ dx</li>
          </ul>
        </div>
        <div className="question-box" style={{marginTop:14}}>
          <div className="q-label">Long Answer (5–10 marks)</div>
          <ul>
            <li>Evaluate ∫x²·eˣ dx using integration by parts.</li>
            <li>Evaluate ∫(2x+3)/((x+1)(x+3)) dx using partial fractions.</li>
            <li>Find the area bounded by y = x², x-axis, and lines x = 1, x = 3.</li>
          </ul>
        </div>
      </section>
    </UnitLayout>
  );
}
