const bootState = {

    create: () => {

        //Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;

        //Initial Load State
        game.state.start('load');
    }
};
