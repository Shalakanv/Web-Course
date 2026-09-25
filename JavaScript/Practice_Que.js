let arr = [1,2,3,10,50];
let num = 8;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > num){
//         console.log(arr[i]);
//         break;
//     }
// }

function getElements(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }   
    }
}

getElements(arr, num);

// *****************************************

let str = "abcdabcdefgggh";

function removeDuplicates(str) {
    let result = "";
    for(let i=0; i<str.length; i++){
       let currentChar = str[i];  
       if(result.indexOf(currentChar) === -1){
            result += currentChar;
       }
    }
    return result;
}
console.log(removeDuplicates(str));

// ****************************************

let country = ["India", "USA", "UK", "Canada", "Australia"];
let maxi = 0;

// for(let i=0; i<country.length; i++){
//     let c =  country[i];
//     let count = 0;
//     for(let j=0; j<c.length; j++){
//         count++;
//     }
//     if(count > maxi){
//         maxi = count;
//     }
// }

function getMaxLength(country){
    for(let i=0;i<country.length;i++){
        let c = country[i];
        let count = 0;
        for(let j=0;j<c.length;j++){
            count++;
        }
        if(count > maxi){
            maxi = count;   
        }
    }
    return maxi;
}

console.log(`The maximum length of the country name is: ${getMaxLength(country)}`);


// ****************************************

let string = "sun";
let count = 0;

// for(let i=0; i<string.length; i++){
//     if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
//         count++;
//     }
// }
// console.log(`The number of vowels in the string is: ${count}`);

function countVowels(string){
    for(let i=0; i<string.length; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            count++;
        }
    }
    return count;
}
console.log(`The number of vowels in the string is: ${countVowels(string)}`);

// ***************************************

let start = 1;
let end = 20;

function generateRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(generateRandomNumber(start, end));

// ***************************************
// This keyword

const student ={
    name:"Shala",
    age:23,
    eng:90,
    math:99,
    phy:94,
    getAvg()
    {
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
        // this keyword is used to refer to the current object. In this case, it refers to the student object.
    }
}
student.getAvg();

// getAvg();

//***********************************************
// try and catch block

console.log("Hello");
console.log("Hello");
try{
    console.log(a);
}catch(err){
    console.log("a is not defined");
    console.log(err);
}
console.log("Hello");
console.log("Hello");




