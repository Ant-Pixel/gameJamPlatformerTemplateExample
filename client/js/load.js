const loadState = {

    preload: () => {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        let loadingLabel = game.add.text(
            config.loadState.label.x,
            config.loadState.label.y,
            config.loadState.label.print,
            config.loadState.style
        );

        //Load your images, spritesheets, bitmaps...
        game.load.image(config.menuState.logo.spriteKey, config.menuState.logo.spriteSrc);

        const gameState = config.gameState;
        game.load.tilemap(gameState.tilemap.key, gameState.tilemap.src, null, Phaser.Tilemap.TILED_JSON);
        game.load.image(gameState.tiles.key, gameState.tiles.src);
        game.load.image(gameState.phaserDude.spriteKey, gameState.phaserDude.spriteSrc);

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: ()  => {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    }
};
