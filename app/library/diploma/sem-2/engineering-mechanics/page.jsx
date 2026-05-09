import Link from 'next/link';
import { syllabusData } from '@/lib/syllabus';
import { ProgressBar } from '@/components/ProgressTracker';

export const metadata = { title: 'Engineering Mechanics — Diploma Sem 2 | AK Notes Library' };

const subject = syllabusData.diploma.semesters['sem-2'].subjects['engineering-mechanics'];

export default function EnggMechPage() {
  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">WBSCTE • Diploma Sem 2</div>
          <h1>{subject.label}</h1>
          <p className="subtitle">Code: {subject.code} • Credits: {subject.credits} • {subject.hours}</p>
        </div>
      </header>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
        <ProgressBar subjectSlug="engineering-mechanics" totalUnits={subject.units.length} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {subject.units.map((unit) => (
            <Link
              key={unit.num}
              href={`/library/diploma/sem-2/engineering-mechanics/unit-${unit.num}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                background: 'var(--paper-card)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '18px 22px',
                textDecoration: 'none',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.2s',
              }}
            >
              <div style={{
                background: 'var(--accent)',
                color: 'white',
                fontFamily: 'Merriweather, serif',
                fontWeight: 700,
                fontSize: 18,
                width: 48, height: 48,
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {unit.num}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 16, color: 'var(--navy)', margin: '0 0 4px' }}>
                  {unit.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--ink-muted)', margin: 0 }}>{unit.topics}</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                {unit.full && <span style={{ fontSize: 10, background: 'var(--green-light)', color: 'var(--green)', padding: '2px 8px', borderRadius: 4, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>Full Content</span>}
                {unit.hours && <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{unit.hours}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
    </>
  );
}
