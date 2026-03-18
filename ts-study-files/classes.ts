//to create a class, in constructor, can be added a access propertie in arguments

class User{
    constructor(public name:string, public age:number, private adm:boolean, protected email:string){}
    showAdm(){console.log(this.adm);}
    showEmail(){console.log(this.email);}
}

const myself = new User('I', 19, true, 'myself1@example.com');

console.log(myself.name);
console.log(myself.age);
// console.log(myself.email);
// console.log(myself.adm);
// both is impossible to acess
//but can be accessed with this
myself.showAdm();
myself.showEmail();

/*
public - default propertie, can be acessed from anywhere, inside and outside
private - can only be accessed with the same class, not acessible to outside
protected - can be accessed by the class and subclasses, but not to outside of code
*/

//abstract classes work as a blueprint class to others

abstract class Animal{
    abstract moving():void;
    //to create a abstract function, which work as a blueprint to the next class

    eating(){
        console.log('animal eating');//can be added normal functions inside it
    }
}

class Crow extends Animal{
    moving(){console.log('is flying');}//make this, can be called method overriding
}

new Crow().moving();
new Crow().eating();