class Room{
    player_pos;//:Point
    #walls;
    background;
    #width;
    #height;

    constructor(){
        this.player_pos = new Point;
        this.#walls = new Array;
        this.background = new Image;
        this.#height = 0;
        this.#width = 0;
    }

    set walls(walls){
        return this.#walls;
    }

    get walls(){
        return this.#walls;
    }

    setBackground(src){
        this.background.src = src;
        this.background.width = this.#width;
        this.background.height = this.#height;
    }

    set width(width){
        if(width < 0){
            width *= -1;
        }
        this.#width = width;
    }

    get width(){
        return this.#width;
    }

    set height(height){
        if(height < 0){
            height *= -1;
        }
        this.#height = height;
    }

    get height(){
        return this.#height;
    }

    serialise(){
        let walls = new Array(this.#walls.length);
        for(let i = 0; i < this.#walls.length; i++){
            walls[i] = {
                location:{
                    x: this.#walls[i].location.x,
                    y: this.#walls[i].location.y
                },
                hitbox:{
                    base:{
                        x: this.#walls[i].hitbox.base.x,
                        y: this.#walls[i].hitbox.base.y,
                        height: this.#walls[i].hitbox.height,
                        width: this.#walls[i].hitbox.width
                    }
                },
                animations:{
                    curr_sx: this.#walls[i].animations.curr_sx,
                    curr_sy: this.#walls[i].animations.curr_sy,
                    sWidth: this.#walls[i].animations.sWidth,
                    sHeight: this.#walls[i].animations.sHeight,
                    sprites:{
                        src: this.#walls[i].animations.sprite.src
                    },
                    animations: this.#walls[i].animations.animations,
                    animationsMap: this.#walls[i].animations.animationsMap
                }
            }
        }
        let room = {
            player_pos: {
                x: this.player_pos.x,
                y: this.player_pos.y
            },
            background_src: this.background.src,
            width: this.#width,
            height: this.#height,
            walls: walls
        }

        return room;
    }
}