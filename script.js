const buttonDiv = document.createElement("div");
buttonDiv.style.display = "flex";


const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

document.body.appendChild(buttonDiv);

function get_computer_choice()
{
    let random = Math.floor(Math.random() * 3);
    return random;
}

function get_user_choice()
{
    let user_input = 0;
    rockButton.document.querySelector("#btn");
    paperButton.document.querySelector("#btn");
    scissorsButton.document.querySelector("#btn");

    rockButton.addEventListener("click", user_input = 0);
    paperButton.addEventListener("click", user_input = 1);
    scissorsButton.addEventListener("click", user_input = 2);

    return user_input;
}
function play_round(user_choice, computer_choice)
{
    //0 = Rock, 1 = Paper, 2 = Scissors
    if (user_choice ==  computer_choice)
    {
        console.log("Tied!");
        return 0;
    }
    else if ((user_choice == 0 && computer_choice == 2) || (user_choice == 1 && computer_choice == 0) || (user_choice == 2 && computer_choice == 1))
    {
        console.log("You win this round!!");
        return 1;
    }
    else
    {
        console.log("Computer wins this round :(");
        return -1;
    }
}

/*
function play_game(){

let user_score = 0;
let computer_score = 0;

while (user_score < 5 && computer_score < 5)
{
    let user_choice = get_user_choice();
    let computer_choice = get_computer_choice();
    let round_result = play_round(user_choice, computer_choice);
    if (round_result == 1)
    {
        user_score += 1;
    }
    else if(round_result == -1)
    {
        computer_score += 1;
    }
    else if (round_result == 0)
    {
        user_score += 0;
    }

    console.log(`User:  ${user_score} Computer:  ${computer_score}`);
    
}

if (user_score == 5)
{
    console.log("YOU WINNNNN!!!! :()");
}
else if (computer_score == 5)
{
    console.log("WOMP WOMP YOU STINKKKK, MY GRANDMA COULD DO BETTER")
}
}
console.log(play_game())
*/