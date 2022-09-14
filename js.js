let board = [];
let cols = 8;
let rows = 8;

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < cols; j++) {
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
      row[j] = "black";
    } else {
      row[j] = "white";
    }
  }
  // console.log(row);
  board[i] = row;
}
console.log(board);
