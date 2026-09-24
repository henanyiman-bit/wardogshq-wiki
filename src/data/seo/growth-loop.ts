export interface GrowthPathway {
  href: string;
  label: string;
  stage: 'Learn' | 'Explore' | 'Compare' | 'Use';
  description: string;
}

interface TopicCluster {
  id: string;
  matches: (path: string) => boolean;
  pathways: GrowthPathway[];
}

const clusters: TopicCluster[] = [
  {
    id: 'weapons-loadouts',
    matches: (path) => ['/weapons/', '/loadouts/'].some((prefix) => path.startsWith(prefix)) || path.startsWith('/database/weapons/') || path.startsWith('/compare/weapons/'),
    pathways: [
      { href: '/weapons/', label: 'Weapons hub', stage: 'Learn', description: 'Browse weapon classes, evidence notes, and role guidance.' },
      { href: '/database/weapons/', label: 'Weapon database', stage: 'Explore', description: 'Move from guidance to structured weapon records.' },
      { href: '/compare/', label: 'Weapon comparisons', stage: 'Compare', description: 'Compare records in a shared battlefield context.' },
      { href: '/tools/loadout-builder/', label: 'Loadout builder', stage: 'Use', description: 'Turn the research into a role-based kit plan.' },
    ],
  },
  {
    id: 'vehicles-logistics',
    matches: (path) => path.startsWith('/vehicles/') || path.startsWith('/database/vehicles/') || path.startsWith('/compare/vehicles/') || path === '/money/logistics/',
    pathways: [
      { href: '/vehicles/', label: 'Vehicles hub', stage: 'Learn', description: 'Understand aircraft, ground vehicles, and crew roles.' },
      { href: '/database/vehicles/', label: 'Vehicle database', stage: 'Explore', description: 'Review structured vehicle records and relationships.' },
      { href: '/compare/', label: 'Vehicle comparisons', stage: 'Compare', description: 'Evaluate two platforms around a specific mission.' },
      { href: '/money/logistics/', label: 'Logistics guide', stage: 'Use', description: 'Connect transport choices to routes, cash, and resupply.' },
    ],
  },
  {
    id: 'maps-objectives',
    matches: (path) => path.startsWith('/map/') || path.startsWith('/database/maps/') || path.startsWith('/game-modes/'),
    pathways: [
      { href: '/map/', label: 'Map hub', stage: 'Learn', description: 'Start with map systems, objectives, and navigation.' },
      { href: '/database/maps/', label: 'Map database', stage: 'Explore', description: 'Open structured records for known battlefields.' },
      { href: '/map/control-zone/', label: 'Control Zone', stage: 'Compare', description: 'Relate terrain decisions to capture and scoring rules.' },
      { href: '/map/drills/', label: 'Map drills', stage: 'Use', description: 'Practice repeatable route and positioning checks.' },
    ],
  },
  {
    id: 'economy-construction',
    matches: (path) => path.startsWith('/money/') || path.startsWith('/building/') || path.startsWith('/progression/'),
    pathways: [
      { href: '/money/', label: 'Economy hub', stage: 'Learn', description: 'Understand earning, spending, persistence, and risk.' },
      { href: '/building/', label: 'Building system', stage: 'Explore', description: 'Connect resources to construction and team utility.' },
      { href: '/building/fob/', label: 'FOB guide', stage: 'Compare', description: 'Review placement, supply, and defensive trade-offs.' },
      { href: '/tools/loadout-builder/', label: 'Loadout builder', stage: 'Use', description: 'Plan equipment without separating cost from role.' },
    ],
  },
  {
    id: 'new-player',
    matches: (path) => path === '/' || path.startsWith('/guide/') || path === '/how-to-play/' || path.startsWith('/factions/'),
    pathways: [
      { href: '/how-to-play/', label: 'How to play', stage: 'Learn', description: 'Follow the first-match path from spawn to objective.' },
      { href: '/factions/', label: 'Factions', stage: 'Explore', description: 'Compare faction identity and battlefield roles.' },
      { href: '/loadouts/budget/', label: 'Budget loadout', stage: 'Compare', description: 'Balance essential equipment against early cash.' },
      { href: '/database/', label: 'Knowledge database', stage: 'Use', description: 'Continue into structured records and relationships.' },
    ],
  },
];

export function getGrowthPathways(path: string): { cluster: string; links: GrowthPathway[] } | null {
  const cluster = clusters.find((candidate) => candidate.matches(path));
  if (!cluster) return null;
  return {
    cluster: cluster.id,
    links: cluster.pathways.filter((item) => item.href !== path).slice(0, 4),
  };
}

export function getTopicCluster(path: string): string {
  return clusters.find((candidate) => candidate.matches(path))?.id ?? 'general-reference';
}
