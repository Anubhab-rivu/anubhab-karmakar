'use client';

import { useState } from 'react';
import katex from 'katex';

export default function WorkedExample({ title, given, find, steps, answer }) {
  const [showVerify, setShowVerify] = useState(false);

  const renderKatex = (text) => {
    if (!text) return '';
    return text.replace(/\$\$(.*?)\$\$/g, (_, tex) => {
      try {
        return katex.renderToString(tex, { displayMode: true, throwOnError: false });
      } catch { return tex; }
    }).replace(/\$(.*?)\$/g, (_, tex) => {
      try {
        return katex.renderToString(tex, { displayMode: false, throwOnError: false });
      } catch { return tex; }
    });
  };

  return (
    <div className="example-box">
      <div className="example-label">Worked Example</div>
      <h4
        style={{
          fontFamily: 'Merriweather, serif',
          fontSize: 15,
          fontWeight: 700,
          color: 'var(--green)',
          marginBottom: 12,
        }}
      >
        {title}
      </h4>

      {given && given.length > 0 && (
        <div style={{ marginBottom: 10 }}>
          <strong style={{ color: 'var(--green)', fontSize: 13 }}>GIVEN:</strong>
          <ul style={{ paddingLeft: 20, marginTop: 4, fontSize: 14 }}>
            {given.map((g, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: renderKatex(g) }} />
            ))}
          </ul>
        </div>
      )}

      {find && (
        <div style={{ marginBottom: 10 }}>
          <strong style={{ color: 'var(--green)', fontSize: 13 }}>FIND:</strong>
          <span
            style={{ marginLeft: 8, fontSize: 14 }}
            dangerouslySetInnerHTML={{ __html: renderKatex(find) }}
          />
        </div>
      )}

      {steps && steps.length > 0 && (
        <div style={{ marginBottom: 10 }}>
          <strong style={{ color: 'var(--green)', fontSize: 13 }}>SOLUTION:</strong>
          <ol className="step-list" style={{ marginTop: 8 }}>
            {steps.map((step, i) => (
              <li key={i}>
                <div className="step-num" style={{ background: 'var(--green)' }}>
                  {i + 1}
                </div>
                <div
                  className="step-text"
                  dangerouslySetInnerHTML={{ __html: renderKatex(step) }}
                />
              </li>
            ))}
          </ol>
        </div>
      )}

      {answer && (
        <div
          style={{
            background: 'rgba(26, 107, 58, 0.1)',
            border: '1px solid rgba(26, 107, 58, 0.3)',
            borderRadius: 6,
            padding: '10px 14px',
            marginTop: 12,
          }}
        >
          <strong style={{ color: 'var(--green)', fontSize: 13 }}>ANSWER: </strong>
          <span dangerouslySetInnerHTML={{ __html: renderKatex(answer) }} />
        </div>
      )}

      <button
        onClick={() => setShowVerify(!showVerify)}
        style={{
          marginTop: 12,
          padding: '6px 14px',
          fontSize: 12,
          fontWeight: 600,
          border: '1px solid rgba(26,107,58,0.3)',
          borderRadius: 4,
          background: 'transparent',
          color: 'var(--green)',
          cursor: 'pointer',
        }}
      >
        {showVerify ? '▾ Hide verification' : '▸ Check your answer'}
      </button>

      {showVerify && (
        <div
          style={{
            marginTop: 8,
            padding: '10px 14px',
            fontSize: 13,
            color: 'var(--ink-light)',
            background: 'rgba(26, 107, 58, 0.05)',
            borderRadius: 4,
          }}
        >
          ✓ Verified — the answer matches all given conditions. Try substituting
          the answer back into the original equations to confirm equilibrium is
          satisfied.
        </div>
      )}
    </div>
  );
}
