import Link from 'next/link';

import BreadcrumbNav from './BreadcrumbNav';
import DarkModeToggle from './DarkModeToggle';
import ProgressTracker from './ProgressTracker';
import SearchButton from './SearchButton';
import ShareButton from './ShareButton';
import SidebarTOC from './SidebarTOC';
import SiteFooter from './SiteFooter';
import SyllabusBar from './SyllabusBar';
import UnitNav from './UnitNav';

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
  syllabusGroupLabel,
  syllabusMarks,
  syllabusMarksLabel,
  examType,
  children,
}) {
  const basePath = `/library/${degree}/${semester}/${subjectSlug}`;

  return (
    <>
      <nav className="top-nav">
        <div className="top-nav-main">
          <Link href="/library" className="brand-link">
            <span className="brand-mark" aria-hidden="true">AK</span>
            <span>AK Notes</span>
          </Link>
          <BreadcrumbNav />
        </div>

        <div className="nav-actions">
          <SearchButton />
          <DarkModeToggle />
          <ShareButton title={`${unitTitle} - ${subject} | AK Notes`} />
        </div>
      </nav>

      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">
            {degreeBadge || 'WBSCTE - Diploma Engineering'}
          </div>
          <h1>Unit {unitNum}: {unitTitle}</h1>
          <p className="subtitle">
            {subject} - {semester.replace('sem-', 'Semester ')} - Mechanical Engineering
          </p>
          <div className="meta-row">
            <div className="meta-item">
              <span className="meta-dot" />
              By Anubhab Karmakar - NHIT
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

      <div className="page-body">
        <SidebarTOC />

        <main className="main-content">
          <div className="unit-banner">
            <div className="unit-num">U{unitNum}</div>
            <div className="unit-text">
              <h2>{unitTitle}</h2>
              {unitDescription && <p>{unitDescription}</p>}
            </div>
          </div>

          {syllabusGroup && (
            <SyllabusBar
              group={syllabusGroup}
              groupLabel={syllabusGroupLabel}
              marks={syllabusMarks}
              marksLabel={syllabusMarksLabel}
              examType={examType}
            />
          )}

          {children}

          <UnitNav
            prevUnit={prevUnit}
            nextUnit={nextUnit}
            basePath={basePath}
          />

          <div className="progress-wrap">
            <ProgressTracker unitKey={`${subjectSlug}/unit-${unitNum}`} />
          </div>
        </main>
      </div>

      <SiteFooter />
    </>
  );
}
