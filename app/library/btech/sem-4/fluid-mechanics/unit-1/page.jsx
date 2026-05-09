import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 1: Unit 1 | AK Notes' };

export default function Unit1Page() {
  return (
    <UnitLayout
      unitNum={1} unitTitle="Unit 1"
      subject="Fluid Mechanics & Machines" subjectSlug="fluid-mechanics"
      semester="sem-4" degree="btech"
      degreeBadge="MAKAUT B.Tech ME"
      prevUnit={null} nextUnit={{num:2,title:"Unit 2"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 1: Unit 1 notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
