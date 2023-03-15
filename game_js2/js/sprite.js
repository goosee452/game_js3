class Animations{
    curr_sx;
    curr_sy;
    sWidth;
    sHeight;
    #sprites;
    animations;
    constructor(){
        this.curr_sx = 0;
        this.curr_sy = 0;
        this.sHeight = 0;
        this.sWidth = 0;
        this.#sprites = new Image;
    }

    setSprite(src){
        this.#sprites.src = src;
    }

    set sprite(sprites){
        this.#sprites = sprites;
    }

    get sprite(){
        return this.#sprites;        
    }

    setAnimations(number, ...sx_and_sy){
        this.animations = new Array(number);
        for(let i = 0; i < number; i++){
            this.animations[i] = new Array(2);
            this.animations[i][0] = sx_and_sy[i * 2];
            this.animations[i][1] = sx_and_sy[i * 2 + 1];
        }
    }
}