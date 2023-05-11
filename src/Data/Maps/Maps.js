import { Aberration } from './Aberration/Aberration';
import { CrystalIsles } from './CrystalIsles/CrystalIsles';
import { Extinction } from './Extinction/Extinction';
import { Fjordur } from './Fjordur/Fjordur';
import { Genesis } from './Genesis/Genesis';
import { Genesis2 } from './Genesis2/Genesis2';
import { LostIsland } from './LostIsland/LostIsland';
import { Ragnarok } from './Ragnarok/Ragnarok';
import { ScorchedEarth } from './ScorchedEarth/ScorchedEarth';
import { TheCenter } from './TheCenter/TheCenter';
import { TheIsland } from './TheIsland/TheIsland';
import { Valguero } from './Valguero/Valguero';

export function Maps(map) {
  Aberration(map);
  CrystalIsles(map);
  Extinction(map);
  Fjordur(map);
  Genesis(map);
  Genesis2(map);
  LostIsland(map);
  Ragnarok(map);
  ScorchedEarth(map);
  TheCenter(map);
  TheIsland(map);
  Valguero(map);
}