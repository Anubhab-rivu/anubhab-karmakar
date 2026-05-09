import Link from 'next/link';
import { syllabusData } from '@/lib/syllabus';

export const metadata = { title: 'Semester 2 — Diploma | AK Notes Library' };

const subjects = syllabusData.diploma.semesters['sem-2'].subjects;

export default function Sem2Page() {
  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">WBSCTE • Diploma Engineering</div>
          <h1>Semester 2 — Subjects</h1>
          <p className="subtitle">Select a subject to view unit-wise notes</p>
        </div>
      </header>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {Object.entries(subjects).map(([slug, subj]) => (
            <Link
              key={slug}
              href={`/library/diploma/sem-2/${slug}`}
              style={{
                display: 'block',
                background: 'var(--paper-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '24px',
                textDecoration: 'none',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 17, color: 'var(--navy)', margin: 0, flex: 1 }}>
                  {subj.label}
                </h3>
                <span style={{ fontSize: 11, color: 'var(--ink-muted)', background: 'var(--paper-warm)', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>
                  {subj.code}
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', margin: '0 0 12px' }}>
                {subj.units.length} units • {subj.credits} credits
              </p>
              <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                View Notes →
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
    </>
  );
}
