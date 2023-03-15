class Point{
    #x;
    #y;

    constructor(){
        this.#x = 0;
        this.#y = 0;
    }

    set(x, y){
        this.#x = x;            
        this.#y = y;
    }

    set x(x){
        this.#x = x;
    }

    get x(){
        return this.#x;
    }

    set y(y){
        this.#y = y;
    }

    get y(){
        return this.#y;
    }
}