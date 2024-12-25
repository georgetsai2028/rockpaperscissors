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

let user_input;
let user_score = 0;
let computer_score = 0;

function get_computer_choice()
{
    let random = Math.floor(Math.random() * 3);
    return random;
}
function play_round(user_choice, computer_choice)
{
    //0 = Rock, 1 = Paper, 2 = Scissors
    if (user_choice ==  computer_choice)
    {
        console.log("Tied!");
    }
    else if ((user_choice == 0 && computer_choice == 2) || (user_choice == 1 && computer_choice == 0) || (user_choice == 2 && computer_choice == 1))
    {
        console.log("You win this round!!");
        user_score++;
    }
    else
    {
        console.log("Computer wins this round :(");
        computer_score++;
    }
    console.log(`User:  ${user_score} Computer:  ${computer_score}`);

    if (user_score == 5)
        {
            console.log("YOU WINNNNN!!!! :()");
            return 0;
        }
        else if (computer_score == 5)
        {
            console.log("WOMP WOMP YOU STINKKKK, MY GRANDMA COULD DO BETTER")
            return 0;
        }
}



rockButton.addEventListener("click", () => {
    user_input = 0;
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})
paperButton.addEventListener("click", () => {
    user_input = 1;
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})  
scissorsButton.addEventListener("click", () => {
    user_input = 2;
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})