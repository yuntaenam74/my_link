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
        alignItems: 'center',
        justifyContent: 'center',
        width: '1200px',
        height: '630px',
        background: 'radial-gradient(ellipse at top, #3b82f6 0%, #f5f5f5 100%)',
        color: '#000000',
        padding: '40px',
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
             <h1 style={{ fontSize: '64px', fontWeight: 700, margin: 0, color: '#3b82f6' }}>MyLink</h1>
          </div>
          {/* Hero subtitle matching landing page */}
          <p style={{ fontSize: '36px', fontWeight: 600, marginTop: '20px', textAlign: 'center', color: '#111' }}>나만의 모든 링크를 <span style={{ color: '#3b82f6' }}>하나의 페이지로.</span></p>
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
