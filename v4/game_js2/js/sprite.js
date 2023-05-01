class Animations{
    curr_sx;
    curr_sy;
    sWidth;
    sHeight;
    dHeight;
    dWidth;
    #sprites;
    animations;
    #animationsMap;
    currAnimation;
    currFrame;
    constructor(width, height){
        this.curr_sx = 0;
        this.curr_sy = 0;
        this.sHeight = 0;
        this.sWidth = 0;
        this.dHeight = 0;
        this.dWidth = 0;
        this.#sprites = new Image(width, height);
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

    set animationsMap(animationsMap){
        this.#animationsMap = animationsMap;
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
        this.curr_sy = this.animations[animation_index][frameNumber][1];
    }

    setCurrSxAndSy(){
        if(typeof this.animations[this.currAnimation][this.currFrame][0] != 'undefined'){
            this.curr_sx = this.animations[this.currAnimation][this.currFrame][0];
        }
        if(typeof this.animations[this.currAnimation][this.currFrame][0] != 'undefined'){
            this.curr_sy = this.animations[this.currAnimation][this.currFrame][1];
        }

    }

    setNextFrame(){
        if(this.animations[this.currAnimation].length > this.currFrame + 1){
            this.currFrame += 1;
        }
        else{
            this.currFrame = 0;
        }
    }

    setCurrAnimation(key){
        if(this.#animationsMap.has(key) == true){
            this.currAnimation = this.#animationsMap.get(key) - 1;
            if(this.currFrame + 1 >= this.animations[this.currAnimation].length){
                this.currFrame = 0;                
            }
        }
    }
}