import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function Genesis(map) {
  L.imageOverlay('/Maps/Genesis1.jpg', [[100,0], [0,-100]]).addTo(map);

  var missionDispatchers = [
    [ 61.10, 33.10, 'The Rhino 500' ],[ 62.00, 26.80, 'Home Is Where The Pouch Is' ],[ 69.00, 21.30, 'Ice Fishin' ],[ 70.70, 26.20, 'Mound Over Matter' ],
    [ 63.50, 49.80, 'Built Fjord Tough' ],[ 76.00, 45.10, 'Deer-ly Departed' ],[ 76.00, 45.10, 'Hyde and Seek' ],[ 63.90, 41.30, 'Mammoths on Parade' ],
    [ 63.90, 41.30, 'Ruffle Some Feathers' ],[ 70.60, 33.10, 'Saber Slalom' ],[ 61.70, 34.70, 'Searching the Fro-zone' ],[ 54.20, 84.70, 'Dodoball Shot Clock' ],
    [ 54.20, 84.70, 'Dodoball Pick-Up Game' ],[ 86.80, 73.50, 'Just a Hop' ],[ 85.30, 71.60, 'Bog Fishin' ],[ 68.30, 86.30, 'Another Bog Hunt' ],
    [ 84.90, 61.10, 'Bog Beatdown' ],[ 62.70, 87.40, 'Web Search' ],[ 62.70, 87.40, 'Cheaper by the Pack' ],[ 84.80, 57.40, 'Swamp Placid' ],[ 84.80, 57.40, 'Spy Vs Spino' ],
    [ 84.10, 69.90, '' ],[ 60.10, 84.10, 'Bog Rally' ],[ 75.00, 68.00, 'Along Came Pollen' ],[ 21.10, 27.90, 'This Little Light of Mine' ],[ 35.00, 28.20, 'To Boldly Go' ],
    [ 14.20, 29.70, 'TEKnological Terrors' ],[ 43.90, 25.40, 'Its a Bug Hunt' ],[ 43.90, 25.40, 'Hunting by Moonlight' ],[ 49.30, 30.60, 'King of the Moon' ],
    [ 49.30, 30.60, 'A Captains Conquest' ],[ 50.30, 28.10, 'Bulbdogball Pick-Up Game' ],[ 50.30, 28.10, 'Space Jam' ],[ 27.80, 16.90, 'Dont Fear the Reaper King' ],
    [ 48.40, 27.70, 'Tokyo Skifft' ],[ 30.40, 49.70, 'Wave Ray 64' ],[ 31.60, 57.50, 'Rip It' ],[ 39.50, 52.10, 'One Tough Moeder' ],[ 20.20, 61.60, 'Echo of a Classic' ],
    [ 30.90, 55.90, 'Hide and Sink' ],[ 30.20, 55.80, 'The Mosa Proposal' ],[ 30.20, 55.80, 'Who Hid the Squid?' ],[ 26.50, 51.80, 'Lochd and Loaded' ],
    [ 26.50, 51.80, 'Chasing the White Whale' ],[ 34.30, 51.60, 'Bottle-nosed Blitz' ],[ 28.70, 52.50, 'The Teeth Underneath' ],[ 41.30, 86.70, 'Hunt in the Heat' ],
    [ 41.30, 86.70, 'Allo and Goodbye' ],[ 32.80, 88.10, 'The Summit Tour' ],[ 15.10, 70.60, 'Out of the Frying Pan...' ],[ 33.30, 85.90, 'Kingslayer' ],
    [ 33.30, 85.90, 'We Will Rock You' ],[ 33.70, 85.20, 'Gotta Go Fast' ],[ 41.80, 82.20, 'Dead Heat' ],[ 32.50, 86.00, 'The Egg-straction' ],
    [ 40.70, 81.80, 'One Hell of a Treasure Hunt' ],[ 45.10, 80.80, 'Magma Medley Melee' ]
  ]
  for (md = 0; md < missionDispatchers.length; md++) {
    L.marker([100-missionDispatchers[md][0], -100+missionDispatchers[md][1]], { title: `Mission Dispatcher: ${missionDispatchers[md][2]}`, icon: Icons.MissionDispatcherIcon}).addTo(map).bindPopup('Mission Dispatcher <br />' + missionDispatchers[md][2] + '<br />' + missionDispatchers[md][0].toFixed(1) + ' / ' + missionDispatchers[md][1].toFixed(1));
  }

  var magmasaurNest = [
    [ 29.30, 80.80 ],[ 29.60, 81.50 ],[ 29.00, 80.70 ],[ 28.60, 81.30 ],[ 28.80, 81.70 ],[ 28.70, 81.00 ],[ 28.40, 81.00 ],[ 27.70, 78.40 ],[ 25.20, 77.70 ],[ 25.60, 78.70 ],
    [ 24.80, 78.30 ],[ 24.20, 77.90 ],[ 24.30, 78.40 ],[ 25.10, 78.90 ],[ 24.50, 78.90 ]
  ]
  for (md = 0; md < magmasaurNest.length; md++) {
    L.marker([100-magmasaurNest[md][0], -100+magmasaurNest[md][1]], { title: `Magmasaur Nest`, icon: Icons.MagmasaurNestIcon}).addTo(map).bindPopup('Magmasaur Nest <br />' + magmasaurNest[md][0].toFixed(1) + ' / ' + magmasaurNest[md][1].toFixed(1))
  }

  var Glitches = [
    [ 69.90, 77.00, 'Biome Glitch Discovery Bog #1' ],[ 57.40, 84.80, 'Biome Glitch Discovery Bog #2' ],[ 74.50, 76.50, 'Biome Glitch Discovery Bog #3' ],
    [ 70.20, 76.60, 'Biome Glitch Discovery Bog #4' ],[ 60.20, 59.50, 'Biome Glitch Discovery Bog #5' ],[ 84.20, 74.80, 'Biome Glitch Discovery Bog #6' ],
    [ 47.10, 14.10, 'Biome Glitch Discovery Moon #1' ],[ 22.30, 31.30, 'Biome Glitch Discovery Moon #2' ],[ 21.60, 26.00, 'Biome Glitch Discovery Moon #3' ],
    [ 30.20, 35.40, 'Biome Glitch Discovery Moon #4' ],[ 32.30, 37.70, 'Biome Glitch Discovery Moon #5' ],[ 26.50, 19.30, 'Biome Glitch Discovery Moon #6' ],
    [ 34.20, 26.80, 'Biome Glitch Discovery Moon #7' ],[ 46.40, 21.50, 'Biome Glitch Discovery Moon #8' ],[ 18.90, 47.40, 'Biome Glitch Discovery Ocean #1' ],
    [ 20.70, 55.00, 'Biome Glitch Discovery Ocean #2' ],[ 18.40, 56.40, 'Biome Glitch Discovery Ocean #3' ],[ 25.90, 58.00, 'Biome Glitch Discovery Ocean #4' ],
    [ 31.40, 56.70, 'Biome Glitch Discovery Ocean #5' ],[ 35.90, 45.70, 'Biome Glitch Discovery Ocean #6' ],[ 64.10, 37.50, 'Biome Glitch Discovery Snow #1' ],
    [ 79.90, 34.90, 'Biome Glitch Discovery Snow #2' ],[ 74.70, 30.50, 'Biome Glitch Discovery Snow #3' ],[ 77.00, 21.70, 'Biome Glitch Discovery Snow #4' ],
    [ 67.50, 25.80, 'Biome Glitch Discovery Snow #5' ],[ 62.70, 30.70, 'Biome Glitch Discovery Snow #6' ],[ 70.80, 28.70, 'Biome Glitch Discovery Snow #7' ],
    [ 73.70, 25.20, 'Biome Glitch Discovery Snow #8' ],[ 78.60, 16.40, 'Biome Glitch Discovery Snow #9' ],[ 44.60, 85.50, 'Biome Glitch Discovery Volcanic #1' ],
    [ 26.90, 77.20, 'Biome Glitch Discovery Volcanic #2' ],[ 47.50, 66.80, 'Biome Glitch Discovery Volcanic #3' ],[ 35.70, 77.50, 'Biome Glitch Discovery Volcanic #4' ],
    [ 27.90, 66.70, 'Biome Glitch Discovery Volcanic #5' ],[ 25.30, 77.30, 'Biome Glitch Discovery Volcanic #6' ],[ 12.40, 76.30, 'Biome Glitch Discovery Volcanic #7' ],
    [ 17.10, 71.30, 'Story Glitch Discovery' ],[ 17.30, 87.90, 'Story Glitch Discovery' ],[ 18.40, 37.40, 'Story Glitch Discovery' ],[ 18.90, 51.80, 'Story Glitch Discovery' ],
    [ 21.40, 14.50, 'Story Glitch Discovery' ],[ 23.10, 51.30, 'Story Glitch Discovery' ],[ 28.30, 74.00, 'Story Glitch Discovery' ],[ 28.50, 80.60, 'Story Glitch Discovery' ],
    [ 30.70, 56.20, 'Story Glitch Discovery' ],[ 31.80, 57.30, 'Story Glitch Discovery' ],[ 32.20, 46.20, 'Story Glitch Discovery' ],[ 32.20, 48.50, 'Story Glitch Discovery' ],
    [ 34.30, 32.10, 'Story Glitch Discovery' ],[ 36.40, 49.30, 'Story Glitch Discovery' ],[ 36.70, 72.40, 'Story Glitch Discovery' ],[ 37.30, 24.50, 'Story Glitch Discovery' ],
    [ 37.30, 86.20, 'Story Glitch Discovery' ],[ 39.10, 47.10, 'Story Glitch Discovery' ],[ 40.20, 56.30, 'Story Glitch Discovery' ],[ 41.60, 75.90, 'Story Glitch Discovery' ],
    [ 43.40, 35.20, 'Story Glitch Discovery' ],[ 48.40, 73.60, 'Story Glitch Discovery' ],[ 48.80, 18.00, 'Story Glitch Discovery' ],[ 49.70, 29.20, 'Story Glitch Discovery' ],
    [ 50.90, 13.90, 'Story Glitch Discovery' ],[ 61.30, 37.50, 'Story Glitch Discovery' ],[ 61.40, 33.00, 'Story Glitch Discovery' ],[ 66.50, 85.00, 'Story Glitch Discovery' ],
    [ 68.10, 59.80, 'Story Glitch Discovery' ],[ 70.90, 75.10, 'Story Glitch Discovery' ],[ 71.10, 76.80, 'Story Glitch Discovery' ],[ 71.20, 19.50, 'Story Glitch Discovery' ],
    [ 73.50, 76.90, 'Story Glitch Discovery' ],[ 73.70, 83.70, 'Story Glitch Discovery' ],[ 75.30, 75.80, 'Story Glitch Discovery' ],[ 75.70, 53.10, 'Story Glitch Discovery' ],
    [ 76.40, 28.10, 'Story Glitch Discovery' ],[ 80.60, 26.70, 'Story Glitch Discovery' ],[ 82.30, 21.40, 'Story Glitch Discovery' ],[ 82.60, 42.00, 'Story Glitch Discovery' ],
    [ 83.50, 60.60, 'Tidbit Glitch Discovery #1' ],[ 72.60, 70.00, 'Tidbit Glitch Discovery #2' ],[ 67.20, 78.20, 'Tidbit Glitch Discovery #3' ],
    [ 66.20, 67.50, 'Tidbit Glitch Discovery #4' ],[ 32.70, 59.00, 'Tidbit Glitch Discovery #5' ],[ 33.10, 51.90, 'Tidbit Glitch Discovery #6' ],
    [ 28.80, 60.60, 'Tidbit Glitch Discovery #7' ],[ 33.30, 51.40, 'Tidbit Glitch Discovery #8' ],[ 75.50, 46.20, 'Tidbit Glitch Discovery #9' ],
    [ 70.10, 31.10, 'Tidbit Glitch Discovery #10' ],[ 73.30, 27.30, 'Tidbit Glitch Discovery #11' ],[ 66.20, 21.30, 'Tidbit Glitch Discovery #12' ],
    [ 24.30, 13.70, 'Tidbit Glitch Discovery #13' ],[ 40.80, 38.20, 'Tidbit Glitch Discovery #14' ],[ 32.80, 32.90, 'Tidbit Glitch Discovery #15' ],
    [ 12.40, 38.80, 'Tidbit Glitch Discovery #16' ],[ 43.30, 80.70, 'Tidbit Glitch Discovery #17' ],[ 43.60, 76.10, 'Tidbit Glitch Discovery #18' ],
    [ 21.80, 69.20, 'Tidbit Glitch Discovery #19' ],[ 28.20, 80.30, 'Tidbit Glitch Discovery #20' ],[ 38.50, 24.60, 'Tidbit Glitch Discovery #21' ],
    [ 50.50, 27.80, 'Tidbit Glitch Discovery #22' ],[ 23.60, 25.70, 'Tidbit Glitch Discovery #23' ],[ 26.40, 32.70, 'Tidbit Glitch Discovery #24' ],
    [ 27.00, 27.60, 'Tidbit Glitch Discovery #25' ],[ 31.90, 14.80, 'Tidbit Glitch Discovery #26' ],[ 33.90, 19.30, 'Tidbit Glitch Discovery #27' ],
    [ 47.40, 23.70, 'Tidbit Glitch Discovery #28' ],[ 50.80, 31.10, 'Tidbit Glitch Discovery #29' ],[ 67.80, 72.90, 'Tidbit Glitch Discovery #30' ],
    [ 66.40, 75.30, 'Tidbit Glitch Discovery #31' ],[ 64.20, 74.70, 'Tidbit Glitch Discovery #32' ],[ 71.60, 75.40, 'Tidbit Glitch Discovery #33' ],
    [ 72.50, 76.60, 'Tidbit Glitch Discovery #34' ],[ 59.80, 61.10, 'Tidbit Glitch Discovery #35' ],[ 73.10, 84.90, 'Tidbit Glitch Discovery #36' ],
    [ 63.80, 76.50, 'Tidbit Glitch Discovery #37' ],[ 57.70, 61.80, 'Tidbit Glitch Discovery #38' ],[ 42.80, 73.60, 'Tidbit Glitch Discovery #39' ],
    [ 33.10, 66.90, 'Tidbit Glitch Discovery #40' ],[ 35.10, 86.60, 'Tidbit Glitch Discovery #41' ],[ 19.80, 72.80, 'Tidbit Glitch Discovery #42' ],
    [ 21.20, 85.40, 'Tidbit Glitch Discovery #43' ],[ 40.80, 73.70, 'Tidbit Glitch Discovery #44' ],[ 42.30, 67.80, 'Tidbit Glitch Discovery #45' ],
    [ 30.90, 81.90, 'Tidbit Glitch Discovery #46' ],[ 13.70, 87.10, 'Tidbit Glitch Discovery #47' ],[ 29.20, 48.10, 'Tidbit Glitch Discovery #48' ],
    [ 34.30, 45.30, 'Tidbit Glitch Discovery #49' ],[ 26.70, 51.10, 'Tidbit Glitch Discovery #50' ],[ 23.80, 48.80, 'Tidbit Glitch Discovery #51' ],
    [ 21.80, 50.30, 'Tidbit Glitch Discovery #52' ],[ 21.00, 51.00, 'Tidbit Glitch Discovery #53' ],[ 20.20, 50.10, 'Tidbit Glitch Discovery #54' ],
    [ 15.90, 47.50, 'Tidbit Glitch Discovery #55' ],[ 35.10, 54.00, 'Tidbit Glitch Discovery #56' ],[ 22.20, 69.60, 'Tidbit Glitch Discovery #57' ],
    [ 15.40, 74.50, 'Tidbit Glitch Discovery #58' ],[ 82.20, 18.80, 'Tidbit Glitch Discovery #59' ],[ 86.20, 15.30, 'Tidbit Glitch Discovery #60' ],
    [ 85.50, 30.80, 'Tidbit Glitch Discovery #61' ],[ 57.20, 69.20, 'Tidbit Glitch Discovery #62' ],[ 61.50, 74.80, 'Tidbit Glitch Discovery #63' ],
    [ 71.90, 69.40, 'Tidbit Glitch Discovery #64' ],[ 79.40, 72.60, 'Tidbit Glitch Discovery #65' ],[ 34.50, 51.00, 'Tidbit Glitch Discovery #66' ],
    [ 28.80, 47.80, 'Tidbit Glitch Discovery #67' ],[ 40.90, 12.70, 'Tidbit Glitch Discovery #68' ],[ 68.00, 21.90, 'Tidbit Glitch Discovery #69' ],
    [ 73.10, 30.90, 'Tidbit Glitch Discovery #70' ],[ 70.60, 33.40, 'Tidbit Glitch Discovery #71' ],[ 85.00, 37.10, 'Tidbit Glitch Discovery #72' ],
    [ 72.50, 43.40, 'Tidbit Glitch Discovery #73' ],[ 67.20, 32.80, 'Tidbit Glitch Discovery #74' ],[ 50.29, 28.87, 'Genesis 2 Chronicles #21' ],
    [ 32.54, 46.70, 'Genesis 2 Chronicles #22' ],[ 65.51, 85.76, 'Genesis 2 Chronicles #23' ],[ 46.92, 86.52, 'Genesis 2 Chronicles #24' ],
    [ 69.08, 21.27, 'Genesis 2 Chronicles #25' ],[ 33.09, 47.26, 'Genesis 2 Chronicles #22' ],[ 65.36, 85.94, 'Genesis 2 Chronicles #23' ],
    [ 67.66, 86.19, 'Genesis 2 Chronicles #23' ],[ 46.23, 86.18, 'Genesis 2 Chronicles #24' ],[ 46.75, 86.84, 'Genesis 2 Chronicles #24' ],
    [ 46.07, 86.43, 'Genesis 2 Chronicles #24' ]
  ]
  for (md = 0; md < Glitches.length; md++) {
    L.marker([100-Glitches[md][0], -100+Glitches[md][1]], { title: Glitches[md][2], icon: Icons.GlitchIcon}).addTo(map).bindPopup(Glitches[md][2] +' <br />' + Glitches[md][0].toFixed(1) + ' / ' + Glitches[md][1].toFixed(1))
  }

  L.marker([100-33.2, -100+82.5], { title: "Cave entrance", icon: Icons.CaveEntranceIcon}).addTo(map).bindPopup('Cave entrance <br /> 33.2 / 82.5');
}