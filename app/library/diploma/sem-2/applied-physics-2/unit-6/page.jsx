import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 6: Semiconductor Physics | AK Notes' };

export default function Unit6Page() {
  return (
    <UnitLayout
      unitNum={6} unitTitle="Semiconductor Physics"
      subject="Applied Physics-II" subjectSlug="applied-physics-2"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:5,title:"Electromagnetism"}} nextUnit={{num:7,title:"Modern Physics"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 6: Semiconductor Physics notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
