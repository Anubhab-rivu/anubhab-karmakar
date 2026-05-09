import Link from 'next/link';
export const metadata = { title: 'FEEE | AK Notes' };
export default function Page() {
  return (<>
    <header className="page-header crosshatch-bg"><div className="header-inner">
      <div className="course-badge">WBSCTE Diploma Sem 2</div>
      <h1>FEEE</h1><p className="subtitle">Code: FEEE | Credits: 3</p>
    </div></header>
    <div style={{maxWidth:800,margin:'0 auto',padding:'48px 24px'}}>
      <div style={{display:'flex',flexDirection:'column',gap:16}}>

            <Link key={1} href="/library/diploma/sem-2/feee/unit-1" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>1</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>Electrical Components</h3></div>
            </Link>

            <Link key={2} href="/library/diploma/sem-2/feee/unit-2" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>2</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>Electric & Magnetic Circuits</h3></div>
            </Link>

            <Link key={3} href="/library/diploma/sem-2/feee/unit-3" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>3</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>AC Circuits</h3></div>
            </Link>

            <Link key={4} href="/library/diploma/sem-2/feee/unit-4" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>4</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>Transformers & Machines</h3></div>
            </Link>

            <Link key={5} href="/library/diploma/sem-2/feee/unit-5" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>5</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>Semiconductor Devices</h3></div>
            </Link>

            <Link key={6} href="/library/diploma/sem-2/feee/unit-6" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>6</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>Analog Circuits</h3></div>
            </Link>

            <Link key={7} href="/library/diploma/sem-2/feee/unit-7" style={{display:'flex',alignItems:'center',gap:16,background:'var(--paper-card)',border:'1px solid var(--border)',borderRadius:10,padding:'18px 22px',textDecoration:'none',boxShadow:'var(--shadow)'}}>
              <div style={{background:'var(--accent)',color:'white',fontFamily:'Merriweather,serif',fontWeight:700,fontSize:18,width:48,height:48,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>7</div>
              <div style={{flex:1}}><h3 style={{fontFamily:'Merriweather,serif',fontSize:16,color:'var(--navy)',margin:'0 0 4px'}}>Digital Electronics</h3></div>
            </Link>
      </div>
    </div>
    <footer className="page-footer">© 2025 Anubhab Karmakar, Lecturer • NHIT</footer>
  </>);
}
