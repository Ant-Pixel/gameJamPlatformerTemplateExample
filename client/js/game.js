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
    // Physics collisions need to be handled BEFORE velocities are set.
    // The following line needs to effectively run before the rest of the function.
    // Adding this in the sprite's update method does not do this.
    // game.physics.arcade.collide(gameState.phaserDude.sprite, gameState.groundTile1.sprite);

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      gameState.phaserDude.moveLeft();
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      gameState.phaserDude.moveRight();
    }
    else {
      gameState.phaserDude.sprite.body.velocity.x = 0;  // HACK
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      gameState.phaserDude.jump();
    }
  }
}
