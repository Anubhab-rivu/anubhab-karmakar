import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 1: Internet & Digital Logic | AK Notes' };

export default function Unit1Page() {
  return (
    <UnitLayout
      unitNum={1} unitTitle="Internet & Digital Logic"
      subject="Introduction to IT Systems" subjectSlug="introduction-to-it-systems"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={null} nextUnit={{num:2,title:"Operating Systems"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 1: Internet & Digital Logic notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
