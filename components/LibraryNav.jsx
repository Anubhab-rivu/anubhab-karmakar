'use client';

import Link from 'next/link';

import BreadcrumbNav from './BreadcrumbNav';
import DarkModeToggle from './DarkModeToggle';
import SearchButton from './SearchButton';
import ShareButton from './ShareButton';

export default function LibraryNav() {
  return (
    <nav className="library-nav top-nav" aria-label="Library navigation">
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
        <ShareButton text="Diploma mechanical engineering notes" />
      </div>
    </nav>
  );
}
