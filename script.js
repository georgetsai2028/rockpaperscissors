const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");

const buttonDiv = document.createElement("div");
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorButton);
document.body.appendChild(buttonDiv);

buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "center";
buttonDiv.style.backgroundColor = "darkblue";
buttonDiv.style.justifyItems = "center";

rockButton.style.margin = "10px";
paperButton.style.margin = "10px";
scissorButton.style.margin = "10px";

function createImage(src, alt, width, height, padding) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.style.padding = `${padding}px`;
    
    return img;
}

function createStyledDiv(className) {
    const div = document.createElement("div");
    div.className = className;
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.padding = "5px";
    div.style.border = "1px solid lightpurple";
    div.style.backgroundColor = "lightblue";
    
    return div;
}

const gameContainer = document.createElement("div");
gameContainer.style.display = "flex";
gameContainer.style.justifyContent = "center";
document.body.appendChild(gameContainer);

const playerImage = createStyledDiv("playerDiv")
const computerImage = createStyledDiv ("computerDiv");


playerImage.appendChild(createImage("rockimage.jpg", "image of rock", 100, 100, 5));
playerImage.appendChild(createImage("paperimage.jpg", "image of paper", 100, 100, 5));
playerImage.appendChild(createImage("cartoonscissors.jpg", "image of scissors", 100, 100, 5));


computerImage.appendChild(rockImage);
computerImage.appendChild(paperImage);
computerImage.appendChild(scissorImage);

gameContainer.appendChild(playerImage);
gameContainer.appendChild(computerImage);


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
scissorButton.addEventListener("click", () => {
    user_input = 2;
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})