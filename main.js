//Exercise 1 

function Phone(brand, model) {
    this.brand = brand;
    this.model = model;

    this.details = function () {
        console.log(`Phone: ${this.brand} ${this.model}`);
    }

}

const p1 = new Phone("samaung", "S22");
p1.details();



//Exercise 2
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function () {
        return width * height;
    }

}

const r1 = new Rectangle(5, 4);
console.log(r1.area());



//Exercise 3

function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
        console.log(`balance = ${this.balance}`);
    }
    this.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance += amount;
            console.log(`balance = ${this.balance}`);
        }
        else {
            console.log("not enuf balance");
        }
    }

    this.checkBalance = function () {
        console.log(`Balance : ${this.balance}`);
    }


}

const b1 = new BankAccount("m", 1000);
b1.deposit(500);
b1.withdraw(200);
b1.checkBalance();




//Exercise 4

function Animal(name) {
    this.name = name;

}
function Dog(name) {
    this.name = name;

    this.bark = function () {
        console.log(`${this.name} barks`);
    }

}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

const rocky = new Dog("Rocky");
rocky.speak();
rocky.bark();




//Exercise 5

function Vehicle(type) {
    this.type = type;

}
function Car(brand) {
    this.type = "car";
    this.brand = brand

    this.info = function () {
        console.log(`This is a ${this.brand} ${this.type}`);
    }

}
Vehicle.prototype.describe = function () {
    console.log(`This is a ${this.type}`);
};

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

const c1 = new Car("BMW");
c1.describe();
c1.info();




//Exercise 6

function Shape() {

}
Shape.prototype.area = function () {
    return 0;
};

function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
};

function Square(side) {
    this.side = side;
}
Square.prototype.area = function () {
    return this.side * this.side;
};

Object.setPrototypeOf(Circle.prototype, Shape.prototype);
Object.setPrototypeOf(Square.prototype, Shape.prototype);


const circle1 = new Circle(3);
const square1 = new Square(4);

console.log(circle1.area());
console.log(square1.area());




//Exercise 7
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`${this.title} by ${this.author}`);
    }
}

const book1 = new Book("The Hobbit", "Tolkien");
book1.info();




//Exercise 8
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, school) {
        super(name)
        this.school = school;
    }

    study() {
        console.log(`${this.name} s studying at ${this.school}`);
    }
}
const s1 = new Student("Alice", "Oxford");
s1.greet();
s1.study();





//Exercise 9
class Employee  {
    #salary
    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    work(){
        console.log("Employee is working");
        
    }
}
class Manager  extends Employee {
    constructor(salary) {
        super(salary)
    }

    work() {
        console.log("Manager is managing");
    }
}
const e1 = new Employee(4000);
e1.work()

const m1 = new Manager(5000);
m1.work()


