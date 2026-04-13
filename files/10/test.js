class Car {
    constructor(car, color){
        this.car = car;
        this.color = color; //atribut
    }

    info(){
        console.log('info'); //metoda
    }
}


const car1 = new Car("mercedes","black");


console.log(car1);
