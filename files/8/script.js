// události, pole a cykly

//události
const button = document.getElementById('btn');
const body = document.querySelector('body');
const resetbutton = document.getElementById('btnreset')
const select = document.getElementById('color');

button.addEventListener('click', () => {
    body.style.background = 'red';
});

resetbutton.addEventListener('click', () => {
    body.style.background = 'white';
});

select.addEventListener('change', (e) => {
    const selectColor = e.target.value;
    body.style.background = selectColor;
});

//Pole

const studenti = ['David', 'Kačka', 'Maruška'];
console.log(studenti[0]);
console.log(studenti[1]);
console.log(studenti[2]);


const testResults = [90,89,23,8,99];
console.log(testResults[0]);
console.log(testResults[1]);
console.log(testResults[2]);
console.log(testResults[3]);
console.log(testResults[4]);

const isAdult = [true, false, true, false];
console.log(isAdult[0]);
console.log(isAdult[1]);
console.log(isAdult[2]);
console.log(isAdult[3]);

const data = [true, 30, 'David', 3.6];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);

// pole a metody
const fruits = ['jablko', 'banán'];
fruits.push('mango');
console.log(fruits);
fruits.push('pomeranč', 'mandarinka');
console.log(fruits);

// POP - odebere poslední prvek
fruits.pop();
fruits.pop();
console.log(fruits);
 
// shift - odebrání prvního prvku
fruits.shift();
console.log(fruits);

// UNSIFT - přidat novou položku na začátek pole
fruits.unshift('kokos');
console.log(fruits);


// cykly
// forEach
// for
// while

// FOREACH
const students = ['Maruška', 'Kačka', 'Pika'];
students.forEach( (oneStudent) => {
console.log(oneStudent);
});

students.forEach( oneStudent => console.log(oneStudent));

//FOR 

// for(let i = 1;i <= 3; i = i + 1){
// console.log('test');
// }



for (let i = 1; i <=3; i++){
    console.log('test');
}

// způsoby jak zapsat třetí část for cyklu
// i = i+1
//i+= 1
// i++

// i-- i-1

// WHILE

let x = 1;

while(x <=5 ){
    console.log('TEST');
    x = x + 1;
}

let letsContinue = 'ano';

while(letsContinue === 'ano'){
    console.log('TEST');
    letsContinue = prompt('Má cyklus pokračovat?')
}