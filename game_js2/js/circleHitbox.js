import { Point } from "./point.js";

class CircleHitbox{
    #base;//:Point
    #radius;

    constructor(){
        this.#base = new Point;
        this.#radius = 0;
    }

    set(base_x, base_y, radius){
        this.#base.set(base_x, base_y);
        this.#radius = radius;
    }

    set base(base){
        this.#base.set(base.x, base.y);
    }

    get base(){
        return this.#base;
    }

    set radius(radius){
        this.#radius = radius;
    }

    get radius(){
        return this.#radius;
    }
}

export {CircleHitbox};