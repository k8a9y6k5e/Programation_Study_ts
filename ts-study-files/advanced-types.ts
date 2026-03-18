//mapped type - way to create a new type based on other existing type
//where each type inside the property is transformed in some way

//to create one us use:
//[<property> in keyof <Type>] : <type>;

//create a type with a generics
type OptionsReadOnly<T> = {
    //keyof take the keys of the interface passed by generics
    //mean = for each key inside generic
    readonly [O in keyof T] : T[O];
    //the T[O] means the value of each key receive the type of respective

    //in this case, transform the property in a readonly
}

interface UserOptions {
    fullscreen : boolean;
    quality : '2k' | '4K' | '8k';
}

const userOptions1 : UserOptions = {
    fullscreen : true,
    quality : '4K'
}

const readonlyUserOptions1 : OptionsReadOnly<UserOptions> = userOptions1;

console.log(JSON.stringify(readonlyUserOptions1));//can't be changed
console.log(JSON.stringify(userOptions1));//can be changed


//conditional types - way to select a type based in a condition

type Id<T> = T extends number ? number : string;
//for example, using a short handle if to see the value of an id

type numId = number;

const id1 : Id<numId> = 1;

// const id2 : Id<numId> = '32';
//give an error because the type received is different of the necessary

// const id3 : Id<true> = true;
//give an error because the short handle if doesn't return anything

//literal types - is a special type which work with a specific value, not data type

type ReadEmail = 'read';

const newEmail1 : ReadEmail = 'read';
//only accept this value

// const newEmail2 : ReadEmail = 'unready';
//this doesn't work

//template literal types - use special methods of strings to create a template to a literal type

type UserRefering = `Mr. ${string}` | `Ms. ${string}`;

const user1 : UserRefering = 'Ms. Cibs';

const user2 : UserRefering = 'Mr. Luiz';

// const user3 : UserRefering = 'James';
//doesn't work because don't is in template style

//recursive types - is a type that references itself

interface Recursive {
    name : string;
    nextPerson : Recursive | null;
}

const employes : Recursive = {
    name : 'Cibs',
    nextPerson : {
        name : 'Yvi',
        nextPerson : {
            name : 'Kath',
            nextPerson : null
        }
    }
}

console.log(JSON.stringify(employes));