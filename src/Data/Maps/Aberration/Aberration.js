import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function Aberration(map) {
  L.imageOverlay('/Maps/Aberration.jpg', [[100,0], [200,100]]).addTo(map);

  L.marker([200-18.90, 16.10], { title: 'Blue Obelisk', icon: Icons.BlueObeliskIcon}).addTo(map).bindPopup('Blue Obelisk <br /> 18.90 / 16.10');
  L.marker([200-22.50, 77.70], { title: 'Green Obelisk', icon: Icons.GreenObeliskIcon}).addTo(map).bindPopup('Green Obelisk <br /> 22.50 / 77.70');
  L.marker([200-80.80, 20.30], { title: 'Red Obelisk', icon: Icons.RedObeliskIcon}).addTo(map).bindPopup('Red Obelisk <br /> 80.80 / 20.30');
  L.marker([200-42.70, 36.70], { title: 'Rockwell Terminal', icon: Icons.RockwellPrimeTerminalIcon}).addTo(map).bindPopup('Rockwell Terminal <br /> 42.70 / 36.70');

  var Notes = [
    [ 47.60, 31.90, 'Note: Diana Log #1' ],[ 29.70, 52.60, 'Note: Diana Log #2' ],[ 33.80, 47.30, 'Note: Diana Log #3' ],[ 37.70, 46.00, 'Note: Diana Log #4' ],
    [ 30.50, 45.70, 'Note: Diana Log #5' ],[ 34.00, 38.90, 'Note: Diana Log #6' ],[ 38.30, 37.00, 'Note: Diana Log #7' ],[ 38.20, 29.70, 'Note: Diana Log #8' ],
    [ 48.30, 23.30, 'Note: Diana Log #9' ],[ 18.70, 69.10, 'Note: Diana Log #10' ],[ 22.30, 78.40, 'Note: Diana Log #11' ],[ 58.30, 61.40, 'Note: Diana Log #12' ],
    [ 52.90, 68.50, 'Note: Diana Log #13' ],[ 47.40, 72.40, 'Note: Diana Log #14' ],[ 52.90, 76.40, 'Note: Diana Log #15' ],[ 70.40, 75.30, 'Note: Diana Log #16' ],
    [ 84.60, 77.50, 'Note: Diana Log #17' ],[ 70.60, 73.70, 'Note: Diana Log #18' ],[ 71.00, 58.90, 'Note: Diana Log #19' ],[ 60.50, 47.60, 'Note: Diana Log #20' ],
    [ 44.10, 25.30, 'Note: Grad Journal Boris #1' ],[ 55.70, 52.40, 'Note: Grad Journal Boris #2' ],[ 63.80, 48.90, 'Note: Grad Journal Boris #3' ],
    [ 55.70, 51.40, 'Note: Grad Journal Boris #4' ],[ 52.70, 40.50, 'Note: Grad Journal Boris #5' ],[ 46.20, 35.30, 'Note: Grad Journal Emilia #1' ],
    [ 39.10, 37.40, 'Note: Grad Journal Emilia #2' ],[ 56.20, 38.40, 'Note: Grad Journal Emilia #3' ],[ 48.70, 63.70, 'Note: Grad Journal Emilia #4' ],
    [ 24.30, 65.50, 'Note: Grad Journal Emilia #5' ],[ 75.30, 73.50, 'Note: Grad Journal Imamu #1' ],[ 68.80, 72.60, 'Note: Grad Journal Imamu #2' ],
    [ 72.70, 62.90, 'Note: Grad Journal Imamu #3' ],[ 71.90, 55.20, 'Note: Grad Journal Imamu #4' ],[ 46.50, 48.70, 'Note: Grad Journal Imamu #5' ],
    [ 38.50, 51.60, 'Note: Grad Journal Rusty #1' ],[ 34.10, 50.50, 'Note: Grad Journal Rusty #2' ],[ 31.00, 47.90, 'Note: Grad Journal Rusty #3' ],
    [ 37.00, 41.20, 'Note: Grad Journal Rusty #4' ],[ 45.50, 38.10, 'Note: Grad Journal Rusty #5' ],[ 45.40, 40.50, 'Note: Grad Journal Skye #1' ],
    [ 58.50, 43.80, 'Note: Grad Journal Trent #1' ],[ 70.90, 49.10, 'Note: Grad Journal Trent #2' ],[ 69.70, 55.60, 'Note: Grad Journal Trent #3' ],
    [ 71.80, 61.60, 'Note: Grad Journal Trent #4' ],[ 77.10, 68.20, 'Note: Grad Journal Trent #5' ],[ 44.50, 20.20, 'Note: Helena Note #1' ],
    [ 22.30, 49.30, 'Note: Helena Note #2' ],[ 25.80, 48.90, 'Note: Helena Note #3' ],[ 26.80, 62.60, 'Note: Helena Note #4' ],[ 28.50, 45.20, 'Note: Helena Note #5' ],
    [ 27.50, 39.90, 'Note: Helena Note #6' ],[ 32.20, 40.30, 'Note: Helena Note #7' ],[ 27.90, 54.40, 'Note: Helena Note #8' ],[ 31.30, 56.30, 'Note: Helena Note #9' ],
    [ 34.50, 61.30, 'Note: Helena Note #10' ],[ 55.60, 23.50, 'Note: Helena Note #11' ],[ 37.00, 70.20, 'Note: Helena Note #12' ],[ 16.60, 23.60, 'Note: Helena Note #13' ],
    [ 18.90, 15.30, 'Note: Helena Note #14' ],[ 16.80, 19.50, 'Note: Helena Note #15' ],[ 50.30, 72.20, 'Note: Helena Note #16' ],[ 54.40, 74.20, 'Note: Helena Note #17' ],
    [ 57.40, 69.50, 'Note: Helena Note #18' ],[ 57.90, 61.10, 'Note: Helena Note #19' ],[ 57.40, 51.60, 'Note: Helena Note #20' ],[ 63.40, 51.90, 'Note: Helena Note #21' ],
    [ 63.70, 47.30, 'Note: Helena Note #22' ],[ 67.30, 45.40, 'Note: Helena Note #23' ],[ 68.00, 37.20, 'Note: Helena Note #24' ],[ 70.00, 31.30, 'Note: Helena Note #25' ],
    [ 69.70, 29.20, 'Note: Helena Note #26' ],[ 76.80, 30.80, 'Note: Helena Note #27' ],[ 82.20, 40.60, 'Note: Helena Note #28' ],[ 81.00, 45.70, 'Note: Helena Note #29' ],
    [ 87.20, 46.60, 'Note: Helena Note #30' ],[ 44.30, 14.80, 'Note: Meiyin Note #1' ],[ 67.90, 12.40, 'Note: Meiyin Note #2' ],[ 32.40, 34.40, 'Note: Meiyin Note #3' ],
    [ 38.30, 30.90, 'Note: Meiyin Note #4' ],[ 40.50, 19.90, 'Note: Meiyin Note #5' ],[ 50.00, 26.00, 'Note: Meiyin Note #6' ],[ 45.20, 31.10, 'Note: Meiyin Note #7' ],
    [ 44.30, 33.30, 'Note: Meiyin Note #8' ],[ 42.10, 37.20, 'Note: Meiyin Note #9' ],[ 41.60, 49.30, 'Note: Meiyin Note #10' ],[ 48.10, 38.50, 'Note: Meiyin Note #11' ],
    [ 53.00, 36.40, 'Note: Meiyin Note #12' ],[ 50.40, 42.40, 'Note: Meiyin Note #13' ],[ 43.70, 52.40, 'Note: Meiyin Note #14' ],[ 52.20, 53.60, 'Note: Meiyin Note #15' ],
    [ 48.40, 58.30, 'Note: Meiyin Note #16' ],[ 48.20, 62.70, 'Note: Meiyin Note #17' ],[ 47.60, 69.40, 'Note: Meiyin Note #18' ],[ 51.40, 61.60, 'Note: Meiyin Note #19' ],
    [ 58.40, 55.90, 'Note: Meiyin Note #20' ],[ 62.40, 53.40, 'Note: Meiyin Note #21' ],[ 64.40, 59.90, 'Note: Meiyin Note #22' ],[ 64.00, 65.20, 'Note: Meiyin Note #23' ],
    [ 69.80, 66.50, 'Note: Meiyin Note #24' ],[ 73.20, 58.70, 'Note: Meiyin Note #25' ],[ 79.40, 58.60, 'Note: Meiyin Note #26' ],[ 83.50, 60.20, 'Note: Meiyin Note #27' ],
    [ 86.50, 63.60, 'Note: Meiyin Note #28' ],[ 88.60, 69.70, 'Note: Meiyin Note #29' ],[ 88.20, 74.70, 'Note: Meiyin Note #30' ],[ 44.60, 24.10, 'Note: Rockwell Record #1' ],
    [ 22.40, 52.20, 'Note: Rockwell Record #2' ],[ 29.50, 53.50, 'Note: Rockwell Record #3' ],[ 38.40, 44.60, 'Note: Rockwell Record #4' ],
    [ 41.30, 33.40, 'Note: Rockwell Record #5' ],[ 24.20, 51.70, 'Note: Rockwell Record #6' ],[ 29.00, 56.80, 'Note: Rockwell Record #7' ],
    [ 34.40, 53.90, 'Note: Rockwell Record #8' ],[ 39.70, 46.80, 'Note: Rockwell Record #9' ],[ 44.50, 33.90, 'Note: Rockwell Record #10' ],
    [ 50.80, 40.00, 'Note: Rockwell Record #11' ],[ 49.10, 48.90, 'Note: Rockwell Record #12' ],[ 44.40, 56.90, 'Note: Rockwell Record #13' ],
    [ 44.60, 59.60, 'Note: Rockwell Record #14' ],[ 47.80, 56.90, 'Note: Rockwell Record #15' ],[ 48.70, 63.20, 'Note: Rockwell Record #16' ],
    [ 52.80, 65.20, 'Note: Rockwell Record #17' ],[ 55.70, 62.30, 'Note: Rockwell Record #18' ],[ 54.90, 56.40, 'Note: Rockwell Record #19' ],
    [ 60.40, 55.40, 'Note: Rockwell Record #20' ],[ 64.00, 51.10, 'Note: Rockwell Record #21' ],[ 61.80, 48.00, 'Note: Rockwell Record #22' ],
    [ 61.60, 39.60, 'Note: Rockwell Record #23' ],[ 70.20, 39.40, 'Note: Rockwell Record #24' ],[ 70.20, 45.40, 'Note: Rockwell Record #25' ],
    [ 67.60, 48.60, 'Note: Rockwell Record #26' ],[ 70.00, 53.10, 'Note: Rockwell Record #27' ],[ 62.10, 52.50, 'Note: Rockwell Record #28' ],
    [ 53.50, 46.00, 'Note: Rockwell Record #29' ],[ 53.70, 53.30, 'Note: Rockwell Record #30' ],[ 82.70, 10.70, 'Note: ??? #3 in Rockwell Arena' ],
    [ 29.40, 58.50, 'Note: ??? #6' ],[ 47.60, 21.80, 'Note: ??? #9' ],[ 69.10, 46.40, 'Note: ??? #12' ],[ 85.00, 69.80, 'Note: ??? #15' ],
    [ 43.84, 12.48, 'Genesis 2 Chronicles #15' ]
  ]
  for (md = 0; md < Notes.length; md++) {
    L.marker([200-Notes[md][0], Notes[md][1]], { title: Notes[md][2], icon: Icons.NotesIcon}).addTo(map).bindPopup(Notes[md][2] +' <br />' + Notes[md][0].toFixed(1) + ' / ' + Notes[md][1].toFixed(1))
  }

  var CaveLootCrates = [
    [ 38.90, 78.50 ],[ 40.00, 80.40 ],[ 43.40, 79.90 ],[ 45.50, 80.50 ],[ 48.40, 53.50 ],[ 48.50, 46.50 ],[ 49.20, 48.80 ],[ 50.90, 52.80 ],[ 51.90, 79.70 ],[ 52.30, 53.00 ],
    [ 53.70, 78.90 ],[ 53.80, 65.70 ],[ 54.00, 77.80 ],[ 54.70, 74.70 ],[ 54.80, 65.20 ],[ 54.90, 52.30 ],[ 55.00, 52.10 ],[ 55.10, 63.80 ],[ 55.30, 58.40 ],[ 56.30, 68.90 ],
    [ 58.10, 74.10 ],[ 59.00, 47.40 ],[ 59.80, 66.00 ],[ 62.00, 52.10 ],[ 62.80, 29.80 ],[ 64.60, 61.50 ],[ 65.10, 58.10 ],[ 65.10, 68.70 ],[ 65.70, 52.70 ],[ 66.30, 75.90 ],
    [ 66.80, 61.00 ],[ 68.30, 56.00 ],[ 68.30, 67.00 ],[ 68.50, 33.10 ],[ 68.60, 37.20 ],[ 69.90, 51.40 ],[ 70.00, 25.60 ],[ 70.20, 45.90 ],[ 70.30, 54.80 ],[ 72.40, 49.20 ],
    [ 73.10, 57.90 ],[ 74.00, 60.40 ],[ 10.80, 50.90 ],[ 11.20, 48.00 ],[ 11.40, 45.70 ],[ 14.80, 33.70 ],[ 14.90, 36.70 ],[ 15.50, 41.80 ],[ 15.60, 48.40 ],[ 16.10, 41.90 ],
    [ 16.30, 46.10 ],[ 16.70, 33.40 ],[ 16.90, 46.70 ],[ 17.60, 37.10 ],[ 18.80, 38.70 ],[ 19.10, 36.70 ],[ 21.10, 51.60 ],[ 21.50, 33.00 ],[ 22.10, 44.40 ],[ 23.20, 38.00 ],
    [ 23.30, 40.00 ],[ 24.30, 35.70 ],[ 77.40, 44.50 ],[ 78.70, 39.00 ],[ 79.90, 38.30 ],[ 79.90, 41.60 ],[ 79.90, 46.60 ],[ 80.40, 43.10 ],[ 80.80, 57.80 ],[ 80.90, 58.00 ],
    [ 83.30, 57.60 ],[ 86.80, 60.30 ],[ 26.30, 33.90 ],[ 27.50, 26.90 ],[ 27.80, 28.40 ],[ 28.10, 43.20 ],[ 30.20, 30.60 ],[ 31.50, 38.80 ],[ 31.70, 32.40 ],[ 32.00, 40.50 ],
    [ 32.20, 36.50 ],[ 34.00, 35.00 ],[ 34.30, 35.50 ],[ 37.50, 40.70 ],[ 70.10, 63.70 ],[ 74.90, 80.50 ],[ 76.10, 68.00 ],[ 76.40, 65.50 ],[ 80.20, 73.50 ],[ 83.70, 76.40 ],
    [ 84.90, 72.50 ],[ 85.70, 79.30 ],[ 88.40, 70.10 ],[ 89.70, 65.80 ],[ 22.50, 53.10 ],[ 24.20, 52.10 ],[ 24.40, 57.60 ],[ 25.60, 50.70 ],[ 25.60, 58.90 ],[ 25.70, 59.90 ],
    [ 25.80, 57.40 ],[ 26.00, 49.30 ],[ 26.10, 57.20 ],[ 26.40, 60.50 ],[ 26.50, 63.30 ],[ 26.60, 62.60 ],[ 26.90, 57.80 ],[ 27.00, 53.10 ],[ 27.70, 62.80 ],[ 28.50, 49.60 ],
    [ 29.20, 49.00 ],[ 29.50, 53.20 ],[ 30.50, 52.10 ],[ 31.30, 47.00 ],[ 32.50, 59.10 ],[ 34.20, 59.20 ],[ 34.50, 70.30 ],[ 34.70, 45.10 ],[ 34.80, 73.20 ],[ 35.20, 46.20 ],
    [ 35.20, 55.80 ],[ 35.20, 74.10 ],[ 35.40, 57.40 ],[ 36.20, 73.00 ],[ 36.30, 29.20 ],[ 36.30, 30.80 ],[ 36.30, 77.20 ],[ 36.70, 48.00 ],[ 37.10, 71.80 ],[ 37.40, 31.40 ],
    [ 37.60, 28.50 ],[ 37.80, 35.90 ],[ 39.30, 70.50 ],[ 39.60, 43.20 ],[ 39.80, 31.20 ],[ 40.20, 44.30 ],[ 40.60, 45.20 ],[ 41.20, 29.40 ],[ 41.40, 74.40 ],[ 42.00, 76.30 ],
    [ 42.30, 65.80 ],[ 42.80, 34.50 ],[ 42.90, 75.40 ],[ 44.20, 62.50 ],[ 44.70, 28.00 ],[ 44.90, 59.70 ],[ 45.00, 72.70 ],[ 45.80, 61.10 ],[ 45.90, 69.00 ],[ 46.00, 74.50 ],
    [ 46.20, 76.60 ],[ 46.60, 65.40 ],[ 46.80, 71.50 ],[ 47.60, 70.70 ],[ 47.80, 69.20 ],[ 47.90, 61.70 ],[ 48.40, 37.10 ],[ 48.50, 27.50 ],[ 48.50, 67.50 ],[ 48.90, 31.30 ],
    [ 48.90, 69.70 ],[ 49.00, 66.40 ],[ 49.70, 26.40 ],[ 49.70, 36.30 ],[ 49.70, 39.60 ],[ 49.90, 58.20 ],[ 50.10, 68.00 ],[ 50.20, 65.50 ],[ 50.60, 40.80 ],[ 51.30, 63.90 ],
    [ 52.30, 22.90 ],[ 55.30, 29.20 ],[ 55.50, 31.20 ],[ 55.50, 33.80 ],[ 59.60, 34.80 ]
  ]
  for (md = 0; md < CaveLootCrates.length; md++) {
    L.marker([200-CaveLootCrates[md][0], CaveLootCrates[md][1]], { title: 'Cave Loot Crate', icon: Icons.CaveLootCrateIcon}).addTo(map).bindPopup('Cave Loot Crate <br />' + CaveLootCrates[md][0].toFixed(1) + ' / ' + CaveLootCrates[md][1].toFixed(1))
  }

  var DunegeonLootCrate = [
    [ 25.90, 32.20 ],[ 26.60, 33.70 ],[ 27.90, 32.60 ],[ 30.00, 29.50 ],[ 31.00, 33.10 ],[ 32.30, 36.00 ],[ 32.40, 37.00 ],[ 33.00, 26.00 ],[ 35.20, 29.10 ],[ 35.70, 21.10 ],
    [ 36.60, 33.90 ],[ 37.70, 26.10 ],[ 39.00, 17.00 ],[ 43.10, 21.20 ],[ 49.50, 25.20 ],[ 49.60, 24.80 ],[ 49.60, 24.80 ],[ 49.60, 24.90 ],[ 49.80, 26.00 ],[ 50.00, 25.60 ],
    [ 50.20, 24.10 ],[ 50.40, 24.60 ],[ 50.60, 26.10 ],[ 50.90, 25.60 ],[ 51.00, 69.40 ],[ 53.20, 69.80 ],[ 54.80, 72.20 ],[ 49.20, 68.60 ],[ 49.90, 70.60 ],[ 51.50, 68.30 ],
    [ 51.70, 68.90 ],[ 51.80, 68.50 ],[ 51.90, 69.20 ],[ 51.90, 72.20 ],[ 53.30, 71.70 ],[ 53.30, 72.50 ],[ 50.40, 24.60 ],[ 84.80, 48.10 ],[ 88.00, 48.00 ],[ 88.40, 48.30 ],
    [ 89.70, 49.90 ],[ 90.20, 46.40 ],[ 90.50, 46.50 ],[ 90.90, 45.60 ],[ 91.10, 47.30 ],[ 92.40, 48.10 ]
  ]
  for (md = 0; md < DunegeonLootCrate.length; md++) {
    L.marker([200-DunegeonLootCrate[md][0], DunegeonLootCrate[md][1]], { title: 'Dungeon Loot Crate', icon: Icons.DungeonLootCrateIcon}).addTo(map).bindPopup('Dungeon Loot Crate <br />' + DunegeonLootCrate[md][0].toFixed(1) + ' / ' + DunegeonLootCrate[md][1].toFixed(1))
  }

  var Glitches = [
    [ 13.71, 41.32, 'Genesis 2 Chronicles #11' ],[ 59.53, 33.42, 'Genesis 2 Chronicles #12' ],[ 42.69, 36.83, 'Genesis 2 Chronicles #13' ],
    [ 52.44, 69.35, 'Genesis 2 Chronicles #14' ],[ 67.98, 65.96, 'HLN-A Discovery #9' ],[ 28.10, 76.17, 'HLN-A Discovery #11' ],[ 27.81, 46.68, 'HLN-A Discovery #10' ],
    [ 52.08, 67.98, 'Genesis 2 Chronicles #14' ],[ 52.18, 68.64, 'Genesis 2 Chronicles #14' ],[ 37.05, 60.28, 'HLN-A Discovery #8' ],[ 15.36, 41.73, 'Genesis 2 Chronicles #11' ]
  ]
  for (md = 0; md < Glitches.length; md++) {
    L.marker([200-Glitches[md][0], Glitches[md][1]], { title: Glitches[md][2], icon: Icons.GlitchIcon}).addTo(map).bindPopup(Glitches[md][2] +' <br />' + Glitches[md][0].toFixed(1) + ' / ' + Glitches[md][1].toFixed(1))
  }

  var RockDrakeNests = [
    [ 57.60, 56.40 ],[ 54.10, 55.80 ],[ 57.10, 56.50 ],[ 56.80, 56.60 ],[ 57.30, 57.30 ],[ 56.90, 57.10 ],[ 56.90, 57.30 ],[ 56.60, 57.30 ],[ 56.30, 57.30 ],[ 69.60, 54.20 ],
    [ 70.40, 54.20 ],[ 70.30, 53.90 ],[ 70.40, 54.40 ],[ 70.30, 54.60 ],[ 70.20, 53.50 ],[ 70.10, 53.30 ],[ 62.00, 41.40 ],[ 66.30, 40.20 ],[ 66.10, 40.50 ],[ 66.30, 39.90 ],
    [ 66.10, 40.70 ],[ 65.40, 39.60 ],[ 66.00, 39.80 ],[ 63.20, 44.60 ],[ 63.10, 44.90 ],[ 63.30, 44.70 ],[ 63.30, 44.10 ],[ 69.60, 55.40 ],[ 69.00, 56.40 ],[ 69.30, 50.90 ],
    [ 70.10, 49.60 ],[ 68.50, 57.00 ],[ 60.70, 58.10 ],[ 69.60, 53.40 ],[ 59.10, 58.90 ],[ 59.70, 58.90 ],[ 55.00, 55.50 ]
  ]
  for (md = 0; md < RockDrakeNests.length; md++) {
    L.marker([200-RockDrakeNests[md][0], RockDrakeNests[md][1]], { title: 'Rock Drake Nest', icon: Icons.RockDrakeNestIcon}).addTo(map).bindPopup('Rock Drake Nest <br />' + RockDrakeNests[md][0].toFixed(1) + ' / ' + RockDrakeNests[md][1].toFixed(1))
  }

  var CaveEntrances = [
    [ 19.50, 27.20, 'to the Surface Blue Obelisk Area' ],[ 17.20, 23.50, 'from the Surface Blue Obelisk Area' ],[ 24.90, 65.10, 'to the Surface Green Obelisk Area' ],
    [ 26.80, 63.20, 'from the Surface Green Obelisk Area' ],[ 37.10, 80.30, 'to the Surface Green Obelisk Area' ],[ 34.60, 82.10, 'from the Surface Green Obelisk Area' ],
    [ 52.30, 23.30, 'to the Surface Red Obelisk Area' ],[ 56.10, 23.70, 'from the Surface Red Obelisk Area' ],[ 79.20, 27.80, 'to the Surface Red Obelisk Area' ],
    [ 79.80, 24.50, 'from the Surface Red Obelisk Area' ],[ 48.30, 27.20, 'to the Artifact of the Depths cave' ],
    [ 55.20, 65.90, 'to the Artifact of the Shadows cave (underwater entrance)' ],[ 81.00, 47.00, 'to the Artifact of the Stalker cave' ]
  ]
  for (md = 0; md < CaveEntrances.length; md++) {
    L.marker([200-CaveEntrances[md][0], CaveEntrances[md][1]], { title: 'Cave Entrance: ' + CaveEntrances[md][2], icon: Icons.CaveEntranceIcon}).addTo(map).bindPopup(CaveEntrances[md][2] + ' <br />' + CaveEntrances[md][0].toFixed(1) + ' / ' + CaveEntrances[md][1].toFixed(1))
  }

  var GasVeins = [
    [ 37.20, 40.70 ],[ 84.40, 73.10 ],[ 33.20, 42.20 ],[ 71.60, 67.70 ],[ 33.40, 44.80 ],[ 73.00, 63.10 ],[ 71.90, 60.50 ],[ 72.10, 60.40 ],[ 73.70, 60.50 ],[ 72.90, 63.20 ],
    [ 69.10, 73.30 ],[ 69.60, 74.60 ],[ 74.70, 74.70 ],[ 75.00, 79.90 ],[ 72.40, 81.40 ],[ 70.70, 80.70 ],[ 70.00, 76.70 ],[ 69.70, 75.70 ],[ 28.10, 39.50 ],[ 78.10, 70.50 ],
    [ 78.10, 70.40 ],[ 31.90, 39.60 ],[ 65.00, 75.80 ],[ 79.20, 68.70 ],[ 61.90, 37.40 ],[ 62.60, 37.10 ],[ 86.70, 66.60 ],[ 62.40, 37.90 ],[ 86.70, 66.60 ],[ 88.30, 71.70 ],
    [ 88.50, 71.90 ],[ 88.70, 71.90 ],[ 89.00, 72.20 ],[ 89.20, 72.50 ],[ 88.50, 72.80 ],[ 88.30, 74.60 ],[ 85.60, 72.80 ],[ 45.10, 35.80 ],[ 84.90, 72.70 ],[ 77.20, 65.40 ],
    [ 66.70, 41.30 ],[ 80.30, 63.30 ],[ 66.10, 42.40 ],[ 80.20, 63.30 ],[ 66.60, 42.50 ],[ 71.70, 65.60 ],[ 71.70, 65.60 ],[ 71.40, 63.90 ],[ 72.60, 62.30 ],[ 70.60, 62.50 ],
    [ 45.60, 63.60 ],[ 70.50, 62.50 ],[ 35.50, 61.30 ],[ 70.50, 62.30 ],[ 70.60, 62.20 ],[ 70.70, 62.40 ],[ 70.10, 63.60 ],[ 31.30, 62.00 ],[ 69.30, 63.30 ],[ 69.30, 63.20 ],
    [ 69.10, 63.20 ],[ 72.30, 61.20 ],[ 79.70, 82.60 ],[ 78.80, 80.00 ],[ 74.20, 78.80 ],[ 66.70, 75.10 ],[ 61.20, 71.90 ],[ 61.20, 72.00 ],[ 62.60, 37.20 ],[ 62.50, 37.40 ],
    [ 62.50, 37.90 ],[ 62.10, 37.70 ],[ 60.30, 39.30 ],[ 60.40, 39.50 ],[ 60.50, 38.70 ],[ 61.00, 38.60 ],[ 61.10, 38.30 ],[ 61.40, 38.40 ],[ 60.90, 39.50 ],[ 47.70, 22.80 ],
    [ 57.80, 42.30 ],[ 63.00, 33.60 ],[ 66.20, 34.80 ],[ 66.50, 34.70 ],[ 65.70, 34.60 ],[ 68.70, 37.90 ],[ 68.80, 38.00 ],[ 67.70, 40.50 ],[ 66.60, 41.40 ],[ 65.80, 44.50 ],
    [ 25.70, 62.30 ],[ 65.90, 45.00 ],[ 66.40, 45.40 ],[ 66.30, 45.20 ],[ 31.20, 47.00 ],[ 33.00, 55.50 ],[ 29.90, 49.10 ],[ 48.80, 26.60 ],[ 29.00, 59.90 ],[ 50.40, 32.40 ],
    [ 42.60, 39.50 ],[ 45.70, 30.80 ],[ 39.90, 15.40 ],[ 39.90, 15.40 ],[ 42.80, 51.00 ],[ 37.00, 65.60 ],[ 36.70, 57.10 ],[ 30.10, 52.50 ],[ 31.10, 47.00 ],[ 46.00, 65.70 ],
    [ 50.10, 68.00 ],[ 40.50, 44.70 ],[ 46.70, 71.70 ],[ 46.40, 74.60 ],[ 41.80, 55.30 ],[ 41.80, 55.30 ],[ 41.60, 61.50 ],[ 51.20, 76.70 ],[ 38.50, 62.90 ],[ 35.20, 66.60 ],
    [ 43.20, 66.40 ],[ 57.30, 69.70 ],[ 40.70, 78.80 ],[ 57.80, 73.90 ],[ 53.10, 73.70 ],[ 34.40, 76.00 ],[ 47.00, 72.20 ],[ 21.40, 44.20 ],[ 44.90, 74.90 ],[ 47.80, 77.20 ],
    [ 38.10, 63.30 ],[ 48.00, 78.20 ],[ 66.70, 76.00 ],[ 66.60, 75.90 ],[ 49.70, 78.30 ],[ 54.00, 77.80 ],[ 27.30, 62.80 ],[ 49.60, 80.50 ],[ 49.50, 80.50 ],[ 45.40, 77.10 ],
    [ 41.60, 76.90 ],[ 31.40, 59.30 ],[ 37.40, 77.90 ],[ 33.60, 75.60 ],[ 79.10, 68.80 ],[ 35.70, 69.30 ],[ 35.60, 69.30 ],[ 34.50, 65.40 ],[ 88.70, 72.20 ],[ 35.90, 65.10 ],
    [ 38.50, 62.20 ],[ 88.30, 74.90 ],[ 85.40, 72.90 ],[ 64.80, 74.10 ],[ 84.60, 72.90 ],[ 46.10, 63.90 ],[ 72.90, 63.30 ],[ 46.40, 63.50 ],[ 38.80, 46.50 ],[ 46.40, 63.40 ],
    [ 46.30, 63.30 ],[ 46.10, 63.30 ],[ 45.90, 63.10 ],[ 45.60, 62.90 ],[ 45.50, 62.90 ],[ 45.20, 62.90 ],[ 45.20, 63.20 ],[ 45.30, 63.40 ],[ 45.80, 63.80 ]
  ]
  for (md = 0; md < GasVeins.length; md++) {
    L.marker([200-GasVeins[md][0], GasVeins[md][1]], { title: 'Gas Vein', icon: Icons.GasVeinIcon}).addTo(map).bindPopup('Gas Vein <br />' + GasVeins[md][0].toFixed(1) + ' / ' + GasVeins[md][1].toFixed(1))
  }

  var Artifacts = [
    [ 50.50, 72.60, 'Artifact of the Shadows' ],[ 51.20, 23.80, 'Artifact of the Depths' ],[ 91.70, 51.40, 'Artifact of the Stalker' ]
  ]
  for (md = 0; md < Artifacts.length; md++) {
    L.marker([200-Artifacts[md][0], Artifacts[md][1]], { title: Artifacts[md][2], icon: Icons.ArtifactIcon}).addTo(map).bindPopup(Artifacts[md][2] +' <br />' + Artifacts[md][0].toFixed(1) + ' / ' + Artifacts[md][1].toFixed(1))
  }

  var HyperchargeNodes = [
    [ 17.10, 17.50 ],[ 34.30, 76.70 ],[ 22.40, 78.70 ],[ 17.90, 81.40 ],[ 16.10, 87.20 ],[ 13.50, 77.90 ],[ 77.90, 12.40 ],[ 84.00, 24.50 ],[ 85.10, 12.00 ],[ 18.50, 15.40 ],
    [ 83.30, 16.40 ],[ 73.10, 12.90 ],[ 67.60, 14.70 ],[ 59.50, 17.20 ],[ 60.30, 22.30 ],[ 57.10, 22.70 ],[ 13.60, 17.00 ],[ 80.50, 20.80 ],[ 24.10, 66.90 ],[ 76.30, 17.50 ],
    [ 20.50, 72.90 ],[ 13.10, 66.20 ],[ 33.30, 82.70 ],[ 33.30, 85.10 ],[ 27.10, 76.80 ]
  ]
  for (md = 0; md < HyperchargeNodes.length; md++) {
    L.marker([200-HyperchargeNodes[md][0], HyperchargeNodes[md][1]], { title: 'Hypercharge Node', icon: Icons.HyperchargeNodeIcon}).addTo(map).bindPopup('Hypercharge Node <br />' + HyperchargeNodes[md][0].toFixed(1) + ' / ' + HyperchargeNodes[md][1].toFixed(1))
  }

  var Dossiers = [
    [ 36.40, 56.10, 'Dossier: Basilisk' ],[ 51.70, 68.30, 'Dossier: Bulbdog' ],[ 48.30, 27.20, 'Dossier: Featherlight' ],[ 48.60, 66.70, 'Dossier: Glowbug' ],
    [ 46.80, 72.20, 'Dossier: Glowtail' ],[ 46.10, 64.20, 'Dossier: Karkinos' ],[ 57.10, 73.70, 'Dossier: Lamprey' ],[ 27.20, 63.60, 'Dossier: Mole Rat' ],
    [ 43.90, 54.90, 'Dossier: Nameless' ],[ 36.00, 47.30, 'Dossier: Ravager' ],[ 65.00, 56.20, 'Dossier: Reaper' ],[ 52.00, 49.10, 'Dossier: Rock Drake' ],
    [ 81.40, 19.90, 'Dossier: Seeker' ],[ 55.10, 52.20, 'Dossier: Shinehorn' ]
  ]
  for (md = 0; md < Dossiers.length; md++) {
    L.marker([200-Dossiers[md][0], Dossiers[md][1]], { title: Dossiers[md][2], icon: Icons.DossierIcon}).addTo(map).bindPopup(Dossiers[md][2] + ' <br />' + Dossiers[md][0].toFixed(1) + ' / ' + Dossiers[md][1].toFixed(1))
  }

  var LootCrates = [
    [ 13.50, 21.50 ],[ 13.80, 17.00 ],[ 13.90, 66.00 ],[ 14.20, 19.80 ],[ 15.00, 18.90 ],[ 15.10, 22.20 ],[ 15.50, 66.30 ],[ 15.90, 74.20 ],[ 16.50, 16.60 ],[ 16.60, 20.60 ],
    [ 18.20, 18.10 ],[ 19.00, 74.20 ],[ 19.20, 20.00 ],[ 19.90, 67.50 ],[ 20.40, 20.90 ],[ 20.40, 79.60 ],[ 20.60, 18.60 ],[ 21.60, 71.10 ],[ 23.20, 79.60 ],[ 26.20, 79.20 ],
    [ 27.60, 76.10 ],[ 59.60, 21.80 ],[ 59.60, 21.80 ],[ 60.90, 16.20 ],[ 60.90, 16.20 ],[ 62.30, 19.00 ],[ 62.30, 19.00 ],[ 62.60, 21.60 ],[ 62.60, 21.60 ],[ 65.80, 21.00 ],
    [ 65.80, 21.00 ],[ 67.80, 12.60 ],[ 67.80, 12.60 ],[ 69.30, 18.60 ],[ 69.30, 18.60 ],[ 71.60, 18.40 ],[ 71.60, 18.40 ],[ 74.90, 11.80 ],[ 74.90, 11.80 ],[ 75.20, 20.90 ],
    [ 75.20, 20.90 ],[ 76.30, 16.10 ],[ 76.30, 16.10 ],[ 76.70, 17.90 ],[ 76.70, 17.90 ],[ 77.20, 18.70 ],[ 77.20, 18.70 ],[ 77.70, 20.60 ],[ 78.00, 12.10 ],[ 78.80, 17.70 ],
    [ 79.40, 14.00 ],[ 81.00, 17.20 ],[ 82.70, 11.70 ],[ 83.20, 16.90 ],[ 84.00, 13.60 ],[ 84.70, 22.20 ],[ 84.70, 24.30 ],[ 86.40, 21.50 ],[ 87.10, 17.00 ],[ 88.10, 20.50 ]
  ]
  for (md = 0; md < LootCrates.length; md++) {
    L.marker([200-LootCrates[md][0], LootCrates[md][1]], { title: 'Loot Crate', icon: Icons.LootCrateIcon}).addTo(map).bindPopup('Loot Crate <br />' + LootCrates[md][0].toFixed(1) + ' / ' + LootCrates[md][1].toFixed(1))
  }

  var ChargeNodes = [
    [ 36.10, 45.40 ],[ 42.40, 50.50 ],[ 38.80, 46.20 ],[ 38.30, 62.20 ],[ 40.80, 67.70 ],[ 39.90, 52.00 ],[ 48.80, 66.80 ],[ 45.50, 63.30 ],[ 33.80, 71.50 ],[ 45.90, 68.60 ],
    [ 75.70, 37.60 ],[ 38.80, 70.40 ],[ 36.30, 49.90 ],[ 47.20, 64.80 ],[ 50.20, 63.10 ],[ 35.10, 47.20 ],[ 44.90, 66.00 ],[ 42.00, 55.40 ],[ 43.30, 50.40 ],[ 39.80, 46.50 ],
    [ 33.60, 51.10 ],[ 24.20, 60.20 ],[ 31.20, 50.70 ],[ 62.00, 52.30 ],[ 31.40, 58.30 ],[ 27.70, 56.70 ],[ 35.90, 46.90 ],[ 60.00, 43.70 ],[ 61.60, 39.80 ],[ 56.90, 43.30 ],
    [ 25.40, 53.90 ],[ 71.40, 29.40 ],[ 64.90, 57.30 ],[ 66.40, 75.90 ],[ 74.70, 78.50 ],[ 27.70, 47.60 ],[ 78.80, 70.50 ],[ 71.90, 65.40 ],[ 68.20, 39.20 ],[ 67.80, 32.80 ],
    [ 65.30, 36.30 ],[ 63.10, 33.20 ],[ 70.20, 37.60 ],[ 66.70, 46.80 ],[ 45.40, 53.60 ],[ 52.70, 55.30 ],[ 56.80, 54.00 ],[ 57.60, 57.00 ],[ 54.90, 63.00 ],[ 47.60, 75.20 ],
    [ 42.00, 74.70 ],[ 37.30, 71.10 ],[ 39.40, 66.60 ],[ 40.30, 56.50 ],[ 36.70, 57.20 ],[ 30.40, 61.40 ],[ 22.00, 53.30 ],[ 29.80, 42.70 ],[ 33.10, 39.20 ],[ 38.10, 40.30 ],
    [ 68.40, 66.80 ],[ 38.50, 44.00 ],[ 33.40, 58.10 ],[ 29.60, 52.40 ],[ 40.70, 44.50 ],[ 72.60, 63.10 ],[ 44.60, 60.10 ],[ 42.70, 36.10 ],[ 47.90, 31.70 ],[ 49.80, 24.80 ],
    [ 36.90, 37.90 ],[ 49.00, 18.00 ],[ 45.50, 35.10 ],[ 32.70, 37.20 ],[ 39.90, 40.30 ],[ 70.10, 54.90 ]
  ]
  for (md = 0; md < ChargeNodes.length; md++) {
    L.marker([200-ChargeNodes[md][0], ChargeNodes[md][1]], { title: 'Charge Node', icon: Icons.ChargeNodeIcon}).addTo(map).bindPopup('Charge Node <br />' + ChargeNodes[md][0].toFixed(1) + ' / ' + ChargeNodes[md][1].toFixed(1))
  }

  var PlantSpeciesZ = [
    [ 43.20, 28.10 ],[ 28.90, 59.90 ],[ 29.80, 56.70 ],[ 36.60, 47.80 ],[ 38.30, 42.40 ],[ 39.10, 37.90 ],[ 38.70, 29.70 ],[ 40.40, 13.10 ],[ 47.70, 12.10 ],[ 50.20, 23.50 ],
    [ 40.50, 31.10 ],[ 45.80, 35.30 ],[ 40.80, 37.40 ],[ 37.60, 41.00 ],[ 44.60, 34.80 ],[ 52.80, 38.10 ],[ 50.90, 41.00 ],[ 47.60, 39.60 ],[ 50.00, 43.40 ],[ 44.60, 46.70 ],
    [ 44.20, 50.60 ],[ 34.60, 34.40 ],[ 43.20, 51.60 ],[ 43.70, 54.90 ],[ 46.10, 52.90 ],[ 50.10, 56.50 ],[ 45.20, 65.60 ],[ 41.00, 64.60 ],[ 36.40, 66.60 ],[ 36.00, 72.00 ],
    [ 35.40, 74.70 ],[ 33.40, 38.50 ],[ 33.10, 72.60 ],[ 39.70, 75.30 ],[ 43.40, 80.00 ],[ 46.40, 80.60 ],[ 48.00, 76.70 ],[ 53.30, 77.60 ],[ 49.90, 74.50 ],[ 47.90, 70.30 ],
    [ 48.10, 68.10 ],[ 52.10, 70.40 ],[ 37.70, 40.30 ],[ 53.80, 66.80 ],[ 62.40, 69.60 ],[ 61.60, 64.20 ],[ 65.90, 65.70 ],[ 66.80, 69.50 ],[ 68.80, 68.20 ],[ 69.20, 64.80 ],
    [ 68.40, 63.10 ],[ 69.60, 61.40 ],[ 72.30, 61.20 ],[ 35.80, 46.60 ],[ 73.40, 58.00 ],[ 50.40, 28.20 ],[ 68.20, 58.70 ],[ 65.90, 59.10 ],[ 66.10, 48.50 ],[ 67.70, 44.00 ],
    [ 65.70, 40.00 ],[ 68.60, 37.20 ],[ 69.00, 33.50 ],[ 69.40, 29.50 ],[ 71.50, 26.40 ],[ 33.90, 50.00 ],[ 68.60, 29.30 ],[ 66.50, 39.30 ],[ 61.50, 47.30 ],[ 54.00, 46.30 ],
    [ 44.70, 41.40 ],[ 59.70, 38.70 ],[ 31.10, 50.40 ],[ 28.30, 52.90 ],[ 63.80, 36.60 ],[ 68.00, 76.10 ],[ 61.80, 29.70 ],[ 67.50, 29.40 ],[ 78.50, 30.10 ],[ 80.30, 33.40 ],
    [ 83.80, 35.50 ],[ 83.40, 42.30 ],[ 79.80, 41.70 ],[ 73.50, 40.50 ],[ 70.10, 40.90 ],[ 65.90, 48.00 ],[ 68.60, 72.10 ],[ 63.90, 51.80 ],[ 57.10, 47.00 ],[ 66.20, 50.20 ],
    [ 63.30, 49.20 ],[ 55.50, 65.40 ],[ 56.60, 33.60 ],[ 52.50, 42.90 ],[ 49.70, 54.20 ],[ 40.10, 52.10 ],[ 41.70, 61.40 ],[ 68.20, 65.40 ],[ 35.60, 65.40 ],[ 35.30, 66.70 ],
    [ 42.60, 67.40 ],[ 50.40, 63.40 ],[ 46.40, 71.80 ],[ 57.80, 73.60 ],[ 54.70, 78.50 ],[ 45.90, 75.70 ],[ 38.30, 76.10 ],[ 37.00, 71.90 ],[ 65.70, 60.30 ],[ 44.70, 67.50 ],
    [ 45.80, 65.20 ],[ 35.40, 65.70 ],[ 34.50, 65.70 ],[ 44.40, 65.90 ],[ 46.10, 64.20 ],[ 47.80, 56.90 ],[ 53.00, 54.10 ],[ 48.30, 27.40 ],[ 32.50, 62.20 ],[ 61.70, 49.50 ],
    [ 37.60, 50.70 ],[ 41.40, 41.40 ],[ 46.20, 27.60 ],[ 49.30, 31.80 ],[ 34.60, 46.10 ],[ 31.70, 46.90 ],[ 32.10, 42.40 ],[ 28.70, 34.10 ],[ 18.80, 28.70 ],[ 45.30, 25.70 ],
    [ 48.10, 42.60 ],[ 41.10, 45.30 ],[ 40.90, 47.80 ],[ 37.50, 48.00 ],[ 33.30, 56.70 ],[ 35.50, 57.40 ],[ 40.60, 12.60 ],[ 42.40, 34.40 ],[ 34.20, 35.00 ],[ 34.20, 41.60 ],
    [ 28.60, 44.30 ],[ 64.60, 38.10 ],[ 26.20, 46.00 ],[ 13.90, 52.60 ],[ 60.80, 55.00 ],[ 56.00, 62.10 ],[ 62.60, 40.90 ],[ 61.00, 34.60 ]
  ]
  for (md = 0; md < PlantSpeciesZ.length; md++) {
    L.marker([200-PlantSpeciesZ[md][0], PlantSpeciesZ[md][1]], { title: 'Plant Species Z', icon: Icons.PlantSpeciesZIcon}).addTo(map).bindPopup('Plant Species Z <br />' + PlantSpeciesZ[md][0].toFixed(1) + ' / ' + PlantSpeciesZ[md][1].toFixed(1))
  }
}