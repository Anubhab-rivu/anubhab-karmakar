export default function ConceptTable({ concepts = [] }) {
  return (
    <div className="table-scroll">
      <table className="ak-table concept-table">
        <thead>
          <tr>
            <th>Concept</th>
            <th>Deep Explanation</th>
            <th>Common Mistake</th>
            <th>Formula</th>
          </tr>
        </thead>
        <tbody>
          {concepts.map((item) => (
            <tr key={item.term}>
              <td>
                <strong>{item.term}</strong>
                {item.unit_ && <small>Unit: {item.unit_}</small>}
              </td>
              <td>
                <p>{item.definition}</p>
                <p>{item.deepExplanation}</p>
                {item.examUse && <em>{item.examUse}</em>}
              </td>
              <td>{item.commonMistake}</td>
              <td>{item.formula || 'Conceptual relation'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
