console.log("Hello world");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let number = Math.floor(Math.random()*3);
    switch(number){
        case 0:
            console.log("rock");
            return "rock";
            break;
        case 1:
            console.log("paper");
            return "paper";
            break;
        case 2:
            console.log("scissors");
            return "scissors";
            break;
    }
}

function getHumanChoice(){
    let userInput = prompt("Pick between rock, paper or scissors");
    let validInput = false;
    userInput = userInput.toLowerCase();
    while(validInput == false){
        if(userInput == "rock" || userInput == "paper" || userInput == "scissors"){
            validInput = true;
        }
        else{
            userInput = prompt("Please enter a valid response, rock, paper or scissors");
        }
    }
    console.log(userInput);
    return userInput;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" 
    || humanChoice == "paper" && computerChoice == "rock"){
        console.log(`You win!" ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice == computerChoice){
        console.log('Draw');
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

console.log(playGame());
console.log(`Human score: ${humanScore} and computer score: ${computerScore}`);

if(humanScore>computerScore)
{
    console.log("You win!");
}
else if(computerScore>humanScore){
    console.log("You lose!");
}
else{
    console.log("Draw");
}