function get_computer_choice()
{
    let random = Math.floor(Math.random() * 3);
    return random;
}

function get_user_choice()
{
    let user_input = prompt("Enter: 0 for Rock, 1 for Paper, or 2 for Scissors")
}
console.log(get_computer_choice())
