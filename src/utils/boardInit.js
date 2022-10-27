// pick up  > 50 < 60% from internet for fast finish this test :D Sorry
/* eslint-disable import/no-anonymous-default-export */
export default (row, col, bombs) => {
  let board = [];
  let mineLocation = [];

  for (let i = 0; i < row; i++) {
    let cols = [];
    for (let j = 0; j < col; j++) {
      cols.push({
        value: 0,
        open: false,
        x: i,
        y: j,
        flagged: false,
      });
    }
    board.push(cols);
  }

  const random = (min = 0, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  let bombsCount = 0;
  while (bombsCount < bombs) {
    let x = random(0, row - 1);
    let y = random(0, col - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      bombsCount++;
    }
  }

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < row; y++) {
      if (board[x][y].value === "X") {
        continue;
      }
      if (x > 0 && board[x - 1][y].value === "X") {
        board[x][y].value++;
      }

      if (x > 0 && y < col - 1 && board[x - 1][y + 1].value === "X") {
        board[x][y].value++;
      }

      if (y < col - 1 && board[x][y + 1].value === "X") {
        board[x][y].value++;
      }

      if (x < row - 1 && y < col - 1 && board[x + 1][y + 1].value === "X") {
        board[x][y].value++;
      }

      if (x < row - 1 && board[x + 1][y].value === "X") {
        board[x][y].value++;
      }

      if (x < row - 1 && y > 0 && board[x + 1][y - 1].value === "X") {
        board[x][y].value++;
      }

      if (y > 0 && board[x][y - 1].value === "X") {
        board[x][y].value++;
      }

      if (x > 0 && y > 0 && board[x - 1][y - 1].value === "X") {
        board[x][y].value++;
      }
    }
  }
  return { board, mineLocation };
};
