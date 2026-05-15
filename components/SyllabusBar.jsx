export default function SyllabusBar({
  group,
  groupLabel = 'Group',
  marks,
  marksLabel = 'marks',
  examType,
}) {
  return (
    <div
      style={{
        background: 'var(--paper-card)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '12px 18px',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        fontSize: 13,
        boxShadow: 'var(--shadow)',
      }}
    >
      {group && (
        <span
          style={{
            background: 'var(--navy)',
            color: 'white',
            padding: '3px 10px',
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          {groupLabel} {group}
        </span>
      )}
      {marks && (
        <span style={{ color: 'var(--ink-muted)' }}>
          <strong style={{ color: 'var(--accent)' }}>{marks}</strong> {marksLabel}
        </span>
      )}
      {examType && (
        <span style={{ color: 'var(--ink-muted)' }}>
          {examType}
        </span>
      )}
    </div>
  );
}
