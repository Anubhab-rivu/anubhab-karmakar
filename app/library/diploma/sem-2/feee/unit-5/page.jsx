import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 5: Semiconductor Devices | AK Notes' };

export default function Unit5Page() {
  return (
    <UnitLayout
      unitNum={5} unitTitle="Semiconductor Devices"
      subject="FEEE" subjectSlug="feee"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:4,title:"Transformers & Machines"}} nextUnit={{num:6,title:"Analog Circuits"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 5: Semiconductor Devices notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
