import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('app/library/diploma/sem-2');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(root).filter((file) => file.endsWith(`${path.sep}page.jsx`));

for (const file of files) {
  const current = fs.readFileSync(file, 'utf8');
  if (!current.includes('Content Coming Soon') && !current.includes('DiplomaSem2')) continue;

  const parts = file.split(path.sep);
  const unitFolder = parts.at(-2);
  const subjectSlug = parts.at(-3);
  const unitNum = Number(unitFolder.replace('unit-', ''));
  const pascalSubject = subjectSlug
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
  const componentName = `DiplomaSem2${pascalSubject}Unit${unitNum}`;

  const next = `import DiplomaDeepUnitPage from '@/components/DiplomaDeepUnitPage';

export const metadata = { title: 'Unit ${unitNum} | AK Notes Library' };

export default function ${componentName}() {
  return (
    <DiplomaDeepUnitPage
      degree="diploma"
      semester="sem-2"
      subjectSlug="${subjectSlug}"
      unitNum={${unitNum}}
    />
  );
}
`;

  fs.writeFileSync(file, next);
  console.log(`Updated ${file}`);
}
