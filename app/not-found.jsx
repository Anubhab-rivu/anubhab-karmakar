import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--paper)',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>📖</div>
      <h1 style={{
        fontFamily: 'Merriweather, serif',
        fontSize: 'clamp(28px, 5vw, 42px)',
        color: 'var(--navy)',
        marginBottom: 12,
      }}>
        Page Not Found
      </h1>
      <p style={{
        color: 'var(--ink-muted)',
        fontSize: 16,
        maxWidth: 400,
        marginBottom: 32,
        lineHeight: 1.6,
      }}>
        The notes you&apos;re looking for don&apos;t exist yet, or the URL might be incorrect.
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            background: 'var(--navy)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
          }}
        >
          🏠 Portfolio
        </Link>
        <Link
          href="/library"
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
          }}
        >
          📚 Notes Library
        </Link>
      </div>
    </div>
  );
}
