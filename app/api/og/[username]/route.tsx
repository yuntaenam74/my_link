import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

/**
 * Dynamic OG image generation for MyLink profiles.
 * URL pattern: /api/og/[username]
 */
export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  const { username } = await context.params;
  const displayName = username || 'MyLink 사용자';

  // Avatar URL (placeholder)
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    displayName
  )}&size=256&background=0D47A1&color=fff`;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #0d47a1 0%, #3f51b5 100%)',
        color: '#ffffff',
        padding: '60px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '20px' }}
          >
            <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.2" />
            <path d="M12 6v12M6 12h12" stroke="#fff" strokeWidth="2" />
          </svg>
          <h1 style={{ fontSize: '64px', fontWeight: 700, margin: 0 }}>MyLink</h1>
        </div>
        {/* Avatar and name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={avatarUrl}
            width="180"
            height="180"
            style={{ borderRadius: '20px', marginRight: '40px', border: '4px solid #fff' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '48px', margin: 0, fontWeight: 500 }}>{displayName}</p>
            <p style={{ fontSize: '32px', opacity: 0.8, marginTop: '8px' }}>내 소셜 링크 모음</p>
          </div>
        </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
