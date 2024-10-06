let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        count++;
        if(turnO){
            console.log("box is clicked");
            box.style.color = "black";
            box.innerText = "O";
            turnO = false
        }else{
            console.log("box is clicked");
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner(count);
    });
});

const checkWinner = (count) =>{
    for(let pattern of winningPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
        if(count === 9){
            gameDraw();
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations🎉🎉, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}


const gameDraw = () => {
    msg.innerText = `Game is Draw!!!`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);