const solution = (board, moves) => {
  let answer = 0;
  const stack = [];

  moves.map((col) => {
    col -= 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === 0) continue;
      else {
        let now = board[i][col];
        board[i][col] = 0;
        if (stack[stack.length - 1] === now) {
          stack.pop();
          answer += 1;
        } else {
          stack.push(now);
        }
        break;
      }
    }
  });

  return answer * 2;
};
