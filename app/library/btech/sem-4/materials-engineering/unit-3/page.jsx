import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 3: Unit 3 | AK Notes' };

export default function Unit3Page() {
  return (
    <UnitLayout
      unitNum={3} unitTitle="Unit 3"
      subject="Materials Engineering" subjectSlug="materials-engineering"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT B.Tech ME"
      prevUnit={{num:2,title:"Unit 2"}} nextUnit={{num:4,title:"Unit 4"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 3: Unit 3 notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
