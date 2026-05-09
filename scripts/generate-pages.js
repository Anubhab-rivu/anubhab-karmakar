const fs = require('fs');
const path = require('path');

function makePlaceholder(unitNum, unitTitle, subjectLabel, subjectSlug, semester, degree, degreeBadge, prevStr, nextStr) {
  return `import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit ${unitNum}: ${unitTitle} | AK Notes' };

export default function Unit${unitNum}Page() {
  return (
    <UnitLayout
      unitNum={${unitNum}} unitTitle="${unitTitle}"
      subject="${subjectLabel}" subjectSlug="${subjectSlug}"
      semester="${semester}" degree="${degree}"
      degreeBadge="${degreeBadge}"
      prevUnit={${prevStr}} nextUnit={${nextStr}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit ${unitNum}: ${unitTitle} notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
`;
}

function createUnits(basePath, units, subjectLabel, subjectSlug, sem, deg, badge) {
  units.forEach(u => {
    const dir = path.join(basePath, `unit-${u.num}`);
    fs.mkdirSync(dir, { recursive: true });
    const prev = u.prev ? `{num:${u.prev.num},title:"${u.prev.title}"}` : 'null';
    const next = u.next ? `{num:${u.next.num},title:"${u.next.title}"}` : 'null';
    fs.writeFileSync(path.join(dir, 'page.jsx'), makePlaceholder(u.num, u.title, subjectLabel, subjectSlug, sem, deg, badge, prev, next));
  });
}

// Engineering Mechanics placeholder units (skip 3)
createUnits('app/library/diploma/sem-2/engineering-mechanics', [
  { num: 1, title: 'Basics & Force Systems', prev: null, next: { num: 2, title: 'Moments & Couples' } },
  { num: 2, title: 'Moments & Couples', prev: { num: 1, title: 'Basics & Force Systems' }, next: { num: 3, title: 'Equilibrium of Forces' } },
  { num: 4, title: 'Friction', prev: { num: 3, title: 'Equilibrium of Forces' }, next: { num: 5, title: 'Centroid & Centre of Gravity' } },
  { num: 5, title: 'Centroid & Centre of Gravity', prev: { num: 4, title: 'Friction' }, next: { num: 6, title: 'Simple Lifting Machines' } },
  { num: 6, title: 'Simple Lifting Machines', prev: { num: 5, title: 'Centroid & Centre of Gravity' }, next: { num: 7, title: 'Motion in a Plane' } },
  { num: 7, title: 'Motion in a Plane', prev: { num: 6, title: 'Simple Lifting Machines' }, next: null },
], 'Engineering Mechanics', 'engineering-mechanics', 'sem-2', 'diploma', 'WBSCTE Diploma Engineering');

// Mathematics-II
function makeSubjectIndex(dir, label, code, credits, slug, units) {
  fs.mkdirSync(dir, { recursive: true });
  const unitLinks = units.map(u => `
            <Link key={${u.num}} href="/library/diploma/sem-2/${slug}/unit-${u.num}" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>${u.num}</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>${u.title}</h3></div>
            </Link>`).join('\n');

  fs.writeFileSync(path.join(dir, 'page.jsx'), `import Link from 'next/link';
export const metadata = { title: '${label} | AK Notes' };
export default function Page() {
  return (<>
    <header className="page-header crosshatch-bg"><div className="header-inner">
      <div className="course-badge">WBSCTE Diploma Sem 2</div>
      <h1>${label}</h1><p className="subtitle">Code: ${code} | Credits: ${credits}</p>
    </div></header>
    <div style={{maxWidth:800,margin:'0 auto',padding:'48px 24px'}}>
      <div style={{display:'flex',flexDirection:'column',gap:16}}>
${unitLinks}
      </div>
    </div>
    <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
  </>);
}
`);
}

// Mathematics-II
const mathUnits = [
  { num: 1, title: 'Determinants & Matrices', prev: null, next: { num: 2, title: 'Coordinate Geometry 2D' } },
  { num: 2, title: 'Coordinate Geometry 2D', prev: { num: 1, title: 'Determinants & Matrices' }, next: { num: 3, title: 'Integral Calculus' } },
  { num: 3, title: 'Integral Calculus', prev: { num: 2, title: 'Coordinate Geometry 2D' }, next: { num: 4, title: 'Ordinary Differential Equations' } },
  { num: 4, title: 'Ordinary Differential Equations', prev: { num: 3, title: 'Integral Calculus' }, next: { num: 5, title: 'Partial Differentiation' } },
  { num: 5, title: 'Partial Differentiation', prev: { num: 4, title: 'Ordinary Differential Equations' }, next: { num: 6, title: 'Statistics & Probability' } },
  { num: 6, title: 'Statistics & Probability', prev: { num: 5, title: 'Partial Differentiation' }, next: null },
];
makeSubjectIndex('app/library/diploma/sem-2/mathematics-2', 'Mathematics-II', 'BS102/M-II', 4, 'mathematics-2', mathUnits);
createUnits('app/library/diploma/sem-2/mathematics-2', mathUnits, 'Mathematics-II', 'mathematics-2', 'sem-2', 'diploma', 'WBSCTE Diploma Engineering');

