namespace SpriteKind {
    export const Npc = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (IsSign1Displayed) {
        game.showLongText("To the maze of confusion ", DialogLayout.Bottom)
    }
    if (IsPrisonSignDisplayed) {
        game.showLongText("To the lava prison", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite2, location2) {
    Mom.startEffect(effects.ashes, 3000)
    music.play(music.createSoundEffect(WaveShape.Noise, 2251, 1, 255, 255, 674, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    Mom.setPosition(390, 830)
})
let projectile: Sprite = null
let Shooting = false
let HaveKey = false
let Button: Sprite = null
let Facing = 0
let IsPrisonSignDisplayed = false
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
    . . . . . . . . . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 e e e e e e e e e e e 4 . . . 
    4 e f f f e f f f e f f e 4 . . 
    4 e e e e e e e e e e e e e 4 . 
    4 e f f e f f e f f f f f e e 4 
    4 e e e e e e e e e e e e e 4 . 
    4 e f f f e f f f f e f e 4 . . 
    4 e e e e e e e e e e e 4 . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Player)
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
let LaserShooter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 d . 
    . 1 d d d d d d d d d d d d d . 
    . 1 d d b b b b b b b b d d d . 
    . 1 d b 2 2 2 2 2 2 2 2 b d d . 
    . 1 d b 2 2 2 2 2 2 2 2 b d d . 
    . 1 d d b b b b b b b b d d d . 
    . 1 d d d d d d d d d d d d d . 
    . d d d d d d b b d d d d d d . 
    . . . . . . b b b b . . . . . . 
    . . . . . . b f f b . . . . . . 
    . . . . . . b f f b . . . . . . 
    . . . . . . b f f b . . . . . . 
    . . . . . . b f f b . . . . . . 
    . . . . . . b f f b . . . . . . 
    . . . . . . b f f b . . . . . . 
    `, SpriteKind.Player)
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
    f 4 4 1 f 4 4 f 1 4 4 f 
    f e 4 4 4 4 4 4 4 4 e f 
    . f e 4 4 f f 4 4 e f . 
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
Dad.setPosition(900, 900)
Son.setPosition(75, 925)
Daughter.setPosition(950, 150)
LaserShooter.setPosition(575, 45)
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
            400,
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
        }
    } else if (IsPrisonSignDisplayed) {
        IsPrisonSignDisplayed = false
        sprites.destroy(Button)
    }
    if (Mom.overlapsWith(Dad)) {
        game.showLongText("Mom                      TELL ME WHAT HAPPENED, NOW, HONEY!!!", DialogLayout.Bottom)
        game.showLongText("Husband                      Ok, ok, geez.", DialogLayout.Bottom)
        game.showLongText("Husband                     So I was out exploring, and I stepped on something.", DialogLayout.Bottom)
        game.showLongText("Mom                          AND THEN?!", DialogLayout.Bottom)
        game.showLongText("Husband                         Then, suddenly this maze came out of the ground and trapped me in here", DialogLayout.Bottom)
        game.showLongText("Mom                        You have worried me half to death, go home now!", DialogLayout.Bottom)
        game.showLongText("Husband                        Ok, thanks.", DialogLayout.Bottom)
        music.play(music.createSoundEffect(WaveShape.Noise, 400, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        sprites.destroy(Dad, effects.confetti, 500)
    }
    if (Mom.overlapsWith(Son)) {
        game.showLongText("Son                       Mommy! I’m so scared!", DialogLayout.Bottom)
        game.showLongText("Mom                        How did you get in prison?", DialogLayout.Bottom)
        game.showLongText("Son                       Uh…I have my secrets", DialogLayout.Bottom)
        game.showLongText("Mom                      TELL ME, SON!", DialogLayout.Bottom)
        game.showLongText("Son                             …", DialogLayout.Bottom)
        game.showLongText("Mom                       HENRY ZANE ADILA, TELL ME OR ELSE…", DialogLayout.Bottom)
        game.showLongText("Son                       Or else what?", DialogLayout.Bottom)
        game.showLongText("Mom                    Or else I’m leaving you here!", DialogLayout.Bottom)
        game.showLongText("Son                           *gulp*", DialogLayout.Bottom)
        game.showLongText("Son                      I…uhhh…shoplifted", DialogLayout.Bottom)
        game.showLongText("", DialogLayout.Bottom)
    }
    if (Mom.overlapsWith(Guard)) {
        if (!(HaveKey)) {
            game.showLongText("Guard                     Get a key in order to pass!", DialogLayout.Bottom)
            Mom.setPosition(Mom.x, Mom.y - 20)
        }
        if (HaveKey) {
            game.showLongText("Guard                    You may pass", DialogLayout.Bottom)
            Guard.setPosition(55, 680)
            Mom.setPosition(Mom.x, Mom.y - 5)
        }
    }
    if (Mom.overlapsWith(Key)) {
        sprites.destroy(Key)
        HaveKey = true
        game.showLongText("You found a key!", DialogLayout.Bottom)
        game.showLongText("Show it to the guard!", DialogLayout.Bottom)
        Mom.setPosition(568, 870)
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 255, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (!(Shooting)) {
        timer.after(700, function () {
            Shooting = true
        })
    } else {
        timer.after(700, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . 2 3 1 1 3 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, LaserShooter, 0, 50)
            Shooting = false
        })
    }
})
