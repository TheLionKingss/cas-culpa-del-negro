namespace SpriteKind {
    export const Secondary = SpriteKind.create()
    export const Reactor = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 59))
    Map = 1
    Y_CheckPoint = 21
    X_CheckPoint = 42
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban_11`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban_8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Martin_3`)
            pause(100)
            mySprite.setImage(assets.image`Martin_7`)
            pause(100)
            mySprite.setImage(assets.image`Martin_10`)
            pause(100)
            mySprite.setImage(assets.image`Martin_7`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Esteban_3`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_7`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_9`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_12`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Carla_3`)
            pause(100)
            mySprite.setImage(assets.image`Carla_11`)
            pause(100)
            mySprite.setImage(assets.image`Carla_9`)
            pause(100)
            mySprite.setImage(assets.image`Carla_7`)
            pause(100)
        }
    }
    UP = true
    RIGHT = false
    LEFT = false
    DOWN = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 59))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 59
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 5) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 57))
        }
        Reactor2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor2,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(31, 94))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Carla`, function (sprite, location) {
    Martin = false
    Esteban = false
    Carla = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    statusbar.value += -0.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(125, 70))
    Map = 1
    Y_CheckPoint = 125
    X_CheckPoint = 70
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban_11`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban_8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (Map == 3 && REACTORS < 3) {
            REACTORS += 1
            game.splash("Felicidades, has reiniciado el primer reactor")
        } else if (Map == 4 && REACTORS < 4) {
            REACTORS += 1
            game.splash("Felicidades, has reiniciado el segundo reactor")
        } else if (Map == 5 && REACTORS < 5) {
            REACTORS += 1
            game.splash("Felicidades, has reiniciado el tercer reactor")
        } else if (Map == 5 && REACTORS < 6) {
            REACTORS += 1
            game.splash("Felicidades, has reiniciado el cuarto reactor")
        } else if (Map == 6 && REACTORS < 7) {
            REACTORS += 1
            game.splash("Felicidades, has reiniciado todos los reactores")
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 45))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 45
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        if (DOWN) {
            projectile = sprites.createProjectileFromSprite(assets.image`BOOK`, mySprite, 0, 100)
            music.pewPew.play()
        } else if (LEFT) {
            projectile = sprites.createProjectileFromSprite(assets.image`BOOK`, mySprite, -100, 0)
            music.pewPew.play()
        } else if (RIGHT) {
            projectile = sprites.createProjectileFromSprite(assets.image`BOOK`, mySprite, 100, 0)
            music.pewPew.play()
        } else if (UP) {
            projectile = sprites.createProjectileFromSprite(assets.image`BOOK`, mySprite, 0, -100)
            music.pewPew.play()
        }
    } else if (Esteban) {
        if (DOWN) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basquetball`, mySprite, 0, 100)
            music.pewPew.play()
        } else if (LEFT) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basquetball`, mySprite, -100, 0)
            music.pewPew.play()
        } else if (RIGHT) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basquetball`, mySprite, 100, 0)
            music.pewPew.play()
        } else if (UP) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basquetball`, mySprite, 0, -100)
            music.pewPew.play()
        }
    } else if (Carla) {
        if (DOWN) {
            projectile = sprites.createProjectileFromSprite(assets.image`BAG`, mySprite, 0, 100)
            music.pewPew.play()
        } else if (LEFT) {
            projectile = sprites.createProjectileFromSprite(assets.image`BAG`, mySprite, -100, 0)
            music.pewPew.play()
        } else if (RIGHT) {
            projectile = sprites.createProjectileFromSprite(assets.image`BAG`, mySprite, 100, 0)
            music.pewPew.play()
        } else if (UP) {
            projectile = sprites.createProjectileFromSprite(assets.image`BAG`, mySprite, 0, -100)
            music.pewPew.play()
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map7`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 119))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 119
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(74, 98))
    Map = 1
    Y_CheckPoint = 74
    X_CheckPoint = 98
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban_11`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban_8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map7`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 51))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 51
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.left.isPressed()) {
            mySprite.setImage(assets.image`Martin_2`)
            pause(100)
            mySprite.setImage(assets.image`Martin_6`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.left.isPressed()) {
            mySprite.setImage(assets.image`Esteban_2`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_6`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.left.isPressed()) {
            mySprite.setImage(assets.image`Carla_2`)
            pause(100)
            mySprite.setImage(assets.image`Carla_6`)
            pause(100)
        }
    }
    LEFT = true
    DOWN = false
    RIGHT = false
    UP = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 84))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 84
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban_11`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban_8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 9))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 9
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 5) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 57))
        }
        Reactor2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor2,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(31, 94))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setTilemap(tilemap`Laberinto_map2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(82, 38))
    Map = 2
    Y_CheckPoint = 82
    X_CheckPoint = 38
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    if (Map == 3) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile6`)) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(124, 70))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile4`)) {
            tiles.setTilemap(tilemap`Map0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(66, 29))
            Map = 4
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile7`)) {
            tiles.setTilemap(tilemap`Map0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(66, 45))
            Map = 4
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        }
    } else if (Map == 4) {
        if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
            tiles.setTilemap(tilemap`Map7`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 106))
            Map = 3
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile8`)) {
            tiles.setTilemap(tilemap`Map7`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 119))
            Map = 3
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile5`)) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(73, 96))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile7`)) {
            tiles.setTilemap(tilemap`Map5`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(96, 109))
            Map = 5
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else {
        	
        }
    } else if (Map == 2) {
    	
    } else if (Map == 3) {
    	
    } else if (Map == 4) {
    	
    } else if (Map == 5) {
    	
    } else {
    	
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    GAME_OVER = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map6`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
    Map = 6
    Y_CheckPoint = 1
    X_CheckPoint = 25
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 6) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 6) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 24))
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.right.isPressed()) {
            mySprite.setImage(assets.image`Martin_1`)
            pause(100)
            mySprite.setImage(assets.image`Martin_5`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.right.isPressed()) {
            mySprite.setImage(assets.image`Esteban_1`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_5`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.right.isPressed()) {
            mySprite.setImage(assets.image`Carla_1`)
            pause(100)
            mySprite.setImage(assets.image`Carla_5`)
            pause(100)
        }
    }
    RIGHT = true
    LEFT = false
    UP = false
    DOWN = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map7`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 119))
    Map = 3
    Y_CheckPoint = 68
    X_CheckPoint = 119
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 26))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 26
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban_11`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban_8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Ernesto`, function (sprite, location) {
    Martin = false
    Esteban = true
    Carla = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.down.isPressed()) {
            mySprite.setImage(assets.image`Martin_4`)
            pause(100)
            mySprite.setImage(assets.image`Martin_15`)
            pause(100)
            mySprite.setImage(assets.image`Martin_11`)
            pause(100)
            mySprite.setImage(assets.image`Martin_12`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.down.isPressed()) {
            mySprite.setImage(assets.image`Esteban_4`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_8`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_10`)
            pause(100)
            mySprite.setImage(assets.image`Esteban_8`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.down.isPressed()) {
            mySprite.setImage(assets.image`Carla_8`)
            pause(100)
            mySprite.setImage(assets.image`Carla_13`)
            pause(100)
            mySprite.setImage(assets.image`Carla_10`)
            pause(100)
            mySprite.setImage(assets.image`Carla_13`)
            pause(100)
        }
    }
    UP = false
    LEFT = false
    DOWN = true
    RIGHT = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(40, 1))
    Map = 4
    Y_CheckPoint = 40
    X_CheckPoint = 1
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map7`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 106))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 106
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles14, function (sprite, location) {
    tiles.setTilemap(tilemap`Map1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 25))
    Map = 1
    Y_CheckPoint = 17
    X_CheckPoint = 25
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban_11`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla_14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin_13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban_8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 109))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 109
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 5) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 57))
        }
        Reactor2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor2,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(31, 94))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Martin`, function (sprite, location) {
    Martin = true
    Esteban = false
    Carla = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 29))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 29
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTilemap(tilemap`Map0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 57))
    Map = 4
    Y_CheckPoint = 1
    X_CheckPoint = 57
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`Anim_Reactor`,
        300,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
let projectile: Sprite = null
let Reactor2: Sprite = null
let Reactor1: Sprite = null
let DOWN = false
let LEFT = false
let RIGHT = false
let UP = false
let PersonajeSec2: Sprite = null
let PersconajeSec1: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let REACTORS = 0
let X_CheckPoint = 0
let Y_CheckPoint = 0
let Map = 0
let Esteban = false
let Carla = false
let Martin = false
let GAME_OVER = false
GAME_OVER = false
Martin = true
Carla = false
Esteban = false
Map = 0
Y_CheckPoint = 3
X_CheckPoint = 3
REACTORS = 2
tiles.setTilemap(tilemap`Character_selection`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(X_CheckPoint, Y_CheckPoint))
mySprite = sprites.create(assets.image`Martin_9`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
statusbar = statusbars.create(16, 2, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 200
game.onUpdateInterval(500, function () {
    let CheckPoint: boolean;
if (GAME_OVER != false) {
        CheckPoint = false
        tiles.setTilemap(tilemap`level24`)
        game.showLongText("U dead", DialogLayout.Center)
        if (CheckPoint == false) {
            if (Map == 1) {
                tiles.setTilemap(tilemap`Map1`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(21, 55))
            } else if (Map == 2) {
                tiles.setTilemap(tilemap`Laberinto_map2`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(82, 36))
            } else if (Map == 3) {
                tiles.setTilemap(tilemap`Map7`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 51))
            } else if (Map == 4) {
                tiles.setTilemap(tilemap`Map0`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 29))
            } else if (Map == 5) {
                tiles.setTilemap(tilemap`Map5`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 109))
            } else {
                tiles.setTilemap(tilemap`Map6`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
            }
            statusbar.value = 200
            GAME_OVER = false
        }
    }
})
