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

// let Quarter = "Quarter1";

// switch(Quarter)
// {
//     case "Quarter1":
//         console.log("January,February,March");
//         break;
//     case "Quarter2":
//         console.log("April,May,June");
//         break;
//     case "Quarter3":
//         console.log("July,August,September");
//         break;
//     case "Quarter4":
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Error!!");
// }

// // Q4)

// let str = "Anuja";

// if(((str[0]==='A' || str[0]==='a') && str.length > 5))
// {
//     console.log("golden string");
// }else{
//     console.log("not golden string");
// }

// // Q5)

// let n1 = 15;
// let n2 = 34;
// let n3 = 24;

// if((n1 > n2) && (n1 > n3))
// {
//     console.log(n1);
// }else if((n2 > n1) && (n2 > n3))
// {
//     console.log(n2);
// }
// else{
//     console.log(n3);
// }

// // Q6)

// let digit1 = n2 % 10;
// let digit2 = n3 % 10;

// if((digit1 === digit2))
// {
//     console.log("Same last digit");
// }
// else{
//     console.log("Different last digit");
// }


// String Methods

// let str = "  Hello  ";
// let ans = str.trim();
// console.log(ans);

// console.log(ans.toUpperCase());

// let msg = "ILoveCoding";
// console.log(msg.indexOf("Love"));

// let M = "    Shalaka   ";
// // let newM = M.trim();
// // console.log("Message after trim:",newM);
// // newM = newM.toUpperCase();
// // console.log("After uppercase:",newM);

// let newM = M.trim().toUpperCase();
// console.log(newM);

// let msg = "apnaCollege";
// console.log(msg.slice(4,msg.length));
// console.log(msg);

// console.log(msg.replace("apna","My"));

// console.log(msg.repeat(3));


// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// let name ="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));

// console.log(name.slice(4,name.length).replace('l','t'));
// console.log(name.slice(4,name.length).replace('l','t').replace('l','t'));


// ********************* Array DS ****************

// let student1 = "Shalaka";
// let student2 = "Lokesh";
// let student3 = "Shlok";
// instead of this we will create array 

// let array = ["Shalaka","Lokesh","Shlok"];
// let info = ["Shalaka",25,6.1]; // mixed array 

// let cars = ["audi","bmw","xuv","maruti"];

// let months = ["januray","july","march","august"];

// ****************** Practice Questions (part 3) **************

// let array = [1,2,3,4];
// let n = 3;

// let ans = array.slice(0,n);
// console.log(ans);

// // ***********************************


// let ans1 = array.slice(array.length-n);
// console.log(ans1);


// // ************************************

// let name = 'Shala';

// if(name.length == 0)
// {
//     console.log("Blank");
// }
// else{
//     console.log("Not Blank");
// }

// // **********************************

// let index = 2;
// if(name[index] == name[index].toLowerCase())
// {
//     console.log("Character is lowercase");
// }
// else{
//     console.log("Character is not lowercase");
// }

// // *****************************************

// let String = "     Lokesh  ";

// let newOne = String.trim();
// console.log(newOne);

// // Print table of 5

// let num = prompt("Enter your number");
// num = parseInt(num);
// for(let i=1;i<=10;i++)
// {
//     console.log(i*num);
// }

// favourite movie

// let favourite = "Harry Potter";

// let guess = prompt("Enter your guess");

// while((guess != favourite))
// {
//     if(guess == "quit")
//     {
//         console.log("You quit");
//         break;
//     }
//     guess = prompt("Wrong guess.Please try again");
// }

// if(guess == favourite)
// {
//     console.log("Congrats");
// }

// break keyword use

// let i = 1;

// while(i<=5)
// {
//     if(i == 3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// loops with arrays

// let fruits = ["Apple","banana","Litchi","Orange","mango"];

// for(let i=0;i<fruits.length;i++)
// {
//     console.log(i,fruits[i]);
// }

// Nested loops with nested arrays

// let heroes = [["Ironman","spiderman","Thor"],["superman","wonder woman","Flash"]];

// for(let i=0;i<heroes.length;i++)
// {
//     console.log(i,heroes[i]);
//     for(let j=0;j<heroes[i].length;j++)
//     {
//         // console.log(j,heroes[i][j]);
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// for of loop

// for(fruit of fruits)
// {
//     console.log(fruit);
// }

// char is just a variable name , you can use any thing here
// for(char of "apnacollege")
// {
//     console.log(char);
// }

// Nested for of loop

// for(list of heroes)
// {
//     for(name of list)
//     {
//         console.log(name);
//     }
// }

// JS Practice Questions

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==num)
//     {
//         arr.splice(i,1);
//         i--;
//     }
// }

// console.log(arr);

// JS program to find no of digits in a number

// let num1 = 287152;
// let count = 0;
// let sum = 0;

// while(num1 != 0)
// {
//     let rem = num1 % 10;
//     count++;
//     num1 = Math.floor(num1/10);
// }

// console.log(count);

// while(num1 != 0)
// {
//     let rem1 = num1 % 10;
//     sum = sum+rem1;
//     num1 = Math.floor(num1/10);
// }

// console.log(sum);

// write factorial of a number n

let n = 5;
let factorial = 1;

for(let i=1;i<=n;i++)
{
    factorial = factorial * i;
}

console.log(factorial);

// Find largest number in an array

let num = [10,20,30,40,50];
let max = num[0];

for(let i=0;i<num.length;i++)
{
    if(num[i] > max)
    {
        max = num[i];
    }
}
console.log(max);









