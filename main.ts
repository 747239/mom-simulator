namespace SpriteKind {
    export const Npc = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (IsSign1Displayed) {
        game.showLongText("To the maze of confusion ", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite2, location2) {
    Mom.startEffect(effects.ashes, 3000)
    music.play(music.createSoundEffect(WaveShape.Noise, 2251, 1, 255, 255, 674, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    Mom.setPosition(390, 830)
})
let HaveKey = false
let DadFollowing = false
let IsPrisonSignDisplayed = false
let Button: Sprite = null
let Facing = 0
let IsSign1Displayed = false
let Mom: Sprite = null
tiles.setCurrentTilemap(tilemap`World map`)
let Key = sprites.create(img`
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
    `, SpriteKind.Player)
let Sign1 = sprites.create(img`
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
    `, SpriteKind.Projectile)
let Guard = sprites.create(img`
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
    `, SpriteKind.Player)
let PrisonSign = sprites.create(img`
    . 5 4 4 4 4 4 4 4 4 4 4 4 4 5 . 
    . 4 e e e e e e e e e e e e 4 . 
    . 4 e f f f e f f f e f f e 4 . 
    . 4 e e e e e e e e e e e e 4 . 
    . 4 e f f f f e f f f f f e 4 . 
    . 4 e e e e e e e e e e e e 4 . 
    . 4 e f e f f f e f f e f e 4 . 
    . 4 e e e e e e e e e e e e 4 . 
    . . 4 e f f f e f f e f e 4 . . 
    . . . 4 e e e e e e e e 4 . . . 
    . . . . 4 e f f e f e 4 . . . . 
    . . . . . 4 e e e e 4 . . . . . 
    . . . . . . 4 e e 4 . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Player)
scaling.scaleByPercent(Sign1, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
Sign1.setPosition(167, 248)
Guard.setPosition(89, 680)
Key.setPosition(535, 900)
PrisonSign.setPosition(40, 300)
Mom = sprites.create(img`
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
    `, SpriteKind.Player)
Mom.setPosition(74, 90)
controller.moveSprite(Mom, 100, 100)
scene.cameraFollowSprite(Mom)
let Dad = sprites.create(img`
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
    `, SpriteKind.Npc)
let Son = sprites.create(img`
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
    `, SpriteKind.Npc)
let Daughter = sprites.create(img`
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
    `, SpriteKind.Npc)
Dad.setPosition(randint(900, 900), randint(900, 900))
Son.setPosition(randint(75, 75), randint(925, 925))
Daughter.setPosition(randint(900, 900), randint(75, 75))
game.onUpdate(function () {
    if (Mom.vx < 0) {
        Facing = 0
    }
    if (Mom.vx > 0) {
        Facing = 1
    }
    if (Mom.vy < 0) {
        Facing = 2
    }
    if (Mom.vy > 0) {
        Facing = 3
    }
    if (Facing == 0) {
        animation.runImageAnimation(
        Mom,
        assets.animation`Mfleft`,
        500,
        true
        )
    } else if (Facing == 1) {
        animation.runImageAnimation(
        Mom,
        assets.animation`Mfright`,
        100,
        true
        )
    } else if (Facing == 2) {
        animation.runImageAnimation(
        Mom,
        assets.animation`Mfup`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        Mom,
        assets.animation`Mfdown`,
        500,
        true
        )
    }
    if (Mom.overlapsWith(Sign1)) {
        if (!(IsSign1Displayed)) {
            IsSign1Displayed = true
            Button = sprites.create(img`
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
                `, SpriteKind.Player)
            Button.setPosition(Sign1.x - 5, Sign1.y - 25)
            animation.runImageAnimation(
            Button,
            [img`
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
                `,img`
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
                `],
            500,
            true
            )
            scaling.scaleByPercent(Button, -51, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        }
    } else if (IsSign1Displayed) {
        IsSign1Displayed = false
        sprites.destroy(Button)
    }
    if (Mom.overlapsWith(PrisonSign)) {
        if (!(IsPrisonSignDisplayed)) {
            IsPrisonSignDisplayed = true
            Button = sprites.create(img`
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
                `, SpriteKind.Player)
            Button.setPosition(PrisonSign.x - 5, PrisonSign.y - 25)
            animation.runImageAnimation(
            Button,
            [img`
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
                `,img`
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
                `],
            500,
            true
            )
            scaling.scaleByPercent(Button, -51, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        } else if (IsPrisonSignDisplayed) {
            IsSign1Displayed = false
            sprites.destroy(Button)
        }
    }
    if (Mom.overlapsWith(Dad)) {
        DadFollowing = true
        Dad.follow(Mom)
    }
    if (Mom.overlapsWith(Guard)) {
        if (!(HaveKey)) {
            game.showLongText("Guard                     Get a key in order to pass!", DialogLayout.Bottom)
            Mom.setPosition(Mom.x, Mom.y - 20)
        }
    }
    if (Mom.overlapsWith(Key)) {
        sprites.destroy(Key)
        HaveKey = true
        game.showLongText("You found a key!", DialogLayout.Bottom)
        game.showLongText("Show it to the guard!", DialogLayout.Bottom)
        Mom.setPosition(0, 0)
    }
})
