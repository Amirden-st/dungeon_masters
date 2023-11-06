export default class Sprite {
    x: number
    y: number
    width: number
    height: number
    image: string | undefined | null

    constructor(x, y, width, height, image?: string | null) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = image
    }
}