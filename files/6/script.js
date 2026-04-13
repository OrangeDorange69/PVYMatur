// datové typy tvorba html tagů a přidání do stránky


// Datové typy (Primitive types)
// String
console.log('Hello World');
console.log('David');

//  Boolean
console.log(true);
console.log(false);

//  Number
console.log(10); // Integer
console.log(10.5); // Float


//  Null
let score = null;

//  Undefined
let result;
console.log(result);

// Datové typy (Non-Primitive types)

//  Array
numbers = [1, 2, 3, 4, 5];

//  Object
person = {name: 'David', age: 20};

//  Function
function david () {
    console.log('Hello World');
};


console.log(david());

// tvorba html tagů
const h1 = document.createElement('h1');
console.log(h1);

const p = document.createElement('p');
console.log(p);

const h2 = document.createElement('h2');
console.log(h2);

const div = document.createElement('div');
console.log(div);

h1.textContent = 'Hello World';
h2.textContent = 'David';
div.textContent = 'ggez';
p.textContent = 'educanet';


h1.innerHTML = 'Hello World<br>David<br>educanet';


// přidání do stránky

const section = document.querySelector('#result');
section.append(p);




