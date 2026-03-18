//keyword "as" is used to type assertion to explicit inform the compiler
//about the type of a data

const unknownValue : unknown = 'abcd';

const unknownValueLength : number = (unknownValue as string).length;
//here define unknownValue as string, not unknown

console.log(unknownValue);
console.log(unknownValueLength);

//"as const" is a special keyword which make a value be a readonly value

const readUsersArr = ["Cibeli", "Yvi", "Pim", "Charlie"] as const;

console.log(readUsersArr);

// try to add a value give an error
// readUsersArr.push('James Hunt');


//"nonull" it's a form to compiller see if a value is, or not, a null value
//to transform a value, to confirme the compiller about how it don't be null
//us use the signal "!"

const name1 : string | null = "Reze";

const name2 : string | null = null

//this confirm the name1 as not null
console.log(`${name1} : ${name1!.length}`);

//but this give an error because it is null
// console.log(`${name2} : ${name2!.length}`);

// satisfies is a special operator which validate the type of an expression

//to use one satisfies just add <> with the value of it

type user = string;

type levels = 'poor' | 'medium' | 'good' | 'profissional';

type habilities = [comunication : levels, technology : levels, wishes : levels];

const users1 : Record<user, habilities> = {
    'Cibeli' : ['medium', 'poor', 'good'],
    'mr.mime' : ['poor', 'good', 'profissional']
};

//or can be used in this form
const users2 = {
    'Cibeli' : ['medium', 'poor', 'good'],
    'mr.mime' : ['poor', 'good', 'profissional']
} satisfies  Record<user, habilities>;

//both work equals