class Wall{
    #location;
    #hitbox;
    #animations;
    type;

    constructor(width, height){
        this.#hitbox = new RectHitbox;
        this.#location = new Point;
        this.#location.set(0, 0);
        this.#animations = new Animations(width, height);
        this.type = '';
    }

    set(x, y, height, width){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.height = height;
        this.#hitbox.width = width;
    }

    get location(){
        return this.#location;
    }

    get hitbox(){
        return this.#hitbox;
    }

    set location(location){
        this.#location = location;
    }

    set hitbox(hitbox){
        this.#hitbox = hitbox;
    }

    get animations(){
        return this.#animations;
    }

    set animations(animations){
        this.#animations = animations;
    }
}