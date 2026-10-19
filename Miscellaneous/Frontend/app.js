// const stu1 = {
//     name : "John",
//     age : 20,
//     marks : 90
// };

// const stu2 = {
//     name : "Jane",
//     age : 22,
//     marks : 85
// };

// const stu3 = {
//     name : "Bob",
//     age : 21,
//     marks : 95
// };

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }   
    talk(){
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name,age); //  parent class constructor is called using super keyword
        this.marks = marks;
    }
}

// let stu1 = new Student("John", 20, 90);
// let stu2 = new Student("Jane", 22, 85);
// let stu3 = new Student("Bob", 21, 95);

class Teacher extends Person{
    constructor(name, age, subject){
        super(name,age); //  parent class constructor is called using super keyword
        this.subject = subject;
    }
}