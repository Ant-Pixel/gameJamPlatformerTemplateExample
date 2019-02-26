let gameState = {
  init: () => {
    Platforming.init(game);
  },

  create: () => {
    game.physics.arcade.gravity.y = 100;

    let groundTile1Data = {
      x: 0,
      y: 500,
      width: config.gameState.groundTile.x * 10,
      height: config.gameState.groundTile.y,
      spriteKey: config.gameState.groundTile.spriteKey
    };
    gameState.groundTile1 = Platforming.spawnEnvironment(groundTile1Data);

    let phaserDudeData = {
      x: 0,
      y: 0,
      spriteKey: config.gameState.phaserDude.spriteKey
    };
    gameState.phaserDude = Platforming.spawnCharacter(phaserDudeData);
  },

  update: () => {
    game.physics.arcade.collide(gameState.phaserDude.sprite, gameState.groundTile1.sprite, ()=>console.log("hit"));
  }
}
