class Player extends Entity{

    #animations;
    #location;//:Point
    #collider;
    #accell;//accelleration:number:seconds/pixel;
    speedX;
    speedY;
    jumpPower;
    next_ability;
    curr_ability;

    constructor(width, height){
        super();
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#animations = new Animations(width, height);
        this.#accell = 0; 
        this.speedX = 0;
        this.speedY = 0;
        this.jumpPower = 0;
        this.next_ability = new Ability;
        this.curr_ability = new Ability;
        this.isTerminated = false;
    }

    get animations(){
        return this.#animations;        
    }

    setCurrAbility(){
        this.curr_ability.ability = this.next_ability.ability;
        this.curr_ability.duration = this.next_ability.duration;
        this.curr_ability.isGoing = this.next_ability.isGoing;
        this.curr_ability.isUsed = this.next_ability.isUsed;
        this.curr_ability.name = this.next_ability.name;
        this.next_ability = new Ability;
    }
}