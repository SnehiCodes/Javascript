// bind() = Borrows a function and creates a copy.
//          "this" keyword replaced with the object
//          passed is as an argument

speak = function(sound){
    console.log(this.name,"is",sound);
}

let dog = {name : "Roxy"}

let parrot = {name : "Plumes"}

bark = speak.bind(dog,"barking.");
chirp = speak.bind(parrot,"chirping.");

bark();
chirp();