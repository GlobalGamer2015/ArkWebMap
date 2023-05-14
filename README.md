# Ark Web Map

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This Multi-Map Web Map was created for Personal Use.

Want to see the Web Map in action? [Click here](http://159.89.228.152/)

It is modified for anyone to use.

[Ark Web Map API](https://github.com/GlobalGamer2015/ArkWebMapApi)

[![](https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.png)](https://m.do.co/c/2b5167b5ded1)

## Requirements
This project requires Ark Dedicated Servers to run on Windows Machines.
- Ark Server API: [Click here](https://gameservershub.com/forums/resources/ark-server-api.12/)
- Extended RCON: [Click here](https://gameservershub.com/forums/resources/extended-rcon.13/)
- A Server to host this project on. I use a [Droplet](https://m.do.co/c/2b5167b5ded1) which is configured to use NodeJS 18.70 on Ubuntu 20.04 Marketplace Image, Basic Droplet Type, and Regular SSD Disk Type at $4 a month.
- Ark Web Map API, if showing Players on Map: [Click here](https://github.com/GlobalGamer2015/ArkWebMapApi)

## Features
- Players - Coordinates are updated every 30 seconds.

### Maps
- Aberration
- Crystal Isles
- Extinction
- Fjordur
- Genesis 1
- Genesis 2
- Lost Island
- Ragnarok
- Scorched Earth
- The Center
- The Island
- Valguero

### Markers with Coords of upto 90% accuracy.

- Red Obelisk
- Blue Obelisk
- Green Obelisk
- Terminal
- City Terminal
- Rockwell Prime Terminal
- Mission Dispatcher
- Beacon Loot Crate
- Cave Loot Crate
- Dungeon Loot Crate
- Desert Loot Crate
- Deep Sea Loot Crate
- Orbital Supply Drop
- Gas Vein
- Element Vein
- Wyvern Nest
- Ice Wyvern Nest
- Magmasaur Nest
- Rock Drake Nest
- Deinonychus Nest
- Hypercharge Node
- Charge Node
- Rune
- Notes
- Glitch
- Dossier
- Point Of Interest
- Underwater Dome
- Artifact
- Beaver Dam
- Shipwreck
- Cave Entrance
- Plant Species Z

### Custom Markers
- Home
- Trap
- Bed
- Tek Teleporter
- Player

# How to use Ark Web Map App

## Data folder in Public/Data

### Bases.json

Example:
```
{ 
  "Aberration": [],
  "CrystalIsles": [],
  "Extinction": [],
  "Fjordur": [],
  "Genesis": [],
  "Genesis2": [{ "NAME": "GG2015's Base", "LAT": 55.50864441379311, "LONG": 76.30779096551724 }],
  "LostIsland": [],
  "Ragnarok": [],
  "ScorchedEarth": [],
  "TheCenter": [],
  "TheIsland": [],
  "Valguero": []
}
```

### Traps.json
Example:
```
{ 
  "Aberration": [],
  "CrystalIsles": [],
  "Extinction": [],
  "Fjordur": [],
  "Genesis": [],
  "Genesis2": [{ "NAME": "Giga Trap", "LAT": 78, "LONG": 62 }, { "NAME": "Giga Trap", "LAT": 77.68, "LONG": 92.04 }, { "NAME": "Giga Trap", "LAT": 70.44, "LONG": 60.57 }],
  "LostIsland": [],
  "Ragnarok": [],
  "ScorchedEarth": [],
  "TheCenter": [],
  "TheIsland": [],
  "Valguero": []
}
```

### TekTeleporters.json
Example:
```
{ 
  "Aberration": [],
  "CrystalIsles": [],
  "Extinction": [],
  "Fjordur": [],
  "Genesis": [],
  "Genesis2": [{ "NAME": "Tek Teleporter", "LAT": 10, "LONG": 10 }],
  "LostIsland": [],
  "Ragnarok": [],
  "ScorchedEarth": [],
  "TheCenter": [],
  "TheIsland": [],
  "Valguero": []
}
```

### Beds.json

Example:
```
{ 
  "Aberration": [],
  "CrystalIsles": [],
  "Extinction": [],
  "Fjordur": [{ "NAME": "GG2015's Artifact / Drop Bed", "LAT": 22.484919875, "LONG": 80.11066600000001}],
  "Genesis": [],
  "Genesis2": [{ "NAME": "GG2015's Artifact / Drop Bed", "LAT": 51.5, "LONG": 53.0}],
  "LostIsland": [],
  "Ragnarok": [],
  "ScorchedEarth": [],
  "TheCenter": [],
  "TheIsland": [],
  "Valguero": []
}
```

## Config in src/_config.js
Example:
```
export var ArkDynmapServer = "http://159.89.228.152";
export var ArkDynmapApiServer = "http://159.89.228.152:11000/api/players/";
export let GetPlayerDataTimer = 30; // Seconds
export var ShowPlayers = true;
export var ShowBases = true;
export var ShowTraps = true;
export var ShowBeds = true;
export var ShowTekTeleporters = true;
export var ActiveServers = [ 'Aberration', 'Extinction', 'Fjordur', 'Genesis2', 'LostIsland', 'ScorchedEarth', 'TheIsland' ];
```

## Hide Markers
Check the following code in:
index.html @ Line 36.
App.css After Line ```body { background-color: black; }```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
