import SidebarTOC from './SidebarTOC';
import BreadcrumbNav from './BreadcrumbNav';
import DarkModeToggle from './DarkModeToggle';
import ShareButton from './ShareButton';
import SyllabusBar from './SyllabusBar';
import UnitNav from './UnitNav';
import ProgressTracker from './ProgressTracker';
import SearchButton from './SearchButton';

import Link from 'next/link';

export default function UnitLayout({
  unitNum,
  unitTitle,
  unitDescription,
  subject,
  subjectSlug,
  semester,
  degree,
  degreeBadge,
  prevUnit,
  nextUnit,
  syllabusGroup,
  syllabusMarks,
  examType,
  children,
}) {
  const basePath = `/library/${degree}/${semester}/${subjectSlug}`;

  return (
    <>
      {/* STICKY NAVBAR */}
      <nav
        style={{
          background: 'var(--navy)',
          color: 'white',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, minWidth: 0 }}>
          <Link
            href="/library"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              fontSize: 16,
              whiteSpace: 'nowrap',
            }}
          >
            📚 AK Notes
          </Link>
          <BreadcrumbNav />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SearchButton />
          <DarkModeToggle />
          <ShareButton title={`${unitTitle} — ${subject} | AK Notes`} />
        </div>
      </nav>

      {/* PAGE HEADER */}
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">
            {degreeBadge || 'WBSCTE • Diploma Engineering'}
          </div>
          <h1>Unit {unitNum}: {unitTitle}</h1>
          <p className="subtitle">
            {subject} — {semester.replace('sem-', 'Semester ')} • Mechanical Engineering
          </p>
          <div className="meta-row">
            <div className="meta-item">
              <span className="meta-dot" />
              By Anubhab Karmakar • NHIT
            </div>
            {unitDescription && (
              <div className="meta-item">
                <span className="meta-dot" />
                {unitDescription}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="page-body">
        {/* SIDEBAR */}
        <SidebarTOC />

        {/* MAIN CONTENT */}
        <main className="main-content">
          {/* UNIT BANNER */}
          <div className="unit-banner">
            <div className="unit-num">U{unitNum}</div>
            <div className="unit-text">
              <h2>{unitTitle}</h2>
              {unitDescription && <p>{unitDescription}</p>}
            </div>
          </div>

          {/* SYLLABUS BAR */}
          {syllabusGroup && (
            <SyllabusBar
              group={syllabusGroup}
              marks={syllabusMarks}
              examType={examType}
            />
          )}



          {/* CONTENT */}
          {children}



          {/* UNIT NAVIGATION */}
          <UnitNav
            prevUnit={prevUnit}
            nextUnit={nextUnit}
            basePath={basePath}
          />

          {/* PROGRESS TRACKER */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '20px 0',
            }}
          >
            <ProgressTracker unitKey={`${subjectSlug}/unit-${unitNum}`} />
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="page-footer">
        © 2025 Anubhab Karmakar, Lecturer • NHIT
        <br />
        Built with pride for students of NHIT
      </footer>
    </>
  );
}
