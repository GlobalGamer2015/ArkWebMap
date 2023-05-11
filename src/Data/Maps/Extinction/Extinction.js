import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function Extinction(map) {
  L.imageOverlay('/Maps/Extinction.jpg', [[-100,0], [0,100]]).addTo(map);
  
  L.marker([-21.80, 78.20], { title: 'Blue Obelisk', icon: Icons.BlueObeliskIcon}).addTo(map).bindPopup('Blue Obelisk <br /> 21.80 / 78.20');
  L.marker([-50.60, 29.70], { title: 'Green Obelisk', icon: Icons.GreenObeliskIcon}).addTo(map).bindPopup('Green Obelisk <br /> 50.60 / 29.70');
  L.marker([-77.60, 76.90], { title: 'Red Obelisk', icon: Icons.RedObeliskIcon}).addTo(map).bindPopup('Red Obelisk <br /> 77.60 / 76.90');
  L.marker([-25.40, 22.50], { title: 'Blue Obelisk', icon: Icons.BlueObeliskIcon}).addTo(map).bindPopup('Blue Obelisk <br /> 25.40 / 22.50');
  L.marker([-3.40, 49.20], { title: 'King Titan Terminal', icon: Icons.TerminalIcon}).addTo(map).bindPopup('King Titan Terminal <br /> 3.40 / 49.20');
  L.marker([-15.90, 50.50], { title: 'Forest Titan Terminal', icon: Icons.TerminalIcon}).addTo(map).bindPopup('Forest Titan Terminal <br /> 15.90 / 50.50');
  L.marker([-6.70, 85.80], { title: 'Ice Titan Terminal', icon: Icons.TerminalIcon}).addTo(map).bindPopup('Ice Titan Terminal <br /> 6.70 / 85.80');
  L.marker([-97.10, 90.10], { title: 'Desert Titan Terminal', icon: Icons.TerminalIcon}).addTo(map).bindPopup('Desert Titan Terminal <br /> 97.10 / 90.10');

  var Artifacts = [
    [ 13.50, 49.20, 'Artifact of Growth' ],[ 13.50, 84.00, 'Artifact of the Void' ],[ 93.90, 88.00, 'Artifact of Chaos' ]
  ]
  for (md = 0; md < Artifacts.length; md++) {
    L.marker([-Artifacts[md][0], Artifacts[md][1]], { title: Artifacts[md][2], icon: Icons.ArtifactIcon}).addTo(map).bindPopup(Artifacts[md][2] +' <br />' + Artifacts[md][0].toFixed(1) + ' / ' + Artifacts[md][1].toFixed(1))
  }

  var CaveEntrances = [
    [ 11.80, 39.30, 'Forest Cave via The UnderForest' ],[ 30.70, 23.60, 'The UnderForest' ],[ 21.40, 22.00, 'The UnderForest' ],
    [ 20.30, 62.20, 'Ice Cave' ],[ 87.40, 70.40, 'Desert Cave' ]
  ]
  for (md = 0; md < CaveEntrances.length; md++) {
    L.marker([-CaveEntrances[md][0], CaveEntrances[md][1]], { title: 'Cave entrance', icon: Icons.CaveEntranceIcon}).addTo(map).bindPopup('Cave entrance <br />' + CaveEntrances[md][0].toFixed(1) + ' / ' + CaveEntrances[md][1].toFixed(1))
  }

  var ElementVeins = [
    [ 54.00, 84.00 ],[ 62.00, 69.00 ]
  ]
  for (md = 0; md < ElementVeins.length; md++) {
    L.marker([-ElementVeins[md][0], ElementVeins[md][1]], { title: 'Element Vein', icon: Icons.ElementVeinIcon}).addTo(map).bindPopup('Element Vein <br />' + ElementVeins[md][0].toFixed(1) + ' / ' + ElementVeins[md][1].toFixed(1))
  }

  var OrbitalSupplyDrops = [
    [ 17.00, 13.00 ],[ 18.00, 35.00 ],[ 19.00, 28.00 ],[ 22.00, 55.00 ],[ 26.00, 48.00 ],[ 29.00, 40.00 ],[ 29.00, 58.00 ],[ 34.00, 37.00 ],[ 34.00, 40.00 ],[ 35.00, 14.00 ],
    [ 35.00, 47.00 ],[ 36.00, 57.00 ],[ 39.00, 32.00 ],[ 39.00, 62.00 ],[ 40.00, 27.00 ],[ 43.00, 10.00 ],[ 43.00, 13.00 ],[ 43.00, 77.00 ],[ 46.00, 85.00 ],[ 51.00, 19.00 ],
    [ 54.00, 15.00 ],[ 58.00, 90.00 ],[ 60.00, 71.00 ],[ 65.00, 59.00 ],[ 65.00, 37.00 ],[ 66.00, 49.00 ],[ 68.00, 31.00 ],[ 68.00, 54.00 ],[ 70.00, 18.00 ],[ 71.00, 38.00 ],
    [ 72.00, 43.00 ],[ 78.00, 57.00 ],[ 82.00, 40.00 ],[ 85.00, 28.00]
  ]
  for (md = 0; md < OrbitalSupplyDrops.length; md++) {
    L.marker([-OrbitalSupplyDrops[md][0], OrbitalSupplyDrops[md][1]], { title: 'Orbital Supply Drop', icon: Icons.OrbitalSupplyDropIcon}).addTo(map).bindPopup('Orbital Supply Drop <br />' + OrbitalSupplyDrops[md][0].toFixed(1) + ' / ' + OrbitalSupplyDrops[md][1].toFixed(1))
  }

  var CityTerminals = [
    [ 17.20, 87.80 ],[ 18.80, 67.30 ],[ 31.70, 80.50 ],[ 41.70, 90.70 ],[ 30.00, 23.90 ],[ 62.80, 16.40 ],[ 70.80, 42.20 ],[ 60.50, 90.90 ],[ 68.90, 84.70 ],[ 70.90, 66.10 ],
    [ 89.40, 68.50 ],[ 81.30, 90.30 ],[ 49.90, 70.70 ],[ 51.20, 63.70 ],[ 47.70, 58.20 ],[ 44.50, 55.20 ],[ 47.30, 52.90 ],[ 47.50, 49.90 ],[ 52.20, 48.10 ],[ 51.80, 48.10 ],
    [ 46.80, 46.70 ],[ 46.10, 47.15 ],[ 45.60, 47.10 ],[ 48.00, 42.20 ],[ 46.80, 39.50 ],[ 50.60, 38.90 ],[ 58.20, 36.30 ],[ 44.40, 33.50 ],[ 53.20, 26.40 ]
  ]
  for (md = 0; md < CityTerminals.length; md++) {
    L.marker([-CityTerminals[md][0], CityTerminals[md][1]], { title: 'City Terminal', icon: Icons.CityTerminalIcon}).addTo(map).bindPopup('City Terminal <br />' + CityTerminals[md][0].toFixed(1) + ' / ' + CityTerminals[md][1].toFixed(1))
  }

  var Dossiers = [
    [ 56.00, 89.30, 'Dossier: Corrupted Dinos' ],[ 25.20, 14.60, 'Dossier: Gacha' ],[ 22.10, 51.20, 'Dossier: Gasbags' ],
    [ 22.40, 74.30, 'Dossier: Managarmr' ],[ 11.90, 78.00, 'Dossier: Snow Owl' ],[ 87.80, 73.60, 'Dossier: Velonasaur' ],
    [ 52.10, 70.00, 'Manual: Enforcer FM' ],[ 1.60, 42.00, 'Manual: MegaMek TM' ],[ 52.90, 23.40, 'Manual: Mek TM' ],
    [ 57.10, 49.10, 'Manual: Scout FM' ]
  ]
  for (md = 0; md < Dossiers.length; md++) {
    L.marker([-Dossiers[md][0], Dossiers[md][1]], { title: Dossiers[md][2], icon: Icons.DossierIcon}).addTo(map).bindPopup(Dossiers[md][2] + ' <br />' + Dossiers[md][0].toFixed(1) + ' / ' + Dossiers[md][1].toFixed(1))
  }

  var PointsOfInterests = [
    [ 56.80, 48.80, 'Camp Omega' ],[ 54.20, 33.30, 'Santiagos Grave' ],[ 13.20, 45.10, 'Tomb of Ascension' ]
  ]
  for (md = 0; md < PointsOfInterests.length; md++) {
    L.marker([-PointsOfInterests[md][0], PointsOfInterests[md][1]], { title: 'Point Of Interest: ' + PointsOfInterests[md][2], icon: Icons.PointOfInterestIcon}).addTo(map).bindPopup(PointsOfInterests[md][2] + ' <br />' + PointsOfInterests[md][0].toFixed(1) + ' / ' + PointsOfInterests[md][1].toFixed(1))
  }

  var CaveLootCrates = [
    [ 6.20, 46.40 ],[ 8.50, 43.30 ],[ 9.30, 47.10 ],[ 9.60, 49.10 ],[ 10.90, 85.00 ],[ 12.60, 47.70 ],[ 12.70, 46.30 ],[ 13.50, 50.00 ],[ 14.80, 82.20 ],[ 15.30, 91.40 ],
    [ 19.20, 90.60 ],[ 19.90, 88.30 ],[ 21.40, 79.60 ],[ 21.80, 87.80 ],[ 87.50, 88.00 ],[ 90.20, 87.00 ],[ 93.00, 79.80 ],[ 94.20, 85.30 ],[ 94.70, 81.00 ],[ 95.10, 79.30 ],
    [ 95.40, 90.20 ]
  ]
  for (md = 0; md < CaveLootCrates.length; md++) {
    L.marker([-CaveLootCrates[md][0], CaveLootCrates[md][1]], { title: 'Cave Loot Crate', icon: Icons.CaveLootCrateIcon}).addTo(map).bindPopup('Cave Loot Crate <br />' + CaveLootCrates[md][0].toFixed(1) + ' / ' + CaveLootCrates[md][1].toFixed(1))
  }

  var Glitches = [
    [ 46.40, 14.62, 'Genesis 2 Chronicles #16' ],[ 49.04, 17.54, 'Genesis 2 Chronicles #16' ],[ 46.76, 11.35, 'Genesis 2 Chronicles #16' ],
    [ 27.80, 16.00, 'HLN-A Discovery #13' ],[ 13.32, 57.44, 'HLN-A Discovery #14' ],[ 84.84, 16.05, 'HLN-A Discovery #12' ],
    [ 53.36, 76.54, 'HLN-A Discovery #15' ],[ 48.64, 14.00, 'Genesis 2 Chronicles #16' ],[ 49.47, 15.71, 'Genesis 2 Chronicles #16' ],
    [ 46.54, 16.48, 'Genesis 2 Chronicles #16' ],[ 47.93, 17.94, 'Genesis 2 Chronicles #16' ]
  ]
  for (md = 0; md < Glitches.length; md++) {
    L.marker([-Glitches[md][0], Glitches[md][1]], { title: Glitches[md][2], icon: Icons.GlitchIcon}).addTo(map).bindPopup(Glitches[md][2] +' <br />' + Glitches[md][0].toFixed(1) + ' / ' + Glitches[md][1].toFixed(1))
  }

  var Notes = [
    [ 90.30, 68.80, 'Note: Diana Log #1' ],[ 78.10, 79.90, 'Note: Diana Log #2' ],[ 66.60, 80.30, 'Note: Diana Log #3' ],
    [ 49.20, 67.90, 'Note: Diana Log #4' ],[ 46.40, 61.40, 'Note: Diana Log #5' ],[ 45.10, 53.10, 'Note: Diana Log #6' ],
    [ 54.90, 32.80, 'Note: Diana Log #7' ],[ 41.40, 26.80, 'Note: Diana Log #8' ],[ 28.20, 20.70, 'Note: Diana Log #9' ],
    [ 25.00, 23.00, 'Note: Diana Log #10' ],[ 31.20, 23.60, 'Note: Diana Log #11' ],[ 30.40, 37.60, 'Note: Diana Log #12' ],
    [ 23.90, 44.50, 'Note: Diana Log #13' ],[ 30.80, 47.30, 'Note: Diana Log #14' ],[ 35.70, 62.20, 'Note: Diana Log #15' ],
    [ 43.90, 72.00, 'Note: Diana Log #16' ],[ 38.40, 88.90, 'Note: Diana Log #17' ],[ 33.70, 82.10, 'Note: Diana Log #18' ],
    [ 21.20, 62.90, 'Note: Diana Log #19' ],[ 16.30, 51.60, 'Note: Diana Log #20' ],[ 22.20, 38.70, 'Note: Diana Log #21' ],
    [ 10.50, 29.50, 'Note: Diana Log #22' ],[ 14.10, 41.00, 'Note: Diana Log #23' ],[ 7.90, 41.70, 'Note: Diana Log #24' ],
    [ 1.00, 43.50, 'Note: Diana Log #25' ],[ -2.40, 55.80, 'Note: Diana Log #26' ],[ 5.60, 57.80, 'Note: Diana Log #27' ],
    [ 1.90, 38.10, 'Note: Diana Log #28' ],[ 8.40, 44.60, 'Note: Diana Log #29' ],[ 3.10, 48.80, 'Note: Diana Log #30' ],
    [ 50.90, 29.90, 'Note: Helena Note #1' ],[ 56.90, 36.40, 'Note: Helena Note #2' ],[ 58.50, 48.70, 'Note: Helena Note #3' ],
    [ 53.20, 55.30, 'Note: Helena Note #4' ],[ 63.10, 42.30, 'Note: Helena Note #5' ],[ 66.60, 55.60, 'Note: Helena Note #6' ],
    [ 61.40, 69.00, 'Note: Helena Note #7' ],[ 55.00, 79.30, 'Note: Helena Note #8' ],[ 47.80, 75.20, 'Note: Helena Note #9' ],
    [ 31.20, 59.60, 'Note: Helena Note #10' ],[ 27.20, 53.70, 'Note: Helena Note #11' ],[ 19.70, 60.80, 'Note: Helena Note #12' ],
    [ 25.00, 46.00, 'Note: Helena Note #13' ],[ 41.40, 43.70, 'Note: Helena Note #14' ],[ 43.70, 33.50, 'Note: Helena Note #15' ],
    [ 50.80, 21.50, 'Note: Helena Note #16' ],[ 40.90, 15.60, 'Note: Helena Note #17' ],[ 32.90, 24.20, 'Note: Helena Note #18' ],
    [ 19.30, 17.70, 'Note: Helena Note #19' ],[ 27.80, 12.60, 'Note: Helena Note #20' ],[ 11.30, 8.60, 'Note: Helena Note #21' ],
    [ 15.30, 11.80, 'Note: Helena Note #22' ],[ 14.80, 18.20, 'Note: Helena Note #23' ],[ 16.80, 23.80, 'Note: Helena Note #24' ],
    [ 8.30, 29.90, 'Note: Helena Note #25' ],[ 11.90, 39.10, 'Note: Helena Note #26' ],[ 8.60, 43.30, 'Note: Helena Note #27' ],
    [ 7.10, 48.30, 'Note: Helena Note #28' ],[ 10.50, 47.60, 'Note: Helena Note #29' ],[ 12.60, 44.90, 'Note: Helena Note #30' ],
    [ 26.80, 53.00, 'Note: Meiyin Note #1' ],[ 38.50, 29.50, 'Note: Meiyin Note #2' ],[ 47.20, 22.50, 'Note: Meiyin Note #3' ],
    [ 47.80, 12.20, 'Note: Meiyin Note #4' ],[ 73.20, 42.60, 'Note: Meiyin Note #5' ],[ 70.60, 53.70, 'Note: Meiyin Note #6' ],
    [ 58.70, 73.50, 'Note: Meiyin Note #7' ],[ 43.10, 90.80, 'Note: Meiyin Note #8' ],[ 31.90, 81.70, 'Note: Meiyin Note #9' ],
    [ 26.50, 71.10, 'Note: Meiyin Note #10' ],[ 19.60, 77.80, 'Note: Meiyin Note #11' ],[ 17.20, 86.30, 'Note: Meiyin Note #12' ],
    [ 10.10, 72.30, 'Note: Meiyin Note #13' ],[ 22.20, 65.80, 'Note: Meiyin Note #14' ],[ 20.60, 61.70, 'Note: Meiyin Note #15' ],
    [ 18.30, 78.50, 'Note: Meiyin Note #16' ],[ 10.70, 64.50, 'Note: Meiyin Note #17' ],[ 27.30, 61.00, 'Note: Meiyin Note #18' ],
    [ 32.10, 30.60, 'Note: Meiyin Note #19' ],[ 31.00, 27.00, 'Note: Meiyin Note #20' ],[ 27.60, 22.20, 'Note: Meiyin Note #21' ],
    [ 20.60, 13.10, 'Note: Meiyin Note #22' ],[ 29.50, 15.80, 'Note: Meiyin Note #23' ],[ 20.50, 29.40, 'Note: Meiyin Note #24' ],
    [ 10.50, 32.60, 'Note: Meiyin Note #25' ],[ 8.70, 47.20, 'Note: Meiyin Note #26' ],[ 13.30, 45.50, 'Note: Meiyin Note #27' ],
    [ 18.40, 15.30, 'Note: Meiyin Note #28' ],[ 13.20, 28.40, 'Note: Meiyin Note #29' ],[ 15.60, 17.50, 'Note: Meiyin Note #30' ],
    [ 49.20, 71.70, 'Note: The One Who Waits #1' ],[ 46.70, 55.30, 'Note: The One Who Waits #2' ],[ 56.10, 56.40, 'Note: The One Who Waits #3' ],
    [ 55.30, 49.70, 'Note: The One Who Waits #4' ],[ 48.70, 42.60, 'Note: The One Who Waits #5' ],[ 46.40, 35.00, 'Note: The One Who Waits #6' ],
    [ 41.40, 43.80, 'Note: The One Who Waits #7' ],[ 9.70, 47.00, 'Note: The One Who Waits #8' ],[ 12.40, 48.80, 'Note: The One Who Waits #9' ],
    [ 16.10, 51.00, 'Note: The One Who Waits #10' ],[ 23.50, 18.70, 'Note: The One Who Waits #11' ],[ 21.10, 86.60, 'Note: The One Who Waits #12' ],
    [ 6.80, 85.10, 'Note: The One Who Waits #13' ],[ 94.10, 83.80, 'Note: The One Who Waits #14' ],[ 97.10, 89.90, 'Note: The One Who Waits #15' ],
    [ 66.10, 17.50, 'Note: The One Who Waits #16' ],[ 46.60, 10.60, 'Note: The One Who Waits #17' ],[ 38.90, 13.00, 'Note: The One Who Waits #18' ],
    [ 19.20, 13.20, 'Note: The One Who Waits #19' ],[ 22.90, 22.50, 'Note: The One Who Waits #20' ],[ 17.50, 79.10, 'Note: The One Who Waits #21' ],
    [ 61.10, 89.60, 'Note: The One Who Waits #22' ],[ 62.80, 43.80, 'Note: The One Who Waits #23' ],[ 46.90, 62.00, 'Note: The One Who Waits #24' ],
    [ 44.00, 52.70, 'Note: The One Who Waits #25' ],[ 47.40, 48.70, 'Note: The One Who Waits #26' ],[ 45.90, 35.90, 'Note: The One Who Waits #27' ],
    [ 54.30, 30.60, 'Note: The One Who Waits #28' ],[ 50.60, 40.60, 'Note: The One Who Waits #29' ],[ 49.80, 65.70, 'Note: The One Who Waits #30' ],
    [ 59.00, 68.40, 'Note: Santiagos Log #1' ],[ 59.40, 48.40, 'Note: Santiagos Log #2' ],[ 57.30, 27.00, 'Note: Santiagos Log #3' ],
    [ 56.00, 50.20, 'Note: Santiagos Log #4' ],[ 58.60, 53.70, 'Note: Santiagos Log #5' ],[ 56.50, 36.20, 'Note: Santiagos Log #6' ],
    [ 59.30, 40.70, 'Note: Santiagos Log #7' ],[ 52.80, 42.90, 'Note: Santiagos Log #8' ],[ 56.50, 43.80, 'Note: Santiagos Log #9' ],
    [ 54.50, 53.70, 'Note: Santiagos Log #10' ],[ 53.90, 61.00, 'Note: Santiagos Log #11' ],[ 51.60, 74.70, 'Note: Santiagos Log #12' ],
    [ 59.70, 69.60, 'Note: Santiagos Log #13' ],[ 65.80, 62.50, 'Note: Santiagos Log #14' ],[ 75.70, 50.20, 'Note: Santiagos Log #15' ],
    [ 83.90, 37.50, 'Note: Santiagos Log #16' ],[ 71.80, 31.60, 'Note: Santiagos Log #17' ],[ 75.70, 19.20, 'Note: Santiagos Log #18' ],
    [ 58.80, 32.70, 'Note: Santiagos Log #19' ],[ 49.00, 31.70, 'Note: Santiagos Log #20' ],[ 45.20, 35.90, 'Note: Santiagos Log #21' ],
    [ 42.70, 42.30, 'Note: Santiagos Log #22' ],[ 50.60, 35.30, 'Note: Santiagos Log #23' ],[ 43.80, 39.60, 'Note: Santiagos Log #24' ],
    [ 50.60, 62.60, 'Note: Santiagos Log #25' ],[ 47.00, 60.70, 'Note: Santiagos Log #26' ],[ 47.20, 57.50, 'Note: Santiagos Log #27' ],
    [ 36.40, 50.80, 'Note: Santiagos Log #28' ],[ 40.60, 39.00, 'Note: Santiagos Log #29' ],[ 49.50, 33.20, 'Note: Santiagos Log #30' ],
    [ 19.88, 18.84, 'Genesis 2 Chronicles #17' ],[ 49.46, 57.55, 'Genesis 2 Chronicles #18' ],[ 80.59, 90.63, 'Genesis 2 Chronicles #19' ],
    [ 13.90, 83.57, 'Genesis 2 Chronicles #20' ]
  ]
  for (md = 0; md < Notes.length; md++) {
    L.marker([-Notes[md][0], Notes[md][1]], { title: Notes[md][2], icon: Icons.NotesIcon}).addTo(map).bindPopup(Notes[md][2] +' <br />' + Notes[md][0].toFixed(1) + ' / ' + Notes[md][1].toFixed(1))
  }
}