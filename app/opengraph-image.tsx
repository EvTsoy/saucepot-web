import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { site } from '@/lib/site';

export const alt = `${site.name}: ${site.promise}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const black = await readFile(join(process.cwd(), 'app/fonts/Nunito-Black.ttf'));
const bold = await readFile(join(process.cwd(), 'app/fonts/Nunito-Bold.ttf'));
const stew = await readFile(join(process.cwd(), 'public/stew/stew-idle.svg'), 'utf8');
const stewSrc = `data:image/svg+xml;base64,${Buffer.from(stew).toString('base64')}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#FFF1E4',
          padding: '0 90px',
          gap: 60,
          fontFamily: 'Nunito',
        }}
      >
        <img src={stewSrc} width={380} height={380} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 44, fontWeight: 700, color: '#B9441A' }}>{site.name}</div>
          <div style={{ fontSize: 76, fontWeight: 900, color: '#1F1714', lineHeight: 1.05, marginTop: 12 }}>
            Save the recipe.
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, color: '#1F1714', lineHeight: 1.05 }}>Actually cook it.</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Nunito', data: black, weight: 900, style: 'normal' },
        { name: 'Nunito', data: bold, weight: 700, style: 'normal' },
      ],
    },
  );
}
