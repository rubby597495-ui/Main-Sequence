import type { ClaimStatus } from './site';

export type Fact = {
  label: string;
  value: string;
  status: ClaimStatus;
  sourceIds: string[];
  note?: string;
};

export const GAME_FACTS: Fact[] = [
  {
    label: 'Release date',
    value: 'November 12, 2026',
    status: 'confirmed',
    sourceIds: ['steam-news-2026-10-01', 'steam-store'],
    note: 'Steam Early Access. Exact unlock hour is not officially confirmed.',
  },
  {
    label: 'Developer',
    value: 'Tumbling Dumpling Studio',
    status: 'confirmed',
    sourceIds: ['steam-store', 'gamespress'],
    note: 'The one-person studio of Kaiden Ho, based in Ottawa, Canada.',
  },
  {
    label: 'Publisher',
    value: 'Mythwright',
    status: 'confirmed',
    sourceIds: ['steam-store', 'gamespress', 'steam-news-2026-05-28'],
  },
  {
    label: 'Platform',
    value: 'Windows PC',
    status: 'confirmed',
    sourceIds: ['steam-store', 'steam-news-2026-10-01'],
    note: 'Launch announcement names Steam Early Access. No console version has been announced.',
  },
  {
    label: 'Price',
    value: 'Not announced',
    status: 'unknown',
    sourceIds: ['steam-news-2026-10-01'],
    note: 'The developer said price and launch-time details would follow the date announcement.',
  },
  {
    label: 'Demo',
    value: 'Available on Steam',
    status: 'confirmed',
    sourceIds: ['steam-demo', 'steam-news-2026-10-19'],
    note: 'Free demo; co-op was added in the October 19, 2026 update.',
  },
  {
    label: 'Early Access length',
    value: 'Planned 1–2 years',
    status: 'confirmed',
    sourceIds: ['steam-store'],
    note: 'The developer states that the most important factor is leaving Early Access as a complete, well-rounded game.',
  },
  {
    label: 'Launch content estimate',
    value: 'Around 40 hours',
    status: 'confirmed',
    sourceIds: ['steam-store'],
    note: "The developer's current Early Access content estimate; automation-focused players may play much longer.",
  },
  {
    label: 'Co-op',
    value: 'Online and LAN co-op',
    status: 'confirmed',
    sourceIds: ['steam-store', 'steam-news-2026-10-19'],
    note: 'Each player captains their own ship. Player cap and dedicated-server support are not publicly confirmed.',
  },
];

export const FEATURES = [
  {
    index: '01',
    title: 'Automate',
    body:
      'Scan asteroids, mine ore, refine it aboard your ship, then move production onto a station. Build machines, connect them with conveyor belts and keep the line supplied.',
    sourceIds: ['steam-store', 'steam-news-2025-08-12'],
  },
  {
    index: '02',
    title: 'Build',
    body:
      'Design ships and stations module by module, inside and out. Cargo, reactors, weapons, habitats and decoration are all part of the build.',
    sourceIds: ['steam-store', 'steam-news-2025-08-12'],
  },
  {
    index: '03',
    title: 'Defend',
    body:
      'Industrial activity wakes an ancient alien defense network. Use mobile ships, station turrets, shields and repair tools to protect what you have built.',
    sourceIds: ['steam-store', 'steam-news-2026-09-21', 'steam-news-2026-10-19'],
  },
  {
    index: '04',
    title: 'Expand',
    body:
      'Turn produced items into research. Unlocks add ships, station modules, items and upgrades, pushing you into new sectors with new resources and threats.',
    sourceIds: ['steam-store', 'steam-news-2026-09-09'],
  },
  {
    index: '05',
    title: 'Explore',
    body:
      'Procedurally generated systems bring different logistics problems, wrecks, allies and stellar phenomena such as black holes and neutron stars.',
    sourceIds: ['steam-store', 'mythwright'],
  },
  {
    index: '06',
    title: 'Cooperate',
    body:
      'In co-op every player commands their own ship. Split logistics, production, defense and exploration, or work the same objective together.',
    sourceIds: ['steam-store', 'steam-news-2026-10-19'],
  },
];

export const GAMEPLAY_LOOP = [
  {
    step: 'Scan',
    description:
      'Use ship scanners to identify worthwhile asteroids in the starting belt.',
  },
  {
    step: 'Mine',
    description:
      'Mine by hand from the ship, or scale up with mining drone bays on a station.',
  },
  {
    step: 'Refine',
    description:
      'Process ore on the ship early, then move refining and crafting into station machines.',
  },
  {
    step: 'Automate',
    description:
      'Power the station, connect machines with belts and solve material flow.',
  },
  {
    step: 'Research',
    description:
      'Feed produced items into science to unlock logistics, production, power and ship technology.',
  },
  {
    step: 'Expand',
    description:
      'Build a fleet, move between sectors, defend the network and push toward the next science tier.',
  },
];

