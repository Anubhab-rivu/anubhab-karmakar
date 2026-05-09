import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 5: Centroid & Centre of Gravity | AK Notes' };

export default function Unit5Page() {
  return (
    <UnitLayout
      unitNum={5} unitTitle="Centroid & Centre of Gravity"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:4,title:"Friction"}} nextUnit={{num:6,title:"Simple Lifting Machines"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 5: Centroid & Centre of Gravity notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
