'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Settings, Shield, Bell, Key, Save } from 'lucide-react';

export default function SettingsPage() {
  const [openDataOptIn, setOpenDataOptIn] = useState(true);
  const [voiceLanguage, setVoiceLanguage] = useState('English');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-[#8AD74C]" />
            <div>
              <h1 className="font-display text-3xl font-bold text-[#F7F6F2]">Hub Settings</h1>
              <p className="text-xs text-[#A3B18A]">Manage NIH-01 telemetry preferences, voice language, and API keys</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold font-display text-[#F7F6F2]">
                <Shield className="w-5 h-5 text-[#8AD74C]" /> Open Data Programme
              </div>
              <p className="text-xs text-[#A3B18A] leading-relaxed">
                Contribute anonymised bio-signal readings (VPD, thermal delta) to open botanical research. 100% voluntary and revocable.
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="opendata"
                  checked={openDataOptIn}
                  onChange={(e) => setOpenDataOptIn(e.target.checked)}
                  className="w-4 h-4 accent-[#8AD74C] rounded"
                />
                <label htmlFor="opendata" className="text-sm font-semibold text-[#F7F6F2] cursor-pointer">
                  Opt-in to Open Data Programme (CC BY 4.0)
                </label>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold font-display text-[#F7F6F2]">
                <Bell className="w-5 h-5 text-[#8AD74C]" /> NTE™ Voice Settings
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#A3B18A] uppercase">Voice Language</label>
                <select
                  value={voiceLanguage}
                  onChange={(e) => setVoiceLanguage(e.target.value)}
                  className="w-full bg-[#030504] border border-white/10 rounded-card px-4 py-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C]"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold font-display text-[#F7F6F2]">
                <Key className="w-5 h-5 text-[#8AD74C]" /> Developer API Key
              </div>
              <p className="text-xs text-[#A3B18A]">Your scoped API key for local REST/WebSocket telemetry access.</p>
              <div className="flex gap-2">
                <Input value="vv_live_9f83a210b48c909e7a" readOnly className="font-mono text-xs" />
                <Button variant="outline" type="button">Copy</Button>
              </div>
            </Card>

            <div className="flex items-center gap-4">
              <Button variant="primary" type="submit" className="flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Settings
              </Button>
              {saved && <span className="text-sm font-mono text-[#8AD74C]">✓ Saved successfully!</span>}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
