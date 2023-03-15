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
}