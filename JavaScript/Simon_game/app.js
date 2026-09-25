let gameSeq = [];
let userSeq = [];

let btns = ["green","pink","yellow","purple"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false)
    {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choice
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAnswer(idx){
    // console.log("Current level:", level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        if(level > highScore){
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> 
        Highest Score: <b>${highScore}</b>
        <br> Press any key to restart.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAnswer(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}