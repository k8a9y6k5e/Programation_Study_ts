/*
to create decorators to specific locals us use:
class - (cons : class) => void
method - (target : any, propertyKey : string, descriptor : PropertyDescriptor) => void
propertie - (target : any, propertyKey : string) => void
parameter - (target : any, propertyKey : string, parameterIndex : number) => void
*/

//a decorator run in class definition time, adjusting the class accor the decorators

//a few example is:

function isAdm(adm:boolean){
    return (constructor : any) => {
        return class extends constructor{
            administrator = adm
        }
    }
}

@isAdm(true)
class UserOne {}

console.log(new UserOne());

//and

function logger (
    target : object,
    propertyKey : string | Symbol,
    descriptor : PropertyDescriptor
){
    const originalMethod = descriptor.value;//guard the original method

    descriptor.value = function (...args : any[]){
        console.log(`running : ${propertyKey}\nwith arguments : ${args}`);
        //substituing to a log of current action
        return originalMethod.apply(this, args);
        //return nurring the original method
    }

    return descriptor;
}

class mathCalcs{
    @logger
    sum(a:number,b:number):number{return a+b}
}

console.log(new mathCalcs().sum(1,1));


//a simplier logger

function callWork(work:boolean){
    return (target : any, propertyKey : string, descriptor : PropertyDescriptor) =>{
        if(work) console.log('work');
        else console.log('not work');
    }
}


class Calcs{
    @callWork(true)
    doble(num:number):number{
        return num*2;
    }
}

console.log(new Calcs().doble(2));