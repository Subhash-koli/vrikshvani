'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Filter, Activity, FlaskConical, Lightbulb } from 'lucide-react';
import Link from 'next/link';

type Category = 'All' | 'Scientific' | 'Hardware' | 'AI & Software' | 'Environmental' | 'Legal & Privacy';
type StatusFilter = 'All' | 'VERIFIED' | 'LIVE' | 'PROTOTYPE' | 'RESEARCH HYPOTHESIS' | 'TARGET CONCEPT' | 'SIMULATION';

interface ClaimEntry {
  id: string;
  claim: string;
  category: 'Scientific' | 'Hardware' | 'AI & Software' | 'Environmental' | 'Legal & Privacy';
  status: 'LIVE' | 'VERIFIED' | 'PROTOTYPE' | 'RESEARCH HYPOTHESIS' | 'TARGET CONCEPT' | 'SIMULATION';
  confidence: 'High (Established)' | 'High (Production)' | 'Medium (Experimental)' | 'TBD (Concept)';
  evidence: string;
  lastUpdated: string;
  link: string;
}

const EVIDENCE_REGISTRY: ClaimEntry[] = [
  { id: 'BIO-001', claim: 'Foliar Transpiration Evaporative Cooling', category: 'Scientific', status: 'VERIFIED', confidence: 'High (Established)', evidence: 'Established physical energy balance law. Foliar water loss causes leaf temperature reduction relative to ambient air.', lastUpdated: 'Aug 2026', link: '/nature-intelligence/research/note-001' },
  { id: 'EXP-001', claim: 'Pre-Wilting Stomatal Stress Thermal Signatures', category: 'Scientific', status: 'RESEARCH HYPOTHESIS', confidence: 'Medium (Experimental)', evidence: 'Research Note #001 benchtop trial on Monstera deliciosa (+1.4C thermal shift 180 min prior to wilting).', lastUpdated: 'Aug 2026', link: '/nature-intelligence/research/note-001' },
  { id: 'EXP-002', claim: 'Boundary-Layer Micro-Airflow Stomatal Conductance', category: 'Scientific', status: 'RESEARCH HYPOTHESIS', confidence: 'Medium (Experimental)', evidence: 'Research Note #002 investigating air movement over leaf surfaces and stomatal aperture dynamics.', lastUpdated: 'Aug 2026', link: '/nature-intelligence/research/note-002' },
  { id: 'EXP-003', claim: 'Root Zone Gas Resistance Moisture Correlation', category: 'Scientific', status: 'RESEARCH HYPOTHESIS', confidence: 'TBD (Concept)', evidence: 'Research Note #003 methodology draft. Pending physical BME688 benchtop execution in Phase 05.', lastUpdated: 'Aug 2026', link: '/nature-intelligence/research/note-003' },
  { id: 'HW-001', claim: 'FLIR Lepton 3.5 LWIR Thermal Array Integration', category: 'Hardware', status: 'TARGET CONCEPT', confidence: 'TBD (Concept)', evidence: 'NIH-01 target hardware specification (160x120 pixel thermal array).', lastUpdated: 'Aug 2026', link: '/product' },
  { id: 'HW-002', claim: 'Bosch BME688 MOX Gas Resistance Sensing', category: 'Hardware', status: 'TARGET CONCEPT', confidence: 'TBD (Concept)', evidence: 'Target hardware for total VOC resistance monitoring. Benchtop calibration log published.', lastUpdated: 'Aug 2026', link: '/product/lab-journal' },
  { id: 'HW-003', claim: 'ESP32-S3 INT8 TinyML Local Inference 38ms', category: 'Hardware', status: 'PROTOTYPE', confidence: 'Medium (Experimental)', evidence: 'Lab Journal LOG-001: Verified 38ms inference latency on ESP32-S3 DevKit with quantized TFLite Micro model.', lastUpdated: 'Aug 2026', link: '/product/lab-journal' },
  { id: 'HW-004', claim: 'Ceramic Kiln Firing Zero-Porosity Vitrification', category: 'Hardware', status: 'VERIFIED', confidence: 'High (Established)', evidence: 'Lab Journal LOG-002: Karnataka stoneware 1250C firing. Zero liquid absorption confirmed.', lastUpdated: 'Aug 2026', link: '/product/lab-journal' },
  { id: 'AI-001', claim: 'NTE On-Device Voice Synthesis Concept', category: 'AI & Software', status: 'SIMULATION', confidence: 'TBD (Concept)', evidence: 'Concept simulation only. No physical TTS model trained or deployed.', lastUpdated: 'Aug 2026', link: '/nature-intelligence/nte-voice' },
  { id: 'AI-002', claim: 'Biophysical Stress State TinyML Classification', category: 'AI & Software', status: 'RESEARCH HYPOTHESIS', confidence: 'TBD (Concept)', evidence: 'Architecture target. Feature engineering and model training not yet begun.', lastUpdated: 'Aug 2026', link: '/nature-intelligence' },
  { id: 'ENV-001', claim: 'VPD as Governing Transpiration Metric', category: 'Environmental', status: 'VERIFIED', confidence: 'High (Established)', evidence: 'Well-established horticultural and plant physiology literature. Monteith-Unsworth energy balance model.', lastUpdated: 'Aug 2026', link: '/vpd-guide' },
  { id: 'LEG-001', claim: 'Local-First Privacy Architecture', category: 'Legal & Privacy', status: 'TARGET CONCEPT', confidence: 'TBD (Concept)', evidence: 'Target architecture. No RGB camera. Volatile SRAM frame buffer. Privacy by design.', lastUpdated: 'Aug 2026', link: '/privacy' },
];

