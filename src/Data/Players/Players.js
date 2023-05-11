import L from 'leaflet';
import * as Config from '../../_config';
import * as Icons from '../Icons';

var theMarkerAberration = [];
var theMarkerCrystalIsles = [];
var theMarkerExtinction = [];
var theMarkerFjordur = [];
var theMarkerGenesis1 = [];
var theMarkerGenesis2 = [];
var theMarkerLostIsland = [];
var theMarkerRagnarok = [];
var theMarkerScorchedEarth = [];
var theMarkerTheCenter = [];
var theMarkerTheIsland = [];
var theMarkerValguero = [];

var shift_x;
var shift_y;

var mult_x;
var mult_y;

var La = 0;
var Lo = 0;

export function getPlayers(map, allMarkers, allMarkersCount) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  Config.ActiveServers.forEach(server => {
    fetch(`${Config.ArkDynmapApiServer}${server}`, requestOptions).then(res => res.json()).then(res => {
      const data = res;
      const mapData = data["map"];

      Config.ActiveServers.forEach(serverMap => {
        if (mapData === "Aberration") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 8000;
          mult_y = 8000;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "CrystalIsles") {
          shift_x = 48.75;
          shift_y = 50;

          mult_x = 16000;
          mult_y = 70000;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "Extinction") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 8000;
          mult_y = 8000;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "Fjordur") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 8000;
          mult_y = 8000;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "Genesis1") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 10500;
          mult_y = 10500;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "Genesis2") {
          shift_x = 49.655;
          shift_y = 49.655;

          mult_x = 14500;
          mult_y = 14500;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "LostIsland") {
          shift_x = 51.634;
          shift_y = 49.02;

          mult_x = 15300;
          mult_y = 15300;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "Ragnarok") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 13100;
          mult_y = 13100;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "ScorchedEarth") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 8000;
          mult_y = 8000;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "TheCenter") {
          shift_x = 55.1;
          shift_y = 30.34;

          mult_x = 9600;
          mult_y = 9584;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "TheIsland") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 8000;
          mult_y = 8000;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
        if (mapData === "Valguero") {
          shift_x = 50;
          shift_y = 50;

          mult_x = 8160;
          mult_y = 8160;

          AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y);
        }
      })

      function AddPlayers(mapData, data, shift_x, shift_y, mult_x, mult_y) {
        const players = data["players"].split('\n');

        if (mapData === "Aberration") {
          map.eachLayer(layer => {
            theMarkerAberration.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerAberration.push(L.marker([200-Lo, La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "CrystalIsles") {
          map.eachLayer(layer => {
            theMarkerCrystalIsles.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerCrystalIsles.push(L.marker([200-Lo, -100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "Extinction") {
          map.eachLayer(layer => {
            theMarkerExtinction.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerExtinction.push(L.marker([-Lo, La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "Fjordur") {
          map.eachLayer(layer => {
            theMarkerFjordur.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerFjordur.push(L.marker([-Lo, -100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "Genesis1") {
          map.eachLayer(layer => {
            theMarkerGenesis1.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerGenesis1.push(L.marker([100-Lo, -100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "Genesis2") {
          map.eachLayer(layer => {
            theMarkerGenesis2.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerGenesis2.push(L.marker([100-Lo, La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "LostIsland") {
          map.eachLayer(layer => {
            theMarkerLostIsland.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerLostIsland.push(L.marker([100-Lo, 100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "Ragnarok") {
          map.eachLayer(layer => {
            theMarkerRagnarok.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerRagnarok.push(L.marker([300-Lo, -100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "ScorchedEarth") {
          map.eachLayer(layer => {
            theMarkerScorchedEarth.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)

              theMarkerScorchedEarth.push(L.marker([-Lo, 100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "TheCenter") {
          map.eachLayer(layer => {
            theMarkerTheCenter.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerTheCenter.push(L.marker([300-Lo, La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "TheIsland") {
          map.eachLayer(layer => {
            theMarkerTheIsland.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)

              theMarkerTheIsland.push(L.marker([200-Lo, 100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
        if (mapData === "Valguero") {
          map.eachLayer(layer => {
            theMarkerValguero.forEach(marker => {
              if (marker !== undefined) {
                if (layer._leaflet_id === marker._leaflet_id) {
                  // allMarkersCount--;
                  // allMarkers.textContent = allMarkersCount;
                  map.removeLayer(marker);
                }
              };
            })
          })

          players.forEach(player => {
            if (player !== "") {
              const oldPlayer = player.split(",");
              const playerInfo = oldPlayer[0].split(" - ");
              const positions = oldPlayer[1].split(" ");
  
              var newPlayer = {
                "Name": playerInfo[0],
                "Tribe": playerInfo[1].replace("(", "").replace(")", ""),
                "X": positions[1].replace("X=", ""),
                "Y": positions[2].replace("Y=", "")
              }

              var mark = [
                [newPlayer["X"], newPlayer["Y"], 'player', 'darkblue', newPlayer["Name"], newPlayer["Tribe"]]
              ];

              La = shift_x + (mark[0][0] / mult_y)
              Lo = shift_y + (mark[0][1] / mult_x)
            
              theMarkerValguero.push(L.marker([300-Lo, 100+La], {title: mark[0][4], icon: Icons.PlayerIcon}).addTo(map).bindPopup(mark[0][4] + '<br />' + mark[0][5] + '<br />' + Lo + ' / ' + La));            
              // allMarkersCount++;
              // allMarkers.textContent = allMarkersCount;
            }
          })
        }
      }
    })
  })
}