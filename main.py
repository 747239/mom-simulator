@namespace
class SpriteKind:
    Npc = SpriteKind.create()

def on_a_pressed():
    if IsSign1Displayed:
        game.show_long_text("To the maze of confusion ", DialogLayout.BOTTOM)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    game.splash("Overlap")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    Mom.start_effect(effects.ashes, 3000)
    music.play(music.create_sound_effect(WaveShape.NOISE,
            2251,
            1,
            255,
            255,
            674,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LOGARITHMIC),
        music.PlaybackMode.UNTIL_DONE)
    Mom.set_position(390, 830)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile35
    """),
    on_overlap_tile2)

DadFollowing = False
Button: Sprite = None
CanRead = False
Facing = 0
IsSign1Displayed = False
Mom: Sprite = None
tiles.set_current_tilemap(tilemap("""
    World map
"""))
Key = sprites.create(img("""
        . . . . 4 4 4 4 . . . . . . . . 
            . . . . 5 5 5 4 e . . . . . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . 4 4 4 4 e . . . . . . . 
            . . . . 5 5 5 4 e . . . . . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . 4 e . . . . . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 5 5 5 5 5 5 5 5 5 4 e . . 
            . . 4 5 . . . . . . . . 4 e . . 
            . . 4 5 . . . . . . . . 4 e . . 
            . . 4 5 . . . . . . . . 4 e . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 e . . 
            . . . e e e e e e e e e e e . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
Sign1 = sprites.create(img("""
        ................................
            ................................
            ..554444444444444444444.........
            ..5444eeeeeeeeeeeeeeee44........
            ..444eeeeeeeeeeeeeeeeeee44......
            ..44eefffeffffeffffffefee44.....
            ..4eeeeeeeeeeeeeeeeeeeeeee44....
            ..4eeefffffeffffffefffffffe44...
            ..4eeeeeeeeeeeeeeeeeeeeeeeee44..
            ..4eeefeffffffefffffffefffeee44.
            ..4eeeeeeeeeeeeeeeeeeeeeeeeee44.
            ..4eeeffffeffffffffeffffffee44..
            ..4eeeeeeeeeeeeeeeeeeeeeeee44...
            ..4eeeffeffffefffffffeffff44....
            ..4eeeeeeeeeeeeeeeeeeeeee44.....
            ..44eefffffeffffefffffef44......
            ..444eeeeeeeeeeeeeeeeee44.......
            ..5444eeeeeeeeeeeeeeee44........
            ..554444444444444444444.........
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            ..............eeee..............
            .............feeeef.............
            ..............ffff..............
    """),
    SpriteKind.projectile)
Guard = sprites.create(img("""
        . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . .
    """),
    SpriteKind.player)
