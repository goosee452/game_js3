let mod = function (num) {
    if(num < 0){
        num *= -1;
    }
    return num;
}

class Entity{
    #location;//:Point
    #collider;
    #accell;//accelleration:number:seconds/pixel;
    isTerminated;

    constructor(){
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#accell = 0;
        this.isTerminated = false;
    }

    set(x, y, width, height){
        this.#location.set(x, y);
        this.#collider.base = this.#location;
        this.#collider.height = height;
        this.#collider.width = width;
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

    set accell(accell){
        this.#accell = accell;
    }

    get accell(){
        return this.#accell;
    }

    checkCollision(entity_coll, wall_collider){
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

    move(x_path, y_path, walls, spikes, plus_x, plus_y){
        //plus_x and plus_y can be explained as entitys ability to move aside if theres wall in its way
        //example: entity cannot move cuz of wall but if entity was 2px left/right it could, so i add plus_x to 
        //entitys location so it will be able to move further

        //i really dont know how to name these parameters  
        if(plus_x < 0){
            plus_x *= -1;
        }
        if(plus_y < 0){
            plus_y *= -1;
        }

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

        let x_pathPart = 1;
        let y_pathPart = 1;
        if(x_path === 0){
            y_pathPart = y_path;
        }
        else if(y_path === 0){
            x_pathPart = x_path;
        }
        else if(mod(x_path) > mod(y_path)){
            x_pathPart = Math.round(x_path / mod(y_path));
            if(y_path < 0){
                y_pathPart = -1;
            }
        } 
        else {
            y_pathPart = Math.round(y_path / mod(x_path));
            if(x_path < 0){
                x_pathPart = -1;
            }
        }

        function step(path){
            if(path > 0){
                return 1;
            }
            else if(path < 0){
                return -1;
            }
            else{
                return 0;
            }
        }
        
        mainCycle:
        while(mod(x_path) > 0 || mod(y_path) > 0){
            //console.log(x_pathPart + '' + y_pathPart);
            //console.log('a');
            for(let  curr = 0; curr < spikes.length; curr++){
                if(checkCollision(this.#collider, spikes[curr].hitbox) == true){
                    this.isTerminated = true;
                    break mainCycle;
                }
            }
            
            if(mod(x_path) > 0){
                let x_step = step(x_pathPart);
                mainCycleX:
                for(let x_stepPart = 0; x_stepPart < mod(x_pathPart); x_stepPart++){
                    this.#collider.base.x += x_step;
                    this.#location.x += x_step;
                    for(let curr = 0; curr < walls.length; curr++){
                        if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                            this.#collider.base.y += plus_y;
                            this.#location.y += plus_y;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                for(let i = 1; i <= plus_y; i++){
                                    this.#collider.base.y -= 1;
                                    this.#location.y -= 1;
                                    if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                                        this.#collider.base.y += 1;
                                        this.#location.y += 1;
                                        break;
                                    }
                                }
                                continue;
                            }
                            this.#collider.base.y -= plus_y;
                            this.#collider.base.y -= plus_y;
                            this.#location.y -= plus_y;
                            this.#location.y -= plus_y;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                for(let i = 1; i <= plus_y; i++){
                                    this.#collider.base.y += 1;
                                    this.#location.y += 1;
                                    if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                                        this.#collider.base.y -= 1;
                                        this.#location.y -= 1;
                                        break;
                                    }
                                }
                                continue;
                            }
                            this.#collider.base.y += plus_y;
                            this.#location.y += plus_y;
                            this.#collider.base.x -= x_step;  
                            this.#location.x -= x_step;
    
                            break mainCycleX;
                        }
                    }
                }
                if(mod(x_path) <= mod(x_pathPart)){
                    x_path = 0;
                }
                else{
                    x_path -= x_pathPart;           
                }

            }

            if(mod(y_path) > 0){
                let y_step = step(y_pathPart);
                mainCycleY:
                for(let y_stepPart = 0; y_stepPart < mod(y_pathPart); y_stepPart++){
                    this.#location.y += y_step;
                    this.#collider.base.y += y_step;
                    for(let curr = 0; curr < walls.length; curr++){
                        if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                            this.#collider.base.x += plus_x;
                            this.#location.x += plus_x;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                for(let i = 1; i <= plus_x; i++){
                                    this.#collider.base.x -= 1;
                                    this.#location.x -= 1;
                                    if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                                        this.#collider.base.x += 1;
                                        this.#location.x += 1;
                                        break;
                                    }
                                }
                                continue;
                            }
                            this.#location.x -= plus_x;
                            this.#collider.base.x -= plus_x;
                            this.#collider.base.x -= plus_x;
                            this.#location.x -= plus_x;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                for(let i = 1; i <= plus_x; i++){
                                    this.#collider.base.x += 1;
                                    this.#location.x += 1;
                                    if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                                        this.#collider.base.x -= 1;
                                        this.#location.x -= 1;
                                        break;
                                    }
                                }
                                continue;
                            }
                            this.#location.x += plus_x;
                            this.#collider.base.x += plus_x;
                            this.#collider.base.y -= y_step;
                            this.#location.y -= y_step;
                            break mainCycleY;
                        }
                    }
                }    
                if(mod(y_path) <= mod(y_pathPart)){
                    y_path = 0;
                }
                else{
                    y_path -= y_pathPart;                    
                }

            }
        }
    }
}