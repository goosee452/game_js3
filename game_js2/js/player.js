class Player extends Entity{

    #sprite;
    #location;//:Point
    #collider;
    #accell;//accelleration:number:seconds/pixel;
    speedX;
    speedY;
    jumpPower;
    curr_ability;

    constructor(){
        super();
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#sprite = new Image;
        this.#accell = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.jumpPower = 0;
        this.curr_ability = new Ability;
    }

    setSprite(height, width, src){
        this.#sprite.width = width;
        this.#sprite.height = height;
        this.#sprite.src = src;
    }

    set sprite(sprite){
        this.#sprite = sprite;
    }

    getSprite(){
        return this.#sprite;
    }

    get sprite(){
        return this.#sprite;        
    }
}