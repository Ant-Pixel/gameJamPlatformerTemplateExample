let menuState = {

    create: () => {
        let logoData = [config.menuState.logo.x, config.menuState.logo.y, config.menuState.logo.spriteKey];
        let logo = game.add.image(...logoData);


        logo.inputEnabled = true;
        logo.events.onInputDown.add(() => {
            console.log("Ive been clicked!!", logo.x, logo.y);
            game.state.start(config.default.stateManager.gameState);
        })
    }

};
