import { spawnSync } from 'node:child_process';

const result = spawnSync(
  'npx',
  ['-y', 'pagefind', '--site', 'out', '--output-path', 'out/pagefind'],
  {
    shell: process.platform === 'win32',
    stdio: 'inherit',
  }
);

if (result.error) {
  console.warn(`Pagefind indexing skipped: ${result.error.message}`);
}

process.exit(0);
