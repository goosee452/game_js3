class Wall{
    #location;
    #hitbox;
    #sprite;

    constructor(){
        this.#hitbox = new RectHitbox;
        this.#location = new Point;
        this.#sprite = new Image;
    }

    set(x, y, height, width){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.height = height;
        this.#hitbox.width = width;
    }

    setSprite(height, width, src){
        this.#sprite.width = width;
        this.#sprite.height = height;
        this.#sprite.src = src;
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

    set sprite(sprite){
        this.#sprite = sprite;
    }

    get sprite(){
        return this.#sprite;
    }
}