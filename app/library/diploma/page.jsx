import Link from 'next/link';

export const metadata = { title: 'Diploma Engineering | AK Notes Library' };

export default function DiplomaPage() {
  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">WBSCTE • Diploma Engineering</div>
          <h1>Diploma in Mechanical Engineering</h1>
          <p className="subtitle">Select a semester to view subjects and notes</p>
        </div>
      </header>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '60px 24px' }}>
        <Link
          href="/library/diploma/sem-2"
          style={{
            display: 'block',
            background: 'var(--paper-card)',
            border: '2px solid var(--border)',
            borderRadius: 12,
            padding: '28px 24px',
            textDecoration: 'none',
            boxShadow: 'var(--shadow)',
          }}
        >
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, color: 'var(--navy)', marginBottom: 8 }}>
            📘 Semester 2
          </h2>
          <p style={{ color: 'var(--ink-muted)', fontSize: 14, margin: 0 }}>
            5 subjects • Engineering Mechanics, Mathematics-II, Applied Physics-II, FEEE, IT Systems
          </p>
        </Link>
      </div>
      <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
    </>
  );
}
