let gameState = {
  init: () => {
    Platforming.init(game);
  },

  create: () => {
    game.physics.arcade.gravity.y = 200;

    const map = gameState.map = game.add.tilemap(config.gameState.tilemap.key);
    map.addTilesetImage('SuperMarioBros-World1-1', config.gameState.tiles.key);

    map.setCollisionBetween(15, 16);
    map.setCollisionBetween(20, 25);
    map.setCollisionBetween(27, 29);
    map.setCollision(40);

    const layer = gameState.layer = map.createLayer('World1');
    // layer.debug = true;
    layer.resizeWorld();

    let phaserDudeData = {
      x: 0,
      y: 0,
      spriteKey: config.gameState.phaserDude.spriteKey
    };
    gameState.phaserDude = Platforming.spawnCharacter(phaserDudeData);
  },

  update: () => {
    const phaserDude = gameState.phaserDude;

    game.physics.arcade.collide(phaserDude.sprite, gameState.layer);

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
