import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function Genesis2(map) {
  L.imageOverlay('/Maps/Genesis2.jpg', [[0,0], [100,100]]).addTo(map);

  var latLng = L.latLng(100-50, 50);
  var currentPoint = map.latLngToContainerPoint(latLng);
  var width = 25;
  var height = 150;
  var xDifference = width / 2;
  var yDifference = height / 2;
  var southWest = L.point((currentPoint.x - xDifference), (currentPoint.y - yDifference));
  var northEast = L.point((currentPoint.x + xDifference), (currentPoint.y + yDifference));
  var bounds = L.latLngBounds(map.containerPointToLatLng(southWest),map.containerPointToLatLng(northEast));
  L.rectangle(bounds, { color: "#111111" }).addTo(map).bindPopup("<br /> <img src='/Images/Genesis2Drops.png' height='256px'>", { className: 'Genesis2Drops' });

  L.marker([100-62.9, 25.5], { title: "Rockwell Prime Terminal", icon: Icons.RockwellPrimeTerminalIcon}).addTo(map).bindPopup('Rockwell Prime Terminal <br /> 62.9 / 25.5');

  var MissionDispatchers = [
    [ 38.20, 66.20, 'Mission Dispatcher' ],[ 42.40, 37.10, 'Mission Dispatcher' ],[ 40.10, 30.20, 'Mission Dispatcher' ],[ 38.40, 83.80, 'Mission Dispatcher' ],
    [ 40.50, 9.80, 'Mission Dispatcher' ],[ 42.10, 24.70, 'Mission Dispatcher' ],[ 23.80, 61.60, 'Mission Dispatcher' ],[ 26.40, 9.30, 'Mission Dispatcher' ],
    [ 19.30, 31.90, 'Mission Dispatcher' ],[ 24.40, 27.60, 'Mission Dispatcher' ],[ 18.80, 89.50, 'Mission Dispatcher' ],[ 32.90, 90.70, 'Mission Dispatcher' ],
    [ 69.90, 60.10, 'Mission Dispatcher' ],[ 57.50, 69.30, 'Mission Dispatcher' ],[ 55.40, 76.70, 'Mission Dispatcher' ],[ 56.80, 90.80, 'Mission Dispatcher' ],
    [ 79.50, 90.20, 'Mission Dispatcher' ],[ 63.00, 63.80, 'Mission Dispatcher' ],[ 41.10, 60.50, 'Mission Dispatcher' ],[ 40.80, 76.80, 'Mission Dispatcher' ],
    [ 56.50, 24.40, 'Mission Dispatcher' ],[ 41.80, 80.90, 'Mission Dispatcher' ],[ 56.40, 36.60, 'Mission Dispatcher' ],[ 80.70, 7.50, 'Mission Dispatcher' ],
    [ 56.20, 15.40, 'Mission Dispatcher' ],[ 74.30, 32.40, 'Mission Dispatcher' ],[ 72.90, 22.60, 'Mission Dispatcher' ],[ 33.70, 79.10, 'Mission Dispatcher' ]
  ]
  for (md = 0; md < MissionDispatchers.length; md++) {
    L.marker([100-MissionDispatchers[md][0], MissionDispatchers[md][1]], { title: "Mission Dispatcher", icon: Icons.MissionDispatcherIcon}).addTo(map).bindPopup(MissionDispatchers[md][2] + '<br />' + MissionDispatchers[md][0].toFixed(1) + ' / ' + MissionDispatchers[md][1].toFixed(1));
  }

  var Glitches = [
    [ 23.80, 53.10, 'Explorer Note HLN-A 11' ],[ 28.20, 42.80, 'Explorer Note HLN-A 30' ],[ 28.90, 80.30, 'Explorer Note HLN-A 7' ],[ 32.40, 80.30, 'Explorer Note HLN-A 7' ],
    [ 32.40, 88.70, 'Explorer Note HLN-A 10' ],[ 33.60, 87.30, 'Explorer Note HLN-A 10' ],[ 33.70, 87.30, 'Explorer Note HLN-A 10' ],[ 34.30, 87.30, 'Explorer Note HLN-A 10' ],
    [ 34.80, 42.80, 'Explorer Note HLN-A 30' ],[ 36.80, 42.80, 'Explorer Note HLN-A 30' ],[ 40.10, 11.10, 'Explorer Note HLN-A 16' ],[ 40.70, 70.20, 'Explorer Note HLN-A 2' ],
    [ 41.10, 15.90, 'Explorer Note HLN-A 13' ],[ 41.40, 8.10, 'Explorer Note HLN-A 16' ],[ 41.80, 62.90, 'Explorer Note HLN-A 2' ],[ 41.80, 77.30, 'Explorer Note HLN-A 2' ],
    [ 43.40, 42.80, 'Explorer Note HLN-A 30' ],[ 45.70, 75.80, 'Explorer Note HLN-A 3' ],[ 45.70, 76.20, 'Explorer Note HLN-A 3' ],[ 46.00, 75.10, 'Explorer Note HLN-A 3' ],
    [ 46.50, 53.10, 'Explorer Note HLN-A 11' ],[ 46.50, 65.80, 'Explorer Note HLN-A 29' ],[ 46.50, 76.20, 'Explorer Note HLN-A 29' ],[ 46.50, 79.90, 'Explorer Note HLN-A 29' ],
    [ 46.50, 90.50, 'Explorer Note HLN-A 29' ],[ 46.60, 27.50, 'Explorer Note HLN-A 22' ],[ 46.60, 62.10, 'Explorer Note HLN-A 29' ],[ 46.60, 86.70, 'Explorer Note HLN-A 29' ],
    [ 46.90, 42.00, 'Explorer Note HLN-A 12' ],[ 47.50, 27.70, 'Explorer Note HLN-A 22' ],[ 49.00, 62.10, 'Explorer Note HLN-A 4' ],[ 49.00, 76.20, 'Explorer Note HLN-A 4' ],
    [ 49.00, 86.70, 'Explorer Note HLN-A 4' ],[ 49.10, 62.10, 'Explorer Note HLN-A 8' ],[ 49.10, 76.20, 'Explorer Note HLN-A 8' ],[ 49.10, 86.70, 'Explorer Note HLN-A 8' ],
    [ 49.40, 61.10, 'Explorer Note HLN-A 4' ],[ 49.40, 63.00, 'Explorer Note HLN-A 4' ],[ 49.40, 75.20, 'Explorer Note HLN-A 4' ],[ 49.40, 77.10, 'Explorer Note HLN-A 4' ],
    [ 49.40, 85.70, 'Explorer Note HLN-A 4' ],[ 49.40, 87.70, 'Explorer Note HLN-A 4' ],[ 49.50, 26.70, 'Explorer Note HLN-A 22' ],[ 50.50, 61.10, 'Explorer Note HLN-A 4' ],
    [ 50.50, 63.10, 'Explorer Note HLN-A 4' ],[ 50.50, 75.10, 'Explorer Note HLN-A 4' ],[ 50.50, 77.20, 'Explorer Note HLN-A 4' ],[ 50.50, 85.70, 'Explorer Note HLN-A 4' ],
    [ 50.50, 87.80, 'Explorer Note HLN-A 4' ],[ 50.60, 41.90, 'Explorer Note HLN-A 12' ],[ 50.60, 53.10, 'Explorer Note HLN-A 11' ],[ 51.50, 37.90, 'Explorer Note HLN-A 15' ],
    [ 52.80, 37.50, 'Explorer Note HLN-A 15' ],[ 54.10, 42.80, 'Explorer Note HLN-A 30' ],[ 55.70, 26.90, 'Explorer Note HLN-A 17' ],[ 55.70, 27.90, 'Explorer Note HLN-A 17' ],
    [ 55.70, 28.80, 'Explorer Note HLN-A 17' ],[ 56.20, 13.80, 'Explorer Note HLN-A 16' ],[ 56.30, 27.90, 'Explorer Note HLN-A 23' ],[ 56.90, 27.70, 'Explorer Note HLN-A 23' ],
    [ 56.90, 28.10, 'Explorer Note HLN-A 23' ],[ 57.60, 27.90, 'Explorer Note HLN-A 23' ],[ 57.90, 36.00, 'Explorer Note HLN-A 14' ],[ 57.90, 36.00, 'Explorer Note HLN-A 14' ],
    [ 58.30, 27.20, 'Explorer Note HLN-A 18' ],[ 58.30, 28.60, 'Explorer Note HLN-A 18' ],[ 58.40, 27.90, 'Explorer Note HLN-A 18' ],[ 59.10, 36.20, 'Explorer Note HLN-A 14' ],
    [ 59.50, 79.20, 'Explorer Note HLN-A 6' ],[ 59.60, 29.10, 'Explorer Note HLN-A 24' ],[ 59.60, 30.00, 'Explorer Note HLN-A 16' ],[ 59.60, 79.30, 'Explorer Note HLN-A 6' ],
    [ 59.80, 82.90, 'Explorer Note HLN-A 9' ],[ 60.00, 11.10, 'Explorer Note HLN-A 16' ],[ 60.10, 80.10, 'Explorer Note HLN-A 6' ],[ 60.10, 80.20, 'Explorer Note HLN-A 6' ],
    [ 60.20, 81.90, 'Explorer Note HLN-A 9' ],[ 60.30, 28.50, 'Explorer Note HLN-A 24' ],[ 60.40, 27.40, 'Explorer Note HLN-A 24' ],[ 60.80, 28.00, 'Explorer Note HLN-A 19' ],
    [ 60.80, 42.80, 'Explorer Note HLN-A 30' ],[ 60.80, 83.60, 'Explorer Note HLN-A 9' ],[ 61.00, 25.80, 'Explorer Note HLN-A 21' ],[ 61.00, 27.00, 'Explorer Note HLN-A 21' ],
    [ 61.10, 78.30, 'Explorer Note HLN-A 6' ],[ 61.20, 26.10, 'Explorer Note HLN-A 25' ],[ 61.20, 26.80, 'Explorer Note HLN-A 19' ],[ 61.20, 78.20, 'Explorer Note HLN-A 6' ],
    [ 61.40, 24.90, 'Explorer Note HLN-A 21' ],[ 61.90, 28.00, 'Explorer Note HLN-A 25' ],[ 62.00, 29.00, 'Explorer Note HLN-A 26' ],[ 62.10, 26.50, 'Explorer Note HLN-A 27' ],
    [ 62.10, 41.10, 'Explorer Note HLN-A 16' ],[ 62.30, 9.20, 'Explorer Note HLN-A 16' ],[ 62.40, 10.20, 'Explorer Note HLN-A 16' ],[ 62.40, 10.70, 'Explorer Note HLN-A 16' ],
    [ 62.70, 11.40, 'Explorer Note HLN-A 16' ],[ 62.80, 42.80, 'Explorer Note HLN-A 30' ],[ 62.90, 25.60, 'Explorer Note HLN-A 20' ],[ 63.00, 27.60, 'Explorer Note HLN-A 27' ],
    [ 64.20, 25.60, 'Explorer Note HLN-A 28' ],[ 64.50, 28.90, 'Explorer Note HLN-A 26' ],[ 69.40, 42.80, 'Explorer Note HLN-A 30' ],[ 73.20, 53.10, 'Explorer Note HLN-A 11' ],
    [ 74.10, 72.70, 'Explorer Note HLN-A 5' ],[ 74.90, 72.30, 'Explorer Note HLN-A 5' ],[ 75.60, 76.70, 'Explorer Note HLN-A 5' ],[ 77.10, 70.90, 'Explorer Note HLN-A 5' ],
    [ 78.40, 70.60, 'Explorer Note HLN-A 5' ],[ 78.90, 75.60, 'Explorer Note HLN-A 5' ],[ 79.90, 74.40, 'Explorer Note HLN-A 5' ]
  ]
  for (md = 0; md < Glitches.length; md++) {
    L.marker([100-Glitches[md][0], Glitches[md][1]], { title: Glitches[md][2], icon: Icons.GlitchIcon}).addTo(map).bindPopup(Glitches[md][2] +' <br />' + Glitches[md][0].toFixed(1) + ' / ' + Glitches[md][1].toFixed(1))
  }

  var Notes = [
    [ 16.70, 89.50, 'Explorer Note Nida 21' ],[ 17.60, 71.20, 'Explorer Note Nida 3' ],[ 18.10, 39.50, 'Explorer Note Santiago 15' ],[ 19.00, 12.10, 'Explorer Note Santiago 20' ],
    [ 20.50, 31.30, 'Explorer Note Santiago 16' ],[ 21.30, 21.20, 'Explorer Note Gabriel 24' ],[ 22.10, 26.60, 'Explorer Note Santiago 19' ],
    [ 23.50, 91.30, 'Explorer Note Gabriel 9' ],[ 23.60, 60.30, 'Explorer Note Nida 16' ],[ 23.70, 43.60, 'Explorer Note Gabriel 21' ],[ 23.70, 9.30, 'Explorer Note Gabriel 23' ],
    [ 24.00, 14.90, 'Explorer Note Santiago 21' ],[ 24.00, 75.50, 'Explorer Note Gabriel 8' ],[ 25.00, 35.00, 'Explorer Note Gabriel 25' ],
    [ 27.60, 85.30, 'Explorer Note Nida 6' ],[ 28.20, 63.90, 'Explorer Note Nida 29' ],[ 28.30, 32.00, 'Explorer Note Santiago 17' ],[ 28.50, 22.70, 'Explorer Note Santiago 22' ],
    [ 30.10, 80.00, 'Explorer Note Nida 10' ],[ 30.50, 12.40, 'Explorer Note Santiago 23' ],[ 30.50, 61.40, 'Explorer Note Gabriel 11' ],
    [ 32.20, 19.70, 'Explorer Note Santiago 18' ],[ 32.20, 93.60, 'Explorer Note Gabriel 7' ],[ 33.50, 79.10, 'Explorer Note Nida 7' ],
    [ 33.60, 29.10, 'Explorer Note Gabriel 22' ],[ 34.50, 70.10, 'Explorer Note Gabriel 10' ],[ 35.00, 42.30, 'Explorer Note Gabriel 15' ],
    [ 35.90, 71.90, 'Explorer Note Nida 30' ],[ 36.10, 17.00, 'Explorer Note Santiago 25' ],[ 36.80, 60.30, 'Explorer Note Nida 4' ],[ 37.30, 57.10, 'Explorer Note Nida 15' ],
    [ 37.80, 85.70, 'Explorer Note Nida 11' ],[ 38.00, 10.50, 'Explorer Note Santiago 24' ],[ 38.00, 66.30, 'Explorer Note Nida 20' ],
    [ 39.30, 22.00, 'Explorer Note Santiago 26' ],[ 39.90, 30.40, 'Explorer Note Santiago 27' ],[ 40.90, 76.90, 'Explorer Note Gabriel 13' ],
    [ 43.10, 70.00, 'Explorer Note Nida 22' ],[ 44.30, 10.10, 'Explorer Note Santiago 1' ],[ 44.50, 62.10, 'Explorer Note Nida 26' ],[ 44.70, 42.30, 'Explorer Note Santiago 13' ],
    [ 44.80, 89.20, 'Explorer Note Gabriel 5' ],[ 45.00, 82.70, 'Explorer Note Gabriel 4' ],[ 45.10, 20.30, 'Explorer Note Santiago 14' ],
    [ 45.10, 37.00, 'Explorer Note Santiago 12' ],[ 46.10, 59.80, 'Explorer Note Nida 14' ],[ 46.30, 46.50, 'Explorer Note Gabriel 17' ],[ 48.00, 60.40, 'Explorer Note Nida 1' ],
    [ 48.00, 78.60, 'Explorer Note Gabriel 3' ],[ 48.10, 27.40, 'Explorer Note Gabriel 29' ],[ 48.50, 68.80, 'Explorer Note Gabriel 2' ],
    [ 48.80, 89.70, 'Explorer Note Gabriel 6' ],[ 49.00, 10.30, 'Explorer Note Santiago 2' ],[ 50.20, 24.00, 'Explorer Note Santiago 28' ],
    [ 51.90, 17.20, 'Explorer Note Gabriel 26' ],[ 52.20, 61.50, 'Explorer Note Nida 25' ],[ 54.50, 40.60, 'Explorer Note Santiago 11' ],
    [ 55.00, 41.90, 'Explorer Note Gabriel 16' ],[ 55.00, 80.90, 'Explorer Note Nida 27' ],[ 55.10, 66.40, 'Explorer Note Nida 12' ],[ 56.00, 19.50, 'Explorer Note Santiago 29' ],
    [ 56.80, 91.00, 'Explorer Note Nida 5' ],[ 57.20, 30.50, 'Explorer Note Santiago 10' ],[ 57.50, 27.90, 'Explorer Note Gabriel 30' ],
    [ 58.40, 75.80, 'Explorer Note Gabriel 1' ],[ 59.30, 57.10, 'Explorer Note Nida 24' ],[ 60.00, 7.30, 'Explorer Note Santiago 3' ],[ 63.40, 61.00, 'Explorer Note Nida 17' ],
    [ 63.80, 42.60, 'Explorer Note Nida 23' ],[ 63.90, 20.70, 'Explorer Note Santiago 6' ],[ 64.60, 22.90, 'Explorer Note Gabriel 27' ],[ 65.40, 82.00, 'Explorer Note Nida 18' ],
    [ 65.50, 76.10, 'Explorer Note Nida 9' ],[ 65.90, 14.70, 'Explorer Note Santiago 30' ],[ 66.20, 25.30, 'Explorer Note Santiago 7' ],
    [ 67.00, 67.10, 'Explorer Note Gabriel 12' ],[ 67.20, 30.90, 'Explorer Note Gabriel 20' ],[ 68.90, 9.60, 'Explorer Note Santiago 4' ],
    [ 69.40, 83.10, 'Explorer Note Nida 28' ],[ 69.80, 60.30, 'Explorer Note Nida 8' ],[ 72.20, 65.40, 'Explorer Note Gabriel 14' ],[ 72.30, 40.30, 'Explorer Note Gabriel 18' ],
    [ 73.20, 14.10, 'Explorer Note Gabriel 28' ],[ 73.50, 58.10, 'Explorer Note Nida 13' ],[ 74.40, 35.90, 'Explorer Note Gabriel 19' ],
    [ 77.00, 6.30, 'Explorer Note Santiago 5' ],[ 77.30, 64.50, 'Explorer Note Nida 19' ],[ 78.90, 20.20, 'Explorer Note Santiago 8' ],[ 79.80, 91.70, 'Explorer Note Nida 2' ],
    [ 80.80, 31.20, 'Explorer Note Santiago 9' ]
  ]
  for (md = 0; md < Notes.length; md++) {
    L.marker([100-Notes[md][0], Notes[md][1]], { title: Notes[md][2], icon: Icons.NotesIcon}).addTo(map).bindPopup(Notes[md][2] +' <br />' + Notes[md][0].toFixed(1) + ' / ' + Notes[md][1].toFixed(1))
  }
}