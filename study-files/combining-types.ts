//a way which allow to a value has multiple values

//the simplier way to make it is using |

let binary : number | boolean;
//this allow the binary variable to be either number or boolean

binary = 0;
console.log(binary);
binary = 1;
console.log(binary);
binary = true;
console.log(binary);
binary = false;
console.log(binary);
// binary = '1';
//so, this give an erro because it's not a number or a boolean

//can be used the & to join two values, having both special values
interface Animal{
    sleeping : boolean;
    eating : boolean;
}

interface LandAnimal{
    walking : boolean;
}

type Bunny = Animal & LandAnimal;
//join the interface of LandAnimal and Animal, now, bunny make/have the animal things and land animal things

const whiteBunny : Bunny = {
    sleeping : false,
    eating : false,
    walking : true
}

console.log(JSON.stringify(whiteBunny));

//to get the keys used in an object, we use the keyOf command

type bunnyKeys = keyof Bunny;
//this make a alias with the keys of bunny

const eatKey : bunnyKeys = 'eating';
const sleepKey : bunnyKeys = 'sleeping';
const walkKey : bunnyKeys = 'walking';

console.log(eatKey);
console.log(sleepKey);
console.log(walkKey);

//this values created with the keyword type is named alias