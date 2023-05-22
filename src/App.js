import 'leaflet/dist/leaflet.css';
import React, { useEffect } from "react";
import L from 'leaflet';
import './App.css';
import MobileDetect from 'mobile-detect';

import * as Config from './_config';
import { Maps } from './Data/Maps/Maps';
import * as Players from './Data/Players/Players';
import * as Bases from './Data/Bases/Bases';
import * as Traps from './Data/Traps/Traps';
import * as Beds from './Data/Beds/Beds';
import * as TekTeleporters from './Data/TekTeleporters/TekTeleporters';

// import * as Version from './Data/Version';

var map;
var allMarkers;
let allMarkersCount = 0;

function App() {

  // Initiate Map
  useEffect(() => {
    var container = L.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }

    // define the map
    map = L.map('map', {
      crs: L.CRS.Simple,
      zoomControl: true,
      minZoom: 1,
      maxZoom: 6,
    });

    // set initial map view
    map.setView([100,60], 1);

    Maps(map);

    if (Config.ShowBases === true) {
      Bases.getBases(map, allMarkers, allMarkersCount);
    }

    if (Config.ShowTraps === true) {
      Traps.getTraps(map, allMarkers, allMarkersCount);
    }

    if (Config.ShowBeds === true) {
      Beds.getBeds(map, allMarkers, allMarkersCount);
    }

    if (Config.ShowTekTeleporters === true) {
      TekTeleporters.getTekTeleporters(map, allMarkers, allMarkersCount);
    }

    if (Config.ShowPlayers === true) {
      // Get Player data on load
      Players.getPlayers(map, allMarkers, allMarkersCount);

      // Get Player data every so often
      setInterval(() => {
        Players.getPlayers(map, allMarkers, allMarkersCount);
      }, Config.GetPlayerDataTimer * 1000);
    }

    var MD = new MobileDetect(window.navigator.userAgent);
    if (!MD.phone()) {
      // Get all markers
      const _MarkersInView = L.control({ position: "bottomleft" });

      _MarkersInView.onAdd = function () {
        const div = L.DomUtil.create("div", "markers-description");
        L.DomEvent.disableClickPropagation(div);
    
        const markersInView = L.DomUtil.create("div", "markers-in-view");
        markersInView.insertAdjacentHTML(
          "beforeend",
          "Markers in view: <strong>0</strong>"
        );
    
        const allMarkers = L.DomUtil.create("div", "all-markers");
        allMarkers.insertAdjacentHTML(
          "beforeend",
          "All markers on map: <strong>0</strong>"
        );
    
        div.appendChild(markersInView);
        div.appendChild(allMarkers);
        return div;
      };

      _MarkersInView.addTo(map);

      // ------------------------------------------
      // count all markers on map
      allMarkers = document.querySelector(".all-markers strong");

      function allMarkersOnMap() {
        // loop through all layers
        map.eachLayer((layer) => {
          // if layer is a marker
          if (layer instanceof L.Marker) {
            // increase counter
            allMarkersCount++;
          }
        });

        // update counter
        allMarkers.textContent = allMarkersCount;
      }
      // call function
      allMarkersOnMap();

      // ------------------------------------------
      // count markers in view

      function markersInView() {
        // get map bounds
        const mapBounds = map.getBounds();

        const markersInView = document.querySelector(".markers-in-view strong");
        let markersInViewCount = 0;

        // loop through all layers
        map.eachLayer((layer) => {
          // if layer is a marker
          if (layer instanceof L.Marker) {
            // if marker is in map bounds
            if (mapBounds.contains(layer.getLatLng())) {

              // add class animation to marker
              // when marker is clicked
              layer.on("click", () => {
                layer._icon.classList.add("animation");
              });

              // remove class when popup is closed
              layer.on("popupclose", () => {
                layer._icon.classList.remove("animation");
              });

              // increase counter
              markersInViewCount++;
            }
          }
        });

        // update counter
        markersInView.textContent = markersInViewCount;
      }
      // call function
      markersInView();

      map.on("moveend", function () {
        markersInView();
      });

      // Map Legend
      var mapLegend = L.control({position: 'topleft'});
      mapLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'map-legend');
        var labels = ['<strong>Map Legend</strong>']
        var keys = [
          // Obelisks
          [ 'Red Obelisk', 'RedObelisk', 'RedObelisk' ],
          [ 'Blue Obelisk', 'BlueObelisk', 'BlueObelisk' ],
          [ 'Green Obelisk', 'GreenObelisk', 'GreenObelisk' ],
        
          // Terminals
          [ 'Terminal', 'Glitch', 'Terminal' ],
          [ 'City Terminal', 'MissionDispatcher', 'CityTerminal' ],
          [ 'Rockwell Prime Terminal', 'Glitch', 'RockwellPrimeTerminal' ],
          [ 'Mission Dispatcher', 'MissionDispatcher', 'MissionDispatcher' ],

          // Loot Crates
          [ 'Beacon Loot Crate', 'LootCrate', 'LootCrate' ],
          [ 'Cave Loot Crate', 'CaveLootCrate', 'CaveLootCrate' ],
          [ 'Dungeon Loot Crate', 'DungeonLootCrate', 'DungeonLootCrate' ],
          [ 'Desert Loot Crate', 'DeepSeaLootCrate', 'DesertLootCrate' ],
          [ 'Deep Sea Loot Crate', 'DeepSeaLootCrate', 'DeepSeaLootCrate' ],
          [ 'Orbital Supply Drop', 'LootCrate', 'OrbitalSupplyDrop' ],

          // Veins
          [ 'Gas Vein', 'Glitch', 'GasVein' ],
          [ 'Element Vein', 'LootCrate', 'ElementVein' ],

          // Nests
          [ 'Wyvern Nest', 'WyvernNest', 'WyvernNest' ],
          [ 'Ice Wyvern Nest', 'IceWyvernNest', 'IceWyvernNest' ],
          [ 'Magmasaur Nest', 'MagmasaurNest', 'MagmasaurNest' ],
          [ 'Rock Drake Nest', 'RockDrakeNest', 'RockDrakeNest' ],
          [ 'Deinonychus Nest', 'Glitch', 'DeinonychusNest' ],

          // Nodes
          [ 'Hypercharge Node', 'HyperchargeNode', 'HyperchargeNode' ],
          [ 'Charge Node', 'CaveLootCrate', 'ChargeNode' ],

          // Points of Interests
          [ 'Rune', 'Rune', 'Rune' ],
          [ 'Notes', 'Glitch', 'Notes' ],
          [ 'Glitch', 'Glitch', 'Glitch' ],
          [ 'Dossier', 'Dossier', 'Dossier' ],
          [ 'Point Of Interest', 'Glitch', 'PointOfInterest' ],

          // Others
          [ 'Underwater Dome', 'CaveEntrance', 'UnderwaterDome' ],
          [ 'Artifact', 'Artifact', 'Artifact' ],
          [ 'Beaver Dam', 'BeaverDam', 'BeaverDam' ],
          [ 'Shipwreck', 'Shipwreck', 'Shipwreck' ],
          [ 'Cave Entrance', 'CaveEntrance', 'CaveEntrance' ],
          [ 'Plant Species Z', 'DeepSeaLootCrate', 'PlantSpeciesZ' ],

          // Custom Features
          [ 'Home', 'Home', 'Home' ],
          [ 'Trap', 'Trap', 'Trap' ],
          [ 'Bed', 'SimpleBed', 'Bed' ],
          [ 'Tek Teleporter', 'TekTeleporter', 'TekTeleporter'],
          [ 'Player', 'Implant', 'Player' ]
        ];

        for (var i = 0; i < keys.length; i++) {
          div.innerHTML += labels.push(
            `<div id="map-legend-item-marker-${keys[i][2]}"><img id="map-legend-marker" src="/Markers/${keys[i][1]}.png" alt="" width="20px" height="20px"><span id="map-legend-marker-text map-legend-marker-text-${keys[i][2]}">${(keys[i][0] ? keys[i][0] : '+')}</span><input id="map-legend-marker-checkbox-${keys[i][2]}" type="checkbox" onclick="$('img.leaflet-marker-icon.${keys[i][2]}.leaflet-zoom-animated.leaflet-interactive').toggle();" checked></div>`
          );
        }
        div.innerHTML = "<div>Warning: Cant scroll with mouse.</div></br>" + labels.join('');
        return div;
      };
      mapLegend.addTo(map);
    }

    // DigitalOcean
    if (window.location.href.startsWith(Config.ArkDynmapServer) || window.location.href.startsWith("http://localhost")) {
      var digitalOcean = L.control({position: 'topright'});
      digitalOcean.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'digital-ocean');
        div.innerHTML = "<a id='DOPoweredByBadge' href='https://m.do.co/c/2b5167b5ded1'><img id='DOPoweredByBadge' alt='Digital Ocean Powered By Badge' src='/Images/DO_Powered_by_Badge_blue.png' /></a>";
        return div;
      };
      digitalOcean.addTo(map);
    }

    // Give Coords in Console
    map.on('click', function(e){
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
    });

    // <span id='version'><a id='version' href='https://www.github/'>Version: {Version.VersionNumber()}</a></span>
  }, [])

  return (
    <div id="map" style={{ height: "100vh" }}>
      
    </div>
  );
}

export default App;
