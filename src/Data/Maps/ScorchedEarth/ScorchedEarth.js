import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function ScorchedEarth(map) {
  L.imageOverlay('/Maps/ScorchedEarth.jpg', [[-100,100], [0,200]]).addTo(map);
  
  L.marker([-17.30, 100+33.90], { title: 'Blue Obelisk', icon: Icons.BlueObeliskIcon}).addTo(map).bindPopup('Blue Obelisk <br /> 17.30, 33.90');
  L.marker([-50.00, 100+73.40], { title: 'Green Obelisk', icon: Icons.GreenObeliskIcon}).addTo(map).bindPopup('Green Obelisk <br /> 50.00, 73.40');
  L.marker([-71.10, 100+39.20], { title: 'Red Obelisk', icon: Icons.RedObeliskIcon}).addTo(map).bindPopup('Red Obelisk <br /> 71.10, 39.20');

  var Artifacts = [
    [ 35.20, 28.10, 'Artifact of the Crag' ],
    [ 58.20, 43.40, 'Artifact of the Gatekeeper' ],
    [ 79.80, 81.30, 'Artifact of the Destroyer' ]
  ]
  for (md = 0; md < Artifacts.length; md++) {
    L.marker([-Artifacts[md][0], 100+Artifacts[md][1]], { title: Artifacts[md][2], icon: Icons.ArtifactIcon}).addTo(map).bindPopup(Artifacts[md][2] +' <br />' + Artifacts[md][0].toFixed(1) + ' / ' + Artifacts[md][1].toFixed(1))
  }

  var CaveEntrances = [
    [ 28.50, 29.30, 'Cave: Grave Of The Tyrants' ],
    [ 58.60, 47.70, 'Cave: The Old Tunnels' ],
    [ 78.50, 75.60, 'Cave: Ruins Of Nosti' ]
  ]
  for (md = 0; md < CaveEntrances.length; md++) {
    L.marker([-CaveEntrances[md][0], 100+CaveEntrances[md][1]], { title: 'Cave Entrance', icon: Icons.CaveEntranceIcon}).addTo(map).bindPopup('Cave Entrance <br />' + CaveEntrances[md][0].toFixed(1) + ' / ' + CaveEntrances[md][1].toFixed(1))
  }

  var LootCrates = [
    [ 12.80, 24.40 ],[ 18.90, 18.00 ],[ 21.40, 60.40 ],[ 21.70, 18.70 ],[ 22.20, 64.20 ],[ 22.70, 20.90 ],[ 23.80, 22.80 ],[ 24.20, 24.40 ],[ 24.20, 58.40 ],[ 24.60, 61.80 ],
    [ 24.90, 16.60 ],[ 25.50, 25.10 ],[ 33.80, 75.90 ],[ 35.80, 76.80 ],[ 36.00, 75.60 ],[ 37.60, 76.50 ],[ 38.70, 76.00 ],[ 39.40, 77.30 ],[ 41.00, 75.40 ],[ 61.10, 16.70 ],
    [ 66.90, 18.80 ],[ 72.30, 19.20 ],[ 74.90, 48.10 ],[ 75.20, 33.00 ],[ 75.20, 50.40 ],[ 76.50, 28.70 ],[ 76.70, 50.10 ],[ 76.80, 55.30 ],[ 77.30, 52.60 ],[ 77.40, 57.10 ],
    [ 78.10, 43.10 ],[ 78.20, 38.20 ],[ 78.90, 54.30 ],[ 79.10, 41.40 ],[ 79.80, 44.40 ],[ 80.50, 39.70 ],[ 80.80, 56.40 ],[ 81.30, 37.10 ],[ 82.00, 41.00 ],[ 83.50, 56.70 ],
    [ 83.90, 46.80 ],[ 28.70, 63.80 ],[ 30.30, 70.20 ],[ 34.90, 72.10 ],[ 37.40, 64.90 ],[ 42.60, 74.80 ],[ 43.00, 70.30 ],[ 43.10, 39.20 ],[ 43.30, 38.30 ],[ 43.90, 15.40 ],
    [ 44.30, 67.80 ],[ 44.80, 23.00 ],[ 44.90, 60.00 ],[ 45.10, 83.90 ],[ 45.80, 63.20 ],[ 46.10, 25.20 ],[ 46.30, 35.20 ],[ 46.70, 17.80 ],[ 46.70, 37.30 ],[ 46.70, 79.30 ],
    [ 47.20, 21.70 ],[ 47.40, 22.50 ],[ 47.40, 34.50 ],[ 47.70, 27.90 ],[ 48.40, 63.50 ],[ 49.30, 60.80 ],[ 49.60, 25.80 ],[ 50.10, 23.50 ],[ 50.50, 83.60 ],[ 50.60, 34.20 ],
    [ 51.20, 22.00 ],[ 51.50, 17.50 ],[ 51.60, 36.80 ],[ 51.60, 64.40 ],[ 51.90, 76.30 ],[ 52.20, 24.90 ],[ 52.30, 35.80 ],[ 52.60, 27.90 ],[ 52.80, 70.00 ],[ 52.90, 39.70 ],
    [ 53.70, 31.30 ],[ 53.80, 21.30 ],[ 53.80, 81.20 ],[ 54.00, 78.30 ],[ 54.40, 19.40 ],[ 54.40, 73.40 ],[ 54.50, 59.00 ],[ 55.60, 69.60 ],[ 55.90, 37.50 ],[ 56.00, 35.30 ],
    [ 56.20, 81.10 ],[ 57.00, 40.50 ],[ 57.20, 33.20 ],[ 57.40, 64.80 ],[ 57.40, 80.60 ],[ 58.70, 39.60 ],[ 59.00, 27.00 ],[ 59.10, 42.10 ],[ 59.10, 76.30 ],[ 59.10, 83.00 ],
    [ 60.30, 29.50 ],[ 60.60, 27.70 ],[ 60.70, 51.50 ],[ 60.90, 46.20 ],[ 61.60, 45.40 ],[ 62.00, 31.30 ],[ 62.50, 34.80 ],[ 62.60, 39.20 ],[ 62.70, 35.40 ],[ 63.10, 43.40 ],
    [ 63.50, 52.40 ],[ 63.60, 83.30 ],[ 65.00, 76.10 ],[ 65.10, 32.40 ],[ 65.70, 78.40 ],[ 65.80, 32.60 ],[ 67.40, 39.10 ],[ 67.60, 79.60 ],[ 68.60, 35.40 ],[ 69.10, 48.10 ],
    [ 69.60, 41.10 ],[ 69.60, 87.00 ],[ 71.00, 48.10 ],[ 72.20, 35.80 ],[ 72.50, 53.40 ],[ 72.60, 40.70 ],[ 73.00, 44.90 ],[ 73.00, 76.10 ],[ 73.40, 47.90 ],[ 73.70, 57.70 ],
    [ 74.00, 37.80 ],[ 75.00, 68.60 ],[ 75.60, 59.50 ],[ 76.50, 71.90 ],[ 76.80, 63.80 ],[ 77.60, 66.40 ],[ 77.90, 71.30 ],[ 78.10, 62.70 ],[ 79.30, 61.50 ],[ 80.90, 63.70 ],
    [ 83.50, 67.40 ],[ 84.70, 59.30 ],[ 85.60, 62.00 ],[ 27.30, 28.70 ],[ 27.60, 26.70 ],[ 28.30, 31.40 ],[ 28.30, 39.50 ],[ 29.80, 16.00 ],[ 30.60, 26.50 ],[ 31.20, 22.70 ],
    [ 32.90, 24.70 ],[ 33.40, 39.80 ],[ 34.10, 33.60 ],[ 35.60, 15.60 ],[ 36.30, 19.70 ],[ 36.40, 25.00 ],[ 36.70, 21.50 ],[ 36.70, 26.80 ],[ 37.30, 39.10 ],[ 37.40, 32.60 ],
    [ 37.50, 23.70 ],[ 38.20, 23.00 ],[ 38.20, 34.60 ],[ 38.90, 28.40 ],[ 39.60, 21.90 ],[ 39.80, 38.80 ],[ 40.70, 19.00 ],[ 41.30, 23.10 ],[ 13.40, 30.30 ],[ 14.80, 43.70 ],
    [ 15.10, 36.50 ],[ 15.60, 52.50 ],[ 15.90, 41.40 ],[ 17.00, 26.90 ],[ 17.20, 44.70 ],[ 17.40, 47.30 ],[ 18.20, 54.40 ],[ 18.90, 27.10 ],[ 19.30, 38.30 ],[ 19.40, 34.50 ],
    [ 20.60, 44.20 ],[ 20.80, 31.10 ],[ 20.90, 26.10 ],[ 21.30, 40.80 ],[ 21.30, 55.00 ],[ 22.80, 52.10 ],[ 22.90, 38.10 ],[ 23.00, 53.20 ],[ 23.10, 46.00 ],[ 23.20, 47.30 ],
    [ 23.20, 50.40 ],[ 23.20, 51.50 ],[ 24.40, 51.20 ],[ 24.60, 34.30 ],[ 27.60, 50.50 ],[ 29.70, 51.60 ],[ 33.00, 53.30 ],[ 36.80, 52.30 ],[ 40.50, 52.80 ],[ 42.70, 52.80 ],
    [ 42.70, 54.30 ],[ 43.70, 51.50 ],[ 46.30, 46.90 ],[ 47.80, 53.50 ],[ 48.00, 56.90 ],[ 50.00, 52.40 ],[ 50.50, 54.60 ],[ 51.20, 48.80 ],[ 51.70, 57.30 ],[ 57.20, 50.80 ],
    [ 57.80, 56.50 ],[ 60.90, 66.20 ],[ 62.80, 64.10 ],[ 63.90, 73.10 ],[ 64.70, 63.90 ],[ 66.90, 58.70 ],[ 67.30, 69.30 ],[ 68.00, 63.10 ],[ 68.00, 64.60 ],[ 69.50, 72.00 ],
    [ 71.50, 58.50 ]
  ]
  for (md = 0; md < LootCrates.length; md++) {
    L.marker([-LootCrates[md][0], 100+LootCrates[md][1]], { title: 'Loot Crate', icon: Icons.LootCrateIcon}).addTo(map).bindPopup('Loot Crate <br />' + LootCrates[md][0].toFixed(1) + ' / ' + LootCrates[md][1].toFixed(1))
  }

  var WyvernNests = [
    [ 32.70, 14.80 ],[ 33.40, 14.90 ],[ 39.70, 15.20 ],[ 45.10, 17.10 ],[ 45.10, 15.10 ],[ 51.10, 16.20 ],[ 52.60, 18.60 ],[ 53.30, 18.80 ],[ 61.60, 18.50 ],[ 61.90, 16.90 ],
    [ 64.00, 18.70 ],[ 66.20, 16.70 ],[ 68.70, 20.10 ],[ 69.00, 20.70 ],[ 70.80, 19.30 ],[ 31.40, 14.40 ]
  ]
  for (md = 0; md < WyvernNests.length; md++) {
    L.marker([-WyvernNests[md][0], 100+WyvernNests[md][1]], { title: 'Wyvern Nest', icon: Icons.WyvernNestIcon}).addTo(map).bindPopup('Wyvern Nest <br />' + WyvernNests[md][0].toFixed(1) + ' / ' + WyvernNests[md][1].toFixed(1))
  }

  var Glitches = [
    [ 48.61, 73.67, 'Genesis 2 Chronicles #10' ],[ 56.98, 56.23, 'HLN-A Discovery #7' ],[ 74.47, 69.18, 'Genesis 2 Chronicles #7' ],
    [ 75.88, 70.55, 'Genesis 2 Chronicles #7' ],[ 56.49, 44.69, 'HLN-A Discovery #4' ],[ 76.48, 66.40, 'Genesis 2 Chronicles #7' ],
    [ 40.30, 47.81, 'HLN-A Discovery #6' ],[ 76.95, 67.80, 'Genesis 2 Chronicles #7' ],[ 77.29, 68.66, 'Genesis 2 Chronicles #7' ],
    [ 77.26, 69.58, 'Genesis 2 Chronicles #7' ],[ 55.16, 17.64, 'Genesis 2 Chronicles #8' ],[ 51.69, 17.25, 'Genesis 2 Chronicles #8' ],
    [ 49.92, 16.36, 'Genesis 2 Chronicles #8' ],[ 43.48, 16.07, 'Genesis 2 Chronicles #8' ],[ 16.67, 36.93, 'Genesis 2 Chronicles #6' ],
    [ 68.15, 40.87, 'Genesis 2 Chronicles #9' ],[ 67.26, 38.93, 'Genesis 2 Chronicles #9' ],[ 68.12, 37.13, 'Genesis 2 Chronicles #9' ],
    [ 69.09, 36.18, 'Genesis 2 Chronicles #9' ],[ 48.33, 74.92, 'Genesis 2 Chronicles #10' ],[ 51.74, 72.72, 'Genesis 2 Chronicles #10' ],
    [ 51.88, 74.05, 'Genesis 2 Chronicles #10' ],[ 51.47, 74.70, 'Genesis 2 Chronicles #10' ],[ 50.56, 75.62, 'Genesis 2 Chronicles #10' ],
    [ 13.49, 33.86, 'Genesis 2 Chronicles #6' ],[ 13.80, 34.72, 'Genesis 2 Chronicles #6' ],[ 22.55, 34.34, 'Genesis 2 Chronicles #6' ],
    [ 76.67, 79.58, 'HLN-A Discovery #5' ],[ 74.79, 67.71, 'Genesis 2 Chronicles #7' ]
  ]
  for (md = 0; md < Glitches.length; md++) {
    L.marker([-Glitches[md][0], 100+Glitches[md][1]], { title: Glitches[md][2], icon: Icons.GlitchIcon}).addTo(map).bindPopup(Glitches[md][2] +' <br />' + Glitches[md][0].toFixed(1) + ' / ' + Glitches[md][1].toFixed(1))
  }

  var CaveLootCrates = [
    [ 30.40, 29.90 ],[ 31.90, 29.30 ],[ 32.40, 28.50 ],[ 33.00, 28.80 ],[ 33.00, 29.40 ],[ 33.90, 28.60 ],[ 34.10, 28.70 ],[ 56.50, 44.20 ],[ 56.90, 45.40 ],[ 57.40, 44.90 ],
    [ 57.70, 45.90 ],[ 58.20, 43.40 ],[ 58.20, 44.70 ],[ 58.40, 43.40 ],[ 76.60, 80.50 ],[ 76.90, 82.30 ],[ 77.00, 79.00 ],[ 77.20, 77.10 ],[ 77.60, 77.10 ],[ 77.60, 79.90 ],
    [ 78.20, 77.50 ]
  ]
  for (md = 0; md < CaveLootCrates.length; md++) {
    L.marker([-CaveLootCrates[md][0], 100+CaveLootCrates[md][1]], { title: 'Cave Loot Crate', icon: Icons.CaveLootCrateIcon}).addTo(map).bindPopup('Cave Loot Crate <br />' + CaveLootCrates[md][0].toFixed(1) + ' / ' + CaveLootCrates[md][1].toFixed(1))
  }

  var Dossiers = [    
    [ 18.60, 46.30, 'Dossier: Deathworm' ],[ 37.00, 12.30, 'Dossier: Jerboa' ],[ 35.10, 59.70, 'Dossier: Jugbug' ],[ 18.20, 81.90, 'Dossier: Mantis' ],
    [ 85.00, 52.10, 'Dossier: Morellatops' ],[ 65.00, 32.60, 'Dossier: Moth' ],[ 84.70, 14.60, 'Dossier: Phoenix' ],[ 79.60, 32.40, 'Dossier: Rock Elemental' ],
    [ 81.20, 14.20, 'Dossier: Thorny Dragon' ],[ 18.30, 67.30, 'Dossier: Vulture' ],[ 12.30, 46.80, 'Dossier: Wyvern' ]
  ]
  for (md = 0; md < Dossiers.length; md++) {
    L.marker([-Dossiers[md][0], 100+Dossiers[md][1]], { title: Dossiers[md][2], icon: Icons.DossierIcon}).addTo(map).bindPopup(Dossiers[md][2] + ' <br />' + Dossiers[md][0].toFixed(1) + ' / ' + Dossiers[md][1].toFixed(1))
  }

  var DesertLootCrates = [
    [ 10.60, 81.50 ],[ 11.20, 62.40 ],[ 12.50, 13.00 ],[ 21.80, 87.80 ],[ 21.90, 73.10 ],[ 22.10, 10.40 ],[ 29.50, 82.50 ],[ 31.10, 9.90 ],[ 55.90, 10.10 ],[ 68.80, 10.30 ],
    [ 73.50, 12.70 ],[ 76.80, 87.20 ],[ 80.50, 21.20 ],[ 83.10, 10.30 ],[ 85.80, 78.50 ],[ 87.80, 37.90 ],[ 89.50, 13.50 ],[ 89.70, 70.10 ]
  ]
  for (md = 0; md < DesertLootCrates.length; md++) {
    L.marker([-DesertLootCrates[md][0], 100+DesertLootCrates[md][1]], { title: 'Desert Loot Crate', icon: Icons.DesertLootCrateIcon}).addTo(map).bindPopup('Desert Loot Crate <br />' + DesertLootCrates[md][0].toFixed(1) + ' / ' + DesertLootCrates[md][1].toFixed(1))
  }

  var Notes = [
    [ 17.70, 12.30, 'Note: Dahkeya Note #1' ],[ 14.80, 27.70, 'Note: Dahkeya Note #2' ],[ 66.30, 14.40, 'Note: Dahkeya Note #3' ],[ 71.10, 48.10, 'Note: Dahkeya Note #4' ],
    [ 53.30, 43.70, 'Note: Dahkeya Note #5' ],[ 78.90, 49.90, 'Note: Dahkeya Note #6' ],[ 30.60, 53.80, 'Note: Dahkeya Note #7' ],[ 22.40, 44.20, 'Note: Dahkeya Note #8' ],
    [ 42.30, 88.40, 'Note: Dahkeya Note #9' ],[ 61.20, 77.80, 'Note: Dahkeya Note #10' ],[ 24.50, 77.60, 'Note: Dahkeya Note #11' ],[ 17.60, 87.50, 'Note: Dahkeya Note #12' ],
    [ 33.60, 10.70, 'Note: Dahkeya Note #13' ],[ 28.50, 12.40, 'Note: Dahkeya Note #14' ],[ 39.70, 41.10, 'Note: Dahkeya Note #15' ],[ 35.80, 37.80, 'Note: Dahkeya Note #16' ],
    [ 30.40, 39.70, 'Note: Dahkeya Note #17' ],[ 28.20, 41.70, 'Note: Dahkeya Note #18' ],[ 45.60, 34.60, 'Note: Dahkeya Note #19' ],[ 54.50, 31.70, 'Note: Dahkeya Note #20' ],
    [ 48.70, 64.00, 'Note: Dahkeya Note #21' ],[ 83.60, 15.20, 'Note: Dahkeya Note #22' ],[ 63.70, 10.40, 'Note: Dahkeya Note #23' ],[ 72.80, 36.60, 'Note: Dahkeya Note #24' ],
    [ 61.10, 46.90, 'Note: Dahkeya Note #25' ],[ 65.40, 55.50, 'Note: Dahkeya Note #26' ],[ 78.40, 55.50, 'Note: Dahkeya Note #27' ],[ 76.50, 76.90, 'Note: Dahkeya Note #28' ],
    [ 83.40, 71.80, 'Note: Dahkeya Note #29' ],[ 86.10, 51.10, 'Note: Dahkeya Note #30' ],[ 43.30, 45.00, 'Note: Helena Note #1' ],[ 48.80, 71.10, 'Note: Helena Note #2' ],
    [ 57.00, 76.10, 'Note: Helena Note #3' ],[ 81.60, 63.90, 'Note: Helena Note #4' ],[ 41.00, 54.10, 'Note: Helena Note #5' ],[ 50.80, 25.10, 'Note: Helena Note #6' ],
    [ 31.90, 29.40, 'Note: Helena Note #7' ],[ 23.40, 53.30, 'Note: Helena Note #8' ],[ 51.00, 86.70, 'Note: Helena Note #9' ],[ 80.00, 75.60, 'Note: Helena Note #10' ],
    [ 10.60, 19.50, 'Note: Helena Note #11' ],[ 15.70, 21.70, 'Note: Helena Note #12' ],[ 23.70, 12.60, 'Note: Helena Note #13' ],[ 15.80, 40.10, 'Note: Helena Note #14' ],
    [ 14.10, 35.30, 'Note: Helena Note #15' ],[ 16.60, 56.60, 'Note: Helena Note #16' ],[ 23.30, 52.20, 'Note: Helena Note #17' ],[ 10.40, 66.60, 'Note: Helena Note #18' ],
    [ 53.00, 26.50, 'Note: Helena Note #19' ],[ 54.80, 48.60, 'Note: Helena Note #20' ],[ 85.80, 13.50, 'Note: Helena Note #21' ],[ 84.80, 18.90, 'Note: Helena Note #22' ],
    [ 66.00, 39.70, 'Note: Helena Note #23' ],[ 60.20, 70.70, 'Note: Helena Note #24' ],[ 72.40, 70.80, 'Note: Helena Note #25' ],[ 85.10, 37.30, 'Note: Helena Note #26' ],
    [ 54.80, 13.10, 'Note: Helena Note #27' ],[ 17.50, 34.90, 'Note: Helena Note #28' ],[ 21.80, 43.10, 'Note: Helena Note #29' ],[ 23.80, 48.90, 'Note: Helena Note #30' ],
    [ 11.20, 40.00, 'Note: Raia Tablet #1' ],[ 51.40, 49.40, 'Note: Raia Tablet #2' ],[ 49.30, 50.80, 'Note: Raia Tablet #3' ],[ 86.10, 68.80, 'Note: Raia Tablet #4' ],
    [ 69.90, 59.30, 'Note: Raia Tablet #5' ],[ 22.20, 60.80, 'Note: Raia Tablet #6' ],[ 78.30, 76.10, 'Note: Raia Tablet #7 in Ruins Of Nosti' ],
    [ 16.80, 56.50, 'Note: Raia Tablet #8' ],[ 50.30, 80.30, 'Note: Raia Tablet #9' ],[ 88.70, 38.60, 'Note: Raia Tablet #10' ],[ 76.80, 69.20, 'Note: Raia Tablet #11' ],
    [ 76.10, 60.30, 'Note: Raia Tablet #12' ],[ 77.40, 77.90, 'Note: Raia Tablet #13' ],[ 33.10, 85.70, 'Note: Raia Tablet #14' ],[ 27.60, 88.60, 'Note: Raia Tablet #15' ],
    [ 45.80, 9.50, 'Note: Raia Tablet #16' ],[ 49.10, 20.30, 'Note: Raia Tablet #17' ],[ 43.10, 37.30, 'Note: Raia Tablet #18' ],[ 43.70, 59.40, 'Note: Raia Tablet #19' ],
    [ 54.80, 61.50, 'Note: Raia Tablet #20' ],[ 79.70, 15.50, 'Note: Raia Tablet #21' ],[ 82.20, 13.60, 'Note: Raia Tablet #22' ],[ 62.70, 44.30, 'Note: Raia Tablet #23' ],
    [ 60.10, 59.40, 'Note: Raia Tablet #24' ],[ 84.60, 32.20, 'Note: Raia Tablet #25' ],[ 75.80, 54.10, 'Note: Raia Tablet #26' ],[ 37.50, 40.00, 'Note: Raia Tablet #27' ],
    [ 45.30, 30.00, 'Note: Raia Tablet #28' ],[ 46.60, 22.10, 'Note: Raia Tablet #29' ],[ 70.20, 39.30, 'Note: Raia Tablet #30' ],[ 71.80, 10.50, 'Note: Rockwell Note #1' ],
    [ 72.00, 85.80, 'Note: Rockwell Record #2' ],[ 84.30, 13.90, 'Note: Rockwell Record #3' ],
    [ 78.80, 81.90, 'Note: Rockwell Record #4 in Ruins Of Nosti in a corner just before the artifact' ],[ 13.30, 77.60, 'Note: Rockwell Record #5' ],
    [ 24.20, 39.00, 'Note: Rockwell Record #6' ],[ 58.00, 44.80, 'Note: Rockwell Record #7 in The Old Tunnels' ],[ 23.40, 65.10, 'Note: Rockwell Record #8' ],
    [ 54.30, 76.40, 'Note: Rockwell Record #9' ],[ 86.30, 69.00, 'Note: Rockwell Record #10' ],[ 28.30, 49.80, 'Note: Rockwell Record #11' ],
    [ 36.20, 42.20, 'Note: Rockwell Record #12' ],[ 27.60, 55.10, 'Note: Rockwell Record #13' ],[ 36.20, 68.60, 'Note: Rockwell Record #14' ],
    [ 31.70, 72.60, 'Note: Rockwell Record #15' ],[ 31.30, 59.80, 'Note: Rockwell Record #16' ],[ 40.50, 77.40, 'Note: Rockwell Record #17' ],
    [ 39.90, 86.10, 'Note: Rockwell Record #18' ],[ 55.00, 56.00, 'Note: Rockwell Record #19' ],[ 44.60, 63.00, 'Note: Rockwell Record #20' ],
    [ 83.20, 19.00, 'Note: Rockwell Record #21' ],[ 81.80, 17.90, 'Note: Rockwell Record #22' ],[ 59.40, 86.40, 'Note: Rockwell Record #23' ],
    [ 66.00, 86.60, 'Note: Rockwell Record #24' ],[ 80.40, 39.70, 'Note: Rockwell Record #25' ],[ 25.70, 52.70, 'Note: Rockwell Record #26' ],
    [ 31.50, 51.80, 'Note: Rockwell Record #27' ],[ 37.10, 50.00, 'Note: Rockwell Record #28' ],[ 32.20, 48.90, 'Note: Rockwell Record #29' ],
    [ 30.60, 44.10, 'Note: Rockwell Record #30' ],[ 51.50, 49.60, 'Note: ??? #2 in Manticore Arena' ],[ 63.30, 61.50, 'Note: ??? #5' ],[ 63.30, 29.40, 'Note: ??? #8' ],
    [ 30.70, 56.20, 'Note: ??? #11' ],[ 24.40, 29.70, 'Note: ??? #14' ]
  ]
  for (md = 0; md < Notes.length; md++) {
    L.marker([-Notes[md][0], 100+Notes[md][1]], { title: Notes[md][2], icon: Icons.NotesIcon}).addTo(map).bindPopup(Notes[md][2] +' <br />' + Notes[md][0].toFixed(1) + ' / ' + Notes[md][1].toFixed(1))
  }
}