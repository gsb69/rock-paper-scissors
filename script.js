
function playGame(){
let humanScore=0,computerScore=0;
let choice=['rock','paper','scissor'];
function getComputerChoice(){
    
    let ind= Math.floor(Math.random()*choice.length);
    return choice[ind];
}
function getHumanChoice(){
    let your=(prompt("enter a choice")).toLowerCase();
    if(!choice)return 'not valid';
    return your;
}
function playRound(humanChoice,computerChoice){
    let h=humanScore,c=computerScore;
    if(humanChoice=='rock'){
        if(computerChoice=='paper')computerScore++;
        else if(computerChoice=='scissor')humanScore++;
    }
    else if(humanChoice=='paper'){
        if(computerChoice=='rock')humanScore++;
        else if(computerChoice=='scissor')computerScore++;
    }
    else if(humanChoice=='scissor'){
        if(computerChoice=='paper')humanScore++;
        else if(computerChoice=='rock')computerScore++;
    }
    if(h!=humanScore)console.log('you won! '+humanChoice+" beats "+computerChoice);
    else if(c!=computerScore) console.log("you lost! "+computerChoice+" beats "+humanChoice);
    else console.log("draw");
}
    for(let i=0;i<5;i++)playRound(getHumanChoice(),getComputerChoice());
    if(humanScore>computerScore)console.log('you won! '+humanScore+" : "+computerScore);
    else if(computerScore>humanScore)console.log('you lost! '+humanScore+" : "+computerScore);
    else console.log("Draw");
}
playGame();