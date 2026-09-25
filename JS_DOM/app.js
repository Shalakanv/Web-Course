// console.dir(document.querySelector('h1'));

// console.dir(document.querySelectorAll("div a"));

let Links = document.querySelectorAll(".box a");

for(let i=0;i<Links.length;i++)
{
    Links[i].style.color = "purple";
}