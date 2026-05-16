export default function LabSheet({ lab }) {
  if (!lab) return null;
  return (
    <article className="lab-sheet">
      <h3>{lab.experimentName}</h3>
      <p><strong>Aim:</strong> {lab.aim}</p>
      <div className="lab-grid">
        <div>
          <h4>Apparatus</h4>
          <ul>{(lab.apparatus || []).map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h4>Theory</h4>
          <p>{lab.theory}</p>
        </div>
      </div>
      <h4>Procedure</h4>
      <ol>{(lab.procedure || []).map((item) => <li key={item}>{item}</li>)}</ol>
      {lab.observationTable && (
        <div className="table-scroll">
          <table className="ak-table compact">
            <thead><tr>{lab.observationTable.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {Array.from({ length: lab.observationTable.rows || 4 }, (_, i) => (
                <tr key={i}>{lab.observationTable.headers.map((h) => <td key={h}>&nbsp;</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <h4>Precautions</h4>
      <ul>{(lab.precautions || []).map((item) => <li key={item}>{item}</li>)}</ul>
      {lab.result && <p className="lab-result"><strong>Result:</strong> {lab.result}</p>}
    </article>
  );
}
