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

function createImage(src, alt, width, height) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    
    return img;
}

const playerImage = document.querySelector(".playerDiv");
playerImage.style.display = "flex";
playerImage.style.padding = "20px";
playerImage.style.margin = "20px"

playerImage.appendChild(createImage(rockimage.jpg, "image of rock", 100, 100));
playerImage.appendChild(createImage(paperimage.jpg, "image of paper", 100, 100));
playerImage.appendChild(createImage(cartoonscissors.jpg, "image of scissors", 100, 100));

const computerImage = document.querySelector(".computerDiv");
computerImage.style.display = "flex";
computerImage.style.padding = "20px";
computerImage.style.margin = "20px"
computerImage.appendChild(rockImage);
computerImage.appendChild(paperImage);
computerImage.appendChild(scissorImage);



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