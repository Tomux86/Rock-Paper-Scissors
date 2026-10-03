let humanScore = 0;
let computerScore = 0;

function getComputedChoice() {
    let n = Math.random();
    
    if (n < 0.3) {
        return 'Rock';
    } else if (n > 0.3 && n < 0.7) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
};

function getHumanChoice(choiceSelect) {
    const rockBtn = document.querySelector("#rock_btn");
    const paperBtn = document.querySelector("#paper_btn");
    const scissorBtn = document.querySelector("#scissor_btn");

    rockBtn.addEventListener("click", () => { choiceSelect('Rock')});
    paperBtn.addEventListener("click", () => { choiceSelect('Paper')});  
    scissorBtn.addEventListener("click", () => { choiceSelect('Scissor')});
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 'Draw'
    }

    if (humanChoice == 'Rock') {
        if (computerChoice == 'Scissor') {
            humanScore++;
            return 'Human';
        } else {
            computerScore++;
            return 'Computer'
        }
    }

    if (humanChoice == 'Paper') {
        if (computerChoice == 'Rock') {
            humanScore++;
            return 'Human';
        } else {
            computerScore++;
            return 'Computer'
        }
    }

    if (humanChoice == 'Scissor') {
        if (computerChoice == 'Paper') {
            humanScore++;
            return 'Human';
        } else {
            computerScore++;
            return 'Computer'
        }
    }
};






