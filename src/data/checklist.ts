export type ChecklistItem = {
  id: string;
  phase: 'Before you play' | 'Demo basics' | 'Automation' | 'Systems & launch';
  title: string;
  detail: string;
  link?: { label: string; href: string };
  sourceIds: string[];
};

export const CHECKLIST: ChecklistItem[] = [
  {
    id: 'requirements',
    phase: 'Before you play',
    title: 'Check the PC requirements',
    detail:
      'The listed minimum is Windows 10 64-bit, an Intel Core i5-8400 or equivalent, 8 GB RAM, a GTX 1050 / RX 460-class GPU, DirectX 12 and 5 GB of storage.',
    link: { label: 'System requirements', href: '/release-date/#system-requirements' },
    sourceIds: ['steam-store'],
  },
  {
    id: 'wishlist',
    phase: 'Before you play',
    title: 'Wishlist or follow the Early Access page',
    detail:
      'The launch is dated but the exact unlock hour and price are still unannounced. The Steam page is the best primary source for both.',
    link: { label: 'Release date status', href: '/release-date/' },
    sourceIds: ['steam-news-2026-10-01', 'steam-store'],
  },
  {
    id: 'install-demo',
    phase: 'Demo basics',
    title: 'Install the free demo',
    detail:
      'The demo is a separate free Steam app. The October 19, 2026 update brought the new tech tree, Electromagnetic Science and co-op into it.',
    link: { label: 'Demo guide', href: '/demo/' },
    sourceIds: ['steam-demo', 'steam-news-2026-10-19'],
  },
  {
    id: 'tutorial',
    phase: 'Demo basics',
    title: 'Follow the tutorial and open the Codex',
    detail:
      'The demo has in-game tutorials, missions and a Codex. Read the active mission before assuming a machine is missing; several systems are research-gated.',
    link: { label: 'Beginner guide', href: '/beginner-guide/' },
    sourceIds: ['steam-news-2026-05-28', 'steam-news-2026-09-21'],
  },
  {
    id: 'scan-mine',
    phase: 'Demo basics',
    title: 'Scan and mine your first asteroids',
    detail:
      'Start in the mining ship, use the scanner to find worthwhile asteroids, then mine and collect the ore.',
    link: { label: 'Game overview', href: '/game/' },
    sourceIds: ['steam-store'],
  },
  {
    id: 'refine',
    phase: 'Demo basics',
    title: 'Refine ore at the ship workstation',
    detail:
      'The starting ship can process ore before you have a station factory. Enriched ores use the same early workstation flow.',
    sourceIds: ['steam-store', 'steam-news-2026-06-02'],
  },
  {
    id: 'first-station',
    phase: 'Demo basics',
    title: 'Build and power your first station',
    detail:
      'The demo points you toward a station early. Demo players report that station machines need station-side power before research or production will run.',
    link: { label: 'First station guide', href: '/guides/first-station-logistics/' },
    sourceIds: ['steam-store', 'steam-forum-logistics'],
  },
  {
    id: 'logistics-one',
    phase: 'Automation',
    title: 'Research Logistics I and unlock conveyor belts',
    detail:
      'Conveyor belts are not available at the start in the current demo. Once Logistics I is researched, belt construction becomes part of the logistics toolset.',
    link: { label: 'Conveyor belt guide', href: '/guides/first-station-logistics/' },
    sourceIds: ['steam-forum-logistics', 'steam-screens'],
  },
  {
    id: 'mining-drones',
    phase: 'Automation',
    title: 'Move asteroid mining onto a Mining Drone Bay',
    detail:
      'Mining Drones is the research step after Logistics I in the visible tree. It enables station-side mining automation.',
    link: { label: 'Modules database', href: '/database/modules/#mining-drone-bay' },
    sourceIds: ['steam-screens', 'steam-news-2025-08-12'],
  },
  {
    id: 'production-floor',
    phase: 'Automation',
    title: 'Build one complete production loop',
    detail:
      'Power the room, connect machines with belts, and leave room for storage and expansion. The goal is a loop you can watch run without hand-feeding it.',
    link: { label: 'Factory layout guide', href: '/guides/factory-layout/' },
    sourceIds: ['steam-store', 'steam-screens'],
  },
  {
    id: 'research-loop',
    phase: 'Automation',
    title: 'Feed a science loop and push the tech tree',
    detail:
      'Produced items are converted into research through Science Labs. Aim for Mining Drones, Computation Science and the Slipstream Drive path.',
    link: { label: 'Research database', href: '/database/research/' },
    sourceIds: ['steam-news-2025-08-12', 'steam-demo', 'steam-screens'],
  },
  {
    id: 'blueprint',
    phase: 'Systems & launch',
    title: 'Open the ship Designer and save a blueprint',
    detail:
      'Official material shows Designer access from a station Command module, a Shipyard Core and the main menu. Save a design you can reuse. If the current demo hides creative-mode blueprint tools, treat this as launch prep rather than a demo blocker.',
    link: { label: 'Ship design guide', href: '/guides/ship-design/' },
    sourceIds: ['steam-news-2025-08-12', 'steam-store'],
  },
  {
    id: 'coop',
    phase: 'Systems & launch',
    title: 'Try a co-op session with another captain',
    detail:
      'The October 19 update added co-op to the demo. Every player captains their own ship; the maximum player count has not been announced.',
    link: { label: 'Co-op guide & planner', href: '/guides/co-op/' },
    sourceIds: ['steam-news-2026-10-19', 'steam-store'],
  },
  {
    id: 'combat',
    phase: 'Systems & launch',
    title: 'Test combat defense or use peaceful mode',
    detail:
      'The demo includes alien threats and a peaceful mode. Try station defense and ship combat, or use peaceful mode if you want to focus on building.',
    link: { label: 'Combat guide', href: '/guides/combat-defense/' },
    sourceIds: ['steam-store', 'steam-news-2026-06-09'],
  },
  {
    id: 'launch-decision',
    phase: 'Systems & launch',
    title: 'Decide whether to start fresh at Early Access',
    detail:
      'Demo save transfer to Early Access has not been confirmed. If continuity matters, plan on a fresh start and keep your blueprints rather than assuming progress will carry over.',
    link: { label: 'Release details', href: '/release-date/' },
    sourceIds: ['steam-demo', 'steam-news-2026-10-01'],
  },
];
