import L from 'leaflet';
import * as Icons from '../../Icons';
let md = 0;

export function TheIsland(map) {
  L.imageOverlay('/Maps/TheIsland.jpg', [[100,100], [200,200]]).addTo(map);

  L.marker([200-25.50, 100+25.60], { title: 'Blue Obelisk', icon: Icons.BlueObeliskIcon}).addTo(map).bindPopup('Blue Obelisk <br /> 25.50, 25.60');
  L.marker([200-59.00, 100+72.30], { title: 'Green Obelisk', icon: Icons.GreenObeliskIcon}).addTo(map).bindPopup('Green Obelisk <br /> 59.00, 72.30');
  L.marker([200-79.80, 100+17.40], { title: 'Red Obelisk', icon: Icons.RedObeliskIcon}).addTo(map).bindPopup('Red Obelisk <br /> 79.80, 17.40');

  var Artifacts = [
    [ 16.10, 84.60, 'Artifact of the Devourer' ],[ 19.60, 18.40, 'Artifact of the Skylord' ],[ 29.90, 26.50, 'Artifact of the Strong' ],
    [ 39.60, 45.90, 'Artifact of the Clever' ],[ 46.40, 83.40, 'Artifact of the Cunning' ],[ 60.90, 22.00, 'Artifact of the Brute' ],
    [ 62.20, 39.60, 'Artifact of the Immune' ],[ 67.10, 86.00, 'Artifact of the Massive' ],[ 73.00, 61.00, 'Artifact of the Pack' ],[ 83.50, 56.00, 'Artifact of the Hunter' ]
  ]
  for (md = 0; md < Artifacts.length; md++) {
    L.marker([200-Artifacts[md][0], 100+Artifacts[md][1]], { title: Artifacts[md][2], icon: Icons.ArtifactIcon}).addTo(map).bindPopup(Artifacts[md][2] +' <br />' + Artifacts[md][0].toFixed(1) + ' / ' + Artifacts[md][1].toFixed(1))
  }

  var LootCrates = [
    [ 24.90, 66.20 ],[ 25.90, 65.90 ],[ 26.80, 65.60 ],[ 27.70, 83.50 ],[ 30.50, 85.90 ],[ 31.10, 79.30 ],[ 32.50, 76.70 ],[ 32.60, 81.00 ],[ 33.80, 72.00 ],[ 34.60, 79.50 ],
    [ 34.90, 81.60 ],[ 35.00, 68.70 ],[ 35.10, 76.80 ],[ 35.10, 84.30 ],[ 36.90, 70.10 ],[ 37.30, 70.70 ],[ 37.90, 71.50 ],[ 41.00, 75.50 ],[ 41.60, 67.70 ],[ 42.10, 26.20 ],
    [ 42.40, 40.40 ],[ 43.00, 68.00 ],[ 43.30, 37.50 ],[ 43.70, 35.60 ],[ 44.20, 54.70 ],[ 44.50, 73.50 ],[ 44.90, 31.10 ],[ 45.50, 42.70 ],[ 45.80, 70.30 ],[ 46.80, 64.40 ],
    [ 47.30, 48.10 ],[ 47.30, 50.10 ],[ 47.40, 38.10 ],[ 47.60, 60.60 ],[ 47.80, 55.50 ],[ 48.40, 74.90 ],[ 49.30, 63.10 ],[ 50.10, 50.20 ],[ 50.10, 52.00 ],[ 50.40, 27.40 ],
    [ 50.40, 27.40 ],[ 52.60, 39.70 ],[ 54.50, 36.10 ],[ 54.50, 57.10 ],[ 54.70, 29.40 ],[ 54.90, 53.70 ],[ 55.10, 45.10 ],[ 56.60, 48.50 ],[ 56.70, 64.30 ],[ 57.00, 27.00 ],
    [ 57.20, 43.50 ],[ 58.10, 59.80 ],[ 58.20, 49.20 ],[ 58.40, 72.20 ],[ 59.20, 59.30 ],[ 59.40, 32.90 ],[ 59.70, 25.50 ],[ 60.10, 49.60 ],[ 60.70, 38.80 ],[ 61.40, 66.30 ],
    [ 61.80, 27.90 ],[ 61.80, 35.60 ],[ 62.20, 49.80 ],[ 62.50, 32.30 ],[ 63.60, 65.00 ],[ 63.90, 43.40 ],[ 64.20, 38.20 ],[ 64.60, 61.60 ],[ 64.70, 60.50 ],[ 64.90, 69.70 ],
    [ 65.10, 46.00 ],[ 65.60, 55.70 ],[ 66.50, 29.90 ],[ 66.90, 44.60 ],[ 67.40, 50.20 ],[ 68.10, 30.40 ],[ 68.30, 63.30 ],[ 68.30, 67.70 ],[ 69.20, 49.20 ],[ 69.30, 55.30 ],
    [ 69.40, 58.20 ],[ 70.20, 39.90 ],[ 72.20, 70.00 ],[ 72.80, 39.00 ],[ 73.00, 56.60 ],[ 73.80, 49.70 ],[ 74.20, 57.90 ],[ 74.50, 63.30 ],[ 74.60, 38.10 ],[ 74.60, 53.80 ],
    [ 74.60, 73.40 ],[ 74.90, 69.60 ],[ 75.20, 60.50 ],[ 26.90, 13.60 ],[ 28.90, 22.80 ],[ 30.80, 16.80 ],[ 31.50, 21.20 ],[ 33.50, 16.90 ],[ 33.90, 20.00 ],[ 35.70, 16.90 ],
    [ 37.80, 18.30 ],[ 39.00, 23.40 ],[ 40.60, 21.70 ],[ 40.90, 16.50 ],[ 42.40, 82.30 ],[ 44.40, 76.40 ],[ 44.80, 80.20 ],[ 46.70, 76.40 ],[ 47.10, 14.90 ],[ 47.50, 83.30 ],
    [ 47.70, 79.70 ],[ 49.70, 16.60 ],[ 50.80, 16.80 ],[ 51.00, 84.00 ],[ 51.10, 14.60 ],[ 51.10, 77.10 ],[ 52.30, 78.50 ],[ 52.90, 21.90 ],[ 53.60, 86.80 ],[ 54.70, 18.40 ],
    [ 55.50, 23.80 ],[ 57.70, 22.90 ],[ 57.70, 81.40 ],[ 57.80, 15.20 ],[ 58.00, 76.80 ],[ 60.30, 85.50 ],[ 60.90, 83.20 ],[ 61.90, 20.30 ],[ 63.20, 82.10 ],[ 64.20, 17.50 ],
    [ 64.40, 21.30 ],[ 65.20, 12.30 ],[ 65.90, 19.40 ],[ 66.30, 76.70 ],[ 66.30, 80.30 ],[ 67.10, 84.60 ],[ 67.80, 22.00 ],[ 68.10, 18.60 ],[ 69.70, 81.90 ],[ 70.20, 12.80 ],
    [ 70.80, 21.80 ],[ 71.30, 86.40 ],[ 72.10, 16.40 ],[ 72.10, 80.70 ],[ 73.50, 77.80 ],[ 73.60, 22.80 ],[ 73.70, 86.20 ],[ 74.80, 19.50 ],[ 77.10, 53.90 ],[ 77.10, 72.40 ],
    [ 77.30, 61.50 ],[ 77.50, 16.50 ],[ 77.50, 50.30 ],[ 77.60, 56.20 ],[ 77.70, 68.50 ],[ 78.60, 17.90 ],[ 78.60, 17.90 ],[ 78.70, 36.90 ],[ 78.90, 27.30 ],[ 79.70, 66.80 ],
    [ 79.80, 16.20 ],[ 79.90, 32.60 ],[ 79.90, 50.60 ],[ 80.10, 44.20 ],[ 80.40, 70.00 ],[ 80.60, 56.10 ],[ 80.70, 62.40 ],[ 81.10, 32.60 ],[ 81.30, 52.80 ],[ 81.50, 65.10 ],
    [ 81.60, 51.40 ],[ 82.40, 20.70 ],[ 82.40, 24.20 ],[ 82.60, 68.30 ],[ 83.00, 50.40 ],[ 83.70, 27.40 ],[ 84.20, 58.50 ],[ 84.50, 18.60 ],[ 84.60, 50.20 ],[ 85.00, 17.70 ],
    [ 85.30, 21.20 ],[ 86.10, 19.60 ],[ 86.20, 27.00 ],[ 86.80, 21.10 ],[ 87.40, 24.90 ],[ 88.90, 22.40 ],[ 13.30, 50.70 ],[ 13.70, 54.60 ],[ 14.00, 86.90 ],[ 14.10, 69.00 ],
    [ 14.70, 81.80 ],[ 15.20, 51.50 ],[ 15.30, 53.20 ],[ 15.40, 19.70 ],[ 15.40, 71.10 ],[ 15.80, 15.70 ],[ 15.90, 33.20 ],[ 16.50, 83.70 ],[ 16.60, 60.80 ],[ 16.90, 42.50 ],
    [ 17.10, 48.80 ],[ 17.50, 66.80 ],[ 17.60, 36.90 ],[ 18.10, 16.70 ],[ 18.20, 29.20 ],[ 18.40, 34.10 ],[ 18.50, 21.90 ],[ 18.50, 55.20 ],[ 18.60, 54.80 ],[ 18.60, 80.80 ],
    [ 19.50, 31.10 ],[ 19.80, 71.70 ],[ 20.10, 85.50 ],[ 20.20, 52.50 ],[ 20.70, 53.70 ],[ 20.90, 28.60 ],[ 21.30, 69.20 ],[ 21.50, 32.90 ],[ 22.70, 69.10 ],[ 22.80, 36.20 ],
    [ 23.60, 38.30 ],[ 23.80, 70.10 ],[ 24.40, 27.30 ],[ 26.00, 30.70 ],[ 26.20, 44.80 ],[ 27.40, 57.60 ],[ 28.00, 35.10 ],[ 28.30, 46.90 ],[ 28.90, 49.80 ],[ 29.30, 53.50 ],
    [ 30.20, 28.00 ],[ 30.40, 41.30 ],[ 32.30, 52.00 ],[ 32.70, 32.20 ],[ 32.70, 38.90 ],[ 33.80, 45.40 ],[ 34.30, 29.70 ],[ 35.00, 35.60 ],[ 35.20, 45.30 ],[ 36.70, 43.80 ],
    [ 38.30, 27.00 ],[ 38.40, 55.10 ],[ 39.80, 25.30 ],[ 39.80, 35.50 ],[ 40.10, 56.00 ],[ 40.60, 49.60 ],[ 84.30, 85.80 ]
  ]
  for (md = 0; md < LootCrates.length; md++) {
    L.marker([200-LootCrates[md][0], 100+LootCrates[md][1]], { title: 'Loot Crate', icon: Icons.LootCrateIcon}).addTo(map).bindPopup('Loot Crate <br />' + LootCrates[md][0].toFixed(1) + ' / ' + LootCrates[md][1].toFixed(1))
  }

  var CaveLootCrates = [
    [ 16.00, 84.10 ],[ 16.00, 84.70 ],[ 16.20, 83.80 ],[ 16.40, 83.70 ],[ 16.50, 84.50 ],[ 17.10, 84.00 ],[ 19.80, 19.00 ],[ 19.90, 18.80 ],[ 20.00, 18.80 ],[ 26.80, 31.10 ],
    [ 27.30, 27.40 ],[ 27.30, 29.90 ],[ 27.40, 28.50 ],[ 27.40, 28.50 ],[ 27.50, 30.70 ],[ 27.90, 24.60 ],[ 28.70, 28.10 ],[ 29.30, 26.80 ],[ 29.80, 24.30 ],[ 30.10, 25.40 ],
    [ 39.20, 46.00 ],[ 39.40, 46.50 ],[ 39.60, 46.70 ],[ 39.70, 46.50 ],[ 39.90, 46.50 ],[ 40.10, 46.40 ],[ 40.50, 47.40 ],[ 40.90, 47.80 ],[ 45.90, 80.70 ],[ 46.00, 82.10 ],
    [ 46.30, 82.40 ],[ 46.90, 79.40 ],[ 46.90, 82.10 ],[ 47.70, 79.20 ],[ 47.80, 83.70 ],[ 48.10, 81.90 ],[ 48.10, 82.80 ],[ 48.90, 80.70 ],[ 49.00, 81.40 ],[ 50.00, 84.40 ],
    [ 58.30, 12.40 ],[ 59.00, 20.70 ],[ 59.00, 21.50 ],[ 59.60, 14.70 ],[ 59.80, 21.40 ],[ 60.00, 17.00 ],[ 60.00, 18.00 ],[ 60.40, 21.70 ],[ 60.50, 16.20 ],[ 60.70, 22.50 ],
    [ 60.90, 39.80 ],[ 61.10, 39.70 ],[ 61.20, 21.30 ],[ 61.20, 41.20 ],[ 61.30, 22.00 ],[ 61.40, 40.70 ],[ 61.60, 39.70 ],[ 61.70, 16.00 ],[ 62.50, 40.30 ],[ 66.70, 85.50 ],
    [ 67.40, 85.60 ],[ 67.60, 87.00 ],[ 68.00, 83.70 ],[ 68.20, 87.30 ],[ 68.50, 83.40 ],[ 68.60, 60.80 ],[ 68.70, 83.50 ],[ 68.70, 86.20 ],[ 68.70, 87.00 ],[ 69.00, 60.90 ],
    [ 69.10, 84.70 ],[ 69.50, 60.90 ],[ 70.80, 84.40 ],[ 71.00, 84.50 ],[ 71.00, 84.50 ],[ 71.20, 59.50 ],[ 71.20, 60.90 ],[ 71.50, 60.80 ],[ 71.60, 59.10 ],[ 72.30, 62.60 ],
    [ 72.50, 62.80 ],[ 72.60, 59.50 ],[ 73.70, 62.60 ],[ 74.60, 60.90 ],[ 82.80, 51.90 ],[ 83.50, 54.20 ],[ 83.90, 51.30 ],[ 84.00, 52.70 ],[ 84.10, 51.70 ],[ 84.20, 52.10 ],
    [ 84.80, 53.70 ],[ 85.00, 54.70 ],[ 85.20, 53.40 ]
  ]
  for (md = 0; md < CaveLootCrates.length; md++) {
    L.marker([200-CaveLootCrates[md][0], 100+CaveLootCrates[md][1]], { title: 'Cave Loot Crate', icon: Icons.CaveLootCrateIcon}).addTo(map).bindPopup('Cave Loot Crate <br />' + CaveLootCrates[md][0].toFixed(1) + ' / ' + CaveLootCrates[md][1].toFixed(1))
  }

  var Dossiers = [
    [ 75.80, 78.20, 'Dossier: Achatina' ],[ 16.40, 10.90, 'Dossier: Allosaurus in Underwater Cave' ],[ 87.50, 51.50, 'Dossier: Ammonite' ],
    [ 24.60, 40.10, 'Dossier: Anglerfish' ],[ 15.80, 26.70, 'Dossier: Ankylosaurus' ],[ 39.60, 45.80, 'Dossier: Aranaeo in Central Cave' ],
    [ 18.70, 42.80, 'Dossier: Archaeopteryx' ],[ 21.60, 53.90, 'Dossier: Argentavis' ],[ 14.20, 69.10, 'Dossier: Arthropleura' ],[ 30.00, 78.10, 'Dossier: Baryonyx' ],
    [ 52.50, 17.70, 'Dossier: Basilosaurus' ],[ 70.70, 61.10, 'Dossier: Giant Bee' ],[ 14.80, 81.40, 'Dossier: Beelzebufo' ],[ 31.60, 17.10, 'Dossier: Brontosaurus' ],
    [ 10.90, 40.40, 'Dossier: Carbonemys in Underwater Cave' ],[ 33.30, 41.00, 'Dossier: Carnotaurus' ],[ 25.10, 71.80, 'Dossier: Castoroides' ],
    [ 31.30, 28.90, 'Dossier: Chalicotherium' ],[ 49.80, 81.70, 'Dossier: Cnidaria in Caverns of Lost Hope' ],[ 37.00, 49.90, 'Dossier: Coelacanth' ],
    [ 41.20, 49.20, 'Dossier: Compy' ],[ 88.10, 53.00, 'Dossier: Daeodon' ],[ 84.30, 10.20, 'Dossier: Dilophosaur in Underwater Cave' ],
    [ 28.50, 74.20, 'Dossier: Dimetrodon' ],[ 26.60, 70.60, 'Dossier: Dimorphodon' ],[ 27.60, 82.60, 'Dossier: Diplocaulus' ],[ 25.10, 13.50, 'Dossier: Diplodocus' ],
    [ 40.40, 83.80, 'Dossier: Direbear' ],[ 42.50, 20.80, 'Dossier: Direwolf' ],[ 56.70, 21.40, 'Dossier: Dodo' ],[ 47.00, 27.50, 'Dossier: Doedicurus' ],
    [ 16.50, 85.00, 'Dossier: Dung Beetle' ],[ 44.00, 55.20, 'Dossier: Dunkleosteus' ],[ 36.40, 81.40, 'Dossier: Electrophorus' ],
    [ 63.60, 33.40, 'Dossier: Equus' ],[ 44.10, 49.00, 'Dossier: Eurypterid' ],[ 45.60, 62.30, 'Dossier: Gallimimus' ],[ 44.00, 66.40, 'Dossier: Giganotosaurus' ],
    [ 26.60, 23.60, 'Dossier: Gigantopithecus' ],[ 81.70, 84.10, 'Dossier: Hesperornis' ],[ 80.90, 81.90, 'Dossier: Hyaenodon' ],[ 72.80, 64.50, 'Dossier: Ichthyornis' ],
    [ 52.90, 79.80, 'Dossier: Ichthyosaurus' ],[ 62.40, 24.70, 'Dossier: Iguanodon' ],[ 42.50, 79.60, 'Dossier: Kairuku' ],
    [ 82.90, 51.90, 'Dossier: Kaprosuchus in Lower South Cave' ],[ 78.30, 23.60, 'Dossier: Kentrosaurus' ],[ 85.30, 53.40, 'Dossier: Leech in Lower South Cave' ],
    [ 83.10, 23.50, 'Dossier: Leedsichthys' ],[ 78.20, 24.40, 'Dossier: Liopleurodon' ],[ 68.60, 59.30, 'Dossier: Lystrosaurus in Upper South Cave' ],
    [ 71.30, 59.80, 'Dossier: Mammoth in Upper South Cave' ],[ 68.90, 86.20, 'Dossier: Manta in South East Cave' ],[ 84.40, 84.10, 'Dossier: Megalania' ],
    [ 67.50, 85.60, 'Dossier: Megaloceros in South East Cave' ],[ 41.00, 47.30, 'Dossier: Megalodon in Central Cave' ],
    [ 16.60, 84.10, 'Dossier: Megalosaurus in North East Cave' ],[ 54.30, 41.40, 'Dossier: Meganeura' ],[ 75.00, 21.40, 'Dossier: Megatherium' ],
    [ 16.10, 84.40, 'Dossier: Mesopithecus in North East Cave' ],[ 48.50, 21.60, 'Dossier: Microraptor' ],[ 16.40, 84.50, 'Dossier: Mosasaurus in North East Cave' ],
    [ 64.30, 17.40, 'Dossier: Moschops' ],[ 66.40, 19.70, 'Dossier: Onyc' ],[ 35.70, 59.10, 'Dossier: Otter' ],[ 58.90, 23.10, 'Dossier: Oviraptor' ],
    [ 73.30, 74.10, 'Dossier: Ovis' ],[ 65.50, 40.80, 'Dossier: Pachy' ],[ 77.60, 20.70, 'Dossier: Pachyrhinosaurus' ],[ 65.10, 31.40, 'Dossier: Paraceratherium' ],
    [ 71.50, 32.10, 'Dossier: Parasaur' ],[ 82.20, 62.90, 'Dossier: Pegomastax' ],[ 71.30, 47.20, 'Dossier: Pelagornis' ],[ 72.50, 53.80, 'Dossier: Phiomia' ],
    [ 68.10, 67.60, 'Dossier: Piranha' ],[ 68.40, 59.50, 'Dossier: Plesiosaurus' ],[ 72.30, 78.20, 'Dossier: Procoptodon' ],[ 66.90, 76.80, 'Dossier: Pteranodon' ],
    [ 80.60, 61.90, 'Dossier: Pulmonoscorpius' ],[ 36.60, 34.90, 'Dossier: Purlovia' ],[ 87.40, 23.30, 'Dossier: Quetzal' ],[ 86.80, 25.00, 'Dossier: Raptor' ],
    [ 53.10, 92.50, 'Dossier: Rex in Underwater Cave' ],[ 77.10, 26.10, 'Dossier: Sabertooth' ],[ 87.50, 52.50, 'Dossier: Sabertooth Salmon' ],
    [ 77.90, 42.90, 'Dossier: Sarco' ],[ 75.70, 79.80, 'Dossier: Spino' ],[ 78.30, 79.10, 'Dossier: Stegosaurus' ],[ 62.30, 40.20, 'Dossier: Tapejara in Swamp Cave' ],
    [ 62.20, 40.90, 'Dossier: Terror Bird in Swamp Cave' ],[ 67.60, 48.50, 'Dossier: Therizinosaur' ],[ 32.40, 66.20, 'Dossier: Thylacoleo' ],
    [ 36.10, 92.00, 'Dossier: Titanoboa in Underwater Cave' ],[ 49.30, 11.10, 'Dossier: Titanomyrma in Underwater Cave' ],
    [ 61.80, 40.70, 'Dossier: Titanosaur in Swamp Cave' ],[ 87.40, 91.00, 'Dossier: Triceratops in Underwater Cave' ],
    [ 11.00, 22.10, 'Dossier: Trilobite in Underwater Cave' ],[ 75.00, 78.80, 'Dossier: Troodon' ],[ 59.90, 21.30, 'Dossier: Tusoteuthis in Caverns of Lost Faith' ],
    [ 79.20, 32.30, 'Dossier: Woolly Rhino' ],[ 73.90, 23.60, 'Dossier: Yutyrannus' ]
  ]
  for (md = 0; md < Dossiers.length; md++) {
    L.marker([200-Dossiers[md][0], 100+Dossiers[md][1]], { title: Dossiers[md][2], icon: Icons.DossierIcon}).addTo(map).bindPopup(Dossiers[md][2] + ' <br />' + Dossiers[md][0].toFixed(1) + ' / ' + Dossiers[md][1].toFixed(1))
  }

  var CaveEntrances = [
    [ 41.60, 47.00, 'Central Cave' ],[ 19.20, 19.00, 'North West Cave' ],[ 80.20, 53.50, 'Lower South Cave' ],[ 14.80, 85.30, 'North East Cave' ],
    [ 68.20, 56.10, 'Upper South Cave' ],[ 70.60, 86.10, 'South East Cave' ],[ 62.70, 37.30, 'Swamp Cave' ],[ 29.10, 31.80, 'Snow Cave' ],
    [ 53.70, 10.40, 'The Caverns of Lost Faith (not on Mobile)' ],[ 45.90, 88.90, 'The Caverns of Lost Hope (not on Mobile)' ],[ 43.20, 39.10, 'Tek Cave (not on Mobile)' ],
    [ 16.00, 10.10, 'Cave Entrance' ],[ 10.00, 21.50, 'Cave Entrance' ],[ 10.40, 39.50, 'Cave Entrance' ],[ 7.90, 90.10, 'Cave Entrance' ],[ 36.30, 91.50, 'Cave Entrance' ],
    [ 50.50, 11.20, 'Cave Entrance' ],[ 83.00, 9.90, 'Cave Entrance' ],[ 90.80, 13.00, 'Cave Entrance' ],[ 89.80, 36.80, 'Cave Entrance' ],[ 90.30, 71.30, 'Cave Entrance' ],
    [ 87.10, 90.20, 'Cave Entrance' ]
  ]
  for (md = 0; md < CaveEntrances.length; md++) {
    L.marker([200-CaveEntrances[md][0], 100+CaveEntrances[md][1]], { title: 'Cave Entrance: ' + CaveEntrances[md][2], icon: Icons.CaveEntranceIcon}).addTo(map).bindPopup(CaveEntrances[md][2] + ' <br />' + CaveEntrances[md][0].toFixed(1) + ' / ' + CaveEntrances[md][1].toFixed(1))
  }

  var DeepSeaCaveLoot = [
    [ 7.90, 80.30 ],[ 8.20, 91.20 ],[ 9.60, 61.80 ],[ 10.10, 9.40 ],[ 10.70, 29.90 ],[ 10.90, 40.40 ],[ 21.80, 78.60 ],[ 23.80, 86.30 ],[ 34.80, 8.20 ],[ 51.30, 11.20 ],
    [ 59.20, 7.60 ],[ 86.60, 9.10 ],[ 89.80, 90.60 ],[ 90.90, 11.40 ],[ 91.40, 34.90 ],[ 91.80, 69.90 ]
  ]
  for (md = 0; md < DeepSeaCaveLoot.length; md++) {
    L.marker([200-DeepSeaCaveLoot[md][0], 100+DeepSeaCaveLoot[md][1]], { title: 'Deep Sea Loot Crate', icon: Icons.DeepSeaLootCrateIcon}).addTo(map).bindPopup('Deep Sea Loot Crate <br />' + DeepSeaCaveLoot[md][0].toFixed(1) + ' / ' + DeepSeaCaveLoot[md][1].toFixed(1))
  }

  var Glitches = [
    [ 27.85, 27.68, 'HLN-A Discovery #3' ],[ 27.91, 27.39, 'HLN-A Discovery #3' ],[ 28.02, 27.47, 'HLN-A Discovery #3' ],[ 27.98, 27.67, 'HLN-A Discovery #3' ],
    [ 70.39, 59.27, 'HLN-A Discovery #2' ],[ 61.22, 21.34, 'Genesis 2 Chronicles #5' ],[ 68.73, 85.91, 'HLN-A Discovery #1' ],[ 48.31, 80.26, 'Genesis 2 Chronicles #2' ],
    [ 83.10, 53.75, 'Genesis 2 Chronicles #3' ],[ 15.44, 85.07, 'Genesis 2 Chronicles #4' ],[ 19.68, 19.03, 'Genesis 2 Chronicles #1' ]
  ]
  for (md = 0; md < Glitches.length; md++) {
    L.marker([200-Glitches[md][0], 100+Glitches[md][1]], { title: Glitches[md][2], icon: Icons.GlitchIcon}).addTo(map).bindPopup(Glitches[md][2] +' <br />' + Glitches[md][0].toFixed(1) + ' / ' + Glitches[md][1].toFixed(1))
  }

  var Notes = [
    [ 8.50, 90.90, 'Note: Helena Note #1 in Underwater Cave' ],[ 91.80, 71.30, 'Note: Helena Note #2 in Underwater Cave' ],
    [ 91.00, 36.20, 'Note: Helena Note #3 in Underwater Cave' ],[ 90.60, 13.10, 'Note: Helena Note #4 in Underwater Cave' ],[ 81.50, 44.70, 'Note: Helena Note #5' ],
    [ 77.20, 76.40, 'Note: Helena Note #6' ],[ 78.80, 27.70, 'Note: Helena Note #7' ],[ 61.20, 81.50, 'Note: Helena Note #8' ],
    [ 49.40, 79.20, 'Note: Helena Note #9 in Caverns of Lost Hope' ],[ 52.40, 59.00, 'Note: Helena Note #10' ],[ 69.80, 61.40, 'Note: Helena Note #11 in Upper South Cave' ],
    [ 84.10, 52.10, 'Note: Helena Note #12 in Lower South Cave' ],[ 55.20, 27.70, 'Note: Helena Note #13' ],[ 26.30, 62.90, 'Note: Helena Note #14' ],
    [ 34.10, 56.10, 'Note: Helena Note #15' ],[ 40.70, 26.10, 'Note: Helena Note #16' ],[ 76.80, 77.30, 'Note: Helena Note #17' ],[ 76.60, 70.70, 'Note: Helena Note #18' ],
    [ 25.10, 44.60, 'Note: Helena Note #19' ],[ 19.20, 49.90, 'Note: Helena Note #20' ],[ 12.60, 49.30, 'Note: Helena Note #21' ],[ 24.90, 60.90, 'Note: Helena Note #22' ],
    [ 23.90, 65.30, 'Note: Helena Note #23' ],[ 28.90, 23.20, 'Note: Helena Note #24' ],[ 36.20, 22.40, 'Note: Helena Note #25' ],[ 27.70, 56.40, 'Note: Helena Note #26' ],
    [ 26.00, 25.60, 'Note: Helena Note #27' ],[ 22.30, 23.40, 'Note: Helena Note #28' ],[ 16.30, 81.20, 'Note: Helena Note #29' ],
    [ 19.20, 77.10, 'Note: Helena Note #30 in Tek Cave ascension area' ],[ 25.00, 18.90, 'Note: Meiyin Note #1' ],[ 15.20, 20.70, 'Note: Meiyin Note #2' ],
    [ 15.80, 52.50, 'Note: Meiyin Note #3' ],[ 19.80, 30.10, 'Note: Meiyin Note #4' ],[ 26.60, 16.40, 'Note: Meiyin Note #5' ],[ 16.80, 29.00, 'Note: Meiyin Note #6' ],
    [ 21.30, 30.00, 'Note: Meiyin Note #7' ],[ 32.50, 16.10, 'Note: Meiyin Note #8' ],[ 47.20, 81.60, 'Note: Meiyin Note #9 in Caverns of Lost Hope' ],
    [ 27.30, 43.90, 'Note: Meiyin Note #10' ],[ 20.50, 40.80, 'Note: Meiyin Note #11' ],[ 12.80, 54.50, 'Note: Meiyin Note #12' ],[ 21.30, 40.90, 'Note: Meiyin Note #13' ],
    [ 15.30, 53.20, 'Note: Meiyin Note #14' ],[ 26.80, 39.70, 'Note: Meiyin Note #15' ],[ 34.40, 29.40, 'Note: Meiyin Note #16' ],[ 28.00, 33.90, 'Note: Meiyin Note #17' ],
    [ 26.60, 51.70, 'Note: Meiyin Note #18' ],[ 39.00, 44.10, 'Note: Meiyin Note #19' ],[ 39.10, 71.10, 'Note: Meiyin Note #20' ],[ 32.40, 73.30, 'Note: Meiyin Note #21' ],
    [ 30.10, 82.40, 'Note: Meiyin Note #22' ],[ 40.20, 78.80, 'Note: Meiyin Note #23' ],[ 50.50, 23.30, 'Note: Meiyin Note #24' ],[ 42.60, 23.00, 'Note: Meiyin Note #25' ],
    [ 52.40, 17.40, 'Note: Meiyin Note #26' ],[ 22.10, 9.70, 'Note: Meiyin Note #27' ],[ 23.50, 37.80, 'Note: Meiyin Note #28' ],[ 18.20, 38.00, 'Note: Meiyin Note #29' ],
    [ 39.90, 40.60, 'Note: Meiyin Note #30' ],[ 13.30, 73.90, 'Note: Meiyin Note #31 in Tek Cave ascension area' ],[ 22.40, 68.50, 'Note: Nerva Note #1' ],
    [ 35.70, 78.10, 'Note: Nerva Note #2' ],[ 39.50, 24.50, 'Note: Nerva Note #3' ],[ 41.20, 68.00, 'Note: Nerva Note #4' ],[ 45.40, 31.50, 'Note: Nerva Note #5' ],
    [ 49.40, 79.00, 'Note: Nerva Note #6' ],[ 47.80, 60.90, 'Note: Nerva Note #7' ],[ 52.50, 49.10, 'Note: Nerva Note #8' ],
    [ 58.20, 19.80, 'Note: Nerva Note #9 in Caverns of Lost Faith' ],[ 51.40, 54.60, 'Note: Nerva Note #10' ],[ 82.70, 27.10, 'Note: Nerva Note #11' ],
    [ 77.40, 16.40, 'Note: Nerva Note #12' ],[ 69.60, 84.60, 'Note: Nerva Note #13' ],[ 72.30, 59.20, 'Note: Nerva Note #14' ],[ 62.10, 20.40, 'Note: Nerva Note #15' ],
    [ 53.70, 77.80, 'Note: Nerva Note #16' ],[ 43.30, 69.30, 'Note: Nerva Note #17' ],[ 57.90, 32.20, 'Note: Nerva Note #18' ],[ 43.40, 31.00, 'Note: Nerva Note #19' ],
    [ 50.60, 38.50, 'Note: Nerva Note #20' ],[ 54.80, 70.80, 'Note: Nerva Note #21' ],[ 43.60, 61.00, 'Note: Nerva Note #22' ],[ 45.40, 68.40, 'Note: Nerva Note #23' ],
    [ 44.10, 77.00, 'Note: Nerva Note #24' ],[ 55.20, 75.90, 'Note: Nerva Note #25' ],[ 73.80, 17.60, 'Note: Nerva Note #26' ],[ 56.20, 51.10, 'Note: Nerva Note #27' ],
    [ 47.90, 47.50, 'Note: Nerva Note #28' ],[ 71.20, 58.00, 'Note: Nerva Note #29' ],[ 43.00, 39.20, 'Note: Nerva Note #30' ],[ 25.30, 73.10, 'Note: Rockwell Record #1' ],
    [ 83.20, 24.80, 'Note: Rockwell Record #2' ],[ 54.80, 13.80, 'Note: Rockwell Record #3' ],[ 14.10, 85.90, 'Note: Rockwell Record #4' ],
    [ 21.30, 69.20, 'Note: Rockwell Record #5' ],[ 46.40, 83.70, 'Note: Rockwell Record #6 in Caverns of Lost Hope' ],[ 44.10, 81.40, 'Note: Rockwell Record #7' ],
    [ 64.50, 34.10, 'Note: Rockwell Record #8' ],[ 61.70, 16.10, 'Note: Rockwell Record #9 in Caverns of Lost Faith' ],[ 75.70, 71.50, 'Note: Rockwell Record #10' ],
    [ 80.00, 67.10, 'Note: Rockwell Record #11' ],[ 82.60, 51.30, 'Note: Rockwell Record #12' ],[ 64.10, 61.60, 'Note: Rockwell Record #13' ],
    [ 58.60, 49.00, 'Note: Rockwell Record #14' ],[ 70.20, 32.00, 'Note: Rockwell Record #15' ],[ 69.50, 24.80, 'Note: Rockwell Record #16' ],
    [ 40.80, 47.70, 'Note: Rockwell Record #17 in Central Cave' ],[ 68.70, 86.10, 'Note: Rockwell Record #18 in South East Cave' ],[ 83.80, 27.70, 'Note: Rockwell Record #19' ],
    [ 86.40, 26.70, 'Note: Rockwell Record #20' ],[ 77.10, 31.60, 'Note: Rockwell Record #21' ],[ 76.00, 46.70, 'Note: Rockwell Record #22' ],
    [ 75.50, 74.00, 'Note: Rockwell Record #23' ],[ 76.50, 68.10, 'Note: Rockwell Record #24' ],[ 75.00, 65.60, 'Note: Rockwell Record #25' ],
    [ 75.80, 75.50, 'Note: Rockwell Record #26' ],[ 20.10, 85.90, 'Note: Rockwell Record #27' ],[ 78.30, 47.30, 'Note: Rockwell Record #28' ],
    [ 14.20, 75.60, 'Note: Rockwell Record #29 in Tek Cave ascension area' ],[ 23.70, 78.20, 'Note: ??? #1 in Overseer Arena' ],[ 36.20, 79.00, 'Note: ??? #4' ],
    [ 75.60, 60.50, 'Note: ??? #7' ],[ 44.40, 23.70, 'Note: ??? #10' ],[ 89.20, 24.40, 'Note: ??? #13' ]
  ]
  for (md = 0; md < Notes.length; md++) {
    L.marker([200-Notes[md][0], 100+Notes[md][1]], { title: Notes[md][2], icon: Icons.NotesIcon}).addTo(map).bindPopup(Notes[md][2] +' <br />' + Notes[md][0].toFixed(1) + ' / ' + Notes[md][1].toFixed(1))
  }
}