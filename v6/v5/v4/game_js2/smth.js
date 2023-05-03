class someshit{
    a;
    // get a(){
    //     return this.#a;
    // }
    // set a(a){
    //     this.#a = a;
    // }
}

let someshit2 = new someshit;
someshit2.a = 3;
let str = JSON.stringify(someshit2);
console.log(str);