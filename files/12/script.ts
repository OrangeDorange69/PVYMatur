// datove typy a jejich pouziti

let student:string = 'Peter';
student = 'Harry';

let age:number = 20;
age = 45;

let isAdult:boolean = true;
isAdult = false;

const firstName:string = 'David';
const weight:number = 80;
const hasCar:boolean = true;

// ----------------------------------------------------------------------------------------------------------------- //



let firstMENO:string = 'Karlo';
console.log(firstMENO.toUpperCase());
console.log(firstMENO.toLowerCase());

let newAge:number = 30;

let something:any = 'David';
something = 40;
something = true;

// type inference

let secondName:string = 'šetty'

// ----------------------------------------------------------------------------------------------------------------- //

const sum = (num1:number, num2:number) => {
    return num1 + num2;
}

console.log(sum(5,10));

const introduction =  (firstName:string, secondName:string):string => {
    return `${firstName} ${secondName}`;
}

console.log(introduction('David', 'šetek'));

const sayHello = ():void => {
    console.log();
}

sayHello();

//never - vraci chybu nebo provadi nekonecny cyklus
const errorFunction = (errorText:string):never => {
    throw new Error(errorText);
}

const result2 = errorFunction('Pozor chyba');
console.log(result2);


// objekty

const student_obj:{
    first:string,
    second:string,
    age:number
} = {
first:'David',
second:'Setek',
age:30
}

type User = {
    name:string,
    age:number,
    email:string
}

const john:User = {
    name:'john doe',
    age:30,
    email:'john@example.com'
}

const jane:User = {
    name:'jane doe',
    age:30,
    email:'jane@example.com'
}

type Address ={
    street?: string;
    city: string;
    postalCode: string;
}

type Person = {
    name: string,
    age: number,
    address: Address
}

const fonkoman:Person={
    name:'nevyleci nas drink',
    age:12,
    address:{street:'Nova12',city:'Praha',postalCode:'37002'}
}

//pole

const students:string[] = ['David', 'Adam', 'Jan'];
const numbers:number[] = [5, 10, 3, 4];
