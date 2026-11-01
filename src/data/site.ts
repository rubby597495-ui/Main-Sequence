export const SITE = {
  name: 'Main Sequence Guide',
  shortName: 'MS//Guide',
  url: 'https://mainsequenceguide.wiki',
  description:
    'An independent, source-checked wiki and field guide for Main Sequence, the first-person space factory sim from Tumbling Dumpling Studio.',
  locale: 'en',
  language: 'en',
  publisher: 'Main Sequence Guide',
  contactEmail: 'editor@mainsequenceguide.wiki',
  lastVerified: '2026-11-01',
  lastVerifiedLabel: 'November 1, 2026',
  game: {
    name: 'Main Sequence',
    developer: 'Tumbling Dumpling Studio',
    publisher: 'Mythwright',
    releaseDate: '2026-11-12T16:00:00Z',
    releaseDateLabel: 'November 12, 2026',
    releaseWindow: 'Steam Early Access',
    platforms: 'Windows PC',
    officialSite: 'https://mainsequencegame.com/',
    steam: 'https://store.steampowered.com/app/2487190/Main_Sequence/',
    demoSteam: 'https://store.steampowered.com/app/3640620/Main_Sequence_Demo/',
    epic: 'https://store.epicgames.com/p/main-sequence-c0393e',
    pressKit:
      'https://drive.google.com/drive/folders/1SSLKRx-EMxfwRGwSYBM_3BKIBemIuCII?usp=sharing',
  },
} as const;

export const NAV = [
  { label: 'Game', href: '/game/' },
  { label: 'Release', href: '/release-date/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Database', href: '/database/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Updates', href: '/updates/' },
] as const;

export const PRIMARY_CTA = {
  label: 'Demo field guide',
  href: '/demo/',
} as const;

export const STATUS_LABELS = {
  confirmed: 'Official',
  reported: 'Reported',
  community: 'Community-tested',
  estimated: 'Listed / estimated',
  unknown: 'Unconfirmed',
} as const;

export type ClaimStatus = keyof typeof STATUS_LABELS;

export const absoluteUrl = (path: string) =>
  new URL(path, SITE.url).toString();

export const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
