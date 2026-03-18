//the pricipals data types from ts is:

//string:
const str1 : string = 'a';
console.log(str1);

//number:
const num1 : number = 1;
console.log(num1);

//boolean:
const bool1 : boolean = true;
console.log(bool1);

//can type any data value, like variables, funcions, arguments

function sum(a:number, b:number):number{
    return a+b;
}

console.log(sum(1,2));

//the functions have a special type void, which work when the function don't have(or don't return) a value

function logSubtraction(a:number,b:number){//this is a void function
    console.log(a-b);
}

logSubtraction(5,1);


//equals javascript, have the values null and undefined to variables
//this values work in variables not associated or putted as null

const null1 : string | null = null;

let undefined1 : string | undefined;

//have a special type which work for any other
let any1 : any = 'b';
console.log(any1);
any1 = 2;
console.log(any1);
any1 = false;
console.log(any1);


//the unknown type work as the reverse of any, any datatype can be a unknown,
//but no one can assign to itself without a type assertion

function unkMulti(a:number, b:unknown){
    if(typeof b == 'number') return a*b;
    //the b cann't be assign, so it need a type assertion to work 
}


console.log('\n')

//object data types:

//interface is a special type to create a schema to an object

interface Book{
    name : string;
    launchYear ?: number;//the "?" means optional
    author : string;
    pages : number; 
    rate : number | undefined;//can have two types
}

const book1 : Book = {
    name : 'c',
    launchYear : 2020,
    author : 'yourself',
    pages : 10,
    rate : undefined
};

console.log(JSON.stringify(book1));

//differently of js, in ts the classes work as a blueprint

class Car {
    name : string;
    year : number;
    brand : string;

    constructor(name:string,year:number,brand:string){
        this.name=name;
        this.year=year;
        this.brand=brand;
    };

    showInfo(){
        return [this.name,this.brand,this.year];
    }
}

const trueno = new Car('AE86',1980,'Toyota');

console.log(trueno.showInfo());

//array is a special set of items, which has two ways to create one

//using [] in any type

const numArr : number[] = [1,2,3];

//or using promises

const strArr : Array<string> = ['e','f'];

//OBS: the commands from js of arrays work normally

console.log(numArr);
console.log(strArr);

//the arrays can be motivied to readonly mode

const readBoolArray : readonly boolean[] = [true, false];

console.log(readBoolArray);

//the type never represents a value which never occur

// const never1 : never;
//this is used to functions which never return type guard whith no one verification or type checking
//this value, always, when is assign, give an error

//tuples are special types of arrays, which know how much elements the array need, and the type of each

type UserTuple = [string, number];

const yourself : UserTuple = ['anonymous', 0];

console.log(yourself);
//it also can be readonly

//it possible to assign name in tuples, this allow destruturing values

type User = [name:string, adm:boolean];

const administrator:User = ['adm', true];

const [name, adm] = administrator;

console.log(name);
console.log(adm);