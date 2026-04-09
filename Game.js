let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");

const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = (userChoice) => {
    msg.innerText = ("The Game was Draw, you both chose " + userChoice);
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;
        msg.innerText = ("You Win! Your " + userChoice + " beats " + compChoice);
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScoreCount.innerText = compScore;
        msg.innerText = ("You Lose! " + compChoice + " beats your " + userChoice);
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        drawGame(userChoice);
    } else {
        let userWin = "True";
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
    showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});