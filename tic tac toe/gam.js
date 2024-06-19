let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")
let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newGamebtn = document.querySelector("#new-btn")

let turnO = true;
let count = 0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText = "O";
        turnO = false;
       } else{
        box.innerText ="X";
        turnO = true;
       }
       box.disabled = true;
       count++;
    
       
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
       gamedraw();
    }
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled  = true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner =(winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner =()=>{
    for(let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val)
                return true;
            }
        }
    }
};

const gamedraw =()=>{
       msg.innerText = `game was a draw.`;
       msgContainer.classList.remove("hide");
       disableboxes();

};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);