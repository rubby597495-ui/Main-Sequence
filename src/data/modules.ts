export type ModuleCategory =
  | 'Station'
  | 'Production'
  | 'Power'
  | 'Logistics'
  | 'Defense'
  | 'Ship';

export type GameModule = {
  name: string;
  category: ModuleCategory;
  function: string;
  detail: string;
  status: 'Official' | 'Community-tested';
  sourceIds: string[];
};

export const MODULE_CATEGORIES: ModuleCategory[] = [
  'Station',
  'Production',
  'Power',
  'Logistics',
  'Defense',
  'Ship',
];

export const MODULES: GameModule[] = [
  {
    name: 'Command Module',
    category: 'Station',
    function: 'Core station management',
    detail:
      'The access point for editing a station in the Designer. The developer names the Command module as the station-design entry point.',
    status: 'Official',
    sourceIds: ['steam-news-2025-08-12'],
  },
  {
    name: 'Station Dock',
    category: 'Station',
    function: 'Ship docking',
    detail:
      'Allows a ship to dock at a station. Demo players report that additional docks can be added through the station control panel; the exact co-op implications are still unconfirmed.',
    status: 'Official',
    sourceIds: ['steam-screens', 'steam-forum-docks'],
  },
  {
    name: 'Shipyard Core',
    category: 'Station',
    function: 'Ship construction and editing',
    detail:
      'Lets you construct new ships or disassemble existing ones, and opens the ship Designer for a docked ship.',
    status: 'Official',
    sourceIds: ['steamdb-playtest-13', 'steam-news-2026-09-21'],
  },
  {
    name: 'Mining Drone Bay',
    category: 'Production',
    function: 'Automated asteroid mining',
    detail:
      'Station-side mining automation. The developer lists Mining Drone Bays as one of the two main ways to gather resources, alongside mining from a ship.',
    status: 'Official',
    sourceIds: ['steam-news-2025-08-12', 'steam-news-2026-09-21'],
  },
  {
    name: 'Refinery',
    category: 'Production',
    function: 'Ore refining',
    detail:
      'Processes mined ore into refined materials on a station. It requires station power to operate.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-21', 'steam-news-2025-08-12'],
  },
  {
    name: 'Assembler',
    category: 'Production',
    function: 'Item crafting',
    detail:
      'A production machine used for crafting, including Repair Packs. It stops working when the station loses power.',
    status: 'Official',
    sourceIds: ['steamdb-playtest-13', 'steam-news-2026-09-21'],
  },
  {
    name: 'Workstation',
    category: 'Production',
    function: 'Manual crafting / early refining',
    detail:
      'Available on the starting ship in the demo for manual crafting and processing enriched ore. The demo hotfixes specifically reference refining enriched ores at the ship workstation.',
    status: 'Official',
    sourceIds: ['steam-forum-logistics', 'steam-news-2026-06-02'],
  },
  {
    name: 'Science Lab',
    category: 'Production',
    function: 'Converts items into research',
    detail:
      'Certain manufactured items can be fed into Science Labs and converted into research to unlock technology.',
    status: 'Official',
    sourceIds: ['steam-news-2025-08-12'],
  },
  {
    name: 'Conveyor Belt Mk. 1',
    category: 'Logistics',
    function: 'Item transport',
    detail:
      'Moves items between machines on a station. In the demo, belt construction is tied to the Logistics I research step; the in-game build screen shows a Conveyor Belt Mk. 1.',
    status: 'Official',
    sourceIds: ['steam-screens', 'steam-forum-logistics'],
  },
  {
    name: 'Splitter Mk. 1',
    category: 'Logistics',
    function: 'Routes item flows',
    detail:
      'A configurable logistics module. Official patch notes confirm that it exists and had a configuration bug fixed in September 2026.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-14'],
  },
  {
    name: 'Enrichment Chamber',
    category: 'Logistics',
    function: 'Ore enrichment',
    detail:
      'A researchable machine visible in the official demo technology tree and referenced in patch notes. The exact throughput and recipes are not public in our sources.',
    status: 'Official',
    sourceIds: ['steam-screens', 'steam-news-2026-09-21'],
  },
  {
    name: 'Item Elevator',
    category: 'Logistics',
    function: 'Vertical item transport',
    detail:
      'A researchable logistics node visible in the official demo screenshot. Its name indicates vertical item transport; the public source does not document its exact use or capacity.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Container',
    category: 'Logistics',
    function: 'Storage module',
    detail:
      'A container module referenced in official balance notes. Its build cost changed in the September 2026 playtest patch. Exact capacity is not confirmed.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-17'],
  },
  {
    name: 'Large Container',
    category: 'Logistics',
    function: 'High-capacity station storage',
    detail:
      'A locked research node in the official demo technology tree. Capacity values are not confirmed.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Hydrogen Power',
    category: 'Power',
    function: 'Station power generation',
    detail:
      'One of the power-generation research branches shown in the official demo tree. Its fuel consumption and generation rate are not confirmed by our sources.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Solar Panels',
    category: 'Power',
    function: 'Station power generation',
    detail:
      'A power-generation unlock shown after Hydrogen Power in the official demo tree. Output is not confirmed.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Reactor',
    category: 'Power',
    function: 'Ship / station power',
    detail:
      'A configurable power component. Official screenshots show a “Configure Reactor” interaction and the store description refers to reactor placement in ship design.',
    status: 'Official',
    sourceIds: ['steam-store', 'steam-screens'],
  },
  {
    name: 'Station Plasma Turret',
    category: 'Defense',
    function: 'Station defense',
    detail:
      'A station weapon module. Official balance notes list a cost change and a collider fix in September 2026.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-17'],
  },
  {
    name: 'Shield Generator Mk. 1',
    category: 'Defense',
    function: 'Ship shields',
    detail:
      'Added in the October 19, 2026 demo update. The developer describes it as adding a new dimension to combat and ship design.',
    status: 'Official',
    sourceIds: ['steam-news-2026-10-19'],
  },
  {
    name: 'Slipstream Drive',
    category: 'Ship',
    function: 'In-system travel',
    detail:
      'The demo’s culminating technology. It allows travel and exploration across the starting star system; only Warp Fuel can be inserted into it.',
    sourceIds: ['steam-demo', 'steam-news-2026-09-21'],
    status: 'Official',
  },
  {
    name: 'Interstellar Warp Drive',
    category: 'Ship',
    function: 'Travel to other star systems',
    detail:
      'A later progression unlock. The developer says it becomes researchable after defeating the Relic Destroyer at the edge of the solar system.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-09'],
  },
  {
    name: 'Large Thruster',
    category: 'Ship',
    function: 'Ship propulsion',
    detail:
      'A ship module visible in the official technology tree and referenced in patch notes. Exact thrust values are not confirmed.',
    status: 'Official',
    sourceIds: ['steamdb-playtest-13', 'steam-news-2026-09-21', 'steam-screens'],
  },
  {
    name: 'Ship Container',
    category: 'Ship',
    function: 'Increases ship storage',
    detail:
      'Each container added to a ship increases the ship inventory max stack size by 50%, according to the developer’s August 2025 patch notes.',
    status: 'Official',
    sourceIds: ['steamdb-playtest-13'],
  },
  {
    name: 'Ship Frame',
    category: 'Ship',
    function: 'Structural hull block',
    detail:
      'A structural ship module. Its mass was reduced from 3 to 2 tonnes in the September 2026 playtest patch.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-21'],
  },
  {
    name: 'Ship Ladder',
    category: 'Ship',
    function: 'Vertical movement inside a ship',
    detail:
      'A ship-interior module visible in the official technology tree.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Ship Windows I',
    category: 'Ship',
    function: 'Ship windows',
    detail:
      'A ship-module research node shown after Ship Frames. Related corner-window and habitat-window parts have separate masses.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-21', 'steam-screens'],
  },
  {
    name: 'Small Habitat Window',
    category: 'Ship',
    function: 'Habitat window block',
    detail:
      'A decorative ship block. Official patch notes reduced its mass from 5 to 3 tonnes in the playtest build.',
    status: 'Official',
    sourceIds: ['steam-news-2026-09-21', 'steam-screens'],
  },
  {
    name: 'Landing Gear',
    category: 'Ship',
    function: 'Ship landing support',
    detail:
      'A ship module referenced in official demo hotfix notes after an unlock issue was fixed.',
    status: 'Official',
    sourceIds: ['steam-news-2026-06-02'],
  },
  {
    name: 'Mining Laser',
    category: 'Ship',
    function: 'Asteroid mining',
    detail:
      'A ship utility weapon shown in the ship Designer. It is used for mining asteroids from the ship.',
    status: 'Official',
    sourceIds: ['steam-screens', 'steam-store'],
  },
  {
    name: 'Plasma Cannon',
    category: 'Ship',
    function: 'Ship weapon',
    detail:
      'A weapon module listed in the official ship Designer screenshot. Exact damage values are not confirmed.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Plasma Lance',
    category: 'Ship',
    function: 'Ship weapon',
    detail:
      'A weapon system visible on the cockpit target readout in an official combat screenshot.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
  {
    name: 'Tractor Beam',
    category: 'Ship',
    function: 'Utility beam',
    detail:
      'A ship utility shown in the official Designer and cockpit UI. Its full range of uses is not documented in our sources.',
    status: 'Official',
    sourceIds: ['steam-screens'],
  },
];
