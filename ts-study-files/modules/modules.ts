//namespace - used to organize and share codes across multiple files

//to create an namespace and use it in multiple files
export namespace TestNamespace{
    export interface NSUser {
        name : string
        age ?: number;
        email : string;
    }
    export function sayHi(){
        console.log('hi!');
    }
}

//external modules - normal way to pass codes across multiple files

export function sum(a:number,b:number):number{
    return a+b;
}

