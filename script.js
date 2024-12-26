
function createImage(src, alt, width, height, padding) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.style.padding = `${padding}px`;
    img.style.display = "none";
    
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

gameContainer.appendChild(playerImage);
gameContainer.appendChild(computerImage);


const rockImagePlayer = createImage("rockimage.jpg", "image of rock", 100, 100, 5);
const paperImagePlayer = createImage("paperimage.jpg", "image of paper", 100, 100, 5);
const scissorImagePlayer = createImage("cartoonscissors.jpg", "image of scissors", 100, 100, 5);

playerImage.appendChild(rockImagePlayer);
playerImage.appendChild(paperImagePlayer);
playerImage.appendChild(scissorImagePlayer);


const rockImageComputer = createImage("rockimage.jpg", "image of rock", 100, 100, 5);
const paperImageComputer = createImage("paperimage.jpg", "image of paper", 100, 100, 5);
const scissorImageComputer = createImage("cartoonscissors.jpg", "image of scissors", 100, 100, 5);

computerImage.appendChild(rockImageComputer);
computerImage.appendChild(paperImageComputer);
computerImage.appendChild(scissorImageComputer);

gameContainer.appendChild(playerImage);
gameContainer.appendChild(computerImage);

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


let user_input;
let user_score = 0;
let computer_score = 0;

function get_computer_choice()
{
    let random = Math.floor(Math.random() * 3);
    if (random == 0) 
    {
    rockImageComputer.style.display = "block";
    paperImageComputer.style.display = "none";
    scissorImageComputer.style.display = "none";
    }
    else if (random == 1)
    {
        rockImageComputer.style.display = "none";
        paperImageComputer.style.display = "block";
        scissorImageComputer.style.display = "none";
    }
    else if (random == 2)
    {
    rockImageComputer.style.display = "none";
    paperImageComputer.style.display = "none";
    scissorImageComputer.style.display = "block";
    }
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
    rockImagePlayer.style.display = "block";
    paperImagePlayer.style.display = "none";
    scissorImagePlayer.style.display = "none";
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})
paperButton.addEventListener("click", () => {
    user_input = 1;
    rockImagePlayer.style.display = "none";
    paperImagePlayer.style.display = "block";
    scissorImagePlayer.style.display = "none";
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})  
scissorButton.addEventListener("click", () => {
    user_input = 2;
    rockImagePlayer.style.display = "none";
    paperImagePlayer.style.display = "none";
    scissorImagePlayer.style.display = "block";
    const computer_choice = get_computer_choice();
    play_round(user_input, computer_choice);
})