// Applied Physics-II
const physUnits = [
  { num: 1, title: 'Wave Motion & SHM', prev: null, next: { num: 2, title: 'Optics' } },
  { num: 2, title: 'Optics', prev: { num: 1, title: 'Wave Motion & SHM' }, next: { num: 3, title: 'Electrostatics' } },
  { num: 3, title: 'Electrostatics', prev: { num: 2, title: 'Optics' }, next: { num: 4, title: 'Current Electricity' } },
  { num: 4, title: 'Current Electricity', prev: { num: 3, title: 'Electrostatics' }, next: { num: 5, title: 'Electromagnetism' } },
  { num: 5, title: 'Electromagnetism', prev: { num: 4, title: 'Current Electricity' }, next: { num: 6, title: 'Semiconductor Physics' } },
  { num: 6, title: 'Semiconductor Physics', prev: { num: 5, title: 'Electromagnetism' }, next: { num: 7, title: 'Modern Physics' } },
  { num: 7, title: 'Modern Physics', prev: { num: 6, title: 'Semiconductor Physics' }, next: null },
];
makeSubjectIndex('app/library/diploma/sem-2/applied-physics-2', 'Applied Physics-II', 'BS104', 3, 'applied-physics-2', physUnits);
createUnits('app/library/diploma/sem-2/applied-physics-2', physUnits, 'Applied Physics-II', 'applied-physics-2', 'sem-2', 'diploma', 'WBSCTE Diploma Engineering');

// FEEE
const feeeUnits = [
  { num: 1, title: 'Electrical Components', prev: null, next: { num: 2, title: 'Electric & Magnetic Circuits' } },
  { num: 2, title: 'Electric & Magnetic Circuits', prev: { num: 1, title: 'Electrical Components' }, next: { num: 3, title: 'AC Circuits' } },
  { num: 3, title: 'AC Circuits', prev: { num: 2, title: 'Electric & Magnetic Circuits' }, next: { num: 4, title: 'Transformers & Machines' } },
  { num: 4, title: 'Transformers & Machines', prev: { num: 3, title: 'AC Circuits' }, next: { num: 5, title: 'Semiconductor Devices' } },
  { num: 5, title: 'Semiconductor Devices', prev: { num: 4, title: 'Transformers & Machines' }, next: { num: 6, title: 'Analog Circuits' } },
  { num: 6, title: 'Analog Circuits', prev: { num: 5, title: 'Semiconductor Devices' }, next: { num: 7, title: 'Digital Electronics' } },
  { num: 7, title: 'Digital Electronics', prev: { num: 6, title: 'Analog Circuits' }, next: null },
];
makeSubjectIndex('app/library/diploma/sem-2/feee', 'FEEE', 'FEEE', 3, 'feee', feeeUnits);
createUnits('app/library/diploma/sem-2/feee', feeeUnits, 'FEEE', 'feee', 'sem-2', 'diploma', 'WBSCTE Diploma Engineering');

// IT Systems
const itUnits = [
  { num: 1, title: 'Internet & Digital Logic', prev: null, next: { num: 2, title: 'Operating Systems' } },
  { num: 2, title: 'Operating Systems', prev: { num: 1, title: 'Internet & Digital Logic' }, next: { num: 3, title: 'Algorithms & Flowcharts' } },
  { num: 3, title: 'Algorithms & Flowcharts', prev: { num: 2, title: 'Operating Systems' }, next: { num: 4, title: 'HTML5 CSS & JavaScript' } },
  { num: 4, title: 'HTML5 CSS & JavaScript', prev: { num: 3, title: 'Algorithms & Flowcharts' }, next: { num: 5, title: 'Network & Cybersecurity' } },
  { num: 5, title: 'Network & Cybersecurity', prev: { num: 4, title: 'HTML5 CSS & JavaScript' }, next: null },
];
makeSubjectIndex('app/library/diploma/sem-2/introduction-to-it-systems', 'Introduction to IT Systems', 'ES102', 2, 'introduction-to-it-systems', itUnits);
createUnits('app/library/diploma/sem-2/introduction-to-it-systems', itUnits, 'Introduction to IT Systems', 'introduction-to-it-systems', 'sem-2', 'diploma', 'WBSCTE Diploma Engineering');

