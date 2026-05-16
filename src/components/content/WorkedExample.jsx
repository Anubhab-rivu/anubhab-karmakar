'use client';

import { useMemo, useState } from 'react';
import katex from 'katex';

function renderMathText(text) {
  const raw = String(text || '');
  return raw
    .replace(/\$\$(.*?)\$\$/gs, (_, tex) => katex.renderToString(tex, { displayMode: true, throwOnError: false, strict: false }))
    .replace(/\$(.*?)\$/g, (_, tex) => katex.renderToString(tex, { displayMode: false, throwOnError: false, strict: false }));
}

function getStepText(step) {
  return typeof step === 'string' ? step : step.text;
}

export default function WorkedExample({ title, given = [], find, solution, steps, answer, examTip }) {
  const allSteps = useMemo(() => solution || steps || [], [solution, steps]);
  const [visible, setVisible] = useState(1);
  const shown = allSteps.slice(0, visible);

  return (
    <article className="worked-example">
      <div className="example-kicker">Worked Example</div>
      <h3>{title}</h3>
      <div className="example-two">
        <div>
          <strong>GIVEN</strong>
          <ul>
            {given.map((item) => <li key={item} dangerouslySetInnerHTML={{ __html: renderMathText(item) }} />)}
          </ul>
        </div>
        <div>
          <strong>FIND</strong>
          <p dangerouslySetInnerHTML={{ __html: renderMathText(find) }} />
        </div>
      </div>
      <ol className="reveal-steps">
        {shown.map((step, index) => (
          <li key={`${title}-${index}`}>
            <span>{typeof step === 'object' && step.step ? step.step : index + 1}</span>
            <div dangerouslySetInnerHTML={{ __html: renderMathText(getStepText(step)) }} />
          </li>
        ))}
      </ol>
      <div className="example-actions">
        <button type="button" onClick={() => setVisible((value) => Math.min(allSteps.length, value + 1))} disabled={visible >= allSteps.length}>Next Step</button>
        <button type="button" onClick={() => setVisible(allSteps.length)}>Show All</button>
      </div>
      {visible >= allSteps.length && answer && (
        <div className="boxed-answer" dangerouslySetInnerHTML={{ __html: renderMathText(answer) }} />
      )}
      {examTip && <p className="exam-tip-line">{examTip}</p>}
    </article>
  );
}
