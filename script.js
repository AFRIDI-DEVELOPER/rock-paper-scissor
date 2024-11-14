let userScore = 0;
let compScore = 0;
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")
const msg=document.querySelector(".move")
const choices = document.querySelectorAll(".choice");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText=`you are win! your-${userChoice} beats computer's-${compChoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore
        msg.innerText=`you are lose computer's-${compChoice} beats your-${userChoice}`
       msg.style.backgroundColor="red"
    }
}
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText="game is draw"
       msg.style.backgroundColor="black"
}

const playGame = (userChoice) => {
    console.log("user choice=", userChoice)
    //computer choices
    const compChoice = genCompChoice()
    console.log("comp Choice=", compChoice)
    if (userChoice === compChoice) {
        drawGame();
let userWin=true;
    }
    else{
let userWin=true;
if(userChoice==="rock"){
    userWin=compChoice==="paper"?false:true;
}
else if(userChoice==="paper"){
    userWin=compChoice==="scissor"?false:true;
}
else{
userWin=compChoice==="rock"?false:true;
}
showWinner(userWin,userChoice,compChoice);

    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});