export const SYSTEM_REQUIREMENTS = {
  minimum: [
    { label: 'Operating system', value: 'Windows 10 64-bit' },
    { label: 'Processor', value: 'Intel Core i5-8400 or equivalent' },
    { label: 'Memory', value: '8 GB RAM' },
    { label: 'Graphics', value: 'NVIDIA GTX 1050 or AMD RX 460' },
    { label: 'DirectX', value: 'Version 12' },
    { label: 'Storage', value: '5 GB available space' },
  ],
  recommended: null,
  note:
    'Steam currently publishes only the minimum specification. No separate recommended tier is listed there.',
};

export const LANGUAGES = [
  'English',
  'French',
  'German',
  'Spanish (Spain)',
  'Japanese',
  'Korean',
  'Polish',
  'Portuguese (Brazil)',
  'Russian',
  'Simplified Chinese',
];

export const FAQS = {
  release: [
    {
      question: 'When does Main Sequence release?',
      answer:
        'Main Sequence is scheduled to enter Steam Early Access on November 12, 2026. The developer announced the date on October 1, 2026 and Steam displays the same date.',
    },
    {
      question: 'Has the exact launch time been announced?',
      answer:
        'Not by the developer. SteamDB lists a store release time of 16:00 UTC on November 12, 2026, but that is an unofficial listing. Our countdown labels it as an estimate until the publisher confirms an unlock hour.',
    },
    {
      question: 'How much will Main Sequence cost?',
      answer:
        'No price has been announced. The developer said price and launch-time details would follow the release-date announcement. We will not treat third-party estimates as confirmed.',
    },
    {
      question: 'Which platforms is Main Sequence on?',
      answer:
        'The confirmed launch target is Windows PC through Steam Early Access. An Epic Games Store listing exists, but the official launch announcement specifically names Steam. No PlayStation, Xbox or other console version has been announced.',
    },
    {
      question: 'Will the price change after Early Access?',
      answer:
        'The developer expects the 1.0 price to be adjusted to reflect the finished game and expanded content. The Early Access price has not yet been revealed.',
    },
    {
      question: 'Does Main Sequence support co-op?',
      answer:
        'Yes. The Steam page lists online co-op and LAN co-op, and the October 19, 2026 demo update added co-op multiplayer to the demo. Each player captains their own ship. A maximum player count has not been publicly confirmed.',
    },
    {
      question: 'Is Main Sequence on Xbox Game Pass?',
      answer:
        'We found no Xbox Game Pass announcement. The confirmed launch plan is Windows PC via Steam Early Access.',
    },
    {
      question: 'Does Main Sequence support controllers?',
      answer:
        'The developer said in September 2025 that controller support was planned for the Early Access launch. That is a plan rather than proof that every controller configuration will work in the current demo. HOTAS support has not been confirmed.',
    },
  ],
  demo: [
    {
      question: 'Is the Main Sequence demo free?',
      answer:
        'Yes. The demo is a free download on Steam and remains listed at the time of our last check on November 1, 2026.',
    },
    {
      question: 'How far does the Main Sequence demo go?',
      answer:
        "Steam describes the demo as covering the first two technology tiers and culminating in the Slipstream Drive. The October 19, 2026 update also added the Electromagnetic Science branch, new equipment, new places and a Shield Generator Mk. 1.",
    },
    {
      question: 'Does the demo support co-op?',
      answer:
        'The demo launched as a single-player demo, but the October 19, 2026 Next Fest update added co-op multiplayer. The older Steam demo description may still call it single-player.',
    },
    {
      question: 'Will demo saves carry into Early Access?',
      answer:
        'That has not been confirmed. Treat the demo as a preview and avoid assuming that its save files or station builds will transfer into the Early Access release.',
    },
  ],
  coOp: [
    {
      question: 'How many players can play Main Sequence co-op?',
      answer:
        'A public player cap has not been announced. Steam lists online co-op and LAN co-op, and the developer describes every player as the captain of their own ship.',
    },
    {
      question: 'Is Main Sequence co-op cross-platform?',
      answer:
        'No cross-platform co-op details have been announced. At launch, the confirmed platform is Windows PC via Steam.',
    },
    {
      question: 'Are there dedicated servers?',
      answer:
        'Dedicated servers have not been mentioned in the official store description or launch announcements. The current confirmed modes are online co-op and LAN co-op.',
    },
    {
      question: 'Does co-op progress save for everyone?',
      answer:
        'There is no official detail on host migration, shared progression or separate player saves. The demo is the best current reference, and multiplayer behavior may change before or after Early Access.',
    },
  ],
};
