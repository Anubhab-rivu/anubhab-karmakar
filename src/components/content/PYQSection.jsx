export default function PYQSection({ questions = [] }) {
  return (
    <div className="pyq-grid">
      {questions.map((item, index) => (
        <article className="pyq-card" key={`${item.year}-${index}`}>
          <div><strong>{item.year}</strong><span>{item.marks} marks</span></div>
          <p>{item.question}</p>
        </article>
      ))}
    </div>
  );
}
