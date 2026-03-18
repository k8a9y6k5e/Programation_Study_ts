//to import a namespace
import { TestNamespace } from "./modules.js";

//and after that use normally
const user : TestNamespace.NSUser = {
    name:'Cibs',
    age:15,
    email:'Cibs123@example.com'
}

console.log(JSON.stringify(user));

TestNamespace.sayHi();

//for ambient modules

//to import the ambient module
import type { Car } from "exampleAmbientModule";

//and the use of it
const FerrariCar : Car = {
    model : 'F40',
    brand : 'Ferrari'
}

//for normal imports/external modules

import { sum } from "./modules.js";

console.log(sum(2,3));

//to use the global uagmentation us create the value
global.doble = function(a:number):number{
    return a*2;
}

//and just use
console.log(doble(5));


//about namespace augmentation after you update the namespace in a special file
//you just use it

const newEmail : TestNamespace.newEmail ={
    email : 'email description',
    author : 'Cibs',
    read : false
}

console.log(JSON.stringify(newEmail));