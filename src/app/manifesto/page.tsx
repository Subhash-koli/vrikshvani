import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookOpen, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brand Manifesto — Vriksh Vani',
  description: 'The Vriksh Vani manifesto: why we believe plants speak, why the world has not been listening, and why that ends with NIH-01.',
};

export default function ManifestoPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center space-y-4">
            <Badge variant="lime">Brand Manifesto</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Plants Have Always Been Speaking.
            </h1>
            <p className="text-[#A3B18A]">We just weren&apos;t listening.</p>
          </div>

          <div className="space-y-8 text-[#A3B18A] leading-relaxed">
            <Card className="p-8 space-y-4 border-[#8AD74C]/20">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#8AD74C]" />
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">The Problem</h2>
              </div>
              <p>
                For thousands of years, humans have lived alongside plants. We have eaten them, used them for medicine, built homes with them, and sought peace in their presence. Yet we have never truly understood them. We have treated them as decoration. As passive background. As things that either live or die depending on whether we remember to water them.
              </p>
              <p>
                This is not because plants have nothing to say. It is because we were not equipped to hear them. Plants do not speak in words. They speak in vapour pressure, in leaf temperature, in chemical signatures, in the precise electrical resistance of their root zones. A language of physics. Invisible to the human eye. Inaudible to the human ear.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">The Belief</h2>
              <p>
                We believe that a plant in stress is not just a plant that needs water. It is a living system sending a distress signal that we have not had the tools to receive. We believe that a plant thriving is not silent — it is broadcasting its wellbeing in frequencies we had not learned to decode.
              </p>
              <p>
                We believe that giving a plant a voice is not anthropomorphism. It is translation. The same way a seismograph translates the earth&apos;s movement into a line on paper, NIH-01 translates vapour pressure deficit, leaf thermal delta, and root zone gas signatures into words a human can understand.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">The Mission</h2>
              <p>
                Vriksh Vani exists to close the communication gap between plants and people. Not with sensors that blink at you. Not with apps that push reminders based on schedules. But with a device that listens to your plant — continuously, in real-time, at the biophysical level — and speaks on its behalf.
              </p>
              <p>
                We are not building a gadget. We are building a translator. And in doing so, we believe we will change how humans relate to the natural world around them — one conversation at a time.
              </p>
            </Card>

            <Card className="p-8 space-y-4 border-[#8AD74C]/20">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-[#8AD74C]" />
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">The Commitment</h2>
              </div>
              <p>
                We will always publish our science openly. We will never sell your plant&apos;s data. We will build hardware that lasts decades, not product cycles. We will source responsibly, manufacture carefully, and repair anything we make.
              </p>
              <p className="text-[#F7F6F2] font-semibold italic">
                &quot;Let your plants speak.&quot;
              </p>
              <p className="text-xs font-mono text-[#A3B18A]">— Vriksh Vani Technologies Pvt. Ltd., Bengaluru, India</p>
            </Card>
          </div>

          <div className="flex gap-4 flex-wrap justify-center pt-4">
            <Link href="/about">
              <Button variant="outline">Our Story →</Button>
            </Link>
            <Link href="/nature-intelligence/whitepaper">
              <Button variant="primary">Read the Whitepaper →</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
