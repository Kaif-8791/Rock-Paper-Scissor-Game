let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");

const drawGame = () => {
    console.log("Match was Draw");
    msg.innerText="Match was Draw";
    msg.style.backgroundColor="#372B57";
};

const showWinner=(userWin,choiceId,comChoice)=>{
    if(userWin){
        console.log("you win");
        msg.innerText=` You Win! Your Choice ${choiceId} beats ${comChoice} `;
        msg.style.backgroundColor="green";
        userScore++;
        user.innerText=userScore;
    }
    else{
        console.log("You lose");
        msg.innerText=`You Lose  Computer Choice ${comChoice} beats ${choiceId} `;
        msg.style.backgroundColor="red";
        compScore++;
       comp.innerText=compScore;
    }
};

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const choIdx=Math.floor(Math.random()*3);
    return options[choIdx];
};

const playGame=(choiceId)=>{
    console.log("User Choice", choiceId);
    const comChoice= genCompChoice();
    console.log("Computer Choice", comChoice);
    if (choiceId === comChoice){
        drawGame();
    }else{
        let userWin=true;
        if (choiceId==="Rock"){
            userWin=comChoice==="Paper"? false: true;
        }else if(choiceId==="Paper"){
            userWin=comChoice==="Scissor"? false: true;
        }
        else{
            userWin=comChoice==="Rock"? false: true;
        }
    showWinner(userWin,choiceId,comChoice);
    }
};


choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        
        playGame(choiceId);
    })
});