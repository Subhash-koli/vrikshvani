'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Sparkles, Users, Layers, Award, Download, RefreshCw, CheckCircle2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  preferredColorway: string;
  referralCode: string;
  referralCount: number;
  queuePosition: number;
  priorityScore: number;
  status: string;
  joinedAt: string;
}

interface AdminData {
  totalCount: number;
  sageCount: number;
  creamCount: number;
  totalReferrals: number;
  entries: WaitlistEntry[];
}

export default function AdminWaitlistPage() {
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [colorwayFilter, setColorwayFilter] = useState<'ALL' | 'BIOPHILIC_SAGE' | 'CREAM_WHITE'>('ALL');

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/admin/waitlist');
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      }
    } catch (err) {
      console.error('Failed to load admin pre-orders', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const filteredEntries = (data?.entries || []).filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.referralCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesColorway =
      colorwayFilter === 'ALL' || e.preferredColorway === colorwayFilter;
    return matchesSearch && matchesColorway;
  });

  const exportCSV = () => {
    if (!data?.entries) return;
    const headers = ['Queue Position,Name,Email,Colorway,Referral Code,Referrals,Priority Score,Status,Joined At'];
    const rows = data.entries.map((e) =>
      `"${e.queuePosition}","${e.name}","${e.email}","${e.preferredColorway}","${e.referralCode}","${e.referralCount}","${e.priorityScore}","${e.status}","${e.joinedAt}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Vriksh_Vani_PreOrders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="lime" className="gap-1 font-mono text-xs">
                  <ShieldAlert className="w-3.5 h-3.5" /> Internal Admin Portal
                </Badge>
                <span className="text-xs font-mono text-[#A3B18A]">Live Database View</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#F7F6F2]">
                NIH-01 Batch 01 Pre-Orders Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm" onClick={fetchEntries} className="gap-2">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
              </Button>
              <Button variant="primary" size="sm" onClick={exportCSV} className="gap-2">
                <Download className="w-4 h-4" /> Export CSV
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-5 space-y-1 text-center border-white/10 nidl-glass">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#8AD74C]">
                <Users className="w-4 h-4" /> Total Reservations
              </div>
              <p className="font-display text-3xl font-bold text-[#F7F6F2]">
                {loading ? '...' : data?.totalCount || 0}
              </p>
              <p className="text-[10px] text-[#A3B18A] font-mono">Founding Batch 01</p>
            </Card>

            <Card className="p-5 space-y-1 text-center border-[#8AD74C]/30 nidl-glass">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#8AD74C]">
                <Sparkles className="w-4 h-4" /> Biophilic Sage
              </div>
              <p className="font-display text-3xl font-bold text-[#8AD74C]">
                {loading ? '...' : data?.sageCount || 0}
              </p>
              <p className="text-[10px] text-[#A3B18A] font-mono">
                {data?.totalCount ? Math.round(((data.sageCount || 0) / data.totalCount) * 100) : 0}% Share
              </p>
            </Card>

            <Card className="p-5 space-y-1 text-center border-[#E8D07C]/30 nidl-glass">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#E8D07C]">
                <Layers className="w-4 h-4" /> Cream White
              </div>
              <p className="font-display text-3xl font-bold text-[#E8D07C]">
                {loading ? '...' : data?.creamCount || 0}
              </p>
              <p className="text-[10px] text-[#A3B18A] font-mono">
                {data?.totalCount ? Math.round(((data.creamCount || 0) / data.totalCount) * 100) : 0}% Share
              </p>
            </Card>

            <Card className="p-5 space-y-1 text-center border-white/10 nidl-glass">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-sky-400">
                <Award className="w-4 h-4" /> Total Viral Referrals
              </div>
              <p className="font-display text-3xl font-bold text-sky-400">
                {loading ? '...' : data?.totalReferrals || 0}
              </p>
              <p className="text-[10px] text-[#A3B18A] font-mono">Completed Invites</p>
            </Card>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-[#A3B18A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, email, or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0F2B18]/60 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-mono text-[#A3B18A]">Colorway:</span>
              {(['ALL', 'BIOPHILIC_SAGE', 'CREAM_WHITE'] as const).map((cw) => (
                <button
                  key={cw}
                  onClick={() => setColorwayFilter(cw)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    colorwayFilter === cw
                      ? 'bg-[#8AD74C] text-[#070B08] font-bold'
                      : 'bg-[#0F2B18]/40 text-[#A3B18A] hover:text-[#F7F6F2] border border-white/5'
                  }`}
                >
                  {cw === 'ALL' ? 'All' : cw === 'BIOPHILIC_SAGE' ? 'Sage' : 'Cream'}
                </button>
              ))}
            </div>
          </div>

          {/* Data Table */}
          <Card className="overflow-hidden border-white/10 p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0F2B18]/80 text-[#A3B18A] font-mono uppercase tracking-wider border-b border-white/10">
                  <tr>
                    <th className="p-4">Queue #</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Colorway</th>
                    <th className="p-4">Referral Code</th>
                    <th className="p-4">Referrals</th>
                    <th className="p-4">Priority Score</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Joined Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#F7F6F2]">
                  {loading ? (
                    <tr>
                      <td colSpan={9} className="p-8 text-center text-[#A3B18A] font-mono">
                        Loading pre-orders from database...
                      </td>
                    </tr>
                  ) : filteredEntries.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="p-8 text-center text-[#A3B18A] font-mono">
                        No pre-order reservations match your search.
                      </td>
                    </tr>
                  ) : (
                    filteredEntries.map((e) => (
                      <tr key={e.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono font-bold text-[#E8D07C]">
                          #{e.queuePosition}
                        </td>
                        <td className="p-4 font-semibold">{e.name}</td>
                        <td className="p-4 font-mono text-[#A3B18A]">{e.email}</td>
                        <td className="p-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] ${
                              e.preferredColorway === 'BIOPHILIC_SAGE'
                                ? 'bg-[#0F2B18] text-[#8AD74C] border border-[#8AD74C]/30'
                                : 'bg-[#E8D07C]/10 text-[#E8D07C] border border-[#E8D07C]/30'
                            }`}
                          >
                            {e.preferredColorway === 'BIOPHILIC_SAGE' ? '🌿 Sage' : '✨ Cream'}
                          </span>
                        </td>
                        <td className="p-4 font-mono text-[#8AD74C]">{e.referralCode}</td>
                        <td className="p-4 font-mono text-center font-bold">
                          {e.referralCount}
                        </td>
                        <td className="p-4 font-mono text-center font-bold text-[#8AD74C]">
                          {e.priorityScore}
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8AD74C]">
                            <CheckCircle2 className="w-3 h-3" /> {e.status}
                          </span>
                        </td>
                        <td className="p-4 font-mono text-[11px] text-[#A3B18A]">
                          {new Date(e.joinedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
