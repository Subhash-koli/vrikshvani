import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Vriksh Vani — Decoded Plant Intelligence';
  const subtitle = searchParams.get('subtitle') || 'Leaf Surface Thermal Sensing & NTE™ Voice Translation';

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070B08" />
        <stop offset="50%" stop-color="#0F2B18" />
        <stop offset="100%" stop-color="#070B08" />
      </linearGradient>
      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8AD74C" />
        <stop offset="100%" stop-color="#E8D07C" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)" />

    <!-- Subtle Grid Overlay -->
    <g opacity="0.05" stroke="#F7F6F2" stroke-width="1">
      <line x1="0" y1="150" x2="1200" y2="150" />
      <line x1="0" y1="300" x2="1200" y2="300" />
      <line x1="0" y1="450" x2="1200" y2="450" />
      <line x1="300" y1="0" x2="300" y2="630" />
      <line x1="600" y1="0" x2="600" y2="630" />
      <line x1="900" y1="0" x2="900" y2="630" />
    </g>

    <!-- Border Glow -->
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="#8AD74C" stroke-width="2" opacity="0.3" />

    <!-- Badge -->
    <g transform="translate(80, 100)">
      <rect width="210" height="36" rx="18" fill="#8AD74C" fill-opacity="0.15" stroke="#8AD74C" stroke-opacity="0.4" />
      <text x="105" y="23" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#8AD74C" text-anchor="middle" letter-spacing="1.5">NATURE INTELLIGENCE</text>
    </g>

    <!-- Title -->
    <text x="80" y="240" font-family="system-ui, sans-serif" font-size="52" font-weight="bold" fill="#F7F6F2" width="1040">
      ${escapeXml(title)}
    </text>

    <!-- Subtitle -->
    <text x="80" y="320" font-family="system-ui, sans-serif" font-size="24" fill="#A3B18A" width="1040">
      ${escapeXml(subtitle)}
    </text>

    <!-- Specs Bar -->
    <g transform="translate(80, 440)">
      <rect width="1040" height="90" rx="16" fill="#070B08" fill-opacity="0.8" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      
      <text x="40" y="42" font-family="monospace" font-size="14" fill="#8AD74C">FLIR Lepton 3.5</text>
      <text x="40" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#A3B18A">±0.05°C Leaf Temp</text>

      <line x1="280" y1="20" x2="280" y2="70" stroke="rgba(255,255,255,0.1)" />

      <text x="320" y="42" font-family="monospace" font-size="14" fill="#8AD74C">Bosch BME688</text>
      <text x="320" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#A3B18A">Quad-Gas VOC Proxy</text>

      <line x1="560" y1="20" x2="560" y2="70" stroke="rgba(255,255,255,0.1)" />

      <text x="600" y="42" font-family="monospace" font-size="14" fill="#E8D07C">NTE™ Voice</text>
      <text x="600" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#A3B18A">On-Device Speech AI</text>

      <line x1="820" y1="20" x2="820" y2="70" stroke="rgba(255,255,255,0.1)" />

      <text x="860" y="42" font-family="monospace" font-size="14" fill="#8AD74C">VPD Real-Time</text>
      <text x="860" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#A3B18A">0.0 – 4.0 kPa Range</text>
    </g>
  </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable',
    },
  });
}

function escapeXml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
