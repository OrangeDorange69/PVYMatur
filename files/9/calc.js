const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const form = document.querySelector('form');
const resultContent = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const resultPlus = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    const resultMinus = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    const resultMultiply = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    const resultDivide = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    resultContent.textContent = ('Vysledek je scitani: ' + resultPlus + ' odcitani: ' + resultMinus + ' nasobeni: ' + resultMultiply + ' deleni: ' + resultDivide);
    console.log(result);
});