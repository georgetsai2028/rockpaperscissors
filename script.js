function get_computer_choice()
{
    let random = Math.floor(Math.random() * 3);
    return random;
}

function get_user_choice()
{
    let user_input = prompt("Enter: 0 for Rock, 1 for Paper, or 2 for Scissors")
    return user_input;
}

function play_round(user_choice, computer_choice)
{
    
}
var computer_score = 0;
var user_score = 0;
let user_input = get_user_choice()

console.log(user_input);