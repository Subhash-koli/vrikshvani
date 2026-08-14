import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const sampleTelemetry = {
    dataset: 'Vriksh Vani Biophysics Open Telemetry Sample #001',
    timestamp: '2026-08-14T12:00:00Z',
    specimen: {
      species: 'Monstera deliciosa',
      ageYears: 3,
      foliarAreaCm2: 450,
      potType: 'Porous Terracotta',
    },
    sensorSuite: {
      thermalOptics: 'FLIR Lepton 3.5 LWIR (160x120)',
      gasSensor: 'Bosch BME688 MOX',
      humidityRef: 'Sensirion SHT41',
      microcontroller: 'ESP32-S3 Dual-Core 240MHz',
    },
    readings: [
      { timeOffsetMin: 0, ambientTempC: 23.4, ambientRhPct: 65.0, vpdKpa: 1.21, leafTempC: 21.6, leafDeltaC: -1.8, bme688GasKohm: 480, status: 'OPTIMAL_TRANSPIRATION' },
      { timeOffsetMin: 60, ambientTempC: 23.6, ambientRhPct: 54.0, vpdKpa: 1.58, leafTempC: 22.2, leafDeltaC: -1.4, bme688GasKohm: 495, status: 'OPTIMAL_TRANSPIRATION' },
      { timeOffsetMin: 120, ambientTempC: 23.8, ambientRhPct: 41.0, vpdKpa: 2.08, leafTempC: 23.2, leafDeltaC: -0.6, bme688GasKohm: 520, status: 'STOMATAL_CONSTRICTION' },
      { timeOffsetMin: 180, ambientTempC: 24.1, ambientRhPct: 32.0, vpdKpa: 2.56, leafTempC: 24.5, leafDeltaC: 0.4, bme688GasKohm: 565, status: 'TRANSPIRATION_SHUTDOWN' },
      { timeOffsetMin: 240, ambientTempC: 24.3, ambientRhPct: 28.0, vpdKpa: 2.78, leafTempC: 25.5, leafDeltaC: 1.2, bme688GasKohm: 590, status: 'PRE_WILTING_STRESS' },
    ],
    license: 'CC BY 4.0 Open Research License',
    contact: 'science@vrikshvani.com',
  };

  return NextResponse.json(sampleTelemetry, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="vrikshvani-telemetry-sample-001.json"',
    },
  });
}
