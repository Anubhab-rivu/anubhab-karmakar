import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 2: Unit 2 | AK Notes' };

export default function Unit2Page() {
  return (
    <UnitLayout
      unitNum={2} unitTitle="Unit 2"
      subject="Materials Engineering" subjectSlug="materials-engineering"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT B.Tech ME"
      prevUnit={{num:1,title:"Unit 1"}} nextUnit={{num:3,title:"Unit 3"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 2: Unit 2 notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
