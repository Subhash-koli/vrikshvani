import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌿 Seeding Vriksh Vani Database...\n');

  // --- Seed 1: Founding Admin User ---
  const founder = await prisma.user.upsert({
    where: { email: 'siddhant@vrikshvani.com' },
    update: {},
    create: {
      name: 'Siddhant Tiwari',
      email: 'siddhant@vrikshvani.com',
      role: 'SYSTEM_ADMIN',
    },
  });
  console.log(`✅ Created User: ${founder.name} (${founder.role})`);

  // --- Seed 2: Founding Member Waitlist Entry ---
  const waitlistEntry = await prisma.waitlistEntry.upsert({
    where: { email: 'founding@vrikshvani.com' },
    update: {},
    create: {
      name: 'Sample Founding Member',
      email: 'founding@vrikshvani.com',
      preferredColorway: 'BIOPHILIC_SAGE',
      referralCode: 'LEAFCODE-SEED01',
      queuePosition: 1,
      priorityScore: 9999,
      status: 'CONFIRMED',
    },
  });
  console.log(`✅ Created Waitlist Entry: Queue #${waitlistEntry.queuePosition} — ${waitlistEntry.referralCode}`);

  // --- Seed 3: Demo Sensor Hub ---
  const demoDevice = await prisma.sensorHubDevice.upsert({
    where: { serialNumber: 'NIH01-BATCH01-SEED01' },
    update: {},
    create: {
      serialNumber: 'NIH01-BATCH01-SEED01',
      macAddress: 'AA:BB:CC:DD:EE:FF',
      firmwareVersion: 'v1.3.0',
      status: 'ONLINE',
    },
  });
  console.log(`✅ Created Sensor Hub: ${demoDevice.serialNumber} (${demoDevice.status})`);

  // --- Seed 4: Demo Plant Profiles ---
  const plants = [
    { nickname: 'Milo the Monstera', voicePersonality: 'CALM_WARM' as const, healthScore: 96, currentEmotion: 'Photosynthetic Joy 🌿' },
    { nickname: 'Pip the Pothos', voicePersonality: 'PLAYFUL_CURIOUS' as const, healthScore: 88, currentEmotion: 'Gentle Thirst 💧' },
    { nickname: 'Atlas the Ficus', voicePersonality: 'SCIENTIFIC_PRECISION' as const, healthScore: 72, currentEmotion: 'Transpiration Fatigue 🌡️' },
  ];

  for (const plant of plants) {
    const profile = await prisma.plantProfile.create({
      data: {
        userId: founder.id,
        deviceId: demoDevice.id,
        ...plant,
      },
    });
    console.log(`✅ Created Plant Profile: "${profile.nickname}" — Health: ${profile.healthScore}%`);

    // Seed bio-signal readings for each plant
    await prisma.bioSignalReading.createMany({
      data: Array.from({ length: 5 }, (_, i) => ({
        plantProfileId: profile.id,
        leafSurfaceTemp: 23.4 + i * 0.2,
        ambientTemp: 24.1 + i * 0.1,
        relativeHumidity: 58 + i * 2,
        computedVpd: 1.05 + i * 0.05,
        vocGasResistance: 42100 - i * 500,
        healthScore: plant.healthScore - i,
        emotionTag: plant.currentEmotion,
        readingTimestamp: new Date(Date.now() - i * 15 * 60 * 1000),
      })),
    });
    console.log(`   └─ Seeded 5 bio-signal readings for "${profile.nickname}"`);
  }

  console.log('\n🌿 Vriksh Vani Database Seeded Successfully!\n');
}

main()
  .catch((e) => {
    console.error('❌ Seed Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
