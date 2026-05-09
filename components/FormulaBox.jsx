'use client';

import { useRef, useState } from 'react';
import katex from 'katex';

export default function FormulaBox({ title, formula, description, variables }) {
  const [copied, setCopied] = useState(false);
  const formulaRef = useRef(null);

  const renderFormula = (tex) => {
    try {
      return katex.renderToString(tex, {
        displayMode: true,
        throwOnError: false,
        trust: true,
      });
    } catch {
      return tex;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formula);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: select text */
    }
  };

  return (
    <div className="formula-box">
      <div className="formula-label">{title || 'Formula'}</div>
      <div
        ref={formulaRef}
        className="formula-content"
        style={{ margin: '8px 0', overflow: 'auto' }}
        dangerouslySetInnerHTML={{ __html: renderFormula(formula) }}
      />
      {description && (
        <p style={{ fontSize: '13.5px', color: '#5a3e00', margin: '8px 0 0' }}>
          {description}
        </p>
      )}
      {variables && variables.length > 0 && (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: 10,
            fontSize: 13,
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: '1px solid #e2c17a',
                textAlign: 'left',
              }}
            >
              <th style={{ padding: '4px 8px', color: '#7a6200' }}>Symbol</th>
              <th style={{ padding: '4px 8px', color: '#7a6200' }}>Name</th>
              <th style={{ padding: '4px 8px', color: '#7a6200' }}>Unit</th>
            </tr>
          </thead>
          <tbody>
            {variables.map((v, i) => (
              <tr
                key={i}
                style={{ borderBottom: '1px solid rgba(226,193,122,0.4)' }}
              >
                <td
                  style={{
                    padding: '4px 8px',
                    fontFamily: 'Source Code Pro, monospace',
                    fontWeight: 600,
                  }}
                >
                  {v.symbol}
                </td>
                <td style={{ padding: '4px 8px' }}>{v.name}</td>
                <td style={{ padding: '4px 8px', color: '#7a6200' }}>
                  {v.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={handleCopy}
        style={{
          marginTop: 8,
          padding: '4px 12px',
          fontSize: 11,
          fontWeight: 600,
          border: '1px solid #e2c17a',
          borderRadius: 4,
          background: 'transparent',
          color: '#7a6200',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {copied ? '✓ Copied!' : '📋 Copy LaTeX'}
      </button>
    </div>
  );
}
