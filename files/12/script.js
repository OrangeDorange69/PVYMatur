// datove typy a jejich pouziti
var student = 'Peter';
student = 'Harry';
var age = 20;
age = 45;
var isAdult = true;
isAdult = false;
var firstName = 'David';
var weight = 80;
var hasCar = true;
// ----------------------------------------------------------------------------------------------------------------- //
var firstMENO = 'Karlo';
console.log(firstMENO.toUpperCase());
console.log(firstMENO.toLowerCase());
var newAge = 30;
var something = 'David';
something = 40;
something = true;
// type inference
var secondName = 'šetty';
// ----------------------------------------------------------------------------------------------------------------- //
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(5, 10));
var introduction = function (firstName, secondName) {
    return "".concat(firstName, " ").concat(secondName);
};
console.log(introduction('David', 'šetek'));
var sayHello = function () {
    console.log();
};
sayHello();
//never - vraci chybu nebo provadi nekonecny cyklus
var errorFunction = function (errorText) {
    throw new Error(errorText);
};
var result2 = errorFunction('Pozor chyba');
console.log(result2);
// objekty
var student_obj = {
    first: 'David',
    second: 'Setek',
    age: 30
};
var john = {
    name: 'john doe',
    age: 30,
    email: 'john@example.com'
};
var jane = {
    name: 'jane doe',
    age: 30,
    email: 'jane@example.com'
};
var fonkoman = {
    name: 'nevyleci nas drink',
    age: 12,
    address: { street: 'Nova12', city: 'Praha', postalCode: '37002' }
};
//pole
var students = ['David', 'Adam', 'Jan'];
var numbers = [5, 10, 3, 4];
