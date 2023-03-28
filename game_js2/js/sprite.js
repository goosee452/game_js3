class Animations{
    curr_sx;
    curr_sy;
    sWidth;
    sHeight;
    #sprites;
    animations;
    #animationsMap;
    currAnimation;
    currFrame;
    constructor(){
        this.curr_sx = 0;
        this.curr_sy = 0;
        this.sHeight = 0;
        this.sWidth = 0;
        this.#sprites = new Image;
        this.animations = new Array(0);
        this.#animationsMap = new Map;
        this.currAnimation = 0;
        this.currFrame = 0;
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

    get animationsMap(){
        return this.#animationsMap;
    }

    addAnimation(framesNumber, key, ...sx_and_sy){
        key += '';
        let newAnimation = new Array(framesNumber);
        for(let i = 0; i < framesNumber; i++){
            newAnimation[i] = new Array(2);
            newAnimation[i][0] = sx_and_sy[i * 2];
            newAnimation[i][1] = sx_and_sy[i * 2 + 1];
        }
        this.animations.push(newAnimation);
        this.#animationsMap.set(key, this.animations.length);
    }

    setCurrSxAndSy(animation_index, frameNumber){
        this.curr_sx = this.animations[animation_index][frameNumber][0];
        this.curr_sx = this.animations[animation_index][frameNumber][1];
    }

    setNextFrame(){
        if(this.animations[this.currAnimation].length - 1 > this.currFrame){
            currFrame += 1;
        }
    }
}