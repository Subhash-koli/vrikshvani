'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';

export const FeaturesSpeciesSearch: React.FC = () => {
  const [query, setQuery] = useState('');

  const species = [
    { name: "Monstera Deliciosa", category: "Tropical", vpd: "0.8–1.2 kPa", temp: "20–28°C" },
    { name: "Ficus Lyrata (Fiddle Leaf)", category: "Tropical", vpd: "0.9–1.4 kPa", temp: "18–26°C" },
    { name: "Sansevieria Trifasciata", category: "Succulent", vpd: "1.2–2.0 kPa", temp: "15–32°C" },
    { name: "Calathea Orbifolia", category: "High Humidity", vpd: "0.5–0.9 kPa", temp: "22–26°C" },
    { name: "Phalaenopsis Orchid", category: "Epiphyte", vpd: "0.7–1.1 kPa", temp: "18–24°C" },
  ];

  const filtered = species.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="py-16 bg-[#030504]">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="space-y-4 max-w-xl mx-auto text-center">
          <Badge variant="gold">200+ Species Database</Badge>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-[#F7F6F2]">Search Your Plant's Target VPD Range</h2>
          <div className="relative">
            <Input
              placeholder="Search Monstera, Ficus, Sansevieria..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="w-5 h-5 text-[#8AD74C] absolute left-3 top-3.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <Card key={idx} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xl">🪴</span>
                <Badge variant="lime">{item.category}</Badge>
              </div>
              <h3 className="font-display font-bold text-lg text-[#F7F6F2]">{item.name}</h3>
              <div className="text-xs font-mono text-[#A3B18A] space-y-1">
                <div>Ideal VPD: <span className="text-[#8AD74C]">{item.vpd}</span></div>
                <div>Ideal Temp: <span className="text-[#E8D07C]">{item.temp}</span></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSpeciesSearch;
