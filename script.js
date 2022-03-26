console.log("Call the game() function to begin");

function computerPlay() {
    let outcomes = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * outcomes.length);
    return outcomes[index];
}
let cs;
let cp;

function playRound(playerSelection, computerSelection) {
    let score = 0;
    let x = playerSelection;
    if (computerSelection == "rock") {
        if (x == "paper") {
            console.log("Paper beats rock, You get 1 point!");
            score +=1 ;
        }

        else if (x == computerSelection) {
            console.log("Draw no point..");
        }

        else {
            console.log("You lose. Rock beats" + " " + x);
        }
    }

    else if(computerSelection == "paper") {
        if (x == "scissors") {
            console.log("Scissors beats paper, You get 1 point!");
            score +=1 ;
        }

        else if (x == computerSelection) {
            console.log("Draw no point..")
        }

        else {
            console.log("You lose. Paper beats" + " " + x);
        }
    }

    else if(computerSelection == "scissors") {
        if (x == "rock") {
            console.log("Rock beats scissors, You get 1 point!");
            score += 1;
        }

        else if (x == computerSelection) {
            console.log("Draw no point..");
        }

        else {
            console.log("You lose. Scissors beats" + " " + x);
        }
    }

    return score;
}

function playgame() {
    let score1 = 0;
    for (let i = 0; i < 5; i++) {
        cs = computerPlay();
        cp = prompt("Enter (Rock/Paper/Scissor)").toLowerCase();
        score1 += playRound(cp,cs);
    }

    console.log("Total points in 5 rounds = " + score1);
}