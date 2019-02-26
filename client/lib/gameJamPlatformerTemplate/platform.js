const Platforming = {};


Platforming.init = (Game) => {
    Platforming._Game   = Game;
    Platforming._Game.physics.startSystem(Phaser.Physics.ARCADE);
};

Platforming.setSize = (width, height, sprite) => {
    if (typeof width !== "undefined") {
        if (typeof height === "undefined"){
            height = width * (sprite.height/sprite.width);
        };
    }
    else {
        if (typeof height !== "undefined"){
            width = height * (sprite.width/ sprite.height);
        }
        else {
            width  = sprite.width;
            height = sprite.height;
        }
    }

    sprite.width  = width;
    sprite.height = height;
}

/*
paramModel = {
    x : number,
    y: number,
    width: number,
    height: number,
    spriteKey: key string,
    rotation: number (clockwise in degrees),
    onDestroy: function
};
*/
Platforming.spawnEnvironment = (params) => {

    // let xIsSanitized = typeof params.x === "number";
    // let yIsSanitized = typeof params.y === "number";
    // let spriteKeyIsSanitized = typeof params.spriteKey === "string";

    if (typeof params.x !== "number"){
        params.x = 0;
    }

    if (typeof params.x !== "number"){
        params.y = 0;
    }

    if (typeof params.spriteKey !== "string") {
        throw "Sprite Key:" + params.spriteKey.toString() + " is invalid";
    }

    const environment = {};
    environment.sprite = Platforming._Game.add.sprite(params.x, params.y, params.spriteKey);

    Platforming.setSize(params.width, params.height, environment.sprite);

    if (typeof params.rotation === "number"){
        environment.sprite.angle = params.rotation;
    }

    environment.destroy = () => {
        if (params.onDestroy) {
            params.onDestroy(environment);
        }
        environment.sprite.destroy();
        //return Platformer.Game.state;
    }
    Platforming._Game.physics.enable([environment.sprite], Phaser.Physics.ARCADE);
    environment.sprite.body.allowGravity = false;
    return environment;
};

/*
paramModel = {
    x : number,
    y: number,
    width: number,
    height: number,
    spriteKey: key string,
    rotation: number (clockwise in degrees),
    onDestroy: function,
    jumpStrength: number,
    doubleJumpStrength: number,
    dashStrength: number,
    movementSpeed: number,
    aerialDriftSpeed: number
};
*/

Platforming.spawnCharacter = (params) => {
    if (typeof params.x !== "number"){
        params.x = 0;
    }

    if (typeof params.x !== "number"){
        params.y = 0;
    }

    if (typeof params.spriteKey !== "string") {
        throw "Sprite Key:" + params.spriteKey.toString() + " is invalid";
    }

    const character = {};
    character.sprite = Platforming._Game.add.sprite(params.x, params.y, params.spriteKey);

    Platforming.setSize(params.width, params.height, character.sprite);

    if (typeof params.rotation === "number") {
        character.sprite.angle = params.rotation;
    }
    if (typeof params.jumpStrength === "number") {
        character.jumpStrength = params.jumpStrength;
    } else {
        character.jumpStrength = 0;
    }
    character.isGrounded = false;
    character.jump = () => {
        if (character.isGrounded) {
            character.sprite.body.velocity.y = -character.jumpStrength;
        }
    }
    character.facingDirection = 1; //1 is right, -1 is left
    if (typeof params.movementSpeed === "number") {
        character.movementSpeed = params.movementSpeed;
    } else {
        character.movementSpeed = 1;
    }
    character.moveLeft = () => {
        character.facingDirection = -1;
        character.sprite.body.velocity.x = -character.movementSpeed;
    }
    character.moveRight = () => {
        character.facingDirection = 1;
        character.sprite.body.velocity.x = +character.movementSpeed;
    }
    if (typeof params.dashStrength === "number") {
        character.dashStrength = params.dashStrength;
    } else {
        character.dashStrength = 1;
    }
    character.dash = () => {
        character.spite.body.velocity.x = character.movementSpeed * character.facingDirection;
    }


    character.destroy = () => {
        if (params.onDestroy) {
            params.onDestroy(character);
        }
        character.sprite.destroy();
    }
    Platforming._Game.physics.enable([character.sprite], Phaser.Physics.ARCADE);
    return character;
}

let nodeJsEnvironment = typeof module !== "undefined" && module.exports !== "undefined";
if (nodeJsEnvironment){
    module.exports = Platforming;
}
