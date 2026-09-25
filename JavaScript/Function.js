function print1to5()
{
    for(let i = 1; i <= 5; i++)
    {
        console.log(i);
    }
}

print1to5();

function rollDice()
{
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log(diceValue);
}

rollDice();

// fuction with parameter
function printName(name)
{
    console.log(name);
}

printName("Shalaka");

// ********************************

function printInfo(name, age, city)
{
    console.log(`${name} is ${age} years old and lives in ${city}`);
}

printInfo("Shalaka", 23, "Pune");

//  function for avg of 3 numbers

function avgOfThree(num1, num2, num3)
{
    let avg = (num1 + num2 + num3) / 3;
    console.log(`Average of ${num1}, ${num2} and ${num3} is ${avg}`);
}

avgOfThree(10, 20, 30);

// *****************************************

function printTable(num)
{
    for(let i=1;i<=10;i++)
    {
        let ans = i * num;
        console.log(`${num} * ${i} = ${ans}`);
    }
}

printTable(7);

// ******************************************

// function sum(a,b)
// {
//     return a + b;
// }

// console.log(sum(10,20));

// *****************************************

function sumFrom1ton(n)
{
    let sum = 0;
    for(let i=1;i<=n;i++)
    {
        sum = sum + i;
    }
    return sum;
}

sumFrom1ton(10);

// *****************************************

let array =  ["Shalaka","is","currently","learning","JavaScript"];

function concat(array)
{
    let str = "";
    for(let i=0;i<array.length;i++)
    {
        str = str + array[i] +" ";
    }
    return str;
}

// Scope 

let sum = 54; // sum is defined outside the function and can be accessed anywhere in the code. This is called global scope.
function calSum(a,b)
{
    let sum = 0; // sum is defined inside the function and can only be accessed inside the function. This is called function scope.
    sum = a + b;
    console.log(sum);
}

calSum(10,20);
console.log(sum); // sum is not defined because it is defined inside the function and can only be accessed inside the function. This is called function scope.

let age = 25;
if(age >= 18)
{
    let str = "adult"; // str is defined inside the if block and can only be accessed inside the if block. This is called block scope.
}

//console.log(str); // str is not defined because it is defined inside the if block and can only be accessed inside the if block. This is called block scope.

function outerFunction(){
    let a = 10;
    let b = 20;

    function innerFunction(){
        console.log(a);
        let x = 30;
    }
    innerFunction();
    console.log(x); // x is not defined because it is defined inside the inner function and can only be accessed inside the inner function.
}


// High order function: A function that takes another function as an argument or returns a function as a value is called a higher-order function.

function multipleGreet(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}

let greet = function()
{
    console.log("Hello");
}

multipleGreet(greet,5);

// ******************************************

function oddEvenFactory(request)
{
    if(request == "odd")
    {
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    }else if(request == "even")
    {
        let even = function(n){
            console.log(n % 2 == 0);
        }
        return even;
    }else{
        console.log("Invalid request");
    }
}

let request = "even";

// Methods

const calculator = {
    num:55,
    add:function(a,b)
    {
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
