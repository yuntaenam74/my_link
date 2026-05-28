import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'MyLink';
  const tagline = searchParams.get('tagline') ?? '나만의 모든 링크를 하나의 페이지로';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1200px',
          height: '630px',
          background: 'radial-gradient(circle at 30% 30%, var(--tw-gradient-stops), #1e1e2a)',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '96px', fontWeight: 800, margin: 0, color: '#60a5fa' }}>{title}</h1>
        <p style={{ fontSize: '36px', marginTop: '20px' }}>{tagline}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
