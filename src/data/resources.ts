export type ResourceCategory =
  | 'Raw resource'
  | 'Refined material'
  | 'Component'
  | 'Science type'
  | 'Consumable';

export type Resource = {
  name: string;
  category: ResourceCategory;
  context: string;
  sourceIds: string[];
};

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  'Raw resource',
  'Refined material',
  'Component',
  'Science type',
  'Consumable',
];

export const RESOURCES: Resource[] = [
  {
    name: 'Titanium Ore',
    category: 'Raw resource',
    context:
      'Shown as a scannable asteroid resource in an official game screenshot. The demo also contains enriched titanium processing.',
    sourceIds: ['steam-screens', 'steam-news-2026-06-02'],
  },
  {
    name: 'Nickel ore',
    category: 'Raw resource',
    context:
      'The official patch notes mention Rich Nickel Asteroids and Enriched Nickel Ore. The exact base-item label is not separately shown in our public sources.',
    sourceIds: ['steam-news-2026-09-21', 'steam-news-2026-06-02'],
  },
  {
    name: 'Cobalt',
    category: 'Raw resource',
    context:
      'Cobalt is found in other sectors after the starting system and is used to make Electromagnetic Science, according to the developer.',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Graphite',
    category: 'Raw resource',
    context:
      'Graphite is found alongside Cobalt in other sectors and feeds the Electromagnetic Science production chain.',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Glass',
    category: 'Refined material',
    context:
      'Added as an item with the Silica Refining technology. The patch notes describe a window block and a glass item.',
    sourceIds: ['steamdb-playtest-13', 'steam-screens'],
  },
  {
    name: 'Enriched Titanium Ore',
    category: 'Refined material',
    context:
      'Processed at the ship workstation in the demo. Official patch notes reduced its crafting time from 6 seconds to 3 seconds.',
    sourceIds: ['steam-news-2026-06-02', 'steam-news-2026-05-30'],
  },
  {
    name: 'Enriched Nickel Ore',
    category: 'Refined material',
    context:
      'Processed through the demo’s ore enrichment line. The official hotfix notes group it with enriched titanium.',
    sourceIds: ['steam-news-2026-06-02', 'steam-news-2026-05-30'],
  },
  {
    name: 'Titanium Plates',
    category: 'Refined material',
    context:
      'A build material referenced in official balance notes for the demo-era container recipe.',
    sourceIds: ['steam-news-2026-09-17'],
  },
  {
    name: 'Hull Plate',
    category: 'Component',
    context:
      'Used in ship construction cost readouts shown in official screenshots, including hull plating for a large frigate design.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Reinforced Glass',
    category: 'Component',
    context:
      'A ship-building material shown in official screenshots. It appears in the cost for habitat windows and larger hulls.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Lightweight Frame',
    category: 'Component',
    context:
      'Used in demo build costs. Official patch notes show it being used for containers and ship construction; some balance values have changed.',
    sourceIds: ['steam-screens', 'steam-news-2026-09-17'],
  },
  {
    name: 'Reinforced Plate',
    category: 'Component',
    context:
      'Listed in a ship construction cost panel in an official screenshot.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Basic Circuits',
    category: 'Component',
    context:
      'A craftable component in the production side of the visible research tree and in ship build costs.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Advanced Circuits',
    category: 'Component',
    context:
      'Shown as a higher-tier ship construction material in an official build-cost panel.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Magnetic Coils',
    category: 'Component',
    context:
      'A ship construction component shown in official screenshots. Exact crafting inputs are not confirmed by our sources.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Iridium Plates',
    category: 'Component',
    context:
      'A ship construction material shown in an official screenshot for a large cruiser design.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Superconductor Coil',
    category: 'Component',
    context:
      'A late production-tree node visible in the official demo research screenshot; also used in ship construction costs.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Superalloy Frame',
    category: 'Component',
    context:
      'A higher-tier ship construction material shown in an official build-cost panel.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Capacitors',
    category: 'Component',
    context:
      'Official balance notes list Capacitors as part of the Station Plasma Turret cost after the September 17, 2026 patch.',
    sourceIds: ['steam-news-2026-09-17'],
  },
  {
    name: 'Servomotor',
    category: 'Component',
    context:
      'A production research node visible in the official demo technology tree.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Servo Plates',
    category: 'Component',
    context:
      'A production research node and ship-building material visible in official screenshots.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Advanced Plate',
    category: 'Component',
    context:
      'A production research node shown after Servo Plates in the official demo technology tree.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Containment Coil',
    category: 'Component',
    context:
      'A production research node shown in the official demo technology tree.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Coolant',
    category: 'Component',
    context:
      'A locked production research node shown after Containment Coil in the official demo tree.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Superalloy',
    category: 'Component',
    context:
      'A locked production research node shown after Coolant in the official demo tree.',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Warp Fuel',
    category: 'Consumable',
    context:
      'The only fuel that can be inserted into the Slipstream Drive, per the official September 2026 patch notes. Also appears in the production research tree.',
    sourceIds: ['steam-news-2026-09-21', 'steam-screens'],
  },
  {
    name: 'Repair Pack',
    category: 'Consumable',
    context:
      'Crafted in the Assembler and used from the pilot seat to repair ships, according to the August 2025 playtest patch notes.',
    sourceIds: ['steamdb-playtest-13'],
  },
  {
    name: 'Electromagnetic Science',
    category: 'Science type',
    context:
      'The research branch added to the demo for the October 19, 2026 Next Fest update. Cobalt and Graphite are part of its production chain.',
    sourceIds: ['steam-news-2026-10-19', 'steam-news-2026-09-09'],
  },
  {
    name: 'Quantum Science',
    category: 'Science type',
    context:
      'A science tier beyond the starting demo progression, described in the developer’s September playtest post.',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Astronomic Science',
    category: 'Science type',
    context:
      'A late-game science type researched with resources found in other star systems, according to the developer.',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Xenobiologic Science',
    category: 'Science type',
    context:
      'The final science type named in the September 2026 playtest overview, leading to late-game equipment and modules.',
    sourceIds: ['steam-news-2026-09-09'],
  },
];
