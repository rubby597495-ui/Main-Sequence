export type ResearchStatus = 'In demo tree' | 'Announced for later' | 'Referenced';

export type ResearchNode = {
  name: string;
  branch: 'Production' | 'Automation & logistics' | 'Power' | 'Ship modules' | 'Station interiors' | 'Science';
  order: number;
  detail: string;
  status: ResearchStatus;
  sourceIds: string[];
  prerequisite?: string;
};

export const RESEARCH_NODES: ResearchNode[] = [
  {
    name: 'Silica Refining',
    branch: 'Production',
    order: 1,
    detail:
      'The first production node visible in the demo tree. The developer’s patch notes connect Silica Refining with the glass item and window block.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steamdb-playtest-13'],
  },
  {
    name: 'Ore Enrichment',
    branch: 'Production',
    order: 2,
    detail:
      'The next production unlock after Silica Refining in the official screenshot. It leads to enriched ore processing and Cobalt Refining.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2026-05-28'],
  },
  {
    name: 'Cobalt Refining',
    branch: 'Production',
    order: 3,
    detail:
      'Unlocks later in the visible production chain. Cobalt is also the material the developer associates with Electromagnetic Science.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2026-05-28'],
  },
  {
    name: 'Servomotor',
    branch: 'Production',
    order: 4,
    detail:
      'A production node that branches toward Containment Coil and Servo Plates in the visible tree.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Containment Coil',
    branch: 'Production',
    order: 5,
    detail: 'A mid-chain production node shown after Servomotor.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Coolant',
    branch: 'Production',
    order: 6,
    detail:
      'A locked production node shown after Containment Coil in the demo screenshot.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Superalloy',
    branch: 'Production',
    order: 7,
    detail:
      'A locked node after Coolant. The screenshot shows Superalloy Frame as a separate ship-construction material.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Superconductor Coil',
    branch: 'Production',
    order: 8,
    detail:
      'The final node in the visible top production row, shown locked in the demo screenshot.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Basic Circuits',
    branch: 'Production',
    order: 9,
    detail:
      'Appears on the lower production row and feeds Servo Plates in the visible tree.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Servo Plates',
    branch: 'Production',
    order: 10,
    detail:
      'Shown after Basic Circuits. The node also appears as a ship-construction material in an official build-cost panel.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Advanced Plate',
    branch: 'Production',
    order: 11,
    detail: 'Shown after Servo Plates and before Warp Fuel.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Warp Fuel',
    branch: 'Production',
    order: 12,
    detail:
      'A locked production node shown after Advanced Plate. Patch notes confirm that only Warp Fuel can be inserted into the Slipstream Drive.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2026-09-21'],
  },
  {
    name: 'Logistics I',
    branch: 'Automation & logistics',
    order: 1,
    detail:
      'The first automation step. The official demo screenshot shows a Research Queue entry at 0/10. Demo players confirm that conveyor belts become available after this research.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-forum-logistics'],
  },
  {
    name: 'Mining Drones',
    branch: 'Automation & logistics',
    order: 2,
    detail:
      'Unlocks the Mining Drone Bay after Logistics I in the visible tree. This is the station-side mining automation path.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2025-08-12'],
  },
  {
    name: 'Computation Science',
    branch: 'Automation & logistics',
    order: 3,
    detail:
      'Shown after Mining Drones. The node branches toward Logistics II and the Enrichment Chamber.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Logistics II',
    branch: 'Automation & logistics',
    order: 4,
    detail:
      'A later automation unlock shown after Computation Science. The exact mechanics are not visible in the screenshot.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Enrichment Chamber',
    branch: 'Automation & logistics',
    order: 5,
    detail:
      'A machine unlock on the lower branch after Computation Science. The visible tree does not show its full recipe set.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2026-09-21'],
  },
  {
    name: 'Gas Extraction',
    branch: 'Automation & logistics',
    order: 6,
    detail:
      'A locked node after Logistics II. Specific gas types and recipes are not confirmed in our sources.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Item Elevator',
    branch: 'Automation & logistics',
    order: 7,
    detail:
      'A logistics unlock shown after Logistics II, intended for moving items vertically inside a station.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Large Container',
    branch: 'Automation & logistics',
    order: 8,
    detail:
      'A locked storage node after Logistics II. Its capacity is not shown in the available screenshot.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Hydrogen Power',
    branch: 'Power',
    order: 1,
    detail:
      'The first power-generation node visible in the demo tree. Hydrogen fuel requirements are not published in our sources.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Solar Panels',
    branch: 'Power',
    order: 2,
    detail:
      'Unlocked after Hydrogen Power in the visible tree. Output and placement requirements are not confirmed.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Basic Ship Modules',
    branch: 'Ship modules',
    order: 1,
    detail:
      'The root of the visible ship-module branch, leading to propulsion, interiors, windows and storage.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Slipstream Drive',
    branch: 'Ship modules',
    order: 2,
    detail:
      'The technology the Steam demo description says caps the early demo progression. It allows travel around the starting star system.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-demo'],
  },
  {
    name: 'Large Thruster',
    branch: 'Ship modules',
    order: 3,
    detail:
      'A propulsion module on the Basic Ship Modules branch. It exists in the current build and had a model gap fixed in September 2026.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2026-09-14'],
  },
  {
    name: 'Ship Ladder',
    branch: 'Ship modules',
    order: 4,
    detail:
      'A ship-interior unlock that leads to Ship Frames and Ship Windows I in the visible tree.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Ship Frames',
    branch: 'Ship modules',
    order: 5,
    detail: 'A structural unlock shown after Ship Ladder.',
    status: 'In demo tree',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Ship Windows I',
    branch: 'Ship modules',
    order: 6,
    detail:
      'A window unlock after Ship Frames. Separate window blocks appear in later patch notes.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steam-news-2026-09-21'],
  },
  {
    name: 'Ship Container',
    branch: 'Ship modules',
    order: 7,
    detail:
      'A storage unlock on the Basic Ship Modules branch. Each container adds 50% to ship inventory max stack size, per the August 2025 patch notes.',
    status: 'In demo tree',
    sourceIds: ['steam-screens', 'steamdb-playtest-13'],
  },
  {
    name: 'Furniture 1',
    branch: 'Station interiors',
    order: 1,
    detail:
      'An interior-decoration research unlock referenced in official balance notes. Some items were moved from Furniture 1 to Furniture 2 in September 2026.',
    status: 'Referenced',
    sourceIds: ['steam-news-2026-09-17'],
  },
  {
    name: 'Furniture 2',
    branch: 'Station interiors',
    order: 2,
    detail:
      'A later interior-decoration unlock referenced in official balance notes. Its full item list is not public in our sources.',
    status: 'Referenced',
    sourceIds: ['steam-news-2026-09-17'],
  },
  {
    name: 'Electromagnetic Science',
    branch: 'Science',
    order: 1,
    detail:
      'Added to the demo in the October 19, 2026 Next Fest update for players who reached the end of the previous demo content. Cobalt and Graphite feed this tier.',
    status: 'In demo tree',
    sourceIds: ['steam-news-2026-10-19', 'steam-news-2026-09-09'],
  },
  {
    name: 'Quantum Science',
    branch: 'Science',
    order: 2,
    detail:
      'A later science tier named in the developer’s September 2026 playtest overview; it follows the Cobalt and Graphite phase.',
    status: 'Announced for later',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Astronomic Science',
    branch: 'Science',
    order: 3,
    detail:
      'A late-game science type researched after travelling to other star systems for new resources.',
    status: 'Announced for later',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Xenobiologic Science',
    branch: 'Science',
    order: 4,
    detail:
      'The final science type named in the September 2026 playtest overview, tied to late-game equipment and modules.',
    status: 'Announced for later',
    sourceIds: ['steam-news-2026-09-09'],
  },
];

export const RESEARCH_BRANCHES = [
  'Production',
  'Automation & logistics',
  'Power',
  'Ship modules',
  'Station interiors',
  'Science',
] as const;

export const getResearchByBranch = (branch: ResearchNode['branch']) =>
  RESEARCH_NODES.filter((node) => node.branch === branch).sort(
    (a, b) => a.order - b.order,
  );
