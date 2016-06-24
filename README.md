# discord-WhatToEat

[![Travis CI](https://api.travis-ci.org/manuelgu/discord-WhatToEat.svg)](https://travis-ci.org/manuelgu/discord-WhatToEat)

You don't know what to eat? Simply type ?dinner in any channel and an awesome meal will be suggested to you coming with a quick link!

## Installation
1. Install all dependencies
2. Create a [Discord API key](https://discordapp.com/developers/docs/intro#applications-aka-apps)
3. Clone the repository `git clone https://github.com/manuelgu/discord-WhatToEat.git`
4. Add your application token to the `config.json`  
5. Install using `npm install`, run via `npm start`

## Dependencies
- NodeJS

## Application token
1. Head over to the [applications page](https://discordapp.com/developers/applications/me#top) and create a new application
2. Give your bot a name and hit "Create application"
3. Click "Create a Bot User"
4. After that, head over to `https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot` replacing `CLIENT_ID` with Client/Application ID under "App Details"
5. Add your bot to a server and go back to the applications page
6. Reveal the token and copy it to your config.json file


## Attribution
This bot is powered by [discord.js](https://github.com/hydrabolt/discord.js), the idea and basic code layout was provided by [frdmn](https://github.com/frdmn).
