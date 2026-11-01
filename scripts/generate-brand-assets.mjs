import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const iconsDir = path.join(root, 'public', 'icons');
const ogDir = path.join(root, 'public', 'og');
await mkdir(iconsDir, { recursive: true });
await mkdir(ogDir, { recursive: true });

const mark = path.join(iconsDir, 'mark.svg');

for (const size of [32, 180, 192, 512]) {
  const filename = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  await sharp(mark, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(iconsDir, filename));
}

const bg = await sharp(
  path.join(root, 'src', 'assets', 'images', 'main-sequence-mining-laser.jpg'),
)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 0.62, saturation: 0.9 })
  .toBuffer();

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#071017" stop-opacity="0.97"/>
      <stop offset="0.52" stop-color="#071017" stop-opacity="0.82"/>
      <stop offset="1" stop-color="#071017" stop-opacity="0.12"/>
    </linearGradient>
    <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.55" stop-color="#071017" stop-opacity="0"/>
      <stop offset="1" stop-color="#071017" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#scrim)"/>
  <rect width="1200" height="630" fill="url(#bottom)"/>
  <rect x="72" y="64" width="8" height="82" fill="#f5a524"/>
  <text x="100" y="96" fill="#f5a524" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="4">INDEPENDENT FIELD GUIDE</text>
  <text x="100" y="132" fill="#9fb1b8" font-family="Arial, Helvetica, sans-serif" font-size="15" letter-spacing="2.4">WIKI · GUIDES · DATABASE · TOOLS</text>
  <text x="72" y="308" fill="#f1ede4" font-family="Arial Narrow, Arial, sans-serif" font-size="96" font-weight="700" letter-spacing="-1">MAIN SEQUENCE</text>
  <text x="72" y="408" fill="#f1ede4" font-family="Arial Narrow, Arial, sans-serif" font-size="80" font-weight="700" letter-spacing="-1">FIELD GUIDE</text>
  <text x="75" y="470" fill="#c6d2d5" font-family="Arial, Helvetica, sans-serif" font-size="22">Source-checked intel for the space factory sim.</text>
  <line x1="72" y1="540" x2="620" y2="540" stroke="#29424d" stroke-width="1"/>
  <text x="72" y="580" fill="#f1ede4" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="1.5">MAINSEQUENCEGUIDE.WIKI</text>
  <text x="1128" y="580" text-anchor="end" fill="#9fb1b8" font-family="Arial, Helvetica, sans-serif" font-size="14">NOT AFFILIATED WITH THE DEVELOPER</text>
</svg>`);

await sharp(bg)
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(ogDir, 'main-sequence-guide.jpg'));

console.log('Generated icons and Open Graph image.');
