let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let UserScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice =() => {
    let options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () =>{
    console.log("game draw");
    msg.innerText ="game draw";
    msg.style.backgroundColor = "#CAFF8A"
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        UserScorePara.innerText =userScore;
        console.log("You won");
        msg.innerText ="You won";
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loose");
        msg.innerText ="You loose";
        msg.style.backgroundColor = "red"
    }
    
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("you choose",userChoice);
    console.log("comp choose", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock"){
        userWin = compChoice  === "paper"? false: true;
        }
        else if(userChoice === "paper"){
        userWin = compChoice == "scissors" ? false: true
        }
        else{
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}



choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});