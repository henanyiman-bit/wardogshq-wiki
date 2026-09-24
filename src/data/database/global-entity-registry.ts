export type EntityRelationType = 'belongs_to' | 'used_in' | 'compare_with' | 'related_guide' | 'related_system';

export interface EntityRelation {
  type: EntityRelationType;
  name: string;
  url: string;
}

export interface DatabaseEntity {
  id: string;
  name: string;
  type: 'weapon' | 'vehicle' | 'map';
  url: string;
  image: string;
  description: string;
  stats: Record<string, string>;
  attributes: Record<string, string>;
  relations: EntityRelation[];
  version: string;
  patchHistory: Array<{ version: string; note: string }>;
}

const related = (hub: string, hubName: string, compareUrl: string, compareName: string, guideUrl: string, guideName: string): EntityRelation[] => [
  { type: 'belongs_to', name: hubName, url: hub },
  { type: 'compare_with', name: compareName, url: compareUrl },
  { type: 'related_guide', name: guideName, url: guideUrl },
  { type: 'related_system', name: 'Progression', url: '/progression/' },
];

export const GLOBAL_ENTITY_REGISTRY: DatabaseEntity[] = [
  { id:'weapon-m4', name:'M4', type:'weapon', url:'/weapons/m4/', image:'', description:'Versatile rifle reference with observed handling and battlefield-use notes.', stats:{ class:'Rifle', role:'General purpose' }, attributes:{ database:'Weapons', evidence:'Version-bound observations' }, relations:related('/weapons/','Weapons','/weapons/ak74/','AK74','/weapons/builds/','Weapon Builds'), version:'0.11', patchHistory:[{version:'0.11',note:'Reference reviewed for the Season 1 database snapshot.'}] },
  { id:'weapon-rpg-7', name:'RPG-7', type:'weapon', url:'/weapons/rpg-7/', image:'', description:'Anti-vehicle launcher reference for target selection and team support.', stats:{ class:'Launcher', role:'Anti-vehicle' }, attributes:{ database:'Weapons', evidence:'Version-bound observations' }, relations:related('/weapons/','Weapons','/weapons/maaws/','MAAWS','/weapons/best-weapons/','Best Weapons'), version:'0.11', patchHistory:[{version:'0.11',note:'Reference reviewed for the Season 1 database snapshot.'}] },
  { id:'weapon-mosin', name:'Mosin-Nagant', type:'weapon', url:'/weapons/mosin-nagant/', image:'', description:'Precision rifle reference focused on deliberate long-range engagements.', stats:{ class:'Rifle', role:'Precision' }, attributes:{ database:'Weapons', evidence:'Version-bound observations' }, relations:related('/weapons/','Weapons','/weapons/sv98/','SV98','/loadouts/','Loadouts'), version:'0.11', patchHistory:[{version:'0.11',note:'Reference reviewed for the Season 1 database snapshot.'}] },
  { id:'vehicle-ural', name:'URAL', type:'vehicle', url:'/vehicles/ural/', image:'https://wardogs-game.com/images/vehicles/ural.webp', description:'Ground transport platform used to move players and support battlefield logistics.', stats:{ class:'Ground vehicle', role:'Transport' }, attributes:{ database:'Vehicles', crew:'Team transport' }, relations:related('/vehicles/','Vehicles','/vehicles/ural-defender/','URAL Defender','/money/logistics/','Logistics Guide'), version:'0.11', patchHistory:[{version:'0.11',note:'Vehicle role reviewed for the Season 1 database snapshot.'}] },
  { id:'vehicle-mh6', name:'MH-6', type:'vehicle', url:'/vehicles/mh-6/', image:'https://wardogs-game.com/images/vehicles/mh-6.webp', description:'Light helicopter reference for air mobility and pilot coordination.', stats:{ class:'Aircraft', role:'Air mobility' }, attributes:{ database:'Vehicles', crew:'Pilot-operated' }, relations:related('/vehicles/','Vehicles','/vehicles/uh-1y/','UH-1Y','/loadouts/pilot/','Pilot Loadout'), version:'0.11', patchHistory:[{version:'0.11',note:'Vehicle role reviewed for the Season 1 database snapshot.'}] },
  { id:'vehicle-l2a6', name:'L2A6', type:'vehicle', url:'/vehicles/l2a6/', image:'https://wardogs-game.com/images/vehicles/l2a6.webp', description:'Heavy armored vehicle reference for direct battlefield pressure.', stats:{ class:'Ground vehicle', role:'Heavy armor' }, attributes:{ database:'Vehicles', crew:'Coordinated crew' }, relations:related('/vehicles/','Vehicles','/vehicles/sph-2/','SPH-2','/vehicles/ground/','Ground Vehicles'), version:'0.11', patchHistory:[{version:'0.11',note:'Vehicle role reviewed for the Season 1 database snapshot.'}] },
  { id:'map-bakurani', name:'Bakurani', type:'map', url:'/map/bakurani/', image:'/media/wiki/map-bakurani-orientation.svg', description:'Terrain reference organized around valleys, roads, ridges and objective movement.', stats:{ class:'Map', role:'Terrain navigation' }, attributes:{ database:'Maps', orientation:'Road and ridge landmarks' }, relations:related('/map/','Maps','/map/ozeti/','Ozeti','/map/control-zone/','Control Zone'), version:'0.11', patchHistory:[{version:'0.11',note:'Orientation reference reviewed for the Season 1 database snapshot.'}] },
  { id:'map-ozeti', name:'Ozeti', type:'map', url:'/map/ozeti/', image:'/media/wiki/map-ozeti-orientation.svg', description:'Town-focused terrain reference using roads and landmarks for navigation.', stats:{ class:'Map', role:'Urban navigation' }, attributes:{ database:'Maps', orientation:'Town and stadium landmarks' }, relations:related('/map/','Maps','/map/bakurani/','Bakurani','/map/towers/','Tower Guide'), version:'0.11', patchHistory:[{version:'0.11',note:'Orientation reference reviewed for the Season 1 database snapshot.'}] },
  { id:'map-zestafona', name:'Zestafona', type:'map', url:'/map/zestafona/', image:'/media/wiki/map-zestafona-orientation.svg', description:'Industrial terrain reference for lanes, containers and factory-space navigation.', stats:{ class:'Map', role:'Industrial navigation' }, attributes:{ database:'Maps', orientation:'Industrial landmarks' }, relations:related('/map/','Maps','/map/ozeti/','Ozeti','/map/control-zone/','Control Zone'), version:'0.11', patchHistory:[{version:'0.11',note:'Orientation reference reviewed for the Season 1 database snapshot.'}] },
];

