// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function(){
// //     // console.log("button was clicked");
// //     alert("Button was clicked");
// // } 

// function sayHello(){
//     alert("HELLO!!");
// }

// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for(btn of btns)
{
    // btn.onclick = sayHello;
    // btn.onmouseenter = function()
    // {
    //     console.log("You entered a button");
    // };
    // btn.addEventListener("click",sayHello);
    btn.addEventListener("dblclick",function(){
        console.log("You double clicked me!");
    });
} 



function sayHello(){
    alert("HELLO!!");
}