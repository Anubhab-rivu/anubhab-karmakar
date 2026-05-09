import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 2: Linear Measurement | AK Notes' };

export default function Unit2Page() {
  return (
    <UnitLayout
      unitNum={2} unitTitle="Linear Measurement"
      subject="Metrology & Measurement" subjectSlug="metrology"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT B.Tech ME"
      prevUnit={{num:1,title:"Introduction to Metrology"}} nextUnit={{num:3,title:"Angular Measurement"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 2: Linear Measurement notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
