let choices=["rock", "paper", "scissors"];
let buttons=document.querySelectorAll(".buttons");
        /*let rock=document.querySelector("#rock");
        let paper=document.querySelector("#paper");
        let scissors=document.querySelector("#scissors");*/
        let para=document.querySelector("p");
        let computer_score=0, player_score=0;
        let comp=document.getElementById("comp");
        let play=document.getElementById("play");
        let playerSelection1;
        function computerPlay()
        {
            return Math.floor(Math.random()*3);
        }

        function playRound(event)
        {
            if(computer_score==5 || player_score==5)
            {
                if(computer_score>player_score){
                    alert("COMPUTER WINS THE GAME!");
                }
                else if(computer_score<player_score){
                    alert("YOU WON THE GAME!");
                }
                player_score=0;computer_score=0;
                comp.innerHTML=computer_score;
                play.innerHTML=player_score;
                let check=prompt("Do you want to play the game again?(yes/no)");
                if(check.toLocaleLowerCase()==="yes")
                {    
                    alert("You are about to start again");
                    para.style.color="white";
                    game();
                }
                else
                {
                    alert("Thank you for playing the game"); 
                    para.style.color="white";
                }
            }
            else if(computer_score<5 && player_score<5){
            //console.log(event.target.textContent);
            playerSelection=event.target.textContent.toLowerCase();
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
                    ++computer_score;
                    comp.innerHTML=computer_score;
                    play.innerHTML=player_score;
                }
            else if(playerSelection==="rock" && computerSelection==="scissors")
                //console.log("You win...Rock beats the scissors!");
                {
                    para.textContent=`${comp_choice}.Hurray...!Rock beats the scissors:)`;
                    ++player_score;
                    comp.innerHTML=computer_score;
                    play.innerHTML=player_score;
                }
            else if(playerSelection==="paper" && computerSelection==="rock")
                //console.log("You win...Paper wraps the rock");
                {
                    para.textContent=`${comp_choice}.Hurray...!Paper wraps the rock:)`;
                    ++player_score;
                    comp.innerHTML=computer_score;
                    play.innerHTML=player_score;
                }
            else if(playerSelection==="paper" && computerSelection==="scissors")
                //console.log("You lose...You are cut by the scissors");
                {
                    para.textContent=`${comp_choice}.Ooops...!You are cut by the scissors:(`;
                    ++computer_score;
                    comp.innerHTML=computer_score;
                    play.innerHTML=player_score;
                }
            else if(playerSelection==="scissors" && computerSelection==="rock")
                //console.log("You lose...You are beaten by the rock!");
                {
                    para.textContent=`${comp_choice}.Ooops...!You are beaten by the rock:(`;
                    ++computer_score;
                    comp.innerHTML=computer_score;
                    play.innerHTML=player_score;
                }
            else if(playerSelection==="scissors" && computerSelection==="paper")
                //console.log("You win...You have cut the paper!");
                {
                    para.textContent=`${comp_choice}.Hurray...!You have cut the paper:)`;
                    ++player_score;
                    comp.innerHTML=computer_score;
                    play.innerHTML=player_score;
                }
            game();
            }
        }
        /*rock.addEventListener("click", playRound);
        paper.addEventListener("click", playRound);
        scissors.addEventListener("click", playRound);*/
        game=()=>{
            buttons.forEach((button) => {
                button.addEventListener('click', playRound);
            });
        };
        game();