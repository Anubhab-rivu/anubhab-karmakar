'use client';

import { useEffect, useMemo, useState } from 'react';

export default function FlashcardDeck({ cards = [] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState({});
  const card = cards[index];
  const remaining = useMemo(() => cards.length - Object.keys(known).filter((key) => known[key] === 'known').length, [cards.length, known]);

  useEffect(() => {
    const handler = (event) => {
      if (event.key === 'ArrowRight') { setIndex((value) => Math.min(cards.length - 1, value + 1)); setFlipped(false); }
      if (event.key === 'ArrowLeft') { setIndex((value) => Math.max(0, value - 1)); setFlipped(false); }
      if (event.key === ' ') { event.preventDefault(); setFlipped((value) => !value); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cards.length]);

  if (!card) return null;

  return (
    <div className="flashcard-module">
      <div className="flashcard-status">Card {index + 1} of {cards.length} | Remaining: {remaining}</div>
      <button type="button" className={`flashcard ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <span className="flashcard-face front">
          <strong>{card.term}</strong>
          <small>Press space or click to flip</small>
        </span>
        <span className="flashcard-face back">
          <strong>{card.definition}</strong>
          {card.formula && <em>{card.formula}</em>}
          {card.diagramRef && <small>Diagram: {card.diagramRef}</small>}
        </span>
      </button>
      <div className="flashcard-actions">
        <button type="button" onClick={() => setKnown((value) => ({ ...value, [card.term]: 'known' }))}>Mark as known</button>
        <button type="button" onClick={() => setKnown((value) => ({ ...value, [card.term]: 'unsure' }))}>Mark unsure</button>
        <button type="button" onClick={() => { setIndex(Math.max(0, index - 1)); setFlipped(false); }}>Prev</button>
        <button type="button" onClick={() => { setIndex(Math.min(cards.length - 1, index + 1)); setFlipped(false); }}>Next</button>
      </div>
    </div>
  );
}
