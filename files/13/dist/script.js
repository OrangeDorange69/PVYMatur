"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstName = 'john';
const secondName = 'doe';
//tuple - pole o konkrétní délce s konkrétními typy
const person = ["david", 82, true];
const test = ['David', 99];
// vytvoření tuple
let book;
book = ['Herry', 'hermon', 69];
//enum- pojmenovani hodnot ktere jsou reprezentovany konstantami
var trafficLights;
(function (trafficLights) {
    trafficLights[trafficLights["RED"] = 0] = "RED";
    trafficLights[trafficLights["ORANGE"] = 1] = "ORANGE";
    trafficLights[trafficLights["GREEN"] = 2] = "GREEN";
})(trafficLights || (trafficLights = {}));
console.log(trafficLights.RED); //0
console.log(trafficLights.ORANGE); //1
console.log(trafficLights.GREEN); //2
var trafficLights2;
(function (trafficLights2) {
    trafficLights2["RED"] = "red";
    trafficLights2["ORANGE"] = "orange";
    trafficLights2["GREEN"] = "green";
})(trafficLights2 || (trafficLights2 = {}));
console.log(trafficLights.RED); //red
console.log(trafficLights.ORANGE); //orange
console.log(trafficLights.GREEN); //green
