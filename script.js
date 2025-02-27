let boxes = document.querySelectorAll(".buttons");
let reset = document.getElementById("reset-btn");
let newgame = document.getElementById("new-btn");

let countclick =0;
let turnO = true // considering two players  :- playerO and playerX;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        countclick+=1;

        checkwinner();
    });
});
const enableButtons = () => {
    for (let box of boxes)
        box.disabled = false
}
const disableButtons = () => {
    for (let box of boxes)
        box.disabled = true
}
const checkwinner = () => {
    let flag = false
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                flag = true;
                if (!turnO)
                    document.querySelector(".con").innerHTML = "Congratulation playerO wins";
                else
                    document.querySelector(".con").innerHTML = "Congratulation playerX wins";
                disableButtons();
            }
        }
        else if(countclick==9 )
        {
            document.querySelector(".con").innerHTML = "DRAW";
        }
    }

}

reset.addEventListener("click", () => {
    turnO = true;
    countclick =0;
    enableButtons();
    document.querySelector(".con").innerHTML = "";
    boxes.forEach((box) => {
        box.innerText = "";
    });
});

newgame.addEventListener("click", () => {
    turnO = true;
    countclick =0;
    enableButtons();
    document.querySelector(".con").innerHTML = "";
    boxes.forEach((box) => {
        box.innerText = "";
    });
});