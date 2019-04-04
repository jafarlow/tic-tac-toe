'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")

//SET CURRENT PLAYER -- will be updated in the function below based on turn
let currentPlayer = "X"
console.log("current player is " + currentPlayer);

const gameBoard = ["","","","","","","","",""]

//TILE INTERACTION
const onChooseTile = function (event) {
  event.preventDefault()
  console.log("I've been clicked!");

  // is the box empty? -- .text getter!
  if ($(event.target).text() === "") {
    // .text setter!
    $(event.target).text(currentPlayer)
    // update the array index with clicked tile value
    const index = $(event.target).data("id")
    gameBoard[index] = currentPlayer
    console.log(gameBoard);
    //CHANGE PLAYER
    if (currentPlayer === "X") {
      currentPlayer = "O"
    } else {
      currentPlayer = "X"
    }
  } else {
    //ALERTS ARE BAD, BUT GOOD FOR INITIAL TESTING
    alert("That cell is taken!")
  }

  const gameOver = function (gameBoard, currentPlayer) {
    // Is the game over? -- win/tie
    if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && currentPlayer === 0)
    || (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5])
    || (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8])
    || (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6])
    || (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7])
    || (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8])
    || (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8])
    || (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])) {
      console.log(currentPlayer + " wins!");
    }

  }


/*(gameBoard[0] === gameBoard[1] === gameBoard[2])
  || (gameBoard[3] === gameBoard[4] === gameBoard[5])
  || (gameBoard[6] === gameBoard[7] === gameBoard[8])
  || (gameBoard[0] === gameBoard[3] === gameBoard[6])
  || (gameBoard[1] === gameBoard[4] === gameBoard[7])
  || (gameBoard[2] === gameBoard[5] === gameBoard[8])
  || (gameBoard[0] === gameBoard[4] === gameBoard[8])
  || (gameBoard[2] === gameBoard[4] === gameBoard[6])*/

/*(row-1 !== "" && (row-1 === "X" || row-1 === "O"))
  || (row-2 !== "" && (row-2 === "X" || row-2 === "O"))
  || (row-3 !== "" && (row-3 === "X" || row-3 === "O"))
  || (diag-1 !== "" && (diag-1 === "X" || diag-1 === "O"))
  || (diag-2 !== "" && (diag-2 === "X" || diag-2 === "O"))*/

//DO THIS PART LAST!!
/*  api.chooseTile()
    .then(ui.chooseTileSuccess)
    .catch(ui.chooseTileFailure)*/
}


//ALL HANDLERS
const addHandlers = function () {
  $(".tile").on("click", onChooseTile)
}

module.exports = {
  addHandlers
}
