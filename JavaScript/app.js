// let a = 10;
// let b = 5;
// // console.log("Addition is:", (a+b));
// // let ans = "The ans is: "+ (a+b) + " Rupees.";
// // let ans = `The total price is: ${a+b} Rupees.`
// // console.log(ans);

// // Arithmetic Operators
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// // Unary Operators
// console.log(a++); // 10
// console.log(++a); // 12

// // Assignment Operators
// b = a;
// console.log(b);
// console.log(a += a);
// console.log(a -= b);
// // many more

// // Comparison Operators
// let age = 18;
// console.log(age > 18);
// console.log(age >= 18);
//  console.log(age < 18);
// console.log(age <= 18);
// console.log(age == 18);
// console.log(age != 18);

// // Conditional Statements 
// let Age = 23;
// console.log("Befor if statement");
// if(Age >= 18)
// {
//     console.log("You can vote");
// }
// if(Age < 18)
// {
//     console.log("You can not vote");
// }
// console.log("After if statement");



// ********************** Traffic light question *********************

// let color = "Yellow";
// if(color === "Red")
// {
//     console.log("STOP");
// }
// else if(color === "Yellow")
// {
//     console.log("Slow Down");
// }
// else if(color === "Green")
// {
//     console.log("Go...");
// }
// else{
//     console.log("Traffic light is broken.")
// }

// // ****************** Popcorn practice que *******************

// let size = "XL";
// if(size === "XL")
// {
//     console.log("Popcorn price is: 250");
// }
// else if(size === "L")
// {
//     console.log("Popcorn price is: 200");
// }
// else if(size === "M")
// {
//     console.log("Popcorn price is: 100");
// }
// else{
//     console.log("Popcorn price is: 50");
// }

// // ************ Nested if else **************

// // let marks = 32;
// // if(marks >= 33)
// // {
// //     console.log("Pass");
// //     if(marks >= 80)
// //     {
// //         console.log("Grade: O");
// //     }
// //     else{
// //         console.log("Garde: A");
// //     }
// // }
// // else{
// //     console.log("Better luck next time");
// // }

// // Logical Operators

// let marks = 90;
// if(marks >= 33 && marks >=80)
// {
//     console.log("Pass");
//     console.log("A+");
// }

// if(marks >= 33 || marks >=80)
// {
//     console.log("Pass");
//     console.log("A+");
// }

// if(!(marks < 33))
// {
//     console.log("Pass");
//     console.log("A+");
// }

// // Practice Questions

// let string = "apna";

// if(string[0]==='a' && string.length > 3)
// {
//     console.log("good String");
// }
// else{
//     console.log("not a good String");
// }  

// // Truthy and falsy values

// let num = 0; // 0 means false

// if(num)
// {
//     console.log("Number is not zero");
// }else{
//     console.log("Number is zero");
// }

// // Switch statement

// let color1 = "red";

// switch(color1)
// {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("Light is broken");
// }

// // Practice question

// let day = 1;

// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wedday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Satirday");
//         break;
//     case 7:
//         console.log("Sunday, Fun day");
//         break;
//     default:
//         console.log("Wrong number");
// }

// alert("This is an alert message");
// let MIS = prompt("Enter your MIS no");
// console.log(MIS);

// JS Practice Questions Part2 
// Q1)

// let num1 = 29;
// if(num1 % 10 === 0)
// {
//     console.log("good");
// }else{
//     console.log("bad");
// }

// Q2)

// let name1 = prompt("Enter your name:");
// let age1 = prompt("Enter your age:");
// alert(name1+" is "+age1+" years old");
// console.log(`${name1} is ${age1} years old`);

// Q3)

let Quarter = "Quarter1";

switch(Quarter)
{
    case "Quarter1":
        console.log("January,February,March");
        break;
    case "Quarter2":
        console.log("April,May,June");
        break;
    case "Quarter3":
        console.log("July,August,September");
        break;
    case "Quarter4":
        console.log("October,November,December");
        break;
    default:
        console.log("Error!!");
}

// Q4)

let str = "Anuja";

if(((str[0]==='A' || str[0]==='a') && str.length > 5))
{
    console.log("golden string");
}else{
    console.log("not golden string");
}

// Q5)

let n1 = 15;
let n2 = 34;
let n3 = 24;

if((n1 > n2) && (n1 > n3))
{
    console.log(n1);
}else if((n2 > n1) && (n2 > n3))
{
    console.log(n2);
}
else{
    console.log(n3);
}

// Q6)

let digit1 = n2 % 10;
let digit2 = n3 % 10;

if((digit1 === digit2))
{
    console.log("Same last digit");
}
else{
    console.log("Different last digit");
}





