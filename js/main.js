const hmnLog = document.querySelector("#humanLog");
const cprLog = document.querySelector("#computerLog");
const hmnSLog = document.querySelector("#humanSLog");
const cprSLog = document.querySelector("#computerSLog");
const winLog = document.querySelector("#winner");


let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

function getComputerChoice() {
    let n = Math.random();
    
    if (n <= 0.3) {
        return 'Rock';
    } else if (n > 0.3 && n <= 0.6) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

function getHumanChoice(callback) {
    const rockBtn = document.querySelector("#rock_btn");
    const paperBtn = document.querySelector("#paper_btn");
    const scissorsBtn = document.querySelector("#scissors_btn");

    rockBtn.addEventListener("click", () => {callback('Rock')});
    paperBtn.addEventListener("click", () => {callback('Paper')});
    scissorsBtn.addEventListener("click", () => {callback('Scissors')});
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return;
    }

    if (humanChoice == 'Rock') {
        if (computerChoice == 'Scissors') {
            humanScore++;
            return;
        } else {
            computerScore++;
            return;
        }
    }

    if (humanChoice == 'Paper') {
        if (computerChoice == 'Rock') {
            humanScore++;
            return;
        } else {
            computerScore++;
            return;
        }
    }

    if (humanChoice == 'Scissor') {
        if (computerChoice == 'Paper') {
            humanScore++;
            return 'Human';
        } else {
            computerScore++;
            return;
        }
    }
};

function playGame() {
    let round = 1;

    getHumanChoice((humanChoice) => {
        if (round > 5) {
            if (humanScore == computerScore) {
                winLog.innerHTML = 'Draw'
            } else if (humanScore > computerScore) {
                winLog.innerHTML = 'Human'
            } else {
                winLog.innerHTML = 'Computer'
            }
            return;
        }

        computerChoice = getComputerChoice();
        hmnLog.innerHTML = humanChoice;
        cprLog.innerHTML = computerChoice;

        playRound(humanChoice, computerChoice);
    
        hmnSLog.innerHTML = humanScore;
        cprSLog.innerHTML = computerScore;

        round++;
    });
};

playGame();