const STATUS_COLORS: Record<string, string> = {
  'VERIFIED': 'text-[#8AD74C] bg-[#8AD74C]/10 border-[#8AD74C]/30',
  'LIVE': 'text-sky-400 bg-sky-400/10 border-sky-400/30',
  'PROTOTYPE': 'text-[#E8D07C] bg-[#E8D07C]/10 border-[#E8D07C]/30',
  'RESEARCH HYPOTHESIS': 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  'TARGET CONCEPT': 'text-[#A3B18A] bg-white/5 border-white/10',
  'SIMULATION': 'text-orange-400 bg-orange-400/10 border-orange-400/30',
};

const CONFIDENCE_COLORS: Record<string, string> = {
  'High (Established)': 'text-[#8AD74C]',
  'High (Production)': 'text-sky-400',
  'Medium (Experimental)': 'text-[#E8D07C]',
  'TBD (Concept)': 'text-[#A3B18A]',
};

export const EvidenceDashboardClient: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<Category>('All');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return EVIDENCE_REGISTRY.filter(e => {
      const matchCat = categoryFilter === 'All' || e.category === categoryFilter;
      const matchSt = statusFilter === 'All' || e.status === statusFilter;
      const matchSearch = searchQuery === '' || e.claim.toLowerCase().includes(searchQuery.toLowerCase()) || e.id.toLowerCase().includes(searchQuery.toLowerCase()) || e.evidence.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSt && matchSearch;
    });
  }, [categoryFilter, statusFilter, searchQuery]);

  const stats = useMemo(() => ({
    verified: EVIDENCE_REGISTRY.filter(e => e.status === 'VERIFIED').length,
    prototype: EVIDENCE_REGISTRY.filter(e => e.status === 'PROTOTYPE').length,
    research: EVIDENCE_REGISTRY.filter(e => e.status === 'RESEARCH HYPOTHESIS').length,
    concept: EVIDENCE_REGISTRY.filter(e => e.status === 'TARGET CONCEPT' || e.status === 'SIMULATION').length,
  }), []);

  const categories: Category[] = ['All', 'Scientific', 'Hardware', 'AI & Software', 'Environmental', 'Legal & Privacy'];
  const statuses: StatusFilter[] = ['All', 'VERIFIED', 'LIVE', 'PROTOTYPE', 'RESEARCH HYPOTHESIS', 'TARGET CONCEPT', 'SIMULATION'];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Verified', count: stats.verified, icon: CheckCircle2, color: 'text-[#8AD74C]', border: 'border-[#8AD74C]/30' },
          { label: 'Prototype', count: stats.prototype, icon: FlaskConical, color: 'text-[#E8D07C]', border: 'border-[#E8D07C]/30' },
          { label: 'Research', count: stats.research, icon: Activity, color: 'text-purple-400', border: 'border-purple-400/30' },
          { label: 'Concept', count: stats.concept, icon: Lightbulb, color: 'text-[#A3B18A]', border: 'border-white/10' },
        ].map(({ label, count, icon: Icon, color, border }) => (
          <Card key={label} className={['p-4', border, 'flex items-center gap-3'].join(' ')}>
            <Icon className={['w-5 h-5', color].join(' ')} />
            <div>
              <p className={['text-xl font-display font-bold', color].join(' ')}>{count}</p>
              <p className="text-xs text-[#A3B18A] font-mono">{label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Confidence bar */}
      <Card className="p-5 border-white/10 space-y-3">
        <p className="text-xs font-mono text-[#A3B18A] font-bold uppercase tracking-wider">Confidence Distribution</p>
        <div className="flex rounded-full overflow-hidden h-3">
          {(['High (Established)', 'Medium (Experimental)', 'TBD (Concept)'] as const).map((conf) => {
            const pct = Math.round((EVIDENCE_REGISTRY.filter(e => e.confidence === conf).length / EVIDENCE_REGISTRY.length) * 100);
            const colorMap: Record<string, string> = { 'High (Established)': 'bg-[#8AD74C]', 'Medium (Experimental)': 'bg-[#E8D07C]', 'TBD (Concept)': 'bg-white/20' };
            return <div key={conf} style={{ width: pct + '%' }} className={colorMap[conf]} title={conf + ': ' + pct + '%'} />;
          })}
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-mono">
          {[{ label: 'High / Established', color: 'bg-[#8AD74C]' }, { label: 'Medium / Experimental', color: 'bg-[#E8D07C]' }, { label: 'TBD / Concept', color: 'bg-white/20' }].map(({ label, color }) => (
            <span key={label} className="flex items-center gap-1.5 text-[#A3B18A]">
              <span className={['w-2 h-2 rounded-full', color].join(' ')} /> {label}
            </span>
          ))}
        </div>
      </Card>

      {/* Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#A3B18A]" />
          <span className="text-xs font-mono text-[#A3B18A] font-bold uppercase tracking-wider">Filter Registry</span>
        </div>
        <input
          type="text"
          placeholder="Search claims, IDs, or evidence..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full bg-[#0F2B18]/40 border border-white/10 text-[#F7F6F2] rounded-xl px-4 py-2.5 text-sm placeholder:text-[#A3B18A] focus:outline-none focus:border-[#8AD74C]/50 transition-colors"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategoryFilter(cat)}
              className={['px-3 py-1 rounded-full text-xs font-mono border transition-all', categoryFilter === cat ? 'bg-[#8AD74C] text-[#070B08] border-[#8AD74C] font-bold' : 'text-[#A3B18A] border-white/10 hover:border-[#8AD74C]/40'].join(' ')}>
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map(st => (
            <button key={st} onClick={() => setStatusFilter(st)}
              className={['px-3 py-1 rounded-full text-xs font-mono border transition-all', statusFilter === st ? 'bg-white/10 text-[#F7F6F2] border-white/20 font-bold' : 'text-[#A3B18A] border-white/10 hover:border-white/20'].join(' ')}>
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Count row */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-mono text-[#A3B18A]">
          Showing <span className="text-[#8AD74C] font-bold">{filtered.length}</span> of {EVIDENCE_REGISTRY.length} registered claims
        </p>
        {(categoryFilter !== 'All' || statusFilter !== 'All' || searchQuery) && (
          <button onClick={() => { setCategoryFilter('All'); setStatusFilter('All'); setSearchQuery(''); }} className="text-xs text-[#A3B18A] hover:text-[#8AD74C] transition-colors font-mono underline">
            Clear filters
          </button>
        )}
      </div>

      {/* Claims list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <Card className="p-12 text-center border-white/10">
            <p className="text-[#A3B18A] font-mono text-sm">No claims match your current filters.</p>
          </Card>
        ) : filtered.map(entry => (
          <Link href={entry.link} key={entry.id}>
            <Card className="p-5 border-white/10 hover:border-[#8AD74C]/30 transition-all group cursor-pointer space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/20 px-2 py-0.5 rounded">{entry.id}</span>
                  <span className="text-xs font-mono text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">{entry.category}</span>
                </div>
                <span className={['font-mono text-xs font-bold px-2 py-0.5 rounded border', STATUS_COLORS[entry.status]].join(' ')}>{entry.status}</span>
              </div>
              <p className="font-display font-bold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">{entry.claim}</p>
              <p className="text-xs text-[#A3B18A] leading-relaxed">{entry.evidence}</p>
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <span className={['text-xs font-mono', CONFIDENCE_COLORS[entry.confidence]].join(' ')}>Confidence: {entry.confidence}</span>
                <span className="text-xs font-mono text-[#A3B18A]">Updated: {entry.lastUpdated}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EvidenceDashboardClient;