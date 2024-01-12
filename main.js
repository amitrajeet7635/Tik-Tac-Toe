let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#res");
let msg = document.querySelector("#msg");
let msgcont = document.querySelector(".msg-container");
let hideRes = document.querySelector(".hide-res");
let hideNew = document.querySelector(".hide-new");

let turn0 = true;
let count = 0;


const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgcont.classList.add("hide");
    hideNew.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            gameDraw();
        }
    });
}
);

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgcont.classList.remove("hide");
    hideNew.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};


const showWinner = (win) => {
    msg.innerHTML = `Congratulation Winner is  ${win}`;
    msgcont.classList.remove("hide");
    hideNew.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let winner of winningPattern) {
        let pos1 = boxes[winner[0]].innerHTML;
        let pos2 = boxes[winner[1]].innerHTML;
        let pos3 = boxes[winner[2]].innerHTML;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }

}

resetBtn.addEventListener("click",resetGame);
document.querySelector("#new").addEventListener("click",resetGame);