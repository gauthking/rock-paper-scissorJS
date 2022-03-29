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
            document.getElementById("roundscore").innerHTML = "Computer Selection : Rock<br>Player Selection : Paper<br> Paper Beats Rock. You get 1 point! ";
            document.getElementById("roundscore").style.display = "block";
            console.log("Paper beats rock, You get 1 point!");
            score += 1;
        }

        else if (x == computerSelection) {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Rock<br>Player Selection : Rock<br> Draw! No points ";
            document.getElementById("roundscore").style.display = "block";
            console.log("Draw no point..");
        }

        else {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Rock<br>Player Selection : Scissors<br> Rock Beats Scissors. You get 0 point! ";
            document.getElementById("roundscore").style.display = "block";
            console.log("You lose. Rock beats" + " " + x);
        }
    }

    else if (computerSelection == "paper") {
        if (x == "scissors") {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Paper<br>Player Selection : Scissors<br> Scissors Beats Paper. You get 1 point! ";
            document.getElementById("roundscore").style.display = "block";
            console.log("Scissors beats paper, You get 1 point!");
            score += 1;
        }

        else if (x == computerSelection) {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Paper<br>Player Selection : Paper<br> Draw! No points ";
            document.getElementById("roundscore").style.display = "block";
            console.log("Draw no point..")
        }

        else {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Paper<br>Player Selection : Rock<br> Paper Beats Rock. You get 0 point! ";
            document.getElementById("roundscore").style.display = "block";
            console.log("You lose. Paper beats" + " " + x);
        }
    }

    else if (computerSelection == "scissors") {
        if (x == "rock") {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Scissors<br>Player Selection : Rock<br> Rock Beats Scissors. You get 1 point! ";
            document.getElementById("roundscore").style.display = "block";
            console.log("Rock beats scissors, You get 1 point!");
            score += 1;
        }

        else if (x == computerSelection) {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Scissors<br>Player Selection : Scissors<br> Draw! No points ";
            document.getElementById("roundscore").style.display = "block";
            console.log("Draw no point..");
        }

        else {
            document.getElementById("roundscore").innerHTML = "Computer Selection : Scissors<br>Player Selection : Paper<br> Scissors Beats Paper. You get 0 point! ";
            document.getElementById("roundscore").style.display = "block";
            console.log("You lose. Scissors beats" + " " + x);
        }
    }

    return score;
}


function myFunc() {
    let score2 = 0;
    cs = computerPlay();
    let input = document.getElementById("input").value;
    score2 += playRound(input, cs);
    return score2;
}

let score3 = 0;
let counter = 0;

function playGame() {
    if (counter != 5) {
        score3 += myFunc();
        counter++;
    }
    else if (counter == 5) {
        document.getElementById("roundscore").innerText = "Your total score in 5 rounds is " + score3;
        document.getElementById("roundscore").style.display = "block";
        document.getElementById("roundscore").style.fontSize = "3.2rem";
        console.log("Your total score in 5 rounds is " + score3);
    }

}