// B.Tech pages
fs.mkdirSync('app/library/btech', { recursive: true });
fs.writeFileSync('app/library/btech/page.jsx', `import Link from 'next/link';
export const metadata = { title: 'B.Tech Engineering | AK Notes' };
export default function Page() {
  return (<>
    <header className="page-header crosshatch-bg"><div className="header-inner">
      <div className="course-badge">MAKAUT B.Tech Mechanical Engineering</div>
      <h1>B.Tech Mechanical Engineering</h1>
      <p className="subtitle">Select a semester</p>
    </div></header>
    <div style={{maxWidth:600,margin:'0 auto',padding:'60px 24px'}}>
      <Link href="/library/btech/sem-4" style={{display:'block',background:'var(--paper-card)',border:'2px solid var(--border)',borderRadius:12,padding:'28px 24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:20,color:'var(--navy)',marginBottom:8}}>Semester 4</h2>
        <p style={{color:'var(--ink-muted)',fontSize:14,margin:0}}>6 subjects including Metrology & Measurement</p>
      </Link>
    </div>
    <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
  </>);
}
`);

// B.Tech Sem 4 page
fs.mkdirSync('app/library/btech/sem-4', { recursive: true });
const btechSubjects = [
  { slug: 'metrology', label: 'Metrology & Measurement', code: 'PC-ME404' },
  { slug: 'strength-of-materials', label: 'Strength of Materials', code: 'PC-ME403' },
  { slug: 'fluid-mechanics', label: 'Fluid Mechanics & Machines', code: 'PC-ME402' },
  { slug: 'applied-thermodynamics', label: 'Applied Thermodynamics', code: 'PC-ME401' },
  { slug: 'materials-engineering', label: 'Materials Engineering', code: 'ES-ME401' },
  { slug: 'numerical-methods', label: 'Numerical Methods', code: 'BS-M401' },
];
const btechLinks = btechSubjects.map(s => `
        <Link href="/library/btech/sem-4/${s.slug}" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>${s.label}</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>${s.code}</p>
        </Link>`).join('\n');

fs.writeFileSync('app/library/btech/sem-4/page.jsx', `import Link from 'next/link';
export const metadata = { title: 'Semester 4 — B.Tech ME | AK Notes' };
export default function Page() {
  return (<>
    <header className="page-header crosshatch-bg"><div className="header-inner">
      <div className="course-badge">MAKAUT B.Tech Semester 4</div>
      <h1>Semester 4 — Subjects</h1>
      <p className="subtitle">Select a subject to view notes</p>
    </div></header>
    <div style={{maxWidth:800,margin:'0 auto',padding:'48px 24px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
${btechLinks}
      </div>
    </div>
    <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
  </>);
}
`);

// Metrology subject + units
const metUnits = [
  { num: 1, title: 'Introduction to Metrology', prev: null, next: { num: 2, title: 'Linear Measurement' } },
  { num: 2, title: 'Linear Measurement', prev: { num: 1, title: 'Introduction to Metrology' }, next: { num: 3, title: 'Angular Measurement' } },
  { num: 3, title: 'Angular Measurement', prev: { num: 2, title: 'Linear Measurement' }, next: { num: 4, title: 'Surface Finish Measurement' } },
  { num: 4, title: 'Surface Finish Measurement', prev: { num: 3, title: 'Angular Measurement' }, next: { num: 5, title: 'Metrology of Screw Threads' } },
  { num: 5, title: 'Metrology of Screw Threads', prev: { num: 4, title: 'Surface Finish Measurement' }, next: null },
];
makeSubjectIndex('app/library/btech/sem-4/metrology', 'Metrology & Measurement', 'PC-ME404', 3, 'metrology', metUnits);
createUnits('app/library/btech/sem-4/metrology', metUnits.filter(u => u.num !== 5), 'Metrology & Measurement', 'metrology', 'sem-4', 'btech', 'MAKAUT B.Tech ME');

// Other B.Tech subjects (scaffold index only)
btechSubjects.filter(s => s.slug !== 'metrology').forEach(s => {
  const dir = `app/library/btech/sem-4/${s.slug}`;
  const units5 = [1,2,3,4,5].map(n => ({num:n, title:`Unit ${n}`}));
  makeSubjectIndex(dir, s.label, s.code, 4, s.slug, units5);
  const unitsData = [1,2,3,4,5].map(n => ({
    num: n,
    title: `Unit ${n}`,
    prev: n > 1 ? { num: n-1, title: `Unit ${n-1}` } : null,
    next: n < 5 ? { num: n+1, title: `Unit ${n+1}` } : null,
  }));
  createUnits(dir, unitsData, s.label, s.slug, 'sem-4', 'btech', 'MAKAUT B.Tech ME');
});

console.log('All pages created successfully!');
