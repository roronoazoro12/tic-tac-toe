var cellValues = ["","","","","","","","",""];
var currentPlayer = "X";
var computerPlayer = "0";

var cells = document.querySelectorAll(".cell");
cells.forEach((cell, index) => {
    cell.addEventListener("click",()=> {
        if (cellValues[index] === "" && !isGameOver()) {
            cell.innerText = currentPlayer;
            cellValues[index] = currentPlayer;

        if (checkWin(currentPlayer)){
            document.getElementById("status").innerHTML = "player" + currentPlayer + " won ";
        }
        else if(checkDraw()){
            document.getElementById("status").innerHTML = "Its a draw!";
        }
        else{
            currentPlayer = (currentPlayer ==="X") ? "0":"X"
        }
    }
    });
});

function isGameOver() {
    return checkWin("X")||checkWin("0")||checkDraw();
}

function checkWin(player) {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winCombinations) {
        if (cellValues[combination[0]] === player &&
            cellValues[combination[1]] === player &&
            cellValues[combination[2]] === player) {
            return true;
        }
    }
    return false;
}

function computerMove() {
   for (var i = 0; i < cellValues.length; i++) {
        if (cellValues[i] === "") {
            cells[i].innerText = computerPlayer;
            cellValues[i] = computerPlayer;

            if (checkWin(computerPlayer)) {
                document.getElementById("status").innerHTML = "Player " + computerPlayer + " wins!";
                gameOver = true;
            } else if (checkDraw()) {
                document.getElementById("status").innerHTML = "It's a draw!";
                gameOver = true;
            }

            currentPlayer = "X";
            break;
        }
    }
}

function checkDraw() {
    return cellValues.every(cell =>cell !== "");
}
document.querySelector(".restart").addEventListener("click", function() {
  cellValues=["","","","","","","","",""];
  cells.forEach(function(cell){
    cell.innerHTML="";
  })
  document.getElementById("status").innerHTML ="";
  currentPlayer="X";
});
