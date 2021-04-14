namespace SpriteKind {
    export const Secondary = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (Map == 0) {
        tiles.setTilemap(tilemap`Map1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 59))
        Map = 1
        Y_CheckPoint = 21
        X_CheckPoint = 42
        pause(100)
        music.playMelody("E - E - E - E - ", 640)
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
    } else if (Map == 1) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
            tiles.setTilemap(tilemap`Laberinto_map2`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(81, 38))
            Map = 2
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile5`)) {
            tiles.setTilemap(tilemap`Laberinto_map2`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 38))
            Map = 2
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
            tiles.setTilemap(tilemap`Map7`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 51))
            Map = 3
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
            tiles.setTilemap(tilemap`Map0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(40, 2))
            Map = 4
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile6`)) {
            tiles.setTilemap(tilemap`Map5`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(97, 9))
            Map = 5
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile4`)) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(97, 59))
            Map = 5
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        }
    } else if (Map == 2) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 24))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        }
    } else if (Map == 3) {
    	
    } else if (Map == 4) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 24))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        }
    } else if (Map == 5) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 24))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        }
    } else {
    	
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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Carla`, function (sprite, location) {
    Martin = false
    Esteban = false
    Carla = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    statusbar.value += -0.5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Proyectile_of_sorts`, mySprite, 69, 0)
    music.pewPew.play()
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
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    if (Map == 3) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile6`)) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(124, 70))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (false) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(124, 70))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else if (false) {
            tiles.setTilemap(tilemap`Map1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(124, 70))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else {
        	
        }
    } else if (Map == 1) {
    	
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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Martin`, function (sprite, location) {
    Martin = true
    Esteban = false
    Carla = false
})
let projectile: Sprite = null
let PersonajeSec2: Sprite = null
let PersconajeSec1: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
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
tiles.setTilemap(tilemap`Character_selection`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(X_CheckPoint, Y_CheckPoint))
mySprite = sprites.create(assets.image`Martin_9`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
statusbar = statusbars.create(16, 2, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 200
game.onUpdateInterval(500, function () {
    if (GAME_OVER != false) {
        let CheckPoint = false
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
