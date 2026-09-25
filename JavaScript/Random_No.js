let range = prompt("Enter max number");

let randomNumber = Math.floor(Math.random() * range) + 1;

let guess = prompt("Enter your guess");

while(true)
{
    if(guess == "quit")
    {
        console.log(("user has quit the game"));
        break;
    }
    
    if(guess == randomNumber)
    {
        console.log("Your guess was right.Congrats!!!");
        break;
    }else if(guess < randomNumber)
    {
        guess = prompt("Your guess was low. Please try again."); 
    }
    else{
        guess = prompt("Your guess was high. Please try again.");
    }
}