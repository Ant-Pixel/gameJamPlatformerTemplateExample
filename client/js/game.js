let gameState = {
  init: () => {
    Platforming.init(game);
  },

  create: () => {
    game.physics.arcade.gravity.y = 100;

    let groundTile1Data = {
      x: 0,
      y: 500,
      width: config.gameState.groundTile.x * 3,
      height: config.gameState.groundTile.y,
      spriteKey: config.gameState.groundTile.spriteKey
    };
    gameState.groundTile1 = Platforming.spawnEnvironment(groundTile1Data);

    let phaserDudeData = {
      x: 0,
      y: 300,
      spriteKey: config.gameState.phaserDude.spriteKey
    };
    gameState.phaserDude = Platforming.spawnCharacter(phaserDudeData);
  },

  update: () => {
    Platforming.resolveCollisions();

    const phaserDude = gameState.phaserDude;

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      phaserDude.moveLeft();
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      phaserDude.moveRight();
    }
    else {
      phaserDude.sprite.body.velocity.x = 0;  // HACK
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      phaserDude.jump();
    }

    // console.log(phaserDude.sprite.body.onFloor());
  }
}
