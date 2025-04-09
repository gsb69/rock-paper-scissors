
const rock=document.createElement("button");
rock.textContent="rock";
const paper=document.createElement("button");
paper.textContent="paper";
const scissor=document.createElement("button");
scissor.textContent="scissor";
const container=document.querySelector(".container")
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);
const buttons=document.querySelectorAll("button");
let humanScore=0,computerScore=0;
const Array=['rock','paper','scissor'];
const result=document.createElement("h1");
container.appendChild(result);

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const humanChoice=e.target.textContent;
        const computerChoice=Array[Math.floor(Math.random()*Array.length)];
        if(humanChoice==='rock'){
            if(computerChoice==='paper'){
                computerScore++;
                result.innerHTML="you lost <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
                
            }
            else if(computerChoice==='scissor'){
                humanScore++;
                result.innerHTML="you won <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
                
            }
            else result.innerHTML="draw <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
        }
        if(humanChoice==='paper'){
            if(computerChoice==='rock'){
                humanScore++;
                result.innerHTML="you won <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
                
            }
            else if(computerChoice==='scissor'){
                computerScore++;
                result.innerHTML="you lost <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
                
            }
            else result.innerHTML="draw <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
        }
        if(humanChoice==='scissor'){
            if(computerChoice==='rock'){
                computerScore++;
                result.innerHTML="you lost <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
                
            }
            else if(computerChoice==='paper'){
                humanScore++;
                result.innerHTML="you won <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
                
            }
            else result.innerHTML="draw <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
        }
        if(humanScore==5){
            result.innerHTML="you won the match <br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
            humanScore=0;
            computerScore=0;
        }
        else if(computerScore==5){
            result.innerHTML="you lost the match<br>"+humanChoice+ " : " +computerChoice+"<br>"+humanScore+" : "+computerScore;
            humanScore=0;
            computerScore=0;
        }
        
    });


});


