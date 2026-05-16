export default function IndustryConnect({ data }) {
  if (!data) return null;
  return (
    <section className="industry-connect">
      <h3>{data.title}</h3>
      <div className="industry-grid">
        {(data.examples || []).map((item) => (
          <article key={item.machine || item.application}>
            <strong>{item.machine || item.application}</strong>
            <p>{item.realWorld}</p>
            {item.fun && <small>{item.fun}</small>}
          </article>
        ))}
      </div>
    </section>
  );
}
