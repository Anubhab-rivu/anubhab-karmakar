import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 2: Moments & Couples | AK Notes' };

export default function Unit2Page() {
  return (
    <UnitLayout
      unitNum={2} unitTitle="Moments & Couples"
      subject="Engineering Mechanics" subjectSlug="engineering-mechanics"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:1,title:"Basics & Force Systems"}} nextUnit={{num:3,title:"Equilibrium of Forces"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 2: Moments & Couples notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