export function getEntityForPath(path: string, name = 'WARDOGS entity'): DatabaseEntity | undefined {
  const found = GLOBAL_ENTITY_REGISTRY.find((entity) => entity.url === path);
  if (found) return found;
  const match = path.match(/^\/(weapons|vehicles|map)\/([^/]+)\/$/);
  if (!match) return undefined;
  const section = match[1];
  const type = section === 'weapons' ? 'weapon' : section === 'vehicles' ? 'vehicle' : 'map';
  const hub = section === 'map' ? '/map/' : `/${section}/`;
  return {
    id: `${type}-${match[2]}`, name, type, url:path, image:'',
    description:`${name} is maintained as a version-bound ${type} reference in the WARDOGS knowledge database.`,
    stats:{ type, snapshot:'Season 1 / Patch 0.11' },
    attributes:{ database:section, status:'Reference entry' },
    relations:[
      {type:'belongs_to',name:`${section[0].toUpperCase()}${section.slice(1)} database`,url:hub},
      {type:'used_in',name:type === 'map' ? 'Control Zone' : 'Loadout planning',url:type === 'map' ? '/map/control-zone/' : '/loadouts/'},
      {type:'related_guide',name:'How To Play',url:'/how-to-play/'},
      {type:'related_system',name:'Progression',url:'/progression/'},
    ],
    version:'0.11', patchHistory:[{version:'0.11',note:'Entity connected to the global knowledge graph.'}],
  };
}

export const databaseGroups = {
  weapons: GLOBAL_ENTITY_REGISTRY.filter((item) => item.type === 'weapon'),
  vehicles: GLOBAL_ENTITY_REGISTRY.filter((item) => item.type === 'vehicle'),
  maps: GLOBAL_ENTITY_REGISTRY.filter((item) => item.type === 'map'),
};

export const GLOBAL_DATABASE_MODEL_REGISTRY = modelExamples as DatabaseModelEntity[];

export const GLOBAL_ENTITY_REGISTRY_INDEX = {
  entities: GLOBAL_ENTITY_REGISTRY,
  models: GLOBAL_DATABASE_MODEL_REGISTRY,
  byModel: {
    weapons: GLOBAL_DATABASE_MODEL_REGISTRY.filter((item) => item.type === 'weapon'),
    armor: GLOBAL_DATABASE_MODEL_REGISTRY.filter((item) => item.type === 'armor'),
    attachments: GLOBAL_DATABASE_MODEL_REGISTRY.filter((item) => item.type === 'attachment'),
    ammunition: GLOBAL_DATABASE_MODEL_REGISTRY.filter((item) => item.type === 'ammunition'),
    loadouts: GLOBAL_DATABASE_MODEL_REGISTRY.filter((item) => item.type === 'loadout'),
  },
};
import modelExamples from './database-models.example.json';
import type { DatabaseModelEntity } from './database-models';
