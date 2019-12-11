namespace SpriteKind {
    export const marisa = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    marisa.say("Woah, I can move?")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    marisa.say("Woah, I can move?")
})
sprites.onOverlap(SpriteKind.marisa, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    marisa.say("Woah, I can move?")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    marisa.say("Woah, I can move?")
})
let marisa: Sprite = null
scene.setBackgroundColor(9)
marisa = sprites.create(img`
. . . . . f f f f f f f f . . . 
. . . . f f f f f f f f f f f . 
. . f f 1 1 1 f f f 1 1 f 1 f . 
. f f f f f f 1 1 1 f 1 c 1 f . 
. . . f f f f f f f 1 c 1 f f . 
. . . f 5 f f 5 f f f f f f f . 
. . f 5 f d f f d f d f 5 f . . 
. . f 5 f d 5 d d 5 d f 5 f . . 
. . f 5 5 f d d d d f 5 5 f . . 
. f 5 5 f 1 f f f f 1 f 5 5 f . 
. . f f d 1 5 1 1 5 1 d f f . . 
. . f d d f c 5 5 c f d d f . . 
. . . f f c c c c c c f f . . . 
. . . f c c 5 c c 5 c c f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.marisa)
marisa.setPosition(41, 37)
controller.moveSprite(marisa)
let messageDad = "Hello!"
marisa.say(messageDad)
let reimu = sprites.create(img`
. f f f f f f . . f f f f f f . 
. f 1 2 2 f f f f f f 2 2 1 f . 
. f 1 2 f f f f f f f f 2 1 f . 
. f 1 f f f f f f f f f f 1 f . 
. . f f f f f f f f f f f f . . 
. . . f f f f d d f f f f . . . 
. . f f f d f d d f d f f f . . 
. . f f 2 d 2 d d 2 d 2 f f . . 
. . f f f f d d d d f f f f . . 
. f f f f d f f f f d f f f f . 
. . f f 1 d 1 1 5 1 d 1 f f . . 
. . f 1 1 f 2 2 5 2 f 1 1 f . . 
. . . f f 2 2 2 2 2 2 f f . . . 
. . . f 1 2 1 2 1 2 1 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
reimu.setPosition(89, 37)
reimu.say("Hi.")
let cirno = sprites.create(img`
. . f f f f f . . f f f f f . . 
. . f 8 8 f f f f f f 8 8 f . . 
. . f 8 f 1 1 1 1 1 9 f 8 f . . 
. . f f 1 9 9 9 9 9 1 9 f f . . 
. . f f 9 9 f 9 f 9 9 1 f f . . 
. . . f 9 f f f d f f 9 f . . . 
. . . f f d f d d f d f f . . . 
. 1 f 9 f d 8 d d 8 d f 9 f 1 . 
. 1 1 f 9 f d d d d f 9 f 1 1 . 
. . . . f 1 f f f f 1 f . . . . 
. 1 f f d 1 1 1 2 1 1 d f f 1 . 
. 1 f d d f 8 8 8 8 f d d f 1 . 
. . . f f 1 1 8 1 8 1 f f . . . 
. . 1 f 1 1 1 1 1 1 1 1 f 1 . . 
. 1 1 f f f f f f f f f f 1 1 . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
cirno.setPosition(124, 83)
cirno.say("Where am I?")
let yamame = sprites.create(img`
. f f f f f f . . f f f f f f . 
. . f f f f f f f f f f f f . . 
. f f f f 1 1 1 1 1 5 f f f f . 
. . f f 1 5 5 5 5 5 1 5 f f . . 
. f f f 5 5 5 5 f 5 5 1 f f f . 
. . . f 5 5 f f 5 f f 5 f . . . 
. . . f f f f d f f d f f . . . 
. . . f f d e d d e d f f . . . 
. . . f 5 f d d d d f 5 f . . . 
. . . . f f f f f f f f . . . . 
. . f f f f 5 e e 5 f f f f . . 
. . f d f f e e e e f f d f . . 
. . . f f 5 5 5 4 4 4 f f . . . 
. . . f 4 4 4 4 5 5 5 5 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
yamame.setPosition(40, 83)
yamame.say("Greetings.")
let ballbo = sprites.create(img`
. . . . . f f f f f f . . . . . 
. . . f f c c c c c c f f . . . 
. . f c c c c c c c c c c f . . 
. f c c c c c c c c c c c c f . 
. f c c c c 5 5 5 5 c c c c f . 
f c c c c 5 5 2 2 5 5 c c c c f 
f c c c 5 5 2 1 1 2 5 5 c c c f 
f c 5 c 5 5 2 1 1 2 5 5 c 5 c f 
f c 5 c c 5 5 2 2 5 5 c c 5 c f 
f c c 5 c c 5 5 5 5 c c 5 c c f 
f c c 5 5 5 c c c c 5 5 5 c c f 
. f c c 5 5 5 5 5 5 5 5 c c f . 
. f c c c 5 5 5 5 5 5 c c c f . 
. . f c c c c c c c c c c f . . 
. . . f f c c c c c c f f . . . 
. . . . . f f f f f f . . . . . 
`, SpriteKind.Enemy)
ballbo.setPosition(120, 89)
game.onUpdateInterval(100, function () {
    ballbo.y += controller.dx()
    ballbo.x += controller.dy()
})
