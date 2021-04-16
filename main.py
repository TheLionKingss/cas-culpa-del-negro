@namespace
class SpriteKind:
    Secondary = SpriteKind.create()
    Reactor = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Map1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(15, 59))
    Map = 1
    Y_CheckPoint = 21
    X_CheckPoint = 42
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban_11
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban_8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_up_pressed():
    if Martin:
        while controller.up.is_pressed():
            mySprite.set_image(assets.image("""
                Martin_3
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_7
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_10
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_7
            """))
            pause(100)
    elif Esteban:
        while controller.up.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban_3
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_7
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_9
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_12
            """))
            pause(100)
    elif Carla:
        while controller.up.is_pressed():
            mySprite.set_image(assets.image("""
                Carla_3
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_11
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_9
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_7
            """))
            pause(100)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile2(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1, Reactor2
    tiles.set_tilemap(tilemap("""
        Map5
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 59))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 59
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 5:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(69, 57))
        Reactor2 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor2,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(31, 94))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    global Martin, Esteban, Carla
    Martin = False
    Esteban = False
    Carla = True
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Carla
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    statusbar.value += -0.5
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_light_moss,
    on_overlap_tile4)

def on_overlap_tile5(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Map1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(125, 70))
    Map = 1
    Y_CheckPoint = 125
    X_CheckPoint = 70
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban_11
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban_8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map0
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 45))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 45
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile13
    """),
    on_overlap_tile6)

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            Proyectile_of_sorts
        """),
        mySprite,
        69,
        0)
    music.pew_pew.play()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile7(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map7
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 119))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 119
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile7)

def on_overlap_tile8(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Map1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(74, 98))
    Map = 1
    Y_CheckPoint = 74
    X_CheckPoint = 98
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban_11
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban_8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile8)

def on_overlap_tile9(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map7
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 51))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 51
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile12
    """),
    on_overlap_tile9)

def on_left_pressed():
    if Martin:
        while controller.left.is_pressed():
            mySprite.set_image(assets.image("""
                Martin_2
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_6
            """))
            pause(100)
    elif Esteban:
        while controller.left.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban_2
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_6
            """))
            pause(100)
    elif Carla:
        while controller.left.is_pressed():
            mySprite.set_image(assets.image("""
                Carla_2
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_6
            """))
            pause(100)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile10(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Map1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 84))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 84
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban_11
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban_8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
    """),
    on_overlap_tile10)

def on_overlap_tile11(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1, Reactor2
    tiles.set_tilemap(tilemap("""
        Map5
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 9))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 9
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 5:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(69, 57))
        Reactor2 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor2,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(31, 94))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile11)

def on_overlap_tile12(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint
    tiles.set_tilemap(tilemap("""
        Laberinto_map2
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(82, 38))
    Map = 2
    Y_CheckPoint = 82
    X_CheckPoint = 38
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
    """),
    on_overlap_tile12)

def on_overlap_tile13(sprite, location):
    global Map
    if Map == 3:
        if mySprite.tile_kind_at(TileDirection.LEFT, assets.tile("""
            myTile6
        """)):
            tiles.set_tilemap(tilemap("""
                Map1
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(124, 70))
            Map = 1
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
        elif mySprite.tile_kind_at(TileDirection.LEFT, assets.tile("""
            myTile4
        """)):
            tiles.set_tilemap(tilemap("""
                Map0
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(66, 29))
            Map = 4
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
        elif mySprite.tile_kind_at(TileDirection.LEFT, assets.tile("""
            myTile7
        """)):
            tiles.set_tilemap(tilemap("""
                Map0
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(66, 45))
            Map = 4
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
    elif Map == 4:
        if mySprite.tile_kind_at(TileDirection.RIGHT, assets.tile("""
            myTile3
        """)):
            tiles.set_tilemap(tilemap("""
                Map7
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(3, 106))
            Map = 3
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
        elif mySprite.tile_kind_at(TileDirection.RIGHT, assets.tile("""
            myTile8
        """)):
            tiles.set_tilemap(tilemap("""
                Map7
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(3, 119))
            Map = 3
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
        elif mySprite.tile_kind_at(TileDirection.TOP, assets.tile("""
            myTile5
        """)):
            tiles.set_tilemap(tilemap("""
                Map1
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(73, 96))
            Map = 1
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
        elif mySprite.tile_kind_at(TileDirection.LEFT, assets.tile("""
            myTile7
        """)):
            tiles.set_tilemap(tilemap("""
                Map5
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(96, 109))
            Map = 5
            pause(100)
            music.play_melody("E - E - E - E - ", 640)
        else:
            pass
    elif Map == 2:
        pass
    elif Map == 3:
        pass
    elif Map == 4:
        pass
    elif Map == 5:
        pass
    else:
        pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles10,
    on_overlap_tile13)

def on_on_zero(status):
    global GAME_OVER
    GAME_OVER = True
statusbars.on_zero(StatusBarKind.health, on_on_zero)

def on_overlap_tile14(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map6
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 25))
    Map = 6
    Y_CheckPoint = 1
    X_CheckPoint = 25
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 6:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 6:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 24))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile14)

def on_right_pressed():
    if Martin:
        while controller.right.is_pressed():
            mySprite.set_image(assets.image("""
                Martin_1
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_5
            """))
            pause(100)
    elif Esteban:
        while controller.right.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban_1
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_5
            """))
            pause(100)
    elif Carla:
        while controller.right.is_pressed():
            mySprite.set_image(assets.image("""
                Carla_1
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_5
            """))
            pause(100)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile15(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map7
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 119))
    Map = 3
    Y_CheckPoint = 68
    X_CheckPoint = 119
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile17
    """),
    on_overlap_tile15)

def on_overlap_tile16(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Map1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 26))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 26
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban_11
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban_8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile8
    """),
    on_overlap_tile16)

def on_overlap_tile17(sprite, location):
    global Martin, Esteban, Carla
    Martin = False
    Esteban = True
    Carla = False
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Ernesto
    """),
    on_overlap_tile17)

def on_down_pressed():
    if Martin:
        while controller.down.is_pressed():
            mySprite.set_image(assets.image("""
                Martin_4
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_15
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_11
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin_12
            """))
            pause(100)
    elif Esteban:
        while controller.down.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban_4
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_8
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_10
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban_8
            """))
            pause(100)
    elif Carla:
        while controller.down.is_pressed():
            mySprite.set_image(assets.image("""
                Carla_8
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_13
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_10
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla_13
            """))
            pause(100)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile18(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map0
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(40, 1))
    Map = 4
    Y_CheckPoint = 40
    X_CheckPoint = 1
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile18)

