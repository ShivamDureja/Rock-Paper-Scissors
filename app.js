let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");


function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function convertTOword(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissor";

}

function win(userChoice, computerChoice) {
    userscore++
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const Smalluserword = "user".fontsize(3).sup();
    const Smallcompword = "comp".fontsize(3).sup();
    const userchoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTOword(userChoice)}${Smalluserword} beats  ${convertTOword(computerChoice)}${Smallcompword}. You WIN! \u{1F947}`;
    userchoice_div.classList.add('green-glow');
    setTimeout(() => userchoice_div.classList.remove('green-glow'), 500);

}


function lose(userChoice, computerChoice) {
    computerscore++;
    userscore.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const Smalluserword = "user".fontsize(3).sup();
    const Smallcompword = "comp".fontsize(3).sup();
    const userchoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTOword(userChoice)}${Smalluserword} loses to ${convertTOword(computerChoice)}${Smallcompword}. You LOST... \u{1F627}`;
    userchoice_div.classList.add('red-glow');
    setTimeout(() => userchoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    const Smalluserword = "user".fontsize(3).sup();
    const Smallcompword = "comp".fontsize(3).sup();
    const userchoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTOword(userChoice)}${Smalluserword} equals  ${convertTOword(computerChoice)}${Smallcompword}. The game is Drawn! \u{2693}`;
    userchoice_div.classList.add('gray-glow');
    setTimeout(() => userchoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;

        case "paperscissor":
        case "rockpaper":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;

        case "paperpaper":
        case "rockrock":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissor"));
}


main();
