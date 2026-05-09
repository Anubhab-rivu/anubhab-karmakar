import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 5: Electromagnetism | AK Notes' };

export default function Unit5Page() {
  return (
    <UnitLayout
      unitNum={5} unitTitle="Electromagnetism"
      subject="Applied Physics-II" subjectSlug="applied-physics-2"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:4,title:"Current Electricity"}} nextUnit={{num:6,title:"Semiconductor Physics"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 5: Electromagnetism notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
