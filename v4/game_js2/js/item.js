class Item{
    #animations;
    #collider;
    #location;
    ability;
    isTerminated;

    constructor(){
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#animations = new Animations;
        this.ability = new Ability;
        this.isTerminated = 0;
    }

    get animations(){
        return this.#animations;
    }

    set animations(animations){
        this.#animations = animations;
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

    tryToBeUsed(player, termination_animation){
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

        if(checkCollision(player.collider, this.#collider) == true && this.isTerminated == 0  ){
            player.curr_ability = this.ability;
            player.curr_ability.isUsed = false;
            this.isTerminated = 1;
            if(typeof termination_animation == 'string' && typeof termination_animation != 'undefined'){
                if(this.#animations.animationsMap.has(termination_animation)){
                    this.#animations.setCurrAnimation(termination_animation);
                }
            }
        }
    }
}