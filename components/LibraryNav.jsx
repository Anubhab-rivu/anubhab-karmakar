'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DarkModeToggle from './DarkModeToggle';
import SearchButton from './SearchButton';
import ShareButton from './ShareButton';

export default function LibraryNav() {
  const pathname = usePathname() || '';
  const trail = pathname.replace(/^\/library\/?/, '').replace(/\//g, ' / ') || 'Library';

  return (
    <nav className="library-nav top-nav" aria-label="Library navigation">
      <div className="top-nav-main">
        <Link href="/library" className="brand-link">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span>AK Notes</span>
        </Link>
        <span className="library-nav-path" title={pathname}>{trail}</span>
      </div>

      <div className="nav-actions">
        <SearchButton />
        <DarkModeToggle />
        <ShareButton title="AK Notes Library" text="Diploma mechanical engineering notes" />
      </div>
    </nav>
  );
}
