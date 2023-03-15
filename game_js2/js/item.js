class Item{
    #sprite;
    #collider;
    #location;
    ability;
    isTerminated;

    constructor(){
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#sprite = new Image;
        this.ability = new Ability;
        this.isTerminated = 0;
    }

    set sprite(sprite){
        this.#sprite = sprite;
    }
    get sprite(){
        return this.#sprite;
    }

    setSprite(height, width, src){
        this.#sprite.width = width;
        this.#sprite.height = height;
        this.#sprite.src = src;
    }

    get location(){
        return this.#location;
    }

    set location(location){
        this.#location = location;
    }

    get collider(){
        return this.#collider;
    }

    set collider(collider){
        this.#collider = collider;
    }
    // set ability(ability){
    //     this.#ability = ability;   
    // }

    // get ability(){
    //     return this.#ability;
    // }

    tryToBeUsed(player){
        function checkCollision(entity_coll, wall_collider){
            if(entity_coll.base.x >= wall_collider.base.x && entity_coll.base.x <= wall_collider.base.x + wall_collider.width){
            }
            else if(entity_coll.base.x + entity_coll.width >= wall_collider.base.x && entity_coll.base.x + entity_coll.width <= wall_collider.base.x + wall_collider.width){
            }
            else if(entity_coll.base.x <= wall_collider.base.x && entity_coll.base.x + entity_coll.width >= wall_collider.base.x + wall_collider.width){
            }
            else{
                return false;
            }

            if(entity_coll.base.y >= wall_collider.base.y && entity_coll.base.y <= wall_collider.base.y + wall_collider.height){
            }
            else if(entity_coll.base.y + entity_coll.height >= wall_collider.base.y && entity_coll.base.y + entity_coll.height <= wall_collider.base.y + wall_collider.height){
            }
            else if(entity_coll.base.y <= wall_collider.base.y && entity_coll.base.y + entity_coll.height >= wall_collider.base.y + wall_collider.height){
            }
            else{
                return false;
            }

            return true;
        }

        if(checkCollision(player.collider, this.#collider) == true){
            console.log(1);
            player.curr_ability = this.ability;
            player.curr_ability.isUsed = false;
            this.isTerminated = 1;
        }
    }
}