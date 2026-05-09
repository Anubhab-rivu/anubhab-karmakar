import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 3: Algorithms & Flowcharts | AK Notes' };

export default function Unit3Page() {
  return (
    <UnitLayout
      unitNum={3} unitTitle="Algorithms & Flowcharts"
      subject="Introduction to IT Systems" subjectSlug="introduction-to-it-systems"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:2,title:"Operating Systems"}} nextUnit={{num:4,title:"HTML5 CSS & JavaScript"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 3: Algorithms & Flowcharts notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
