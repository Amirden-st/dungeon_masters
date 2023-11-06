import Sprite from "./Sprite";

export default class MovingSprite extends Sprite {
    speed = 0
    constructor(x, y, width, height, image?, speed:number=0) {
        super(x, y, width, height, image);
        this.speed = speed
    }
}