class Ability{
    duration;//ticks
    isGoing;//:bool; state, if 1 -> ability is going, else it is not
    ability;
    isUsed;

    constructor(){
        this.duration = 0;
        this.ability = function(){};
        this.isGoing = false;
        this.isUsed = true;
    }

    // get duration(){
    //     return this.#duration;
    // }

    // get ability(){
    //     return this.#ability;
    // }

    // set ability(ability){
    //     this.#ability = ability;
    // }
}