export default function ComparisonTable({ table }) {
  if (!table) return null;
  return (
    <div className="comparison-block">
      <h3>{table.title}</h3>
      <div className="table-scroll">
        <table className="ak-table comparison-table">
          <thead>
            <tr>{table.headers.map((header) => <th key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={`${table.title}-${index}`}>
                {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
