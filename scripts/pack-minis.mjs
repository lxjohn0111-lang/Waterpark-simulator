// Packs the character models into one JSON file of base64 GLBs: public/models/minis.json.
// One served-everywhere file type (some hosts refuse .glb) and a single request at boot.
// Run after changing anything in models-src/minis:  npm run pack-models
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const src = path.join(root, 'models-src/minis');
const out = path.join(root, 'public/models/minis.json');
const pack = {};
for (const f of fs.readdirSync(src).filter((f) => f.endsWith('.glb')).sort()) pack[f.replace(/\.glb$/, '')] = fs.readFileSync(path.join(src, f)).toString('base64');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(pack));
console.log(Object.keys(pack).length, 'models ->', path.relative(root, out), fs.statSync(out).size, 'bytes');
