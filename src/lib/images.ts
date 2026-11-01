import factoryFloor from '../assets/images/main-sequence-factory-floor.jpg';
import shipDesigner from '../assets/images/main-sequence-ship-designer.jpg';
import miningLaser from '../assets/images/main-sequence-mining-laser.jpg';
import fleetManagement from '../assets/images/main-sequence-fleet-management.jpg';
import stationAsteroidBelt from '../assets/images/main-sequence-station-asteroid-belt.jpg';
import cockpitStation from '../assets/images/main-sequence-cockpit-station.jpg';
import conveyorBuild from '../assets/images/main-sequence-conveyor-belt-build.jpg';
import asteroidMiningBeams from '../assets/images/main-sequence-asteroid-mining-beams.jpg';
import combatAlert from '../assets/images/main-sequence-combat-alert.jpg';
import productionLines from '../assets/images/main-sequence-production-lines.jpg';
import largeCruiser from '../assets/images/main-sequence-large-cruiser.jpg';
import researchTree from '../assets/images/main-sequence-research-tree.jpg';
import freighterDeparture from '../assets/images/main-sequence-freighter-departure.jpg';

export const GAME_IMAGES = {
  'main-sequence-factory-floor.jpg': factoryFloor,
  'main-sequence-ship-designer.jpg': shipDesigner,
  'main-sequence-mining-laser.jpg': miningLaser,
  'main-sequence-fleet-management.jpg': fleetManagement,
  'main-sequence-station-asteroid-belt.jpg': stationAsteroidBelt,
  'main-sequence-cockpit-station.jpg': cockpitStation,
  'main-sequence-conveyor-belt-build.jpg': conveyorBuild,
  'main-sequence-asteroid-mining-beams.jpg': asteroidMiningBeams,
  'main-sequence-combat-alert.jpg': combatAlert,
  'main-sequence-production-lines.jpg': productionLines,
  'main-sequence-large-cruiser.jpg': largeCruiser,
  'main-sequence-research-tree.jpg': researchTree,
  'main-sequence-freighter-departure.jpg': freighterDeparture,
} as const;

export type GameImageName = keyof typeof GAME_IMAGES;

export const getGameImage = (name?: string) =>
  GAME_IMAGES[(name ?? 'main-sequence-mining-laser.jpg') as GameImageName];
