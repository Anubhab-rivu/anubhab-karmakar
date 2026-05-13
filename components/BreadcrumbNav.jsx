'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LABEL_MAP = {
  library: 'Library',
  diploma: 'Diploma',
  btech: 'B.Tech',
  'sem-2': 'Semester 2',
  'sem-4': 'Semester 4',
  'engineering-mechanics': 'Engineering Mechanics',
  'mathematics-2': 'Mathematics-II',
  'applied-physics-2': 'Applied Physics-II',
  feee: 'FEEE',
  'introduction-to-it-systems': 'IT Systems',
  metrology: 'Metrology & Measurement',
  'numerical-methods': 'Numerical Methods',
  'materials-engineering': 'Materials Engineering',
  'applied-thermodynamics': 'Applied Thermodynamics',
  'fluid-mechanics': 'Fluid Mechanics',
  'strength-of-materials': 'Strength of Materials',
  'environmental-science': 'Environmental Science',
  'unit-1': 'Unit 1',
  'unit-2': 'Unit 2',
  'unit-3': 'Unit 3',
  'unit-4': 'Unit 4',
  'unit-5': 'Unit 5',
  'unit-6': 'Unit 6',
  'unit-7': 'Unit 7',
};

export default function BreadcrumbNav() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: LABEL_MAP[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    href: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <Link href="/">Home</Link>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="breadcrumb-segment">
          <span className="breadcrumb-separator">/</span>
          {crumb.isLast ? (
            <span className="breadcrumb-current">{crumb.label}</span>
          ) : (
            <Link href={crumb.href}>{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
