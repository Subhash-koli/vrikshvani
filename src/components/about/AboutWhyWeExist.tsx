import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Shield, Sparkles, Compass } from 'lucide-react';

export const AboutWhyWeExist: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Why We Exist</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Reconnecting Humanity to the Natural Order.
          </h2>
          <p className="text-[#A3B18A] text-base">
            Modern urbanization disconnected humans from nature. Vriksh Vani uses technology not to distract, but to deepen our empathy for living flora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="space-y-4">
            <Shield className="w-8 h-8 text-[#8AD74C]" />
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Ethical AI Principles</h3>
            <p className="text-xs text-[#A3B18A] leading-relaxed">
              We never anthropomorphize plants artificially; every voice output maps directly to verifiable thermal and gas biometrics.
            </p>
          </Card>

          <Card className="space-y-4">
            <Sparkles className="w-8 h-8 text-[#E8D07C]" />
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Sustainable Manufacturing</h3>
            <p className="text-xs text-[#A3B18A] leading-relaxed">
              92% recycled ceramic clay, 100% FSC cotton packaging, zero single-use plastics in our supply chain.
            </p>
          </Card>

          <Card className="space-y-4">
            <Compass className="w-8 h-8 text-[#8AD74C]" />
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Open Research Standard</h3>
            <p className="text-xs text-[#A3B18A] leading-relaxed">
              We publish our plant bio-physics findings and provide open SDKs for university research labs globally.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyWeExist;
