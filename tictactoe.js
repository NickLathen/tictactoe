const Board = function Board() {
  this.board = [['','',''],['','',''],['','','']]; // row1 row2 row3
}

const areEqual = function areEqual(a, b, c) {
  return a === b && b === c;
};

Board.prototype = {
  drawBoard: function drawBoard() {
    console.log(`${this.board[0][0] || ' '}|${this.board[0][1] || ' '}|${this.board[0][2] || ' '}`);
    console.log('______');
    console.log(`${this.board[1][0] || ' '}|${this.board[1][1] || ' '}|${this.board[1][2] || ' '}`);
    console.log('______');
    console.log(`${this.board[2][0] || ' '}|${this.board[2][1] || ' '}|${this.board[2][2] || ' '}`);
  },
  checkBoard: function checkBoard(cb) {
    this.drawBoard();
    if (areEqual(this.board[0][0], this.board[0][1], this.board[0][2]) && this.board[0][0]) {
      if (this.board[0][0] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[1][0], this.board[1][1], this.board[1][2]) && this.board[1][0]) {
      if (this.board[1][0] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[2][0], this.board[2][1], this.board[2][2]) && this.board[2][0]) {
      if (this.board[2][0] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[0][0], this.board[1][0], this.board[2][0]) && this.board[0][0]) {
      if (this.board[0][0] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[0][1], this.board[1][1], this.board[2][1]) && this.board[0][1]) {
      if (this.board[0][0] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[0][2], this.board[1][2], this.board[2][2]) && this.board[0][2]) {
      if (this.board[0][2] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[0][0], this.board[1][1], this.board[2][2]) && this.board[0][0]) {
      if (this.board[0][0] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else if (areEqual(this.board[0][2], this.board[1][1], this.board[2][0]) && this.board[0][2]) {
      if (this.board[0][2] === 'X') {
        console.log('player 1 wins, type playAgain() to play again.');
      } else {
        console.log('player 2 wins, type playAgain() to play again.')
      }
    } else {
      cb();
    }
  }
};

const board = new Board();


playX = function playX(row, column) {
  if (board.board[row][column] !== '') {
    console.log('invalid play, try again');
    return null;
  } else {
    board.board[row][column] = 'X';
  }
  board.checkBoard(function() {
    console.log('Player 2, enter your turn by typing playO(row, column)');
  });
};

playO = function playO(row, column) {
  if (board.board[row][column] !== '') {
    console.log('invalid play, try again');
    return null;
  } else {
    board.board[row][column] = 'O';
  }
  board.checkBoard(function() {
    console.log('Player 1, enter your turn by typing playX(row, column)');
  });
};

playAgain = function playAgain() {
  board.board = [['','',''],['','',''],['','','']];
  console.log('Player 1, enter your turn by typing playX(row, column)');
  board.drawBoard();
}

//test
console.log('Player 1, enter your turn by typing playX(row, column)');
board.drawBoard();
