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
    
}
var computer_score = 0;
var user_score = 0;
const user_input = get_user_choice()
const computer_input = get_computer_choice()

console.log(user_input);
console.log(play_round(user_input, computer_input))