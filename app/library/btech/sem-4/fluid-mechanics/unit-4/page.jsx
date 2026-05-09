import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 4: Unit 4 | AK Notes' };

export default function Unit4Page() {
  return (
    <UnitLayout
      unitNum={4} unitTitle="Unit 4"
      subject="Fluid Mechanics & Machines" subjectSlug="fluid-mechanics"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT B.Tech ME"
      prevUnit={{num:3,title:"Unit 3"}} nextUnit={{num:5,title:"Unit 5"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 4: Unit 4 notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
