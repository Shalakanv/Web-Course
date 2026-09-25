const student = {
    name: "Shalaka",
    age : 23,
    marks: 95.60,
    city: "Mumbai"
};

const post = {
    username: "@shalaka",
    content: "This is my first post",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege","@delta"]
}; 

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// const classInfo = {
//     Shalaka:{
//         age:23,
//         city:"Pune"
//     },
//     Lokesh:{
//         age:22,
//         city:"Raipur"
//     },
//     Chaitanya:{
//         age:23,
//         city:"Gondia"
//     }
// }

// const classInfo = [
//     {
//         name: "Shalaka",
//         age: 23
//     },
//     {
//         name: "Lokesh",
//         age: 22
//     },
//     {
//         name: "Chaitanya",
//         age: 23
//     }
// ]

let diceValue = Math.floor(Math.random() * 6) + 1;
console.log(diceValue);

// *************************************

const car =  {
    name: "BMW",
    model: "X5",
    color: "Black"
};

console.log(car.name);

// ************************************

const  Person = {
    name: "Shalaka",
    age: 23,
    city: "Pune"
};

Person.city = "New York";
console.log(Person);

Person["Country"] = "US";
console.log(Person);
