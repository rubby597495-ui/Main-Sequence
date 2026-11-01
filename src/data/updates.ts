export type UpdateEntry = {
  date: string;
  title: string;
  type: 'Release' | 'Demo' | 'Patch' | 'Playtest' | 'Development';
  summary: string;
  sourceId: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const UPDATES: UpdateEntry[] = [
  {
    date: '2026-10-21',
    title: 'Hotfix 2026.10.21',
    type: 'Patch',
    summary:
      "Fixed the 'No item' filter in docks and drone bays and raised the default engine Max Objects setting.",
    sourceId: 'steam-news-2026-10-21',
    links: [{ label: 'Demo checklist', href: '/tools/demo-checklist/' }],
  },
  {
    date: '2026-10-19',
    title: 'Next Fest demo update adds co-op and Electromagnetic Science',
    type: 'Demo',
    summary:
      'The demo received the new world generation and tech tree from the September playtest, Electromagnetic Science, new equipment and places, new modules including Shield Generator Mk. 1, and co-op multiplayer.',
    sourceId: 'steam-news-2026-10-19',
    links: [
      { label: 'Demo guide', href: '/demo/' },
      { label: 'Co-op guide', href: '/guides/co-op/' },
      { label: 'Research database', href: '/database/research/' },
    ],
    featured: true,
  },
  {
    date: '2026-10-01',
    title: 'Early Access release date announced: November 12, 2026',
    type: 'Release',
    summary:
      'Tumbling Dumpling Studio confirmed the Steam Early Access date. Price and launch-time details were promised for a later announcement.',
    sourceId: 'steam-news-2026-10-01',
    links: [
      { label: 'Release date & platforms', href: '/release-date/' },
      { label: 'Launch countdown', href: '/tools/launch-timer/' },
    ],
    featured: true,
  },
  {
    date: '2026-09-21',
    title: 'Playtest 2 Patch 4',
    type: 'Patch',
    summary:
      'Version 0.1.80 reduced several ship-part masses, clarified that only Warp Fuel can be inserted into the Slipstream Drive, and fixed a list of demo and UI issues.',
    sourceId: 'steam-news-2026-09-21',
    links: [
      { label: 'Ship design guide', href: '/guides/ship-design/' },
    ],
  },
  {
    date: '2026-09-17',
    title: 'Playtest 2 Patch 3',
    type: 'Patch',
    summary:
      'Changed station plasma turret and container build costs, moved some furniture unlocks, and fixed ship designer and mission-objective issues.',
    sourceId: 'steam-news-2026-09-17',
    links: [{ label: 'Modules database', href: '/database/modules/' }],
  },
  {
    date: '2026-09-14',
    title: 'Playtest 2 Patch 1',
    type: 'Patch',
    summary:
      'Fixed UI volume, assembler quick-select filters, Splitter Mk. 1 configuration, machine-output reconnection, item tooltips and Slipstream Drive range display.',
    sourceId: 'steam-news-2026-09-14',
  },
  {
    date: '2026-09-09',
    title: 'September playtest announced with full game content',
    type: 'Playtest',
    summary:
      'The September 17–25 playtest was set to include Cobalt and Graphite, Electromagnetic and Quantum Science, abandoned stations, a Trading Outpost, the Relic Destroyer, the Interstellar Warp Drive and experimental multiplayer.',
    sourceId: 'steam-news-2026-09-09',
    links: [
      { label: 'Research database', href: '/database/research/' },
      { label: 'Combat guide', href: '/guides/combat-defense/' },
    ],
  },
  {
    date: '2026-06-09',
    title: 'Demo passes 100,000 wishlists; peaceful mode discussed',
    type: 'Development',
    summary:
      "The developer thanked demo players and noted that peaceful mode was already available in the demo, with more difficulty and customization options planned for Early Access.",
    sourceId: 'steam-news-2026-06-09',
  },
  {
    date: '2026-06-02',
    title: 'Demo Hotfix 2',
    type: 'Patch',
    summary:
      'Fixed Landing Gear unlocking when editing a ship and fixed enriched titanium and nickel ore refining at the ship workstation.',
    sourceId: 'steam-news-2026-06-02',
    links: [{ label: 'Resources database', href: '/database/resources/' }],
  },
  {
    date: '2026-05-30',
    title: 'Demo Hotfix 1',
    type: 'Patch',
    summary:
      'Fixed an Arena crash, ship changes not applying, blueprint unlock checks and dock clipping; reduced enriched ore crafting time and noted an AMD RX 500-series issue being investigated.',
    sourceId: 'steam-news-2026-05-30',
  },
  {
    date: '2026-05-28',
    title: 'Demo available now; Mythwright announced as publisher',
    type: 'Demo',
    summary:
      'The public demo launched with a visual overhaul, cobalt refining and ore enrichment, new star types, new enemies and tutorials. Mythwright was announced as publisher.',
    sourceId: 'steam-news-2026-05-28',
    links: [
      { label: 'Demo guide', href: '/demo/' },
      { label: 'Beginner guide', href: '/beginner-guide/' },
    ],
    featured: true,
  },
  {
    date: '2026-05-27',
    title: 'Alpha playtest closes as demo work continues',
    type: 'Development',
    summary:
      'The alpha playtest ended. The developer said the upcoming demo would include a complete visual overhaul, new production lines and enemies.',
    sourceId: 'steam-news-2026-05-27',
  },
  {
    date: '2026-02-13',
    title: 'Setting details revealed; 50,000 wishlists reached',
    type: 'Development',
    summary:
      'The developer introduced the Fracture, the Main Sequence Initiative and Frontier Heavy Industries, establishing the player as a station commander on the frontier.',
    sourceId: 'steam-news-2026-02-13',
    links: [{ label: 'Game overview', href: '/game/' }],
  },
  {
    date: '2026-01-19',
    title: 'Main Sequence in 2026',
    type: 'Development',
    summary:
      'A development review covering the 2025 playtest, the decision to delay the demo for polish, community builds and plans for the year.',
    sourceId: 'steam-news-2026-01-19',
  },
  {
    date: '2025-08-12',
    title: 'Introducing Main Sequence',
    type: 'Development',
    summary:
      'The first Steam announcement outlined the core loop: asteroid mining, station building, ship and station design, automation, science labs and creative-mode blueprints.',
    sourceId: 'steam-news-2025-08-12',
    links: [{ label: 'Game overview', href: '/game/' }],
  },
];

export const FEATURED_UPDATES = UPDATES.filter((entry) => entry.featured).slice(
  0,
  3,
);
