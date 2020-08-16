let choices=["rock", "paper", "scissors"];
let para=document.querySelector("p");
let myButton=document.querySelector("button");
let computer_score=0, player_score=0;
let comp=document.getElementById("comp");
let play=document.getElementById("play");
let playerSelection1;
function computerPlay()
{
    return Math.floor(Math.random()*3);
}

function playRound()
{
    playerSelection=prompt("Enter rock/paper/scissors").toLowerCase();
    if(playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors")
    {
        alert("enter any one of rock, paper, scissors(CASE-INSENSITIVE)");
        playerSelection1=prompt("Enter your choice").toLowerCase();
    }
    let computerSelection=choices[computerPlay()].toLowerCase();
    while(computerSelection===playerSelection)
        {
            computerSelection=choices[computerPlay()].toLowerCase();
        }
    let comp_choice=`Computer chose ${computerSelection}. You chose ${playerSelection}`;
    if(playerSelection==="rock" && computerSelection==="paper")
        //console.log("You lose...You are wrapped by the paper!");
        {
            para.textContent=`${comp_choice}.Ooops...!You are wrapped by the paper:(`;
            computer_score++;
            comp.innerHTML=computer_score;
            play.innerHTML=player_score;
        }
    else if(playerSelection==="rock" && computerSelection==="scissors")
        //console.log("You win...Rock beats the scissors!");
        {
            para.textContent=`${comp_choice}.Hurray...!Rock beats the scissors:)`;
            player_score++;
            comp.innerHTML=computer_score;
            play.innerHTML=player_score;
        }
    else if(playerSelection==="paper" && computerSelection==="rock")
        //console.log("You win...Paper wraps the rock");
        {
            para.textContent=`${comp_choice}.Hurray...!Paper wraps the rock:)`;
            player_score++;
            comp.innerHTML=computer_score;
            play.innerHTML=player_score;
        }
    else if(playerSelection==="paper" && computerSelection==="scissors")
        //console.log("You lose...You are cut by the scissors");
        {
            para.textContent=`${comp_choice}.Ooops...!You are cut by the scissors:(`;
            computer_score++;
            comp.innerHTML=computer_score;
            play.innerHTML=player_score;
        }
    else if(playerSelection==="scissors" && computerSelection==="rock")
        //console.log("You lose...You are beaten by the rock!");
        {
            para.textContent=`${comp_choice}.Ooops...!You are beaten by the rock:(`;
            computer_score++;
            comp.innerHTML=computer_score;
            play.innerHTML=player_score;
        }
    else if(playerSelection==="scissors" && computerSelection==="paper")
        //console.log("You win...You have cut the paper!");
        {
            para.textContent=`${comp_choice}.Hurray...!You have cut the paper:)`;
            player_score++;
            comp.innerHTML=computer_score;
            play.innerHTML=player_score;
        }
    game();
}

myButton.onclick=function game()
{
playRound();
}

game();