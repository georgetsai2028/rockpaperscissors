
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

function resetGame(){
    user_score = 0;
    computer_score = 0;
    userScore.textContent = user_score;
    computerScore.textContent = computer_score;


    winner.textContent = "";
    loser.textContent = "";

    //removes images from screen
    rockImagePlayer.style.display = "none";
    paperImagePlayer.style.display = "none";
    scissorImagePlayer.style.display = "none";
    rockImageComputer.style.display = "none";
    paperImageComputer.style.display = "none";
    scissorImageComputer.style.display = "none";

    location.reload();

}

let gameOver = false;

const gameContainer = document.createElement("div");
gameContainer.style.display = "flex";
gameContainer.style.justifyContent = "space-evenly";
document.body.appendChild(gameContainer);

const playerImage = createStyledDiv("playerDiv");
const computerImage = createStyledDiv ("computerDiv");
const versusImage = createImage("versus.jpg", "image of versus", 100, 100, 10);

gameContainer.appendChild(playerImage);
gameContainer.appendChild(versusImage);
versusImage.style.display = "block";

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

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const playerText = document.createElement("h1");
const computerText = document.createElement("h1");
playerText.textContent = "Player";
playerText.style.fontSize = "20px";
playerText.style.color = "darkgrey";
computerText.textContent = "Computer";
computerText.style.fontSize = "20px";
computerText.style.color = "darkgrey";

const buttonDiv = document.createElement("div");
buttonDiv.appendChild(playerText);
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorButton);
buttonDiv.appendChild(computerText);
document.body.appendChild(buttonDiv);


buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "center";
buttonDiv.style.alignItems = "spaced-evenly";
buttonDiv.style.backgroundColor = "darkblue";
buttonDiv.style.justifyItems = "center";

rockButton.style.margin = "10px";
paperButton.style.margin = "10px";
scissorButton.style.margin = "10px";

const scoreDiv = document.createElement("div");

const userScore = document.createElement("span");
userScore.id = "userScore";
userScore.textContent = "0";
userScore.style.fontSize = "50px";
userScore.style.fontFamily = "monospace";
userScore.style.color = "darkgrey";

const computerScore = document.createElement("span");
computerScore.id = "computerScore";
computerScore.textContent = "0";
computerScore.style.fontSize = "50px";
computerScore.style.fontFamily = "monospace";
computerScore.style.color = "darkgrey";


document.body.appendChild(scoreDiv);
scoreDiv.style.display = "flex";
scoreDiv.style.backgroundColor = "darkblue";
scoreDiv.style.justifyContent = "space-evenly";
scoreDiv.style.alignItems = "center";

scoreDiv.appendChild(userScore);
scoreDiv.appendChild(document.createTextNode(" : "));
scoreDiv.appendChild(computerScore);

const finalDiv = document.createElement("div");
finalDiv.style.direction = "flex";
finalDiv.style.backgroundColor = "darkblue";
finalDiv.style.flexGrow = "1";
document.body.appendChild(finalDiv);

const winner = document.createElement("h1");
const loser = document.createElement("h1");

finalDiv.appendChild(winner);
finalDiv.appendChild(loser);



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
    userScore.textContent = user_score;
    computerScore.textContent = computer_score;
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

    if (user_score >= 5 && user_score > computer_score)
        {
            console.log("YOU WINNNNN!!!! :)");
            winner.textContent = "YOU WINNN!!!!! :)";
            gameOver = true;
        }
        else if (computer_score >= 5 && computer_score > user_score)
        {
            console.log("WOMP WOMP YOU STINKKKK, MY GRANDMA COULD DO BETTER")
            loser.textContent = "WOMP WOMP YOU STINKKKK, MY GRANDMA COULD DO BETTER";
            gameOver = true;
        }
        if (gameOver == true){
            setTimeout(resetGame, 3000);
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