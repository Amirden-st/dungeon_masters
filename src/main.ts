import "normalize.css"
import "./style.css"
import MovingSprite from "./models/MovingSprite";
import Sprite from "./models/Sprite";

function createCanvas() {
    const canvas = document.createElement('canvas')
    canvas.id = 'main-canvas'
    return canvas
}

const canvas = createCanvas()
const CANVAS_WITH = canvas.width = 700
const CANVAS_HEIGHT = canvas.height = 500

const ctx = canvas.getContext('2d')
const player = new MovingSprite(0, 0, 30, 30, null, 3)
const pressedKeys = {}
const gameObjects = [
    player,
    new Sprite(-100, -100, 30, 30)
]

let cameraX = Math.floor(CANVAS_WITH * 0.5 - player.width * 0.5),
    cameraY = Math.floor(CANVAS_HEIGHT * 0.5 - player.height * 0.5),
    lastTime = 0

const KEY_W = 'KeyW',
    KEY_A = 'KeyA',
    KEY_S = 'KeyS',
    KEY_D = 'KeyD'


function loop(timestamp = 0) {
    const deltaTime = timestamp - lastTime
    lastTime = timestamp
    for (const pressedKeysKey in pressedKeys) {
        switch (pressedKeysKey) {
            case KEY_W:
                player.y -= player.speed
                cameraY -= player.speed
                break
            case KEY_A:
                player.x -= player.speed
                cameraX -= player.speed
                break
            case KEY_S:
                player.y += player.speed
                cameraY += player.speed
                break
            case KEY_D:
                player.x += player.speed
                cameraX += player.speed
                break
        }
    }

    ctx.fillStyle = '#212121'
    ctx.fillRect(0, 0, CANVAS_WITH, CANVAS_HEIGHT)

    gameObjects.forEach(gameObject => {
        ctx.fillStyle = '#fff'
        ctx.fillRect(gameObject.x, gameObject.y, gameObject.width, gameObject.height)
    })

    requestAnimationFrame(loop)
}


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', e => {
        const keyCode = e.code
        pressedKeys[keyCode] = true
        e.preventDefault();
    })

    document.addEventListener('keyup', e => {
        delete pressedKeys[e.code]
    })

    loop()
})


document.body.appendChild(canvas)
