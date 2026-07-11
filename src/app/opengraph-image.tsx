import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Brian Ogero - Software Engineer & Security Researcher';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '120px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#bcfb00',
              marginRight: '20px',
            }}
          />
          <div style={{ fontSize: 32, letterSpacing: '0.2em', color: '#bcfb00', fontWeight: 700 }}>
            PORTFOLIO
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 120, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.1, color: '#ffffff' }}>
            BRIAN OGERO.
          </div>
          <div style={{ fontSize: 48, color: '#a3a3a3', fontWeight: 500, marginTop: '20px' }}>
            Software Engineer & Security Researcher
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          position: 'absolute', 
          bottom: '120px', 
          left: '120px', 
          borderBottom: '4px solid #bcfb00', 
          paddingBottom: '8px',
          color: '#ffffff',
          fontSize: 32,
          fontWeight: 'bold'
        }}>
          ogero.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
