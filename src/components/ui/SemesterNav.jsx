import Link from 'next/link';

export default function SemesterNav({ semester }) {
  return (
    <nav className="semester-rail print-hide" aria-label="Diploma semester navigation">
      {[1, 2, 3, 4, 5, 6].map((n) => {
        const key = `sem-${n}`;
        return <Link className={semester === key ? 'active' : ''} key={key} href={`/library/diploma/${key}`}>S{n}</Link>;
      })}
    </nav>
  );
}
