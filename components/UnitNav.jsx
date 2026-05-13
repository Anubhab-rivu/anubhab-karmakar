import Link from 'next/link';

export default function UnitNav({ prevUnit, nextUnit, basePath }) {
  return (
    <div className="unit-nav">
      {prevUnit ? (
        <Link
          className="unit-nav-card"
          href={`${basePath}/unit-${prevUnit.num}`}
        >
          <span className="unit-nav-arrow" aria-hidden="true">&lt;</span>
          <div>
            <div className="unit-nav-kicker">Previous</div>
            <div className="unit-nav-title">
              Unit {prevUnit.num}: {prevUnit.title}
            </div>
          </div>
        </Link>
      ) : (
        <div className="unit-nav-spacer" />
      )}

      {nextUnit ? (
        <Link
          className="unit-nav-card unit-nav-card-next"
          href={`${basePath}/unit-${nextUnit.num}`}
        >
          <div>
            <div className="unit-nav-kicker">Next</div>
            <div className="unit-nav-title">
              Unit {nextUnit.num}: {nextUnit.title}
            </div>
          </div>
          <span className="unit-nav-arrow" aria-hidden="true">&gt;</span>
        </Link>
      ) : (
        <div className="unit-nav-spacer" />
      )}
    </div>
  );
}
