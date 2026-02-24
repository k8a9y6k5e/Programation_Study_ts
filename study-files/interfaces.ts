/*
difference of types and interfaces is:
types create a new named type based on a existing type or a combination of it
interfaces describes the structure of objects and classes
*/

//to create an interface:

interface User {
    name : string;
    id : number;
    adm : boolean;
}

//interfaces can had inheritance

interface CompleteUser extends User{
    email:string;
    //now the model CompleteUser had email, and User don't
}


interface animal{
    alive : boolean;
    walking ?: boolean;
    swiming ?: boolean;
    //both is optional now
    eat() : string;
    //and can be added a method type
}

interface human extends animal {
    userHumanInformations : CompleteUser;
    //this interface conect with the user informations and with the animal interface
}

//interfaces are used to model an object
//types are used to type a primitive