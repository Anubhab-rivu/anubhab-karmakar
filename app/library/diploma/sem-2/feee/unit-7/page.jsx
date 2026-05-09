import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 7: Digital Electronics | AK Notes' };

export default function Unit7Page() {
  return (
    <UnitLayout
      unitNum={7} unitTitle="Digital Electronics"
      subject="FEEE" subjectSlug="feee"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:6,title:"Analog Circuits"}} nextUnit={null}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 7: Digital Electronics notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
