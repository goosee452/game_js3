import { Point } from "./point.js";
import { RectHitbox } from "./rectHitbox.js";
import { CircleHitbox } from "./circleHitbox.js";

class Entity{
    #location;//:Point
    #hitbox;//:circle hitbox

    constructor(){
        this.#location = new Point;
        this.#hitbox = new CircleHitbox;
        this.#hitbox.base = this.#location;
    }

    set(x, y, radius){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.radius = radius;
    }
}