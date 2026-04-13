//podmínky logické operátory, fce


console.log(20 > 10);
console.log(0 >10);
console.log(0 == 10);
console.log(0 != 10);
console.log(0 >= 10);
console.log(0 <= 10);

console.log(0 === 10);

if (5 > 0) {
    console.log('pravda');
} else {
    console.log('nepravda');
}

if ('davidsetek' == 'davidsetek') {
    console.log('yes bro');
} else {
    console.log('naah kundyyy');
}

// integer - celé číslo - parseInt()
// float - desetinné číslo - parseFloat()

const userAge = prompt('Kolik je ti let?');

if (userAge >= 18) {
    const muze = document.createElement('p');
    muze.textContent = 'můžeš koupit chlast';
    document.body.appendChild(muze);
    alert('můžeš koupit chlast');
} else {
    const nemuze = document.createElement('p');
    nemuze.textContent = 'nemůžeš chlastat kundo';
    document.body.appendChild(nemuze);
    alert('nemůžeš chlastat kundo');
}

const animal = prompt('Jaké zvíře vole? volby: pes, kočka');

if (animal === 'pes') {
    console.log('mnau pico');
} else if (animal === 'kočka') {
    console.log('haf more');
} else {
    console.log('prastel kunde');
}

if (5 > 0) {
    console.log('Pravda');
} else{
    console.log('nepravda');
}

5 > 0 ? console.log('Pravda') : console.log('nepravda');

const result = 5 > 0 ? 'pravda' : 'nepravda';

const age = 20;

if (age >= 18 && age < 65){
    console.log('dospely')
}

// true && true = false
// false && true = false
// true && faalse = false
// false && false == false

//NEBO

const doorCode = 1234;

if (doorCode === 1234 || doorCode == 9876){
    console.log('alenko vejdi do dveri');
}

5 == 5
'5' == 5
'5' === 5

//funkce
// 1 způsob

function pozdrav(){
    console.log('chabr');
}

pozdrav();
pozdrav();
pozdrav();

function pozdrav2(firstname){
    console.log('Ahoj já jsem ' + firstname)
}

pozdrav2('negr');
pozdrav2('ggiger');

function soucet(num1, num2){
    console.log(num1 + num2);
}

soucet(4,2);
soucet(8,1);


function nasobeni(num1, num2){
    const result = num1 * num2;
    return result;
}

console.log(nasobeni(8, 10));

// 2 způsob
const cauky = () => {
    console.log('cc');
}

cauky();
cauky();


const caukyNAME = (firstName) => {
    console.log('cc ' + firstName);
}

caukyNAME('negr');
caukyNAME('cerne');

const nasobeni2 = (num1, num2) => {
    const result = num1 * num2;
    return result;
}

console.log(nasobeni2(5,2));
console.log(nasobeni2(5,5));

