msgContainner = document.querySelector(".msg-containner");
console.log(msgContainner);
message = document.querySelector(".result-msg");
console.log(message);
newGameBtn = document.querySelector(".new-game-btn");
console.log(newGameBtn);
boxHeading = document.querySelector("#box-heading");
console.log(boxHeading);
boxContainner = document.querySelector(".box-containner");
console.log(boxContainner);
newGame = document.querySelector(".game");
console.log(newGame);
boxes = document.querySelectorAll(".box");
console.log(boxes);
resetBtn = document.querySelector(".reset-btn");
console.log(resetBtn);

let turn = true;

let winPatterns =   [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],    
    [2,4,6]
];



boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
    {
        if(turn == true)
        {
            box.innerText = "X";
            box.style.color = "white"; 
            turn = false;
        }
        else{
            box.innerText = "O";
            box.style.color = "green";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
});


const disabledBoxes = () =>
{
    for(let val of boxes)
    {
        val.disabled = true;
    }
}


const enabledBoxes = () =>
{
    for(let val of boxes)
    {
        val.disabled = false;
        val.innerText = "";
    }
}


const showWinner = (winner) =>
{
    message.innerText = `congratulations, the winner is : ${winner}`;
    msgContainner.classList.remove("hide");
    disabledBoxes();

}


const checkWinner = () => 
{
    let winner = false;
    for(let pattern of winPatterns)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1 !== "" && val2 != "" && val3 != "")
        {
            if(val1 == val2 && val2 == val3)
            {
                showWinner(val1);
                winner = true;
                break;
            }
        }
    }
    
    if(!winner) {
        let isDraw = true;
        boxes.forEach((box) => {
            if(box.innerText === "") {
                isDraw = false;
            }
        });

        if(isDraw) {
            message.innerText = "It's a Draw";
            msgContainner.classList.remove("hide");
            disabledBoxes();
        }
    }
};


const resetGame = () =>
{
    turn = true;
    enabledBoxes();
    msgContainner.classList.add("hide");
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
