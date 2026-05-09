import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 4: Surface Finish Measurement | AK Notes' };

export default function Unit4Page() {
  return (
    <UnitLayout
      unitNum={4} unitTitle="Surface Finish Measurement"
      subject="Metrology & Measurement" subjectSlug="metrology"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT B.Tech ME"
      prevUnit={{num:3,title:"Angular Measurement"}} nextUnit={{num:5,title:"Metrology of Screw Threads"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 4: Surface Finish Measurement notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
