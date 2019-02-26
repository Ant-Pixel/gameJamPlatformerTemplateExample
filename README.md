<div align="center"><img src="https://phaser.io/images/img3.png"></div>

## How to install the game
- Install git
    - Here's an installion guide for [git](https://www.atlassian.com/git/tutorials/install-git)
- Install github (optional)
    - Here's a link to installing  the desktop version of [github](https://desktop.github.com/)
- Install nodeJs
    - This will automatically install npm which is used to run the game
    - Linux/Ubuntu/Debian command to install nodeJs is `sudo apt-get install nodejs npm`
    - Here's a guide for the [Windows Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    - Here's a guide for the [Mac Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- Inside commandline navigate to "eansPhaserBoilerPlate" folder
    - This should be achieved by entering `cd apGameJamTemplate`
- In command line run `npm install`
    - Our backend uses nodejs so this will install the resources our projects needs to run independently

## How to run the game
- On the command line navigate to "apGameJamTemplate" folder (if you're not already there)
    - This should be achieved by entering `cd apGameJamTemplate`
- On command line run `npm start`
    - This script actually starts up our server (which means our game is running)
- Open up a web browser and go to this address `http://localhost:7777`
    - `http://127.0.0.1:7777` also works because these are representations of the "home" address
- From here you'll be able to play the game!

## Link to lastest stable build of game goes here:
`https://gameName.io`

## Naming Convention
- camel casing
    - applies to coding, files, and folders
    - example: `var name = "eanCharacter"`
- no capitalizing 1st letters

## Basic Source Control (using git)
- When submitting a change ALWAYS commit then pull, before you push!
    - `git add -A` (tracks files and adds them to staging)
    - `git commit -m "adding my file msg"` (timestamps your changes to the repository)
    - `git pull origin master` (pulls latest changes from repository)
    - `git push origin master` (pushes your updated changes to repository for other people to pull)
    - Sometimes a push or pull may result in a merge conflict, when this happens just make resolve the conflict by updating files to their correct version manually.

## Workflow
- Generic Asset Integration
    - Art, sounds, json files, or any file that does not contain game logic can be considered a generic asset
    - Before any assets are created make sure any specs are documented
    - Assets that are complete should be inserted into the `assetDump` directory
    - If assets matches specs then a technical artist can add them to correct part of repository
    - Make sure to update any indexes and dependency references (like index.html) so assets can be loaded into the game
- **Add a google drive or cloud storage link for assets here**      

## Pipeline
- **Adding Game States**
    - Create new javascript file in javascript directory.
    - Declare state name inside of a new js file.
        - ` var gameState = {}; `
    - Go to index.html and add it to the script BEFORE stateManager.
        - `<script type="text/javascript" src="javascript/gameState.js"></script> `
        - `<script type="text/javascript" src="javascript/stateManager.js"></script>`
    - Inside the stateManager add the state
        - `game.state.add("gameStateKey",gameState);`
    - To access use game.state.start from any point in the game
        - `game.state.start("gameStateKey");`

- **Deploying**
    - Bump the build number in ```buildVersion.txt```
        - Build number convention is ```Version.Major.Minor``` Example: ```1.5.11```

## Config Information
  - ***settings.js***
    - `stage` contains default width and height parameters of game


# Current Project Roles

### Init Logic
   * Init Logic creates the game itself, and ensures that all dependencies exist.

### Boot Logic
   * Boot Logic Dictates how we start the game and the context in which we start the game.

### Loader Logic
   * Loader Logic is decides how and when we manage the including of resources in the game

### Game Start Logic
   * Game Start Logic determines how we start the game (a main menu for example) and should ideally only happen once

### Game Loop
   * Game Loop is where movement, physics, game play logic, etc is implemented

### Game Over Logic

   * This logic occurs when the game loop has ended

### Finite State Machine (FSM)
   * FSMs control the transitions, initiation, and referencing of various game states.

## Contributers
<a href="https://github.com/E-A-N">
    <img width="100" height="100" src="https://avatars1.githubusercontent.com/u/17329104?s=460&v=4">
</a>

<a href="https://github.com/JohnJBarrett22">
    <img width="100" height="100" src="https://avatars0.githubusercontent.com/u/44798179?s=400&v=4">
</a>
