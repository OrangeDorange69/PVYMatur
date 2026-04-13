const firstName = "John";

const student = {
    firstName: "John",
    lastName: "Dzon",
    age: 20,
    city: "CBCB",
    introduction(){
        return `black on black ${this.firstName}, prijmeni ${this.lastName}, age ${this.age}, mesto ${this.city}`
    }
}

console.log(student);

console.log(student.firstName);

console.log(student.introduction());

const book =  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publish: 1925,
    pages: 180,
    price: 10.99,
    getDescription(){
        return `title ${this.title}, author ${this.author}, publish ${this.publish}, pages ${this.pages}, price ${this.price}`
    }
}

console.log(book.getDescription());

//oop object oriented programming
// 1. zapouzdření 
// 2. dědicnost
// 3. polymorfismus - fancy nazev pro prepisovani metod uvnitr classy v classe ktera ji extenduje
// 4. abstrakce - classa z ktere jen dedi ostatni classy, sama neni o nicem vypovidajici

// logika

class Book {
    #secretId;

    constructor(title, author, year, price, secretId){
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
        this.#secretId = secretId;
    }

    info(){
        return `kniha ${this.title}, kterou napsal(a) ${this.author}. Vydaná v roce ${this.year}`
    }

    changeprice(price){
        this.price = this.price + price;
    }

    changepricepercentage(percentage){
        this.price = this.price + (this.price * percentage / 100);
    }

    getDescription(){
        return `title ${this.title}, author ${this.author}, year ${this.year}, price ${this.price}`
    }
}

class BestSeller extends Book {
    
    info(){
        return `bestseller ${this.title}, kterou napsal(a) ${this.author}. Vydaná v roce ${this.year}`
    }
}

class Audibook extends Book{

}

class Ebook extends Book{

}

// použití logiky
const harry = new Book("Harry Potter", "J.K. Rowling", 1997, 500, 666666);
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 300, 777777);
const davidsetek = new Book("ucebnice makroekonomie 2", "David setek", 2024, 0, 555555);
const Bestseller1 = new BestSeller("Harry Potter", "J.K. Rowling", 1997, 500, 666667, "Bestselling")


// console.log(harry.getDescription());
console.log(theHobbit.getDescription());
console.log(davidsetek.getDescription());
harry.changeprice(100);
console.log(harry.getDescription());
console.log(Bestseller1);
console.log(Bestseller1.info());


// procenta
harry.changepricepercentage(10);
console.log(harry.getDescription());
harry.changepricepercentage(-5);
console.log(harry.getDescription());




// const harry = {
//     name: "Harry Potter",
//     author: "J.K. Rowling",
//     year: 1997
// }

// const theHobbit = {
//     name: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     year: 1937
// }

// const davidsetek = {
//     name: "ucebnice makroekonomie 2",
//     author: "David setek",
//     year: 2024
// }



