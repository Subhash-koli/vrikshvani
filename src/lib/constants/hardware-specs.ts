export interface HardwareSpecification {
  category: string;
  component: string;
  model: string;
  parameters: string;
  status: 'TARGET HARDWARE' | 'RESEARCH PROTOTYPE' | 'PLANNED INTEGRATION';
  description: string;
}

export const CANONICAL_HARDWARE_SPECS: HardwareSpecification[] = [
  {
    category: 'Thermal Optics',
    component: 'LWIR Microbolometer Array',
    model: 'FLIR Lepton 3.5 Core Target',
    parameters: '160x120 pixels · NETD <50mK · 57° FOV · 8-14μm LWIR',
    status: 'TARGET HARDWARE',
    description: 'Uncooled long-wave infrared thermal sensor target for non-invasive foliar thermography.',
  },
  {
    category: 'Environmental Sensing',
    component: 'Environmental Gas & VOC Sensor',
    model: 'Bosch BME688 MOX Target',
    parameters: 'VOC index · CO2 equiv · H2 · Temperature ±0.5°C · Humidity ±3% RH',
    status: 'TARGET HARDWARE',
    description: 'Metal-oxide multi-gas resistance sensor target for atmospheric VOC baseline tracking.',
  },
  {
    category: 'Precision Reference',
    component: 'Atmospheric Relative Humidity Sensor',
    model: 'Sensirion SHT41 Target',
    parameters: '±1.8% RH · ±0.2°C precision · Ultra-low power draw',
    status: 'TARGET HARDWARE',
    description: 'High-accuracy ambient temperature and relative humidity sensor for calculating Vapor Pressure Deficit (VPD).',
  },
  {
    category: 'Edge Computing',
    component: 'Dual-Core Microcontroller',
    model: 'Espressif ESP32-S3 Target',
    parameters: '240MHz dual-core Xtensa LX7 · 512KB SRAM · 8MB Flash · Vector Extensions',
    status: 'RESEARCH PROTOTYPE',
    description: 'Low-power microcontroller executing quantized INT8 TinyML models on-device with zero cloud latency.',
  },
  {
    category: 'Acoustics & Interface',
    component: 'Neodymium Full-Range Speaker',
    model: '40mm Neodymium Driver + Copper Grille',
    parameters: '2W RMS · 100Hz–20kHz response · 16-strand braided copper mesh',
    status: 'TARGET HARDWARE',
    description: 'Acoustically tuned speaker driver designed for warm human speech synthesis via NTE™ Engine.',
  },
  {
    category: 'Enclosure & Materials',
    component: 'Stoneware Ceramic Housing',
    model: 'Handcrafted Ceramic Shell Concept',
    parameters: '1,250°C kiln-fired stoneware · Porous ceramic thermal mass · 0% virgin plastic',
    status: 'TARGET HARDWARE',
    description: 'Handcrafted biophilic ceramic casing designed to age naturally with organic patina.',
  },
];
