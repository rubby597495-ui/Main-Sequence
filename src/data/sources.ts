export type SourceKind =
  | 'official'
  | 'store'
  | 'press'
  | 'community'
  | 'data'
  | 'media';

export type Source = {
  id: string;
  title: string;
  publisher: string;
  date: string;
  kind: SourceKind;
  url: string;
  usedFor: string;
  accessed?: string;
};

export const SOURCE_KIND_LABELS: Record<SourceKind, string> = {
  official: 'Official developer / publisher',
  store: 'Official storefront',
  press: 'Press',
  community: 'Community report',
  data: 'Unofficial data listing',
  media: 'Official media',
};

export const SOURCES: Source[] = [
  {
    id: 'official-site',
    title: 'Main Sequence — official game site',
    publisher: 'Tumbling Dumpling Studio',
    date: '2026',
    kind: 'official',
    url: 'https://mainsequencegame.com/',
    usedFor:
      'Core feature descriptions, developer contact, press kit link, official positioning.',
  },
  {
    id: 'steam-store',
    title: 'Main Sequence on Steam',
    publisher: 'Valve / Tumbling Dumpling Studio',
    date: '2026',
    kind: 'store',
    url: 'https://store.steampowered.com/app/2487190/Main_Sequence/',
    usedFor:
      'Release date, Early Access statement, system requirements, feature list, store description, language support.',
  },
  {
    id: 'steam-demo',
    title: 'Main Sequence Demo on Steam',
    publisher: 'Valve / Tumbling Dumpling Studio',
    date: '2026-05-28',
    kind: 'store',
    url: 'https://store.steampowered.com/app/3640620/Main_Sequence_Demo/',
    usedFor:
      'Demo availability, demo scope, first two technology tiers, Slipstream Drive goal, demo system requirements.',
  },
  {
    id: 'steamdb-playtest-13',
    title: 'Playtest Release 13 patch notes',
    publisher: 'Main Sequence, mirrored by SteamDB',
    date: '2025-08-30',
    kind: 'official',
    url: 'https://steamdb.info/patchnotes/19793320',
    usedFor:
      'Shipyard Core, Large Thruster, Ship Container storage bonus, Repair Packs, glass and window items, and station module details from the August 2025 playtest build.',
  },
  {
    id: 'steam-news-2026-10-21',
    title: 'Hotfix 2026.10.21',
    publisher: 'Main Sequence / Steam',
    date: '2026-10-21',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1847286114030184?l=english',
    usedFor:
      'Demo filter and performance fixes in the October 21 hotfix.',
  },
  {
    id: 'steam-news-2026-10-19',
    title: 'Next Fest Demo Update',
    publisher: 'Main Sequence / Steam',
    date: '2026-10-19',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1846651706691100?l=english',
    usedFor:
      'October demo update, Electromagnetic Science, new modules including Shield Generator Mk. 1, co-op in the demo.',
  },
  {
    id: 'steam-news-2026-10-01',
    title: 'Main Sequence launches into Early Access on November 12th!',
    publisher: 'Main Sequence / Steam',
    date: '2026-10-01',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1845383656381816?l=english',
    usedFor:
      'Early Access date, promise of future price and launch-time details.',
  },
  {
    id: 'steam-news-2026-09-21',
    title: 'Playtest 2 Patch 4',
    publisher: 'Main Sequence / Steam',
    date: '2026-09-21',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1844115010501003?l=english',
    usedFor:
      'Ship component masses, repair mechanics, Warp Fuel restriction, Slipstream Drive tutorial, general fixes.',
  },
  {
    id: 'steam-news-2026-09-17',
    title: 'Playtest 2 Patch 3',
    publisher: 'Main Sequence / Steam',
    date: '2026-09-17',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1844115010491567?l=english',
    usedFor:
      'Build-cost changes for turrets and containers, Furniture 1/2 unlock changes.',
  },
  {
    id: 'steam-news-2026-09-14',
    title: 'Playtest 2 Patch 1',
    publisher: 'Main Sequence / Steam',
    date: '2026-09-14',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1843481262701400?l=english',
    usedFor:
      'Splitter and filter fixes, Slipstream range display fix, larger thruster details.',
  },
  {
    id: 'steam-news-2026-09-09',
    title: 'Playtest Week',
    publisher: 'Main Sequence / Steam',
    date: '2026-09-09',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1843481262690125?l=english',
    usedFor:
      'Playtest scope, Cobalt and Graphite, abandoned stations, Trading Outpost, Relic Destroyer, Interstellar Warp Drive and advanced science types.',
  },
  {
    id: 'steam-news-2026-06-09',
    title: 'Thank You for 100 000 Wishlists!',
    publisher: 'Main Sequence / Steam',
    date: '2026-06-09',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1834602721203031?l=english',
    usedFor:
      'Peaceful mode in the demo, planned difficulty and customization options, wishlist milestone.',
  },
  {
    id: 'steam-news-2026-05-28',
    title: 'Demo Available Now!',
    publisher: 'Main Sequence / Steam',
    date: '2026-05-28',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1833968530888162?l=english',
    usedFor:
      'Demo release, Mythwright publishing announcement, cobalt refining, ore enrichment, new star types and enemies.',
  },
  {
    id: 'steam-news-2026-05-30',
    title: 'Demo Hotfix 1',
    publisher: 'Main Sequence / Steam',
    date: '2026-05-30',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1833968530893577?l=english',
    usedFor:
      'Demo hotfix details, enriched ore crafting time, known AMD RX 500-series issue at the time.',
  },
  {
    id: 'steam-news-2026-06-02',
    title: 'Demo Hotfix 2',
    publisher: 'Main Sequence / Steam',
    date: '2026-06-02',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1833968530899183?l=english',
    usedFor:
      'Landing Gear unlock fix, enriched titanium and nickel ore processing fix.',
  },
  {
    id: 'steam-news-2026-05-27',
    title: 'Thank You for Playtesting!',
    publisher: 'Main Sequence / Steam',
    date: '2026-05-27',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1833968530885511?l=english',
    usedFor:
      'Alpha playtest closure, visual overhaul, new production lines and enemies ahead of the demo.',
  },
  {
    id: 'steam-news-2026-02-13',
    title: 'Thank You for 50,000 Wishlists!',
    publisher: 'Main Sequence / Steam',
    date: '2026-02-13',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1824644522840181?l=english',
    usedFor:
      'Setting: the Fracture, the Main Sequence Initiative, Frontier Heavy Industries and the station commander role.',
  },
  {
    id: 'steam-news-2026-01-19',
    title: 'Main Sequence in 2026',
    publisher: 'Main Sequence / Steam',
    date: '2026-01-19',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1821922921822128?l=english',
    usedFor:
      'Development history, 2025 playtest, demo timing, community screenshots and future plans.',
  },
  {
    id: 'steam-news-2025-08-12',
    title: 'Introducing Main Sequence',
    publisher: 'Main Sequence / Steam',
    date: '2025-08-12',
    kind: 'official',
    url: 'https://store.steampowered.com/news/app/2487190/view/1807332909735949?l=english',
    usedFor:
      'Core gameplay loop, ship and station designer, mining drone bays, science labs, creative mode.',
  },
  {
    id: 'steam-screens',
    title: 'Main Sequence screenshots on Steam',
    publisher: 'Tumbling Dumpling Studio / Valve',
    date: '2026',
    kind: 'media',
    url: 'https://store.steampowered.com/app/2487190/Main_Sequence/#app_reviews_hash',
    usedFor:
      'Official screenshots used for editorial illustration, research-tree nodes, modules and in-game UI context.',
  },
  {
    id: 'steamdb',
    title: 'Main Sequence app 2487190 on SteamDB',
    publisher: 'SteamDB',
    date: '2026-10-22',
    kind: 'data',
    url: 'https://steamdb.info/app/2487190/',
    usedFor:
      'Unofficial store release timestamp of 16:00 UTC on November 12, 2026. Not treated as a publisher confirmation.',
  },
  {
    id: 'mythwright',
    title: 'Main Sequence — Mythwright',
    publisher: 'Mythwright',
    date: '2026',
    kind: 'official',
    url: 'https://mythwright.com/games/main-sequence',
    usedFor:
      'Publisher feature summary, platform reference, screenshot gallery and content-creator contact.',
  },
  {
    id: 'epic-store',
    title: 'Main Sequence — Epic Games Store',
    publisher: 'Epic Games / Mythwright',
    date: '2026',
    kind: 'store',
    url: 'https://store.epicgames.com/p/main-sequence-c0393e',
    usedFor:
      'Additional storefront listing and platform context. The official Early Access launch announcement specifically names Steam.',
  },
  {
    id: 'gamespress',
    title:
      'Forge an Interstellar Empire in MAIN SEQUENCE, a Space-Sim Factory Builder Launching 2026, Demo Available Today',
    publisher: 'Games Press / Mythwright',
    date: '2026-05-28',
    kind: 'press',
    url: 'https://www.gamespress.com/Forge-an-Interstellar-Empire-in-MAIN-SEQUENCE-a-Space-Sim-Factory-Buil',
    usedFor:
      'Press release context: developer background, demo launch, publisher information, game positioning.',
  },
  {
    id: 'simulationdaily',
    title:
      'Space Factory Builder Main Sequence Announces Its Early Access Release Date',
    publisher: 'Simulation Daily',
    date: '2026-10-02',
    kind: 'press',
    url: 'https://simulationdaily.com/news/space-factory-builder-main-sequence/',
    usedFor:
      'Independent report corroborating the November 12, 2026 Early Access announcement.',
  },
  {
    id: 'gamesfinity',
    title:
      'Main Sequence hits Early Access November 12, and every co-op player gets their own ship',
    publisher: 'GamesFinity',
    date: '2026-10-06',
    kind: 'press',
    url: 'https://www.gamesfinity.com/news/main-sequence-early-access-date',
    usedFor:
      'Context on co-op, experimental multiplayer status and the absence of a publicly confirmed player cap at the time.',
  },
  {
    id: 'capsulecomputers',
    title:
      "MAIN SEQUENCE's Astronomic Playtest Launches Today — Play the Full Work-In-Progress Game Free Ahead of Launch",
    publisher: 'Capsule Computers',
    date: '2026-09-18',
    kind: 'press',
    url: 'https://www.capsulecomputers.com.au/2026/09/main-sequences-astronomic-playtest-launches-today-play-the-full-work-in-progress-game-free-ahead-of-launch',
    usedFor:
      'Independent coverage of the September 2026 playtest and its scope.',
  },
  {
    id: 'steam-forum-logistics',
    title: "I don't get how to start the logistics",
    publisher: 'Steam Community',
    date: '2026-10-29',
    kind: 'community',
    url: 'https://steamcommunity.com/app/2487190/discussions/0/564797873721628361/',
    usedFor:
      'Community-tested account of the station power and Logistics I progression step. Clearly labelled as player experience, not an official statement.',
  },
  {
    id: 'steam-forum-docks',
    title: 'Second dock for co-op',
    publisher: 'Steam Community',
    date: '2026-10-29',
    kind: 'community',
    url: 'https://steamcommunity.com/app/2487190/discussions/0/564797873721613362/',
    usedFor:
      'Community-tested note that additional station docks can be added through the station control panel. Not independently verified by the developer.',
  },
  {
    id: 'steam-forum-controller',
    title: 'Controller support?',
    publisher: 'Steam Community',
    date: '2025-09-22',
    kind: 'community',
    url: 'https://steamcommunity.com/app/2487190/discussions/0/596286289747588889/',
    usedFor:
      "Developer reply stating controller support was planned for Early Access launch. Plan, not a launch guarantee.",
  },
];

export const sourcesById = Object.fromEntries(
  SOURCES.map((source) => [source.id, source]),
) as Record<string, Source>;

export const getSources = (ids: string[]): Source[] =>
  ids.map((id) => sourcesById[id]).filter(Boolean);
