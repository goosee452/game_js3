class Room{
    player_pos;//:Point
    #walls;
    #spikes;
    #items;
    background;
    #width;
    #height;

    constructor(){
        this.player_pos = new Point;
        this.#walls = new Array(0);
        this.#items = new Array(0);
        this.#spikes = new Array(0);
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

    set spikes(spikes){
        this.#spikes = spikes;
    }

    get spikes(){
        return this.#spikes;
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

    set items(items){
        this.#items = items;
    }

    get items(){
        return this.#items;
    }

    serialise(){
        let walls = new Array(this.#walls.length);
        for(let i = 0; i < this.#walls.length; i++){
            walls[i] = {
                location:{
                    x: this.#walls[i].location.x,
                    y: this.#walls[i].location.y
                },
                hitbox:{
                    base:{
                        x: this.#walls[i].hitbox.base.x,
                        y: this.#walls[i].hitbox.base.y
                    },
                    height: this.#walls[i].hitbox.height,
                    width: this.#walls[i].hitbox.width
                },
                animations:{
                    curr_sx: this.#walls[i].animations.curr_sx,
                    curr_sy: this.#walls[i].animations.curr_sy,
                    sWidth: this.#walls[i].animations.sWidth,
                    sHeight: this.#walls[i].animations.sHeight,
                    sprites:{
                        src: this.#walls[i].animations.sprite.src
                    },
                    animations: this.#walls[i].animations.animations,
                    animationsMap: new Array(this.#walls[i].animations.animationsMap.size),
                    //animationsMap: this.#walls[i].animations.animationsMap
                }
            }
            let mapKeyIter = this.#walls[i].animations.animationsMap.keys();
            let mapValueIter = this.#walls[i].animations.animationsMap.values();
            for(let n = 0; n < this.#walls[i].animations.animationsMap.size; n++){
                walls[i].animations.animationsMap[n] = new Array(2);
                walls[i].animations.animationsMap[n][0] = mapKeyIter.next().value;
                walls[i].animations.animationsMap[n][1] = mapValueIter.next().value;
            }
        }
        let spikes = new Array(this.#spikes.length);
        for(let i = 0; i < this.#spikes.length; i++){
            spikes[i] = {
                location:{
                    x: this.#spikes[i].location.x,
                    y: this.#spikes[i].location.y
                },
                hitbox:{
                    base:{
                        x: this.#spikes[i].hitbox.base.x,
                        y: this.#spikes[i].hitbox.base.y
                    },
                    height: this.#spikes[i].hitbox.height,
                    width: this.#spikes[i].hitbox.width
                },
                animations:{
                    curr_sx: this.#spikes[i].animations.curr_sx,
                    curr_sy: this.#spikes[i].animations.curr_sy,
                    sWidth: this.#spikes[i].animations.sWidth,
                    sHeight: this.#spikes[i].animations.sHeight,
                    sprites:{
                        src: this.#spikes[i].animations.sprite.src
                    },
                    animations: this.#spikes[i].animations.animations,
                    animationsMap: new Array(this.#spikes[i].animations.animationsMap.size)
                }
            } 
            let mapKeyIter = this.#spikes[i].animations.animationsMap.keys();
            let mapValueIter = this.#spikes[i].animations.animationsMap.values();
            for(let n = 0; n < this.#spikes[i].animations.animationsMap.size; n++){
                spikes[i].animations.animationsMap[n] = new Array(2);
                spikes[i].animations.animationsMap[n][0] = mapKeyIter.next().value;
                spikes[i].animations.animationsMap[n][1] = mapValueIter.next().value;
            }
        }
        let items = new Array(this.#items.length);
        for(let i = 0; i < items.length; i++){
            items[i]= {
                location:{
                    x: this.#items[i].location.x,
                    y: this.#items[i].location.y
                },
                collider:{
                    base:{
                        x: this.#items[i].collider.base.x,
                        y: this.#items[i].collider.base.y
                    },
                    height: this.#items[i].collider.height,
                    width: this.#items[i].collider.width                    
                },
                animations:{
                    curr_sx: this.#items[i].animations.curr_sx,
                    curr_sy: this.#items[i].animations.curr_sy,
                    sWidth: this.#items[i].animations.sWidth,
                    sHeight: this.#items[i].animations.sHeight,
                    sprites:{
                        src: this.#items[i].animations.sprite.src
                    },
                    animations: this.#items[i].animations.animations,
                    animationsMap: new Array(this.#items[i].animations.animationsMap.size)
                },
                ability: {
                    duration: this.#items[i].ability.duration,
                    isGoing: this.#items[i].ability.isGoing,
                    ability: this.#items[i].ability.ability,
                    isUsed: this.#items[i].ability.isUsed,
                    name: this.#items[i].ability.name
                },
                isTerminated: this.#items[i].isTerminated
            }
            let mapKeyIter = this.#items[i].animations.animationsMap.keys();
            let mapValueIter = this.#items[i].animations.animationsMap.values();
            for(let n = 0; n < this.#items[i].animations.animationsMap.size; n++){
                //console.log(mapKeyIter.next().value);
                items[i].animations.animationsMap[n] = new Array(2);
                items[i].animations.animationsMap[n][0] = mapKeyIter.next().value;
                items[i].animations.animationsMap[n][1] = mapValueIter.next().value;
            }
        }
        let room = {
            player_pos: {
                x: this.player_pos.x,
                y: this.player_pos.y
            },
            background_src: this.background.src,
            width: this.#width,
            height: this.#height,
            walls: walls,
            items: items,
            spikes: spikes
        }

        return room;
    }

    deserialise(string){

        function getSrc(path){
            let src = 'game_files/';
            let lastIndex = path.lastIndexOf('/');
            for(let i = lastIndex + 1; i < path.length; i++){
                src += path[i];
            }

            return src;
        }

        let room = JSON.parse(string);         
        //console.log(getSrc(room.walls[0].animations.sprites.src));

        this.player_pos.x = room.player_pos.x;
        this.player_pos.y = room.player_pos.y;
        this.background.src = room.background_src;
        this.#width = room.width;
        this.#height = room.height;
        this.#walls = new Array(room.walls.length);
        for(let i = 0; i < this.#walls.length; i++){
            this.#walls[i] = new Wall;
            this.#walls[i].location.x = room.walls[i].location.x;
            this.#walls[i].location.y = room.walls[i].location.y;
            this.#walls[i].hitbox.base.x = room.walls[i].hitbox.base.x;
            this.#walls[i].hitbox.base.y = room.walls[i].hitbox.base.y;
            this.#walls[i].hitbox.width = room.walls[i].hitbox.width
            this.#walls[i].hitbox.height = room.walls[i].hitbox.height;
            this.#walls[i].animations = new Animations;
            this.#walls[i].animations.curr_sx = room.walls[i].animations.curr_sx;
            this.#walls[i].animations.curr_sy = room.walls[i].animations.curr_sy;
            this.#walls[i].animations.sWidth = room.walls[i].animations.sWidth;
            this.#walls[i].animations.sHeight = room.walls[i].animations.sHeight;
            this.#walls[i].animations.sprite.src = getSrc(room.walls[i].animations.sprites.src);
            this.#walls[i].animations.animations = room.walls[i].animations.animations;
            for(let n = 0; n < room.walls[i].animations.animationsMap.length; n++){
                this.#walls[i].animations.animationsMap.set(room.walls[i].animations.animationsMap[n][0], room.walls[i].animations.animationsMap[n][1]);
            }
        }
        this.#spikes = new Array(room.spikes.length);
        for(let i = 0; i < this.#spikes.length; i++){
            this.#spikes[i] = new Wall;
            this.#spikes[i].location.x = room.spikes[i].location.x;
            this.#spikes[i].location.y = room.spikes[i].location.y;
            this.#spikes[i].hitbox.base.x = room.spikes[i].hitbox.base.x;
            this.#spikes[i].hitbox.base.y = room.spikes[i].hitbox.base.y;
            this.#spikes[i].hitbox.width = room.spikes[i].hitbox.width
            this.#spikes[i].hitbox.height = room.spikes[i].hitbox.height;
            this.#spikes[i].animations = new Animations
            this.#spikes[i].animations.curr_sx = room.spikes[i].animations.curr_sx;
            this.#spikes[i].animations.curr_sy = room.spikes[i].animations.curr_sy;
            this.#spikes[i].animations.sWidth = room.spikes[i].animations.sWidth;
            this.#spikes[i].animations.sHeight = room.spikes[i].animations.sHeight;
            this.#spikes[i].animations.sprite.src = getSrc(room.spikes[i].animations.sprites.src);
            this.#spikes[i].animations.animations = room.spikes[i].animations.animations;
            for(let n = 0; n < room.spikes[i].animations.animationsMap.lrngth; n++){
                this.#spikes[i].animations.animationsMap.set(room.spikes[i].animations.animationsMap[n][0], room.spikes[i].animations.animationsMap[n][1]);
            }
        }
        this.#items = new Array(room.items.length);
        for(let i = 0; i < this.#items.length; i++){
            this.#items[i] = new Item;
            this.#items[i].location.x = room.items[i].location.x;
            this.#items[i].location.y = room.items[i].location.y;
            this.#items[i].collider.base.x = room.items[i].collider.base.x;
            this.#items[i].collider.base.y = room.items[i].collider.base.y;
            this.#items[i].collider.width = room.items[i].collider.width
            this.#items[i].collider.height = room.items[i].collider.height;

            this.#items[i].animations = new Animations;
            this.#items[i].animations.curr_sx = room.items[i].animations.curr_sx;
            this.#items[i].animations.curr_sy = room.items[i].animations.curr_sy;
            this.#items[i].animations.sWidth = room.items[i].animations.sWidth;
            this.#items[i].animations.sHeight = room.items[i].animations.sHeight;
            this.#items[i].animations.sprite.src = getSrc(room.items[i].animations.sprites.src);
            this.#items[i].animations.animations = room.items[i].animations.animations;
            for(let n = 0; n < room.items[i].animations.animationsMap.length; n++){
                this.#items[i].animations.animationsMap.set(room.items[i].animations.animationsMap[n][0], room.items[i].animations.animationsMap[n][1]);
            }

            // let z = new Map;
            // z.
            this.#items[i].ability.isGoing = room.items[i].ability.isGoing;
            this.#items[i].ability.isUsed = room.items[i].ability.isUsed;
            this.#items[i].ability.duration = room.items[i].ability.duration;
            this.#items[i].ability.name = room.items[i].ability.name;
            if(this.#items[i].ability.name == 'dash'){
                this.#items[i].ability.ability = (player, spX, spY)=>{
                    player.speedX = spX;
                    player.speedY = spY;
                };
            }
            else if(this.#items[i].ability.name == 'platform'){
                this.#items[i].ability.ability = (player, walls)=>{
                    let new_wall = new Wall;
                    new_wall.set(player.collider.base.x + 60, player.collider.base.y + player.collider.height + 10, 40, 240);
                    new_wall.animations.setSprite('game_files/player_platform_10.png');
                    new_wall.animations.dHeight = 100;
                    new_wall.animations.dWidth = 600;
                    new_wall.animations.sHeight = 40;
                    new_wall.animations.sWidth = 240;
                    new_wall.animations.addAnimation(1, 'idle', 0, 0);
                    walls.push(new_wall);
                };
            }
            this.#items[i].isTerminated = this.items[i].isTerminated;
        }
    }

}