class Player extends Entity{

    #animations;
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
        this.#animations = new Animations;
        this.#accell = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.jumpPower = 0;
        this.curr_ability = new Ability;
    }

    get animations(){
        return this.#animations;        
    }
}