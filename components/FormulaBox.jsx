'use client';

import { useState } from 'react';
import katex from 'katex';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeTex(value) {
  return String(value || '')
    .trim()
    .replace(/\\\\(?=[A-Za-z%,;:{}])/g, '\\');
}

export default function FormulaBox({ title, formula, description, variables }) {
  const [copied, setCopied] = useState(false);
  const normalizedFormula = normalizeTex(formula);

  const renderFormula = (tex) => {
    try {
      return katex.renderToString(tex, {
        displayMode: true,
        throwOnError: false,
        strict: false,
        trust: true,
        output: 'htmlAndMathml',
      });
    } catch {
      return `<pre class="formula-fallback">${escapeHtml(tex)}</pre>`;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(normalizedFormula);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard access can be blocked in older browsers. */
    }
  };

  return (
    <div className="formula-box">
      <div className="formula-label">{title || 'Formula'}</div>
      <div
        className="formula-content"
        dangerouslySetInnerHTML={{ __html: renderFormula(normalizedFormula) }}
      />

      {description && <p className="formula-description">{description}</p>}

      {variables && variables.length > 0 && (
        <div className="formula-table-wrap">
          <table className="formula-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {variables.map((v, i) => (
                <tr key={i}>
                  <td className="formula-symbol">{v.symbol}</td>
                  <td>{v.name}</td>
                  <td className="formula-unit">{v.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button className="formula-copy-btn" onClick={handleCopy} type="button">
        {copied ? 'Copied' : 'Copy LaTeX'}
      </button>
    </div>
  );
}
