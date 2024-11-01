function get_computer_choice()
{
    let random = Math.floor(Math.random() * 3);
    return random;
}

function get_user_choice()
{
    let user_input = prompt("Enter: 0 for Rock, 1 for Paper, or 2 for Scissors")
    let count = 0;
    while (count < 1)
    {
        if (user_input < 0 || user_input > 2)
        {
            user_input = prompt("Please only enter 0, 1, or 2")
        }
        else if (user_input >= 0 || user_input <= 2)
        {
            count++;
        }
    }
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

let user_score = 0;
let computer_score = 0;

while (user_score <= 5 || computer_score <= 5)
{
    
}