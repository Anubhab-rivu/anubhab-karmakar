import Link from 'next/link';
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

        <Link href="/library/btech/sem-4/metrology" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>Metrology & Measurement</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>PC-ME404</p>
        </Link>

        <Link href="/library/btech/sem-4/strength-of-materials" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>Strength of Materials</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>PC-ME403</p>
        </Link>

        <Link href="/library/btech/sem-4/fluid-mechanics" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>Fluid Mechanics & Machines</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>PC-ME402</p>
        </Link>

        <Link href="/library/btech/sem-4/applied-thermodynamics" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>Applied Thermodynamics</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>PC-ME401</p>
        </Link>

        <Link href="/library/btech/sem-4/materials-engineering" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>Materials Engineering</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>ES-ME401</p>
        </Link>

        <Link href="/library/btech/sem-4/numerical-methods" style={{display:'block',background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:12,padding:'24px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
          <h3 style={{fontFamily:'Merriweather,serif',fontSize:17,color:'var(--navy)',marginBottom:4}}>Numerical Methods</h3>
          <p style={{fontSize:13,color:'var(--ink-muted)',margin:0}}>BS-M401</p>
        </Link>
      </div>
    </div>
    <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
  </>);
}
