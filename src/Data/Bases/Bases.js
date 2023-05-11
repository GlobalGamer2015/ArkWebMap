import L from 'leaflet';
import * as Icons from '../Icons';

export function getBases(map, allMarkers, allMarkersCount) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  // This file needs to be updated manually.
  fetch(process.env.PUBLIC_URL+'/Data/Bases.json', requestOptions).then(res => res.json()).then(_maps => {
    // Search the JSON file for each Map data.
    Object.keys(_maps).forEach(_map => {
      // If Map data is more than 1, continue.
      if (_maps[_map].length >= 1) {
        if (_map === "Aberration") {
          _maps[_map].forEach(base => {
            L.marker([200-base['LAT'], base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "CrystalIsles") {
          _maps[_map].forEach(base => {
            L.marker([200-base['LAT'], -100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "Extinction") {
          _maps[_map].forEach(base => {
            L.marker([-base['LAT'], base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "Fjordur") {
          _maps[_map].forEach(base => {
            L.marker([-base['LAT'], -100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "Genesis") {
          _maps[_map].forEach(base => {
            L.marker([100-base['LAT'], -100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "Genesis2") {
          _maps[_map].forEach(base => {
            L.marker([100-base['LAT'], base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "LostIsland") {
          _maps[_map].forEach(base => {
            L.marker([100-base['LAT'], 100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "Ragnarok") {
          _maps[_map].forEach(base => {
            L.marker([300-base['LAT'], -100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "ScorchedEarth") {
          _maps[_map].forEach(base => {
            L.marker([-base['LAT'], 100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "TheCenter") {
          _maps[_map].forEach(base => {
            L.marker([300-base['LAT'], base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "TheIsland") {
          _maps[_map].forEach(base => {
            L.marker([200-base['LAT'], 100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
        if (_map === "Valguero") {
          _maps[_map].forEach(base => {
            L.marker([300-base['LAT'], 100+base['LONG']], { title: base['NAME'], icon: Icons.HomeIcon}).addTo(map).bindPopup(base['NAME'] + ' <br />' + base['LAT'] + ' / ' + base['LONG']);
          })
        }
      }
    })
  })
}