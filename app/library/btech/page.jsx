import Link from 'next/link';
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
