class Wall{
    #location;
    #hitbox;
    #animations;

    constructor(){
        this.#hitbox = new RectHitbox;
        this.#location = new Point;
        this.#animations = new Animations;
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
}