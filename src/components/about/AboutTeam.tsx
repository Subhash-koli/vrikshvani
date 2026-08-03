'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const AboutTeam: React.FC = () => {
  const team = [
    {
      name: "Dr. Ramesh Varma",
      role: "Head of Biophysics",
      bio: "Former IISc Bengaluru researcher specializing in stomatal thermal flux and plant transpiration dynamics.",
    },
    {
      name: "Elena Rostova",
      role: "Principal Industrial Designer",
      bio: "Award-winning ceramic designer formerly leading hardware aesthetic studios in London & Milan.",
    },
    {
      name: "Karthik Subramanian",
      role: "VP of Embedded AI",
      bio: "TinyML expert focused on quantized ARM Cortex-M4 NPU neural network architectures.",
    },
  ];

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Multidisciplinary Team</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Botanists, Bio-Physicists & Engineers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center font-display font-bold text-lg text-[#8AD74C]">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">{member.name}</h3>
              <Badge variant="lime">{member.role}</Badge>
              <p className="text-xs text-[#A3B18A] leading-relaxed pt-2">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
