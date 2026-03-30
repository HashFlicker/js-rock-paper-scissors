function getComputerChoice(){
    // computer choice possibilities
    let possibilities = ["rock", "paper", "scissors"];

    // get random possibilities array index in range 0-2
    choice = possibilities[Math.floor(Math.random() * 3)]
    console.log(`Computer Choice is ${choice}`)
    return choice;

};

function getHumanChoice(){
    let choice = ["rock", "paper", "scissors"];
    let input = prompt("what's your choice ? (rock, paper, scissors)");
    if (choice.includes(input.toLowerCase())){
        return input
    } else {
        return "Input Error, check again"
    }
};

function playRound(humanChoice, computerChoice){
    
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        return 0;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        return 0;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        return 0;
    } else if (humanChoice == computerChoice){
        console.log("draw");
        return 2;
    } else {
        console.log("Congrats! You Win !");
        return 1;
    }

}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++){
        result = playRound(getHumanChoice(),getComputerChoice())
        switch (result) {
            case (0):
                computerScore++;
                break;
            case (1):
                humanScore++;
                break;
            default:
                break;
        }
    }
    console.log(`Human Score : ${humanScore}\nComputer Score : ${computerScore}`);
    if (humanScore > computerScore){
        alert("DAMN! YOU WIN!");
    } else if (humanScore < computerScore){
        alert("LOOSEEERR!!");
    } else {
        alert("DRAW MATCH! Try again !!!")
    }
}

playGame()
