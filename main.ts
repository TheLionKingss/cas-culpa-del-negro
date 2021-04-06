namespace SpriteKind {
    export const Secondary = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Martin_3`)
            pause(100)
            mySprite.setImage(assets.image`Martin_7`)
            pause(100)
            mySprite.setImage(assets.image`Martin_10`)
            pause(100)
            mySprite.setImage(assets.image`Martin_14`)
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
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(17, 5), sprites.builtin.forestTiles10) || tiles.tileAtLocationEquals(tiles.getTileLocation(17, 4), sprites.builtin.forestTiles10)) {
        tiles.setTilemap(tilemap`Map1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 59))
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
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
    game.reset()
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
let PersonajeSec2: Sprite = null
let PersconajeSec1: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let Esteban = false
let Carla = false
let Martin = false
Martin = true
Carla = false
Esteban = false
tiles.setTilemap(tilemap`Character_selection`)
mySprite = sprites.create(assets.image`Martin_9`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
let statusbar = statusbars.create(16, 2, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 200
