'use client';

import { useMemo, useState } from 'react';

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

export default function QuizModule({ questions = [] }) {
  const [round, setRound] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const ordered = useMemo(() => (round === 0 ? questions : shuffle(questions)), [questions, round]);
  const selected = answers[index];
  const score = Object.entries(answers).filter(([i, value]) => ordered[Number(i)]?.correct === value).length;

  if (index >= ordered.length) {
    const missed = ordered
      .map((question, i) => (answers[i] === question.correct ? null : i + 1))
      .filter(Boolean);
    return (
      <div className="quiz-card">
        <h3>{score}/{ordered.length} - {score >= 4 ? 'Excellent' : 'Review and retry'}</h3>
        <p>{missed.length ? `Review Question ${missed.join(', ')}.` : 'Every answer is correct.'}</p>
        <button type="button" onClick={() => { setRound((r) => r + 1); setIndex(0); setAnswers({}); }}>Retry</button>
      </div>
    );
  }

  const current = ordered[index];
  if (!current) return null;

  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <span>Question {index + 1} of {ordered.length}</span>
        <i style={{ width: `${((index + 1) / ordered.length) * 100}%` }} />
      </div>
      <h3>{current.question}</h3>
      <div className="quiz-options">
        {current.options.map((option, optionIndex) => {
          const isCorrect = optionIndex === current.correct;
          const isSelected = selected === optionIndex;
          const cls = selected === undefined ? '' : isCorrect ? 'correct' : isSelected ? 'wrong' : '';
          return (
            <button
              type="button"
              className={cls}
              key={option}
              disabled={selected !== undefined}
              onClick={() => setAnswers((value) => ({ ...value, [index]: optionIndex }))}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected !== undefined && (
        <div className="quiz-explanation">
          <strong>{selected === current.correct ? 'Correct' : 'Not quite'}</strong>
          <p>{current.explanation}</p>
          <button type="button" onClick={() => setIndex(index + 1)}>{index + 1 === ordered.length ? 'See Score' : 'Next Question'}</button>
        </div>
      )}
    </div>
  );
}
