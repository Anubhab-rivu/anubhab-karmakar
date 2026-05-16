'use client';

import { useState } from 'react';

export default function VivaBankAccordion({ questions = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="viva-bank">
      {questions.map((item, index) => (
        <article className="viva-item" key={item.question}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            <span>Q{index + 1}</span>
            {item.question}
          </button>
          {open === index && <p>{item.answer}</p>}
        </article>
      ))}
    </div>
  );
}
