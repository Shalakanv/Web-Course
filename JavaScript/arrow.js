const sum = (a,b) => {
    console.log(a+b);
}

const greet = () =>
{
    console.log("Hello");
}

const cube = n => {
    console.log(n**n);
}

const mul = (a,b) => (a*b);

// console.log("Hello there!");

// let id = setTimeout(() => {
//     console.log("Apna College");
// },4000);

// let id1 = setInterval(()=>{
//     console.log("Welcome");
// },3000)

// console.log("Welcome to");


const Student = {
    name: "Shalaka",
    age: 23,
    prop: this,
    getName: function()
    {
        console.log(this); // global scope
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parents's scope --> window
        return this.marks; // mark is defined for student object not for window object 
    },
    getInfo1: function() {
        setTimeout(() =>{
            console.log(this); // this is a arrow function so its this value is depend on its parents who called it (here function is called by Student so it will print student value)
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // window ( this is a normal function so 'this' value is jisne use call kiya.setTimeout ne use call kiya to wo use consider karega,setTimeout is window function  )
        },2000);
    }
}

// ***********************************
// Practice Question

// let square = (n) => {
//     console.log(n*n);
// }

// let square = (n) => (n*n);
// console.log(square(4));

// let id = setInterval(() => {
//     console.log("Hello World");
// },2000);

// setTimeout(() =>{
//     clearInterval(id);
// },10000);
// why 10000 as to print 5 hello it will take 10sec time

// Assignment Questions

// const array = [1,23,45,67,89];
// let sum1 = 0;

// let arrayAverage = (array) =>{
//     for(let i=0;i<array.length;i++)
//     {
//         sum1 += array[i];
//     }
//     console.log(sum1/array.length);
// }

// ******************************

// let n ;

// const isEven = (n) =>{
//     if(n%2 == 0)
//     {
//         return "even";
//     }
//     else{
//         return "not even";
//     }
// }

// const object={
//     message:'Hello,World!',
//     logMessage()
//     {console.log(this.message);

//     }
// };

// setTimeout(object.logMessage,1000);

// // Array Methods

// let arr = [1,2,3,4,5];

// arr.forEach((el) =>{
//     console.log(el);
// });

// arr.forEach(function(el){
//     console.log(el);
// });

// let ARRAY = [
//     {
//         name : "Shalaka",
//         marks: 95,
//     },
//     {
//         name: "Lokesh",
//         marks: 96,
//     },
//     {
//         name: "Chaitanya",
//         marks:99,
//     },
// ];

// ARRAY.forEach((student)=>{
//     console.log(student.marks);
// });


// let ap = [1,2,3,4];

// let double = ap.map((el) =>{
//     return el*2;
// });


// let nums = [1,2,3,4,7,8,10,11];

// let answer = nums.filter((el)=>{
//     return el%2 == 0; // even ---> true, odd ----> false
// })

// let brr= nums.every((el) =>{
//     el%2 == 0;
// })

// let nums = [1,2,3,4,5,10,45];
// let finalVal = nums.reduce((res,el) => 
//     res+el
// );

// console.log(finalVal);

// let ans = nums.reduce((ans,el)=>{
//     if(ans < el)
//     {
//         return el;
//     }
//     else{
//         return ans;
//     }
// });

// console.log(ans);

// let nums = [1,10,20,30,40,50];

// let a = nums.every((el) => el%10==0);

// // console.log(a);

// let min = nums.reduce((min,el)=>{
//     if(min < el)
//     {
//         return min;
//     }
//     else{
//         return el;
//     }
// });

// console.log(min);

function summation(a,b=2)
{
    return a+b;
}





