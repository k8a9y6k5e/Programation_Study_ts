//awaited - model operation which recursively unwrap promises

async function sum(a:number,b:number){
    return {result : a+b};
}

type ResultType = Awaited<ReturnType<typeof sum>>;
//this, take the return of the promise and make a type with it

const result : ResultType = await sum(1,2);

console.log(result);

//partial - turn all types as optional

interface User {
    name : string;
    age : number;
    email : string;
}

function acessUser(userInfo : Partial<User>){
    //the partial transform all values inside the interface as optional
    console.log('user acessed');
    console.log(`infos : ${userInfo}`);
}

//readonly - transform the properties in a readonly type

const user1 : Readonly<User> = {
    name : 'Yvi',
    age : 17,
    email : 'Yvi01@example.com'
};

// user1.name = 'Ivy';
//give an error try to edit

//but can be accessed
console.log(user1.name);

//record - create an object where have a speciffic quantity of keys(from an union, which all need values)
//and value

type AccessKey = 'logged' | 'active';

const user1Acess : Record<AccessKey, boolean> = {
    logged : true,
    active : false
};

console.log(JSON.stringify(user1Acess));
//first value it's the keys the second the value

//pick - create a type with some specific data of an interface/object type

const user2 : Pick<User, 'name' | 'email'> = {
    name : 'Kath',
    email : 'k4th1@example.com'
};
//this object, because the pick, doesn't need the age value

//omit - remove some specific values from an interface before use
//it's the reverse of pick

const user3 : Omit<User, 'age'> = {
    name : 'Arthur',
    email : '4rt6ur@example.com'
}

//pick - take just the specified keys
//omit - remove just the specified keys


//exclude - remove a type from a union type
type sauces = 'mayonnaise' | 'ketchup' | 'mustard' | 'bbq sauce';

const saucesOption1 : Exclude<sauces, 'bbq sauce'> = 'ketchup';
const saucesOption2 : Exclude<sauces, 'bbq sauce'> = 'mustard';
const saucesOption3 : Exclude<sauces, 'bbq sauce'> = 'mayonnaise';
// const saucesOption4 : Exclude<sauces, 'bbq sauce'> = 'bbq sauce';
//this give an error because it's removed

//extract - maintain the value from a union where have the specified values
const saucesOpenOptions1 : Extract<sauces, 'ketchup' | 'mustard'> = 'ketchup';
const saucesOpenOptions2 : Extract<sauces, 'ketchup' | 'mustard'> = 'mustard';
// const saucesOpenOptions3 : Extract<sauces, 'ketchup' | 'mustard'> = 'mayonnaise';
//this give an error because the mayonnaise isn't selected


//nonnullable - exclude null and undefined values from types

type Name = string | null;

function logName(name : NonNullable<Name>){
    console.log(name);
}

logName('Yvi');
// logName(null);
//give an error because can't be null


//parameter - get the types of the parameters of a function

type SumParams = Parameters<typeof sum>;

const sumParams : SumParams = [1,2];//crate a tuple with the arguments of a function

//returntype - create a type with the type of returned value

async function sumResult(){
    const result : ReturnType<typeof sum> = sum(1,2);

    console.log(await result);
}

sumResult();

//instancetype - 

class Car{
    brand:string;
    model:string;
    constructor(brand:string, model:string){
        this.brand=brand;
        this.model=model;
    }
}

type InstanceCar = InstanceType<typeof Car>;

const instance : InstanceCar = new Car('Ferrari', 'F40');
// const instance2 : InstanceCar = any; - give an error
//the only way to don't give an error it's using the Car class to create an object