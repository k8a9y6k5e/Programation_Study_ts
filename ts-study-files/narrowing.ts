//instanceof - used to cerify if an object it's created from other

class waterAnimal{
    name:string;
    habitat:string;
    constructor(name:string){
        this.name = name;
        this.habitat = 'water';
    }
    swin(){
        console.log(`${this.name} is swiming`);
    }
}

const fish = new waterAnimal('fish');

if(fish instanceof waterAnimal){//verify if fish is created from waterAnimal
    fish.swin();
}

//typeof - to verify the type of a variable

const binary : number | boolean = true;

console.log(typeof binary);

/*
to see the equality of values in ts is equals as the js
just some things inside it which chance, like:
- == : make the coerce of type;
- === : is a strict comparison, don't coerce the type;
- != : negation with type coercion;
- !== : negation without type coercion;
*/

//have a way to refine the ts type

//to make it, us create a function like this

function isNumber(value : unknown): value is number{
    return typeof value === "number";
}
//the unknown value is a undiscovered type until prove the data type of it 
//the second two points make it work like this:
//if return give true, work with this value as a number, else not

if (isNumber(1)){
    console.log('1 is a number');
}
if(isNumber('a')){
    console.log('a is a number');
}