def on_overlap_tile19(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map7
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 106))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 106
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile19)

def on_overlap_tile20(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Map1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 25))
    Map = 1
    Y_CheckPoint = 17
    X_CheckPoint = 25
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban_11
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla_14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin_13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban_8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles14,
    on_overlap_tile20)

def on_overlap_tile21(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1, Reactor2
    tiles.set_tilemap(tilemap("""
        Map5
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 109))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 109
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 5:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(69, 57))
        Reactor2 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor2,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(31, 94))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile10
    """),
    on_overlap_tile21)

def on_overlap_tile22(sprite, location):
    global Martin, Esteban, Carla
    Martin = True
    Esteban = False
    Carla = False
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Martin
    """),
    on_overlap_tile22)

def on_overlap_tile23(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map0
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 29))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 29
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile14
    """),
    on_overlap_tile23)

def on_overlap_tile24(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Map0
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 57))
    Map = 4
    Y_CheckPoint = 1
    X_CheckPoint = 57
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.image("""
            myImage0
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                Anim_Reactor
            """),
            300,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile11
    """),
    on_overlap_tile24)

projectile: Sprite = None
Reactor2: Sprite = None
Reactor1: Sprite = None
PersonajeSec2: Sprite = None
PersconajeSec1: Sprite = None
statusbar: StatusBarSprite = None
mySprite: Sprite = None
X_CheckPoint = 0
Y_CheckPoint = 0
Map = 0
Esteban = False
Carla = False
Martin = False
GAME_OVER = False
GAME_OVER = False
Martin = True
Carla = False
Esteban = False
Map = 0
Y_CheckPoint = 3
X_CheckPoint = 3
tiles.set_tilemap(tilemap("""
    Character_selection
"""))
tiles.place_on_tile(mySprite,
    tiles.get_tile_location(X_CheckPoint, Y_CheckPoint))
mySprite = sprites.create(assets.image("""
    Martin_9
"""), SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
scene.camera_follow_sprite(mySprite)
statusbar = statusbars.create(16, 2, StatusBarKind.health)
statusbar.attach_to_sprite(mySprite)
statusbar.value = 200

def on_update_interval():
    global GAME_OVER
    if GAME_OVER != False:
        CheckPoint = False
        tiles.set_tilemap(tilemap("""
            level24
        """))
        game.show_long_text("U dead", DialogLayout.CENTER)
        if CheckPoint == False:
            if Map == 1:
                tiles.set_tilemap(tilemap("""
                    Map1
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(21, 55))
            elif Map == 2:
                tiles.set_tilemap(tilemap("""
                    Laberinto_map2
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(82, 36))
            elif Map == 3:
                tiles.set_tilemap(tilemap("""
                    Map7
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 51))
            elif Map == 4:
                tiles.set_tilemap(tilemap("""
                    Map0
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 29))
            elif Map == 5:
                tiles.set_tilemap(tilemap("""
                    Map5
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 109))
            else:
                tiles.set_tilemap(tilemap("""
                    Map6
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 25))
            statusbar.value = 200
            GAME_OVER = False
game.on_update_interval(500, on_update_interval)
