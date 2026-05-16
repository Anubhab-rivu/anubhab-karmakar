'use client';

import { useState } from 'react';
import katex from 'katex';

function renderTex(tex) {
  try {
    return katex.renderToString(String(tex || ''), {
      displayMode: true,
      throwOnError: false,
      strict: false,
      output: 'htmlAndMathml',
    });
  } catch {
    return String(tex || '');
  }
}

function groupFormulas(formulas = []) {
  return formulas.reduce((acc, item) => {
    const group = item.group || item.category || 'Core Relations';
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export default function FormulaSheet({ formulas = [] }) {
  const [copied, setCopied] = useState('');
  const grouped = groupFormulas(formulas);

  const copyFormula = async (latex, name) => {
    try {
      await navigator.clipboard.writeText(latex);
      setCopied(name);
      window.setTimeout(() => setCopied(''), 1600);
    } catch {
      setCopied('');
    }
  };

  return (
    <div className="formula-sheet">
      {Object.entries(grouped).map(([group, items]) => (
        <section className="formula-group" key={group}>
          <h3>{group}</h3>
          {items.map((formula) => (
            <article className="formula-card" key={formula.name}>
              <div className="formula-card-head">
                <strong>{formula.name}</strong>
                <button type="button" onClick={() => copyFormula(formula.latex, formula.name)}>
                  {copied === formula.name ? 'Copied' : 'Copy LaTeX'}
                </button>
              </div>
              <div className="formula-render" dangerouslySetInnerHTML={{ __html: renderTex(formula.latex) }} />
              {formula.description && <p>{formula.description}</p>}
              {(formula.symbols || formula.symbolTable) && (
                <div className="table-scroll">
                  <table className="ak-table compact">
                    <thead>
                      <tr><th>Symbol</th><th>Name</th><th>Unit</th></tr>
                    </thead>
                    <tbody>
                      {(formula.symbols || formula.symbolTable).map((row) => (
                        <tr key={`${formula.name}-${row.symbol}`}>
                          <td><code>{row.symbol}</code></td>
                          <td>{row.name}</td>
                          <td>{row.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}
