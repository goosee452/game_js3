class UI{
    #bindings;
    directions;

    constructor(){
        this.#bindings = new Map;
        this.#bindings.set('up', 'ArrowUp');
        this.#bindings.set('left', 'ArrowLeft');
        this.#bindings.set('right', 'ArrowRight');
        this.#bindings.set('down', 'ArrowDown');
        this.#bindings.set('item', 'KeyQ');
        this.#bindings.set('jump', 'Space');

        this.directions = {
            left: 0,
            right: 0,
            //---------------------------------------
            up: 0,
            down: 0
        
        
            //property = order in which arrow was pressed.
            //if arrow was not pressed, then prop. = 0, like: left is pressed first, then left = 0,
            //right pressed second, then right = 0, similar with up and down
        }
    }

    setDirections(options, event){
        if(options == 'keydown'){
            if(event.code == this.#bindings.get('right')){
                this.directions.right = this.directions.left + 1;
            }
            if(event.code == this.#bindings.get('left')){
                this.directions.left = this.directions.right + 1;
            }
            if(event.code == this.#bindings.get('up')){
                this.directions.up = this.directions.down + 1;
            }
            if(event.code == this.#bindings.get('down')){
                this.directions.down = this.directions.up + 1;
            }
        }
        else if(options == 'keyup'){
            if(event.code == this.#bindings.get('right')){
                this.directions.right = 0;
            }
            if(event.code == this.#bindings.get('left')){
                this.directions.left = 0;
            }
            if(event.code == this.#bindings.get('up')){
                this.directions.up = 0;
            }
            if(event.code == this.#bindings.get('down')){
                this.directions.down = 0;
            }
        }
    }


    setBindings(key, key_value){
    }
}