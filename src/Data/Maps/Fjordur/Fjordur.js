import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function Fjordur(map) {
  L.imageOverlay('/Maps/Fjordur.jpg', [[-100,0], [0,-100]]).addTo(map);

  var Obelisks = [
    [ "Blue Obelisk", 74.6, 7.4, Icons.BlueObeliskIcon ],[ "Green Obelisk", 17.7, 80.7, Icons.GreenObeliskIcon ],[ "Red Obelisk",  79.3, 96.3, Icons.RedObeliskIcon ]
  ]
  for (md = 0; md < Obelisks.length; md++) {
    L.marker([-Obelisks[md][1], -100+Obelisks[md][2]], { title: Obelisks[md][0], icon: Obelisks[md][3]}).addTo(map).bindPopup(Obelisks[md][0] +' <br />' + Obelisks[md][1].toFixed(1) + ' / ' + Obelisks[md][2].toFixed(1))
  }

  var CaveEntrances = [
    [ 40.9, 57.4, "The Hidden Worlds" ],[ 14.1, 50.3, "Unnamed Lindbjord Forest cave" ],[ 27, 49.8, "Waterfall Vannaland Valley cave" ],[ 49.41, 14.35, "The Snakepit" ],
    [ 86.85, 12.84, "Dvergheim Cave" ],[ 71.6, 1.52, "Nidisheim" ],[ 3.71, 4.08, "Mariana Caverns" ],[ 8.69, 24.48, "The Frozen Fortress" ],[ 7.69, 39.11, "Drengrheimr" ],
    [ 3.41, 32.79, "Drengrheimr" ],[ 20.9, 57.37, "Molten Caverns" ],[ 76.83, 65.6, "The Forgotten Caverns" ],[ 10.12, 84.47, "Bear Caverns" ],
    [ 90.73, 78.52, "Mount Doom Caverns" ],[ 25.02, 93.08, "Unnamed Runheimr Forest Cave" ],[ 57.31, 65.77, "The Overgrown Grave" ],[ 56.74, 84.69, "Beiygjaheimr" ],
    [ 45.52, 63.36, "The Golden Caverns" ],[ 4.52, 47.32, "Unnamed Lindbjord Forest Cave" ],[ 39.56, 31.63, "Hidden Grotto" ],[ 83.22, 21.26, "Dvergheim" ],
    [ 86.26, 5.42, "Dvergheim" ],[ 41.91, 24.84, "Unnamed Underwater Bubble" ],[ 46.39, 35.08, "Unnamed Underwater Bubble" ],[ 52.87, 96.93, "Unnamed Underwater Bubble" ],
    [ 91.73, 41.73, "Unnamed Underwater Cave" ],[ 47.04, 42.42, "Unnamed Underwater Cave" ],[ 51.54, 44.59, "Unnamed Underwater Cave" ],[ 42.15, 5.2, "Unnamed Bolbjord Cave" ],
    [ 40.48, 6.19, "Unnamed Bolbjord Cave" ],[ 29.9, 22.62, "Unnamed Snaerheimr Mountains Cave" ],[ 28.15, 34.62, "Unnamed Snaerheimr Mountains Cave" ],
    [ 20, 19.06, "Hidden Snowcave" ],[ 28.67, 39.91, "Lindbjord Cave" ],[ 20.6, 8.74, "The Snowglobe" ],[ 29.12, 50.58, "Unnamed Vannaland Valley Cave" ],
    [ 7.88, 69.93, "Unnamed Vannaland Cave" ],[ 17.21, 60.36, "Unnamed Fornland Cave" ],[ 77.71, 29.4, "Unnamed Vardiland Cave" ],[ 76.78, 36.4, "Unnamed Vardiland Cave" ],
    [ 68.43, 37.6, "Unnamed Emerald Trench Cave" ],[ 37.68, 74.98, "Unnamed Broken Meadowns Cave" ],[ 54.66, 77.15, "Unnamed Broken Meadowns Cave" ],
    [ 20.03, 97.61, "Unnamed Runheimr Forest Cave" ],[ 17.9, 92.05, "Unnamed Runheimr Mountains Cave" ],[ 11.58, 75.22, "Unnamed Vannaland Cave" ],
    [ 36.02, 95.6, "Unnamed Vannaland Cave" ],[ 86.28, 98.17, "Caverns of Time" ],[ 95.88, 80.64, "The Throat of Flames" ]
  ]
  for (md = 0; md < CaveEntrances.length; md++) {
    L.marker([-CaveEntrances[md][0], -100+CaveEntrances[md][1]], { title: CaveEntrances[md][2], icon: Icons.CaveEntranceIcon}).addTo(map).bindPopup(CaveEntrances[md][2] +' <br />' + CaveEntrances[md][0].toFixed(1) + ' / ' + CaveEntrances[md][1].toFixed(1))
  }

  
  var Terminals = [
    [ 83.7, 8.2, "Dragon Terminal" ],[ 54.5, 65.3, "Broodmother Terminal" ],[ 49.1, 82.3, "Megapithecus Terminal" ]
  ]
  for (md = 0; md < Terminals.length; md++) {
    L.marker([-Terminals[md][0], -100+Terminals[md][1]], { title: Terminals[md][2], icon: Icons.TerminalIcon}).addTo(map).bindPopup(Terminals[md][2] +' <br />' + Terminals[md][0].toFixed(1) + ' / ' + Terminals[md][1].toFixed(1))
  }
  
  var Artifacts = [
    [ 7.29, 28, "Artifact of the Skylord" ],[ 18.86, 83.78, 'Artifact of the Strong' ],[ 18.14, 65.62, 'Artifact of the Clever' ],[ 76.52, 8.49, 'Artifact of the Massive' ],
    [ 73.61, 72.84, 'Artifact of the Cunning' ],[ 15.53, 60.85, 'Artifact of the Pack' ],[ 47.64, 8.1, 'Artifact of the Brute' ],[ 88.8, 86.28, 'Artifact of the Immune' ],
    [ 7.35, 32.93, 'Artifact of the Hunter' ],[ 8.79, 13.66, 'Artifact of the Devourer' ]
  ]
  for (md = 0; md < Artifacts.length; md++) {
    L.marker([-Artifacts[md][0], -100+Artifacts[md][1]], { title: Artifacts[md][2], icon: Icons.ArtifactIcon}).addTo(map).bindPopup(Artifacts[md][2] +' <br />' + Artifacts[md][0].toFixed(1) + ' / ' + Artifacts[md][1].toFixed(1))
  }

  var Runes = [
    [ 94.09, 34.69 ],[ 25.11, 50.95 ],[ 18.2, 91.17 ],[ 88.05, 92.35 ],[ 85.84, 92.11 ],[ 84.04, 96.38 ],[ 75.14, 95.57 ],[ 72.11, 89.36 ],[ 81.81, 86.06 ],[ 88.3, 84.81 ],
    [ 89.88, 85.23 ],[ 64.61, 93.15 ],[ 87.14, 82.76 ],[ 83.54, 35.39 ],[ 93.02, 93.1 ],[ 91.35, 16.43 ],[ 96.96, 84.14 ],[ 96.07, 78.26 ],[ 82.18, 73.63 ],[ 81.77, 79.42 ],
    [ 75.47, 78.83 ],[ 97.81, 5.57 ],[ 97.65, 6.48 ],[ 92.04, 1.9 ],[ 89.37, 2.62 ],[ 91.6, 7.67 ],[ 89.71, 13.74 ],[ 86.72, 13.02 ],[ 86.17, 6.96 ],[ 83.28, 14.66 ],
    [ 77.82, 9.9 ],[ 81.25, 4.63 ],[ 78.85, 3.42 ],[ 80.05, 3.54 ],[ 69.71, 5.05 ],[ 67.82, 7.98 ],[ 63.3, 10.17 ],[ 63.92, 25.92 ],[ 66.05, 33.51 ],[ 60.43, 35.69 ],
    [ 51.23, 38.31 ],[ 66.64, 39.1 ],[ 74.44, 34 ],[ 76.84, 36.21 ],[ 87.68, 45.07 ],[ 79.94, 28.34 ],[ 73.72, 19.88 ],[ 45.97, 11.53 ],[ 40.48, 5.23 ],[ 42.68, 4.66 ],
    [ 44.9, 15.93 ],[ 11.16, 5.04 ],[ 2.9, 14.29 ],[ 19.83, 18.85 ],[ 13.1, 17.29 ],[ 14.77, 2.44 ],[ 34.49, 42.69 ],[ 28.71, 43.59 ],[ 6.31, 56.51 ],[ 6.42, 60.77 ],
    [ 22.48, 61.61 ],[ 18.5, 79.51 ],[ 22.77, 82.32 ],[ 30.07, 91.34 ],[ 6.53, 76.01 ],[ 8.45, 92.61 ],[ 37.49, 96.9 ],[ 39.31, 95.55 ],[ 52.58, 82.43 ],[ 48.34, 72.74 ],
    [ 60.56, 70.75 ],[ 45.59, 61.17 ],[ 41.79, 52.83 ],[ 35.51, 49.68 ],[ 27.16, 49.88 ],[ 26.42, 64.68 ],[ 13.29, 63.86 ],[ 19.26, 77.42 ],[ 65.91, 7.71 ],[ 17.68, 14.75 ],
    [ 94.08, 96.57 ],[ 63.94, 95.74 ],[ 31.63, 66.51 ],[ 32.27, 65.27 ],[ 30.92, 52.56 ],[ 60.6, 80.56 ],[ 74.91, 94.76 ],[ 92.75, 84.89 ],[ 94.31, 7.73 ],[ 89.2, 6.51 ],
    [ 78.82, 15.68 ],[ 70.08, 12.22 ],[ 33.79, 20.05 ],[ 34.35, 82.94 ],[ 96.98, 21.97 ],[ 88.32, 85.7 ],[ 53.77, 65.24 ],[ 85.81, 6.86 ],[ 17.84, 65.74 ],[ 42.78, 64.42 ],
    [ 27.64, 46.11 ],[ 51.81, 84.98 ],[ 73.86, 5.31 ],[ 75.54, 6.45 ],[ 90.21, 79.38 ],[ 89.05, 86.62 ],[ 38.17, 60.08 ],[ 6.95, 45.4 ],[ 7.58, 22.54 ],[ 6.55, 23.39 ],
    [ 6.53, 28.29 ],[ 8.17, 37.78 ],[ 7.59, 34.41 ],[ 6.89, 33.59 ],[ 11.28, 84.25 ],[ 13.51, 67.65 ],[ 13.77, 85.26 ],[ 18.43, 82.69 ],[ 16.24, 61.7 ],[ 89.85, 83.24 ],
    [ 19.16, 11.82 ],[ 25.8, 40.66 ],[ 19.04, 59.2 ],[ 55.25, 67.49 ],[ 53.95, 83.11 ],[ 50.36, 81.73 ],[ 83.62, 92.58 ],[ 84.76, 16.01 ],[ 85.42, 71.52 ],[ 90.6, 73.76 ],
    [ 95.92, 81.51 ],[ 96.11, 84.52 ],[ 91, 91.95 ],[ 87.9, 16.78 ],[ 47.38, 7.73 ],[ 5.11, 6 ],[ 88.24, 20.19 ],[ 87.6, 11.63 ],[ 47.66, 13.96 ],[ 49.13, 10.09 ],[ 43.1, 10.45 ],
    [ 45.57, 12.58 ],[ 6.04, 10.03 ],[ 8.45, 13.47 ],[ 76.43, 8.31 ],[ 75.94, 70.28 ],[ 73.31, 71.94 ],[ 86.88, 97.09 ],[ 83.33, 94.58 ],[ 84.81, 15.45 ],[ 82.54, 16.39 ],
    [ 81.16, 13.79 ],[ 90.62, 39.83 ],[ 32.12, 32.15 ],[ 34.94, 33.35 ]
  ]
  for (md = 0; md < Runes.length; md++) {
    L.marker([-Runes[md][0], -100+Runes[md][1]], { title: 'Rune', icon: Icons.RuneIcon}).addTo(map).bindPopup('Rune <br />' + Runes[md][0].toFixed(1) + ' / ' + Runes[md][1].toFixed(1))
  }

  var Shipwrecks = [
    [ 97.7, 6.5 ],[ 98.5, 7.3 ],[ 99.3, 8.6 ],[ 60.3, 87.8],[ 40.7, 43.8],[ 60.2, 87.9],[ 74.5, 80.8],[ 85.5, 2.5 ]
  ]
  for (md = 0; md < Shipwrecks.length; md++) {
    L.marker([-Shipwrecks[md][0], -100+Shipwrecks[md][1]], { title: 'Shipwreck', icon: Icons.ShipwreckIcon}).addTo(map).bindPopup('Shipwreck <br />' + Shipwrecks[md][0].toFixed(1) + ' / ' + Shipwrecks[md][1].toFixed(1))
  }

  var DeepSeaLootCrates = [
    [ 56.6929, 49.65915 ],[ 37.67008, 12.91766 ],[ 37.21146, 1.850161 ],[ 61.07338, 53.55693 ],[ 77.206, 62.80927 ],[ 95.57555, 45.25193 ],[ 95.83952, 59.96625 ],
    [ 57.11161, 97.17897 ],[ -0.4933483, 98.00841 ],[ 99.56967, 75.68884 ],[ 97.87971, 99.21496 ],[ 78.63269, 102.1249 ],[ -0.8696261, 51.32041 ],[ 16.69696, 102.3438 ],
    [ 0.5924941, 25.56687 ],[ 2.717687, 2.840639 ],[ 13.75004, -1.42221 ],[ 98.73912, 1.442375 ],[ 56.6929, 49.65915 ],[ 37.67008, 12.91766 ],[ 37.21146, 1.850161 ],
    [ 61.07338, 53.55693 ],[ 77.206, 62.80927 ],[ 95.57555, 45.25193 ],[ 95.83952, 59.96625 ],[ 57.11161, 97.17897 ],[ -0.4933483, 98.00841 ],[ 99.56967, 75.68884 ],
    [ 97.87971, 99.21496 ],[ 78.63269, 102.1249 ],[ -0.8696261, 51.32041 ],[ 16.69696, 102.3438 ],[ 0.5924941, 25.56687 ],[ 2.717687, 2.840639 ],[ 13.75004, -1.42221 ],
    [ 98.73912, 1.442375 ],[ 14.05, 85.24 ],[ 14.72, 85.47 ],[ 13.39, 85.6 ],[ 13.72, 86.09 ],[ 13.89, 85.33 ],[ 16.45, 81.39 ],[ 16.15, 81.02 ],[ 17.27, 81.53 ],[ 19.09, 83.01 ],
    [ 17.25, 84.24 ],[ 16.89, 83.49 ],[ 18.59, 84.6 ],[ 58.35, 7.51 ],[ 54.8, 9.27 ],[ 54.06, 17.73 ],[ 67.65, 20.65 ],[ 56.69, 49.66 ],[ 37.67, 12.92 ],[ 37.21, 1.85 ],
    [ 61.07, 53.56 ],[ 77.21, 62.81 ],[ 95.58, 45.25 ],[ 95.84, 59.97 ],[ 57.11, 97.18 ],[ -0.49, 98.01 ],[ 99.57, 75.69 ],[ 97.88, 99.21 ],[ 78.63, 102.12 ],[ -0.87, 51.32 ],
    [ 16.7, 102.34 ],[ 0.59, 25.57 ],[ 2.72, 2.84 ],[ 13.75, -1.42 ],[ 98.74, 1.44 ]
  ]
  for (md = 0; md < DeepSeaLootCrates.length; md++) {
    L.marker([-DeepSeaLootCrates[md][0], -100+DeepSeaLootCrates[md][1]], { title: 'Deep Sea Loot Crate', icon: Icons.DeepSeaLootCrateIcon}).addTo(map).bindPopup('Deep Sea Loot Crate <br />' + DeepSeaLootCrates[md][0].toFixed(1) + ' / ' + DeepSeaLootCrates[md][1].toFixed(1))
  }

  var BeaverDams = [
    [ 13.7, 19.62 ],[ 12.8, 20.13 ],[ 94.87, 31.77 ],[ 93.74, 32.27 ],[ 93.55, 32.27 ],[ 48.34, 74.63 ],[ 48.44, 76.29 ],[ 47.72, 73.52 ],[ 48.53, 72.98 ],[ 93.68, 31.7 ],
    [ 94.56, 30.88 ]
  ]
  for (md = 0; md < BeaverDams.length; md++) {
    L.marker([-BeaverDams[md][0], -100+BeaverDams[md][1]], { title: 'Beaver Dam', icon: Icons.BeaverDamIcon}).addTo(map).bindPopup('Beaver Dam <br />' + BeaverDams[md][0].toFixed(1) + ' / ' + BeaverDams[md][1].toFixed(1))
  }
  
  var LootCrates = [
    [ 12.17, 5.92 ],[ 10.6, 10.89 ],[ 7.11, 13.25 ],[ 4.51, 14.01 ],[ 14.8, 14.39 ],[ 13.41, 14.52 ],[ 13.02, 21.12 ],[ 12.23, 16.4 ],[ 11.29, 28.4 ],[ 12.11, 31.74 ],
    [ 6.75, 27.98 ],[ 6.9, 22.48 ],[ 7.93, 17.92 ],[ 5.63, 30.61 ],[ 18.39, 7.15 ],[ 23.35, 9.88 ],[ 26.92, 13.43 ],[ 30.34, 9.69 ],[ 21.63, 4.03 ],[ 26.6, 11.74 ],
    [ 29.95, 13.13 ],[ 30.33, 15.24 ],[ 20.31, 31.68 ],[ 19.58, 29.01 ],[ 20.24, 24.65 ],[ 16.91, 26.37 ],[ 16.95, 18.76 ],[ 25.27, 19.54 ],[ 27.28, 22.76 ],[ 26.37, 29.55 ],
    [ 31.45, 31.01 ],[ 30.95, 19.15 ],[ 65.93, 14.32 ],[ 62.67, 11.3 ],[ 66.1, 10.46 ],[ 66.47, 8.05 ],[ 60.22, 11.09 ],[ 60.41, 15.52 ],[ 62.49, 3.33 ],[ 66.46, 3.53 ],
    [ 62.62, 17.67 ],[ 65.02, 22.38 ],[ 60.18, 30.6 ],[ 58.64, 23.23 ],[ 54.99, 31.59 ],[ 64.03, 29.89 ],[ 66.63, 28.33 ],[ 82.05, 10.01 ],[ 81.44, 7.58 ],[ 72.21, 10.3 ],
    [ 73.91, 14.39 ],[ 70.55, 6.7 ],[ 67.49, 7.08 ],[ 76.16, 17.7 ],[ 70.25, 20.54 ],[ 69.64, 17.32 ],[ 82.76, 29.73 ],[ 74.49, 29.39 ],[ 73.13, 24.93 ],[ 80.03, 26.11 ],
    [ 81.76, 23.9 ],[ 81.85, 20.26 ],[ 82.86, 34.91 ],[ 80.42, 41.85 ],[ 76.98, 43.38 ],[ 79.89, 45.92 ],[ 74.08, 41.27 ],[ 75.18, 37.97 ],[ 68.78, 33.33 ],[ 4.99, 35.42 ],
    [ 6.25, 36.43 ],[ 9.52, 41.57 ],[ 10.49, 43.78 ],[ 7.82, 44.11 ],[ 5.95, 44.61 ],[ 5.13, 46.87 ],[ 6.23, 47.99 ],[ 11.7, 44.78 ],[ 14.92, 44.59 ],[ 14.86, 55.48 ],
    [ 15.34, 57.47 ],[ 16.22, 55.27 ],[ 16.02, 53.31 ],[ 15.53, 51.13 ],[ 15.58, 49.94 ],[ 14.42, 50.6 ],[ 13.56, 52.87 ],[ 10.95, 53.42 ],[ 9.37, 52.66 ],[ 7.27, 50.13 ],
    [ 18.29, 41.93 ],[ 20.6, 45.01 ],[ 23.34, 46 ],[ 30.43, 48.67 ],[ 32.79, 46.4 ],[ 26.73, 35.99 ],[ 24.4, 33.38 ],[ 18.1, 34.29 ],[ 21.29, 50.68 ],[ 17.52, 51.95 ],[ 24.46, 55 ],
    [ 28.23, 54.22 ],[ 30.09, 55.96 ],[ 32.67, 60.28 ],[ 31.49, 63.51 ],[ 23.75, 59.9 ],[ 36.33, 67.29 ],[ 35.32, 67.67 ],[ 33.93, 73.81 ],[ 41.14, 68.64 ],[ 44.38, 70.11 ],
    [ 49.15, 74.61 ],[ 49.85, 72.93 ],[ 45.43, 81.93 ],[ 41.76, 85.39 ],[ 41.01, 88.24 ],[ 45.2, 87.48 ],[ 35.75, 91.04 ],[ 45.44, 97.82 ],[ 49.88, 92.78 ],[ 50.71, 80.09 ],
    [ 51.49, 69.93 ],[ 58.3, 75.17 ],[ 65.02, 71.25 ],[ 65.91, 75.13 ],[ 56.09, 80.94 ],[ 58.35, 84.52 ],[ 57.4, 88.25 ],[ 53.22, 90.01 ],[ 54.23, 83.65 ],[ 50.75, 91.28 ],
    [ 94.57, 15.22 ],[ 90.32, 6.77 ],[ 96.59, 9.13 ],[ 85.9, 10 ],[ 85.36, 6.21 ],[ 95.98, 10.59 ],[ 94.05, 3.54 ],[ 91.22, 22.56 ],[ 91.21, 27.52 ],[ 92.66, 29.99 ],
    [ 97.01, 28.9 ],[ 95.99, 32.09 ],[ 87.48, 29.51 ],[ 89.34, 36.5 ],[ 85.97, 42.83 ],[ 87.52, 34.87 ],[ 94.73, 34.01 ],[ 89.73, 34.98 ],[ 44.16, 10.83 ],[ 14.17, 75.39 ],
    [ 16.08, 69.28 ],[ 12.26, 69.4 ],[ 5.94, 67.9 ],[ 4.54, 75.17 ],[ 7.3, 89.28 ],[ 11.2, 96.92 ],[ 16.01, 96.99 ],[ 15.71, 94.43 ],[ 15.46, 90.24 ],[ 15.67, 84.51 ],
    [ 12.5, 84.15 ],[ 11.36, 93.42 ],[ 22.36, 77.1 ],[ 24.09, 79.09 ],[ 22.47, 82.36 ],[ 30.26, 82.67 ],[ 27.98, 75.97 ],[ 28.32, 73.07 ],[ 27.37, 67.34 ],[ 24.21, 67.78 ],
    [ 27.52, 77.98 ],[ 32.12, 85.74 ],[ 25.04, 92.11 ],[ 16.67, 83.49 ],[ 17.87, 89.52 ],[ 20.91, 95.08 ],[ 21.65, 97.85 ],[ 31.51, 95.38 ],[ 32.85, 92.7 ],[ 72.82, 95.77 ],
    [ 71.96, 91.87 ],[ 79.27, 91.32 ],[ 79.62, 86.88 ],[ 78.77, 83.89 ],[ 72.4, 88.12 ],[ 86.14, 68.72 ],[ 90.13, 69.97 ],[ 94.23, 79.74 ],[ 88.47, 77.6 ],[ 85.48, 75 ],
    [ 85.45, 95.21 ],[ 92.29, 86.65 ],[ 96.22, 89.24 ],[ 94.46, 97.03 ],[ 33.65, 34.28 ],[ 33.37, 34.22 ],[ 33.68, 39.21 ],[ 33.74, 41.52 ],[ 33.91, 47.67 ],[ 41.22, 48.93 ],
    [ 39.78, 43.22 ],[ 41.84, 60.73 ],[ 33.92, 61.83 ],[ 42.94, 65.64 ],[ 46.51, 62.46 ],[ 49.14, 58.05 ],[ 44.56, 50.79 ],[ 53.92, 33.49 ],[ 53.69, 38.66 ],[ 59.86, 39.1 ],
    [ 64.64, 33.21 ],[ 64.06, 40.64 ],[ 65.76, 38.2 ],[ 64.55, 38.18 ],[ 50.54, 58.58 ],[ 53.75, 60.2 ],[ 50.81, 64.97 ],[ 57.77, 62.51 ]
  ]
  for (md = 0; md < LootCrates.length; md++) {
    L.marker([-LootCrates[md][0], -100+LootCrates[md][1]], { title: 'Loot Crate', icon: Icons.LootCrateIcon}).addTo(map).bindPopup('Loot Crate <br />' + LootCrates[md][0].toFixed(1) + ' / ' + LootCrates[md][1].toFixed(1))
  }

  var CaveLootCrates = [
    [ 6.03, 22.56 ],[ 6.01, 26.3 ],[ 6.1, 23.88 ],[ 7.16, 26.17 ],[ 6.56, 23.7 ],[ 5, 23.43 ],[ 8.54, 37.11 ],[ 18.59, 60.16 ],[ 19.16, 59.33 ],[ 17.43, 65.3 ],[ 42.46, 64.57 ],
    [ 43.44, 67.28 ],[ 50.65, 81.23 ],[ 76.62, 7.59 ],[ 77.12, 7.56 ],[ 76.9, 7.85 ],[ 77.07, 7.87 ],[ 74.95, 69.37 ],[ 74.63, 70.42 ],[ 73.55, 72.11 ],[ 55.62, 67.07 ],
    [ 17.31, 59.35 ],[ 15.88, 59.66 ],[ 7.07, 35.06 ],[ 7.44, 33.39 ],[ 51.91, 85.52 ],[ 44.16, 10.83 ],[ 7, 33.62 ],[ 42.08, 66.28 ],[ 73.75, 8.46 ],[ 74.47, 8.13 ],
    [ 74.98, 6.71 ],[ 74.45, 5.71 ]
  ]
  for (md = 0; md < CaveLootCrates.length; md++) {
    L.marker([-CaveLootCrates[md][0], -100+CaveLootCrates[md][1]], { title: 'Cave Loot Crate', icon: Icons.CaveLootCrateIcon}).addTo(map).bindPopup('Cave Loot Crate <br />' + CaveLootCrates[md][0].toFixed(1) + ' / ' + CaveLootCrates[md][1].toFixed(1))
  }

  // Asgard

  var AsgardWyvernNests = [
    [ 25.97, 12.14 ],
    [ 25.73, 12.9 ],
    [ 24.75, 12.97 ],
    [ 25.24, 14.01]
  ]
  for (md = 0; md < AsgardWyvernNests.length; md++) {
    L.marker([-AsgardWyvernNests[md][0], -100+AsgardWyvernNests[md][1]], { title: 'Asgard Wyvern Nest', icon: Icons.WyvernNestIcon}).addTo(map).bindPopup('Asgard Wyvern Nest <br />' + AsgardWyvernNests[md][0].toFixed(1) + ' / ' + AsgardWyvernNests[md][1].toFixed(1))
  }

  var AsgardRockDrakeNests = [
    [ 41.67, 46.87 ],
    [ 47.36, 44.95 ],
    [ 47.36, 44.35 ],
    [ 45.17, 46.2 ],
    [ 44.11, 44.84 ],
    [ 43.89, 45.86 ],
    [ 42.79, 43.9 ],
    [ 42.65, 43.24 ],
    [ 43.25, 43.15 ],
    [ 46.74, 43.55]
  ]
  for (md = 0; md < AsgardRockDrakeNests.length; md++) {
    L.marker([-AsgardRockDrakeNests[md][0], -100+AsgardRockDrakeNests[md][1]], { title: 'Asgard Rock Drake Nest', icon: Icons.RockDrakeNestIcon}).addTo(map).bindPopup('Asgard Rock Drake Nest <br />' + AsgardRockDrakeNests[md][0].toFixed(1) + ' / ' + AsgardRockDrakeNests[md][1].toFixed(1))
  }

  // Jotunheim

  var JotunheimObelisks = [ 87.6, 26.3 , "Blue Obelisk" ]
  L.marker([-JotunheimObelisks[0], -100+JotunheimObelisks[1]], { title: 'Jotunheim Blue Obelisk', icon: Icons.BlueObeliskIcon}).addTo(map).bindPopup('Jotunheim Blue Obelisk <br />' + JotunheimObelisks[0].toFixed(1) + ' / ' + JotunheimObelisks[1].toFixed(1))

  var JotunheimIceWyvernNests = [
    [ 61.07, 31.02 ],
    [ 61.06, 31.59 ],
    [ 62.37, 32.02 ],
    [ 65.17, 32.19 ],
    [ 64.67, 33.15 ]
  ]
  for (md = 0; md < JotunheimIceWyvernNests.length; md++) {
    L.marker([-JotunheimIceWyvernNests[md][0], -100+JotunheimIceWyvernNests[md][1]], { title: 'Jotunheim Ice Wyvern Nest', icon: Icons.WyvernNestIcon}).addTo(map).bindPopup('Jotunheim Ice Wyvern Nest <br />' + JotunheimIceWyvernNests[md][0].toFixed(1) + ' / ' + JotunheimIceWyvernNests[md][1].toFixed(1))
  }

  // Vanaheim

  var VanaheimObelisks = [ 14.3, 79.3 , "Green Obelisk" ]
  L.marker([-VanaheimObelisks[0], -100+VanaheimObelisks[1]], { title: 'Vanaheim Green Obelisk', icon: Icons.GreenObeliskIcon}).addTo(map).bindPopup('Vanaheim Green Obelisk <br />' + VanaheimObelisks[0].toFixed(1) + ' / ' + VanaheimObelisks[1].toFixed(1))

  var VanaheimWyvernNests = [
    [ 0.73,  68.74 ],
    [ 3.06,  70.12 ],
    [ 4.12,  67.93 ],
    [ 6.35,  64.94 ],
    [ 11.05, 65.8 ]
  ]
  for (md = 0; md < VanaheimWyvernNests.length; md++) {
    L.marker([-VanaheimWyvernNests[md][0], -100+VanaheimWyvernNests[md][1]], { title: 'Vanaheim Wyvern Nest', icon: Icons.WyvernNestIcon}).addTo(map).bindPopup('Vanaheim Wyvern Nest <br />' + VanaheimWyvernNests[md][0].toFixed(1) + ' / ' + VanaheimWyvernNests[md][1].toFixed(1))
  }
}