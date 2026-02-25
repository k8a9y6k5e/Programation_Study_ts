//generics allows to write objects, functions and classes with multiple datatypes

//the keyword "<>" create the generic, but ir need a name to associate the type to it
function booleanConversor<T>(value:T):boolean{
    return Boolean(value);
}

console.log(booleanConversor<string>('a'));
console.log(booleanConversor<string>(''));
console.log(booleanConversor<number>(0));
console.log(booleanConversor<number>(1));

//this can be used in class

class User<T>{
    name : T;
    constructor(name:T){
        this.name = name;
    }
}

console.log(new User<string>('abc').name);
console.log(new User<number>(123).name);
console.log(new User<null>(null).name);


//can be putted a constraint into the generics to add default informations inside it
//to it, us use "extends" keyword

interface IsAdm {adm:boolean}

function admVerification<T extends IsAdm>(value : T){
    if(value.adm)console.log(`is adm`);
    else console.log(`isn't a admin`);

    console.log(`info : ${JSON.stringify(value)}`);
}

//now only value enter with propertie adm(with data type boolean) works
admVerification({name:'abc',adm:true});
admVerification({name:'def',adm:false});