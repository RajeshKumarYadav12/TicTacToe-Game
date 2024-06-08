let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset_button");
let newGameBtn = document.querySelector("#new_button");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");


let turnO=true; //playerX , PlayerO

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];





boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO===true) //playerO
        {
            box.innerText = 'O';
            turnO = false;
        }
        else //playerX
        {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner is", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);