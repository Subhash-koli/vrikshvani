import { NextResponse } from 'next/server';

// Static species database — in production this queries the Prisma species table
const SPECIES_DATABASE = [
  { id: 1, name: 'Monstera Deliciosa', family: 'Araceae', category: 'Tropical', idealVpdMin: 0.8, idealVpdMax: 1.2, idealTempMin: 20, idealTempMax: 28 },
  { id: 2, name: 'Ficus Lyrata', family: 'Moraceae', category: 'Tropical', idealVpdMin: 0.9, idealVpdMax: 1.4, idealTempMin: 18, idealTempMax: 26 },
  { id: 3, name: 'Sansevieria Trifasciata', family: 'Asparagaceae', category: 'Succulent', idealVpdMin: 1.2, idealVpdMax: 2.0, idealTempMin: 15, idealTempMax: 32 },
  { id: 4, name: 'Calathea Orbifolia', family: 'Marantaceae', category: 'High Humidity', idealVpdMin: 0.5, idealVpdMax: 0.9, idealTempMin: 22, idealTempMax: 26 },
  { id: 5, name: 'Phalaenopsis Orchid', family: 'Orchidaceae', category: 'Epiphyte', idealVpdMin: 0.7, idealVpdMax: 1.1, idealTempMin: 18, idealTempMax: 24 },
  { id: 6, name: 'Pothos Epipremnum Aureum', family: 'Araceae', category: 'Tropical', idealVpdMin: 0.8, idealVpdMax: 1.3, idealTempMin: 18, idealTempMax: 30 },
  { id: 7, name: 'Dracaena Marginata', family: 'Asparagaceae', category: 'Tropical', idealVpdMin: 1.0, idealVpdMax: 1.6, idealTempMin: 18, idealTempMax: 28 },
  { id: 8, name: 'Pachira Aquatica (Money Tree)', family: 'Malvaceae', category: 'Tropical', idealVpdMin: 0.8, idealVpdMax: 1.2, idealTempMin: 18, idealTempMax: 26 },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() ?? '';
  const category = searchParams.get('category');

  let results = SPECIES_DATABASE;

  if (q) {
    results = results.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.family.toLowerCase().includes(q)
    );
  }

  if (category) {
    results = results.filter(s => s.category === category);
  }

  return NextResponse.json({
    success: true,
    total: results.length,
    data: results,
  });
}
