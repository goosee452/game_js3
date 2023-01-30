import { Point } from "./point.js";

class RectHitbox{//rectangular hitbox

    #base;
    #width;//x
    #height;//y
    //0--------------->x
    //|         width           
    //| base-------------------.
    //| |                      |height
    //| .----------------------.
    //\/y

    constructor(){
        this.#base = new Point;
        this.#height = 0;
        this.#width = 0;
    }

    set(x, y, height, width){
        this.#height = height;
        this.#width = width;
        this.#base.x = x;
        this.#base.y = y;
    }

    set base(base){
        this.#base.x = base.x;
        this.#base.y = base.y;
    }

    get base(){
        return this.#base;
    }

    set height(height){
        this.#height = height;
    }

    set width(width){
        this.#width = width;
    }

    get height(){
        return this.#height;
    }

    get width(){
        return this.#width;
    }
}

export {RectHitbox};