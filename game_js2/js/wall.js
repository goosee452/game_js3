import { Point } from "./point.js";
import { RectHitbox } from "./rectHitbox.js";
import { CircleHitbox } from "./circleHitbox.js";

class Wall{
    #location;
    #hitbox;
    //#sprite;

    constructor(){
        this.#hitbox = new RectHitbox;
        this.#location = new Point;
    }

    set(x, y, height, width){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.height = height;
        this.#hitbox.width = width;
    }

    get location(){
        return this.#location;
    }

    get hitbox(){
        return this.#hitbox;
    }

    set location(location){
        this.#location = location;
    }

    set hitbox(hitbox){
        this.#hitbox = hitbox;
    }
}

export {Wall};  