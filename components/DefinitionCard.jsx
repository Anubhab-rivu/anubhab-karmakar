export default function DefinitionCard({ term, definition, alternateNames, example }) {
  return (
    <div className="def-card">
      <div className="def-header">
        <span className="def-term">{term}</span>
        {alternateNames && (
          <span className="def-tag">{alternateNames}</span>
        )}
      </div>
      <div className="def-body">
        <p dangerouslySetInnerHTML={{ __html: definition }} />
        {example && (
          <p
            style={{ marginTop: 10, fontStyle: 'italic', fontSize: '14px', color: 'var(--ink-muted)' }}
          >
            <strong>Example:</strong> {example}
          </p>
        )}
      </div>
    </div>
  );
}
