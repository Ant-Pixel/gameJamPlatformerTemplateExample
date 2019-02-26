let gameState = {
  init: () => {
    Platforming.init(game);
  },

  create: () => {

    let groundTile1Data = {
      x: 0,
      y: 500,
      width: config.gameState.groundTile.x * 10,
      height: config.gameState.groundTile.y,
      spriteKey: config.gameState.groundTile.spriteKey
    };
    let groundTile1 = Platforming.spawnEnvironment(groundTile1Data);

    let phaserDudeData = {
      x: 0,
      y: 0,
      spriteKey: config.gameState.phaserDude.spriteKey
    };
    let phaserDude = Platforming.spawnCharacter(phaserDudeData);
  },

  update: () => {
    
  }
}
