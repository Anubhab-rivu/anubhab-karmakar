import UnitLayout from '@/components/UnitLayout';

export const metadata = { title: 'Unit 3: AC Circuits | AK Notes' };

export default function Unit3Page() {
  return (
    <UnitLayout
      unitNum={3} unitTitle="AC Circuits"
      subject="FEEE" subjectSlug="feee"
      semester="sem-2" degree="diploma"
      degreeBadge="WBSCTE Diploma Engineering"
      prevUnit={{num:2,title:"Electric & Magnetic Circuits"}} nextUnit={{num:4,title:"Transformers & Machines"}}
    >
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:48,marginBottom:16}}>🚧</div>
        <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,color:'var(--navy)',marginBottom:12}}>Content Coming Soon</h2>
        <p style={{color:'var(--ink-muted)',maxWidth:400,margin:'0 auto'}}>
          Unit 3: AC Circuits notes are being prepared.
          Check back soon for complete content with formulas, diagrams, and worked examples.
        </p>
      </div>
    </UnitLayout>
  );
}
