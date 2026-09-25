
// Generate random color

// let btn =  document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h1 = document.querySelector("h1");
//     let randomColor = getRandomColor();
//     h1.innerText = randomColor;
//     let div =  document.querySelector("div");
//     div.style.backgroundColor =  randomColor;

//     console.log("color updated");
// })

// function getRandomColor()
// {
//     let red =  Math.floor(Math.random()*255);
//     let green =  Math.floor(Math.random()*255);
//     let blue =  Math.floor(Math.random()*255);

//     let finalColor = `rgb(${red},${green},${blue})`;
//     return finalColor;
// }

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1  = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor()
// {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow"; 
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// let btn =  document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function()
// {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// })

// let inp1 = document.querySelector("input");
// inp.addEventListener("keyup",function()
// {
//     console.log("key was released");
// })

// inp.addEventListener("keydown",function(event){
//     console.log("code =",event.code); // ArrowUp,ArrowDown,ArrowLeft,ArowRight
//     if(event.code == "ArrowUp")
//     {
//         console.log("Character moves forward");
//     }
//     else if(event.code == "ArrowDown")
//     {
//         console.log("character moves backward");
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log("character mmoves left");
//     }
//     else if(event.code == "ArrowRight")
//     {
//         console.log("character moves right");
//     }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // alert("Form is submitted");

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// event bubbling

let div = document.querySelector("div");
let li = document.querySelector("li");
let ul = document.querySelector("ul");

div.addEventListener("click",function(){
    console.log("div clicked");
});

ul.addEventListener("click",function(event){
    console.log("ul clicked");
    event.stopPropagation();
});     

li.addEventListener("click",function(event){
    console.log("li clicked");
    event.stopPropagation();
});

