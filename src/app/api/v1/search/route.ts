import { NextResponse } from 'next/server';

const INDEXED_CONTENT = [
  // Species
  { id: 'sp-1', type: 'Species', title: 'Monstera Deliciosa', subtitle: 'Ideal VPD: 0.8–1.2 kPa · Tropical Araceae', url: '/species/tropical' },
  { id: 'sp-2', type: 'Species', title: 'Ficus Lyrata (Fiddle Leaf Fig)', subtitle: 'Ideal VPD: 0.9–1.4 kPa · Bright Indirect', url: '/species/tropical' },
  { id: 'sp-3', type: 'Species', title: 'Sansevieria Trifasciata', subtitle: 'Ideal VPD: 1.2–2.0 kPa · Succulent', url: '/species/succulents' },
  { id: 'sp-4', type: 'Species', title: 'Phalaenopsis Orchid', subtitle: 'Ideal VPD: 0.7–1.1 kPa · Epiphyte', url: '/species/orchids' },

  // Care Guides
  { id: 'cg-1', type: 'Care Guide', title: 'Monstera Deliciosa Care Guide', subtitle: 'Complete VPD, watering, and light guide for Monstera', url: '/care-guides/monstera-deliciosa' },
  { id: 'cg-2', type: 'Care Guide', title: 'Fiddle Leaf Fig Care Guide', subtitle: 'Consistency, humidity, and leaf-spot troubleshooting', url: '/care-guides/fiddle-leaf-fig' },
  { id: 'cg-3', type: 'Care Guide', title: 'VPD Target & Transpiration Guide', subtitle: 'Learn how to read Vapour Pressure Deficit for houseplants', url: '/vpd-guide' },

  // Science & Research
  { id: 'sc-1', type: 'Research', title: 'Vapour Pressure Deficit Longitudinal Study', subtitle: 'Peer-reviewed research paper on leaf temperature correlation', url: '/nature-intelligence/research' },
  { id: 'sc-2', type: 'Whitepaper', title: 'Nature Intelligence Technical Whitepaper v1.2', subtitle: '42-page technical architecture of FLIR + BME688 + NTE™', url: '/nature-intelligence/whitepaper' },
  { id: 'sc-3', type: 'Open Data', title: 'Vriksh Vani Open Data Programme', subtitle: '2.1 million anonymised plant biometric readings (CC BY 4.0)', url: '/nature-intelligence/open-data' },
  { id: 'sc-4', type: 'Research', title: 'Research Note #001 — Leaf Surface Thermography', subtitle: 'Empirical leaf surface temperature delta under controlled VPD shift', url: '/nature-intelligence/research/note-001' },
  { id: 'sc-5', type: 'Truth Index', title: 'Evidence & Truth Registry', subtitle: 'Official verified status index of all biophysical claims & specs', url: '/nature-intelligence/evidence' },
  { id: 'sc-6', type: 'Dataset', title: 'Open Biophysical Telemetry JSON Dataset', subtitle: 'Downloadable time-series telemetry sample (CC BY 4.0)', url: '/api/v1/telemetry/sample' },

  // Developer & API
  { id: 'dev-1', type: 'Developer', title: 'Vriksh Vani REST API Documentation', subtitle: 'Stream live readings, query species, and configure webhooks', url: '/developers' },
  { id: 'dev-2', type: 'App Feature', title: 'Fleet Management Dashboard', subtitle: 'Manage 10+ NIH-01 hubs across enterprise spaces', url: '/app/fleet-management' },
  { id: 'dev-3', type: 'Smart Home', title: 'Home Assistant & HomeKit Integration', subtitle: 'Automate humidifiers and grow lights based on plant biometrics', url: '/app/smart-home' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim().toLowerCase() ?? '';
  const type = searchParams.get('type');

  if (!query) {
    return NextResponse.json({
      success: true,
      query: '',
      total: 0,
      results: [],
    });
  }

  let filtered = INDEXED_CONTENT.filter((item) =>
    item.title.toLowerCase().includes(query) ||
    item.subtitle.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  );

  if (type) {
    filtered = filtered.filter((item) => item.type.toLowerCase() === type.toLowerCase());
  }

  return NextResponse.json({
    success: true,
    query,
    total: filtered.length,
    results: filtered,
  });
}
