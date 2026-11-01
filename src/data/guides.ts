export type GuideCard = {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  level: 'Start here' | 'Core systems' | 'Multiplayer' | 'Reference';
  image?: string;
  imageAlt?: string;
  updated: string;
};

export const GUIDES: GuideCard[] = [
  {
    href: '/beginner-guide/',
    title: "Beginner's guide: from mining ship to first factory",
    description:
      'The spoiler-light route through the opening: scan, mine, refine, build a station, power it and start researching.',
    eyebrow: 'Start here',
    level: 'Start here',
    image: 'main-sequence-mining-laser.jpg',
    imageAlt:
      'A mining ship fires an orange laser into an asteroid in Main Sequence',
    updated: '2026-11-01',
  },
  {
    href: '/guides/first-station-logistics/',
    title: 'Why conveyor belts are missing — and how to unlock them',
    description:
      'A focused fix for the most common demo roadblock: station power, the Logistics I research step and building your first belt line.',
    eyebrow: 'Demo field fix',
    level: 'Core systems',
    image: 'main-sequence-conveyor-belt-build.jpg',
    imageAlt:
      'A player places Conveyor Belt Mk. 1 segments inside a Main Sequence station',
    updated: '2026-11-01',
  },
  {
    href: '/guides/factory-layout/',
    title: 'Factory layout: build a clean first floor',
    description:
      'Plan around power, material flow, storage and future expansion without relying on unverified ratios.',
    eyebrow: 'Automation',
    level: 'Core systems',
    image: 'main-sequence-factory-floor.jpg',
    imageAlt:
      'A row of production machines and conveyor belts on a Main Sequence station',
    updated: '2026-11-01',
  },
  {
    href: '/guides/ship-design/',
    title: 'Ship design: mass, thrust, modules and blueprints',
    description:
      'Use the Designer like a shipwright: define the role, read the build stats, plan power and storage, then save a reusable blueprint.',
    eyebrow: 'Shipyard',
    level: 'Core systems',
    image: 'main-sequence-large-cruiser.jpg',
    imageAlt:
      'A large white and orange cruiser displayed in the Main Sequence ship Designer',
    updated: '2026-11-01',
  },
  {
    href: '/guides/combat-defense/',
    title: 'Combat and defense: build a layered station',
    description:
      'What is confirmed about alien attacks, shields, station turrets, repair packs and using fleet mobility to answer threats.',
    eyebrow: 'Threat response',
    level: 'Core systems',
    image: 'main-sequence-combat-alert.jpg',
    imageAlt:
      'A Main Sequence cockpit view during an alien combat alert',
    updated: '2026-11-01',
  },
  {
    href: '/guides/co-op/',
    title: 'Co-op guide and crew planner',
    description:
      'The current multiplayer picture, what each captain can own, what remains unconfirmed, and a planner for splitting the workload.',
    eyebrow: 'Multiplayer',
    level: 'Multiplayer',
    image: 'main-sequence-fleet-management.jpg',
    imageAlt:
      'The Main Sequence fleet management screen listing stations and ships',
    updated: '2026-11-01',
  },
  {
    href: '/database/research/',
    title: 'Research tree and science types',
    description:
      'A source-labelled look at the visible demo tech tree, from Logistics I and Mining Drones to Slipstream Drive and Electromagnetic Science.',
    eyebrow: 'Reference',
    level: 'Reference',
    image: 'main-sequence-research-tree.jpg',
    imageAlt:
      'The Main Sequence research screen showing production, logistics, power and ship-module technology branches',
    updated: '2026-11-01',
  },
];

export const GUIDE_LEVELS = [
  'Start here',
  'Core systems',
  'Multiplayer',
  'Reference',
] as const;
