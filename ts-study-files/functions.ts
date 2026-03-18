//to create a typed function

//with normal functions

function doble(a:number) : number{
    return a*2;//return a number always
}

//with arrow function

const subtraction = (a:number,b:number):number => a-b;


//can be created a overloading function
function sum(a:number,b:number):number;
function sum(a:string,b:string):string;

function sum(a:any, b:any):any{
    return a+b;
}

console.log(doble(2));
console.log(subtraction(4,3));
console.log(sum(1,2));
console.log(sum('a','b'));