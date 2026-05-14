import Link from 'next/link';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ak-footer">
      <div className="ak-footer-inner">
        <div className="ak-footer-brand">
          <span className="ak-footer-mark" aria-hidden="true">AK</span>
          <div>
            <strong>Anubhab Karmakar, Lecturer</strong>
            <span>Mechanical Engineering Notes Library</span>
          </div>
        </div>

        <nav className="ak-footer-links" aria-label="Footer navigation">
          <Link href="/">Portfolio</Link>
          <Link href="/library">Notes Library</Link>
          <Link href="/library/diploma">Diploma</Link>
          <Link href="/library/btech">B.Tech</Link>
        </nav>

        <p className="ak-footer-meta">
          &copy; {year} Anubhab Karmakar, Lecturer - NHIT. Built for clear, visual mechanical engineering learning.
        </p>
      </div>
    </footer>
  );
}
