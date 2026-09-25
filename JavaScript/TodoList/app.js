let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul =  document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);

    input.value =  "";
});

ul.addEventListener("click", function(event){
    console.log(event.target); // event.target is the element that was clicked
    if(event.target.nodeName === "BUTTON") // if the clicked element is a button
    {
       let listItem = event.target.parentElement; // get the parent element of the button (the li)
       listItem.remove(); // remove the li element
    }
    console.log("button clicked");
});
   

// let  delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//         // If we want to remove newly added li then we have to use event delegation ( newly added li will not get delete here )
//         // event delegation is a technique of using event bubbling to handle events for dynamically added elements. We can add an event listener to a parent element and check if the target of the event is the element we want to handle. If it is, we can perform the desired action. This way, we can handle events for elements that are added to the DOM after the initial page load.
//     });
// }