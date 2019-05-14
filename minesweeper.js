document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      hidden: true,
    }, 
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true,
    }, 
    {
      row: 0,
      col: 2,
      isMine: true,
      hidden: true,
    }, 
    {
      row: 0,
      col: 3,
      isMine: true,
      hidden: true,
    },
    {
      row: 0,
      col: 4,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 0,
      isMine: true,
      hidden: true,
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 4,
      isMine: true,
      hidden: true,
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: true,
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 4,
      isMine: true,
      hidden: true,
    },
    {
      row: 3,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 4,
      isMine: false,
      hidden: true,
    },
    {
      row: 4,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 4,
      col: 1,
      isMine: true,
      hidden: true,
    },
    {
      row: 4,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 4,
      col: 3,
      isMine: true,
      hidden: true,
    },
    {
      row: 4,
      col: 4,
      isMine: false,
      hidden: true,
    }]
}

function startGame () {
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
    for (i = 0; i < board.cells.length; i++) {
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    }
  lib.initBoard()
}

// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
// function checkForWin () {
//   // You can use this function call to declare a winner (once you've
//   // detected that they've won, that is!)
//  lib.displayMessage('You win!')
// }

//1. for loop - loop through all of board.cells.
//2. if hidden === true on any of them, return out of the function.
//3. check if BOTH .isMine and .isMarked are true.
//4. return the displayMessage function if the above criteria pass.  

function checkForWin () {
  var correctTiles = 0
  var audio2 = new Audio("game-of-thrones-6x10-the-king-in-the-north.mp3");
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && board.cells[i].isMarked || !board.cells[i].isMine && !board.cells[i].hidden) {
      correctTiles++;
    }
    if (correctTiles === board.cells.length) {
      lib.displayMessage('ASCEND TO THE THRONE!') + audio2.play();
    }
  }
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) { 
    if (surrounding[i].isMine === true) {
      count++;
    } 
  }
  return count
};
 
//   Write a for loop:
//   1.loop through the SURROUNDING cells returned from       getSurroundingCells. 
//   2. for loop should check each cell for isMine = true. 
//   3. If isMine = true, add this cell to a 'count' variable. 
//   4. When you have the correct count, return it. 