HaveKey = False
scaling.scale_by_percent(Sign1, -50, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
Sign1.set_position(167, 248)
Guard.set_position(89, 680)
Key.set_position(535, 900)
Mom = sprites.create(img("""
        . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f f 2 5 5 f f . . . . . 
            . . . f f f f f 1 f f f . . . . 
            . . . f f f f f f 1 f f . . . . 
            . . . f d f d f f f 1 f . . . . 
            . . . f d f d f f f f f f . . . 
            . . . f d 3 d d f f f f f f . . 
            . . . . f d d d f f f f f f . . 
            . . . . . f f 5 3 f f f f f . . 
            . . . . f 5 3 3 f f f f f . . . 
            . . . . f 3 3 f d f . . . . . . 
            . . . . . f 3 f d f . . . . . . 
            . . . . f 3 5 3 f d f . . . . . 
            . . . . f f 3 3 f f . . . . . . 
            . . . . . . f f f . . . . . . .
    """),
    SpriteKind.player)
Mom.set_position(74, 90)
controller.move_sprite(Mom, 100, 100)
scene.camera_follow_sprite(Mom)
Dad = sprites.create(img("""
        . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . .
    """),
    SpriteKind.Npc)
Son = sprites.create(img("""
        . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . .
    """),
    SpriteKind.Npc)
Daughter = sprites.create(img("""
        . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . .
    """),
    SpriteKind.Npc)
Dad.set_position(randint(900, 900), randint(900, 900))
Son.set_position(randint(75, 75), randint(925, 925))
Daughter.set_position(randint(900, 900), randint(75, 75))

def on_on_update():
    global Facing, IsSign1Displayed, CanRead, Button, DadFollowing, HaveKey
    if Mom.vx < 0:
        Facing = 0
    if Mom.vx > 0:
        Facing = 1
    if Mom.vy < 0:
        Facing = 2
    if Mom.vy > 0:
        Facing = 3
    if Facing == 0:
        animation.run_image_animation(Mom, assets.animation("""
            Mfleft
        """), 500, True)
    elif Facing == 1:
        animation.run_image_animation(Mom, assets.animation("""
            Mfright
        """), 100, True)
    elif Facing == 2:
        animation.run_image_animation(Mom, assets.animation("""
            Mfup
        """), 500, True)
    else:
        animation.run_image_animation(Mom, assets.animation("""
            Mfdown
        """), 500, True)
    if Mom.overlaps_with(Sign1):
        if not (IsSign1Displayed):
            IsSign1Displayed = True
            CanRead = True
            Button = sprites.create(img("""
                    . . . . 6 6 6 6 6 6 6 . . . . 
                                    . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                                    . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                                    . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                                    . c 7 7 8 8 8 8 8 8 8 7 7 c . 
                                    . c 9 7 8 7 7 7 7 7 8 7 9 c . 
                                    . c 9 9 7 7 7 7 7 7 7 9 9 c . 
                                    . c 6 6 9 9 9 9 9 9 9 6 6 c . 
                                    c c 6 6 6 6 6 6 6 6 6 6 6 c c 
                                    c d c c 6 6 6 6 6 6 6 c c d c 
                                    c d d d c c c c c c c d d d c 
                                    c c b d d d d d d d d d b c c 
                                    c c c c c b b b b b c c c c c 
                                    c c b b b b b b b b b b b c c 
                                    . c c b b b b b b b b b c c . 
                                    . . . c c c c c c c c c . . .
                """),
                SpriteKind.player)
            Button.set_position(Sign1.x - 5, Sign1.y - 25)
            animation.run_image_animation(Button,
                [img("""
                        ..........666666666666..........
                                        ........6667777777777666........
                                        ......66677777777777777666......
                                        .....6677777779999777777766.....
                                        ....667777779966669977777766....
                                        ....677777799668866117777776....
                                        ...66777779966877861197777766...
                                        ...66777799668677686699777766...
                                        ...88777796688888888669777788...
                                        ...88777788888888888888777788...
                                        ...88977888679999997688877988...
                                        ...88977886777777777768877988...
                                        ...88997777777777777777779988...
                                        ...88799777777777777777711788...
                                        ...88679997777777777779117688...
                                        ..cc866679999999999999976668cc..
                                        .ccbc6666679999999999766666cbcc.
                                        .fcbcc66666666666666666666ccbcf.
                                        .fcbbcc666666666666666666ccbdcf.
                                        .f8bbbccc66666666666666cccbddcf.
                                        .f8cbbbbccccccccccccccccbdddbcf.
                                        .f8ccbbbbbccccccccccccb111ddccf.
                                        .f6ccccbbbddddddddddddd111dcccf.
                                        .f6ccccccbbddddddddddddddbbcccf.
                                        .f6cccccccccccccbbbbbbbbbdbcccf.
                                        ..f6cccccccccbbbbbbbbbbbddbccf..
                                        ..f6cccccccccbbbbbbbbbbbddbccf..
                                        ..ff6ccccccccbbbbbbbbbbbddbcff..
                                        ...ff6cccccccbbbbbbbbbbbddbff...
                                        ....ffcccccccbbbbbbbbbbbdbff....
                                        ......ffccccbbbbbbbbbbbbff......
                                        ........ffffffffffffffff........
                    """),
                    img("""
                        ................................
                                        ................................
                                        ................................
                                        ................................
                                        ................................
                                        ..........888888888888..........
                                        ........8887777777777888........
                                        ......88877666666666677888......
                                        .....8877666667777666667788.....
                                        ....887666667788887766666788....
                                        ....866666677888888996666678....
                                        ...88666667788877889976666688...
                                        ...88666677888677688877666688...
                                        ...88666778888888888887766688...
                                        ...88667788888888888888776688...
                                        ..cc866788866777777668887668cc..
                                        .ccbc8668866666666666688668cbcc.
                                        .fcbcc86666666666666666668ccbcf.
                                        .fcbbcc886666666666666688ccbdcf.
                                        .f8bbbccc88888888888888cccbddcf.
                                        .f8cbbbbccccccccccccccccbdddbcf.
                                        .f8ccbbbbbccccccccccccb11dddccf.
                                        .f6ccccbbbdddddddddddd111ddcccf.
                                        .f6ccccccbbddddddddddd11dbbcccf.
                                        .f6cccccccccccccbbbbbbbbbdbcccf.
                                        ..f6cccccccccbbbbbbbbbbbddbccf..
                                        ..f6cccccccccbbbbbbbbbbbddbccf..
                                        ..ff6ccccccccbbbbbbbbbbbddbcff..
                                        ...ff6cccccccbbbbbbbbbbbddbff...
                                        ....ffcccccccbbbbbbbbbbbdbff....
                                        ......ffccccbbbbbbbbbbbbff......
                                        ........ffffffffffffffff........
                    """)],
                500,
                True)
            scaling.scale_by_percent(Button, -51, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    elif IsSign1Displayed:
        IsSign1Displayed = False
        CanRead = False
        sprites.destroy(Button)
    if Mom.overlaps_with(Dad):
        DadFollowing = True
        Dad.follow(Mom)
    if Mom.overlaps_with(Guard):
        if not (HaveKey):
            game.show_long_text("Guard                     Get a key in order to pass!",
                DialogLayout.BOTTOM)
            Mom.set_position(Mom.x, Mom.y - 20)
    if Mom.overlaps_with(Key):
        sprites.destroy(Key)
        HaveKey = True
        game.show_long_text("You found a key!", DialogLayout.BOTTOM)
        game.show_long_text("Show it to the guard!", DialogLayout.BOTTOM)
        Mom.set_position(0, 0)
game.on_update(on_on_update)
