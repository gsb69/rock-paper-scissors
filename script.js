
function playGame(){
let humanScore=0,computerScore=0;
let choice=['rock','paper','scissor'];
function getComputerChoice(){
    
    let ind= Math.floor(Math.random()*choice.length);
    return choice[ind];
}
function getHumanChoice(){
    let your=(prompt("enter a choice")).toLowerCase();
    if(!choice.includes(your))return 'not valid';
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
    if(h!=humanScore){
        console.log('you won! '+humanChoice+" beats "+computerChoice);
        alert('you won! '+humanChoice+" beats "+computerChoice);
    }
    else if(c!=computerScore){
         console.log("you lost! "+computerChoice+" beats "+humanChoice);
         alert("you lost! "+computerChoice+" beats "+humanChoice);
    }
    else {
        console.log("draw");
        alert("draw");
    }
}
    for(let i=0;i<5;i++)playRound(getHumanChoice(),getComputerChoice());
    if(humanScore>computerScore){
        document.getElementById('results').innerHTML='you won! '+humanScore+" : "+computerScore;
        console.log('you won! '+humanScore+" : "+computerScore);
    }
    else if(computerScore>humanScore){
        document.getElementById('results').innerHTML='you lost! '+humanScore+" : "+computerScore;
        console.log('you lost! '+humanScore+" : "+computerScore);
    }
    else{
         document.getElementById('results').innerHTML="It's a draw! "+humanScore+" : "+computerScore;
         console.log("It's a draw! "+humanScore+" : "+computerScore);
    }
}
