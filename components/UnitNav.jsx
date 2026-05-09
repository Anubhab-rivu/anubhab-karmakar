import Link from 'next/link';

export default function UnitNav({ prevUnit, nextUnit, basePath }) {
  return (
    <div
      className="unit-nav"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        marginTop: 40,
        borderTop: '2px solid var(--border)',
        gap: 16,
      }}
    >
      {prevUnit ? (
        <Link
          href={`${basePath}/unit-${prevUnit.num}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 16px',
            border: '1px solid var(--border)',
            borderRadius: 8,
            textDecoration: 'none',
            color: 'var(--navy)',
            background: 'var(--paper-card)',
            transition: 'all 0.2s',
            flex: 1,
          }}
        >
          <span style={{ fontSize: 18 }}>◀</span>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
              Previous
            </div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>
              Unit {prevUnit.num}: {prevUnit.title}
            </div>
          </div>
        </Link>
      ) : (
        <div style={{ flex: 1 }} />
      )}

      {nextUnit ? (
        <Link
          href={`${basePath}/unit-${nextUnit.num}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 16px',
            border: '1px solid var(--border)',
            borderRadius: 8,
            textDecoration: 'none',
            color: 'var(--navy)',
            background: 'var(--paper-card)',
            transition: 'all 0.2s',
            flex: 1,
            justifyContent: 'flex-end',
            textAlign: 'right',
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
              Next
            </div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>
              Unit {nextUnit.num}: {nextUnit.title}
            </div>
          </div>
          <span style={{ fontSize: 18 }}>▶</span>
        </Link>
      ) : (
        <div style={{ flex: 1 }} />
      )}
    </div>
  );
}
