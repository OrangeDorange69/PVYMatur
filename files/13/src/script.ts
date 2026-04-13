const firstName:string = 'john';
const secondName:string = 'doe';

//tuple - pole o konkrétní délce s konkrétními typy

const person:[string,number,boolean] = ["david", 82, true];
const test:[string, number] = ['David', 99];

// vytvoření tuple
let book: [string, string, number];

book = ['Herry', 'hermon' , 69]


//enum- pojmenovani hodnot ktere jsou reprezentovany konstantami
enum trafficLights{
    RED,
    ORANGE,
    GREEN
}

console.log(trafficLights.RED); //0
console.log(trafficLights.ORANGE); //1
console.log(trafficLights.GREEN); //2

enum trafficLights2{
    RED = 'red',
    ORANGE = 'orange',
    GREEN = 'green'
}

console.log(trafficLights.RED); //red
console.log(trafficLights.ORANGE); //orange
console.log(trafficLights.GREEN); //green

