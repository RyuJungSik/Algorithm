const solution = (input) => {
  let answer = 0;
  const [A, B, C] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const visited = Array.from({ length: 1501 }, () =>
    new Array(1501).fill(false)
  );
  const S = A + B + C;

  const bfs = () => {
    const q = [];
    q.push([A, B]);
    visited[A][B] = true;
    while (q.length) {
      let [a, b] = q.shift();
      const c = S - a - b;
      if (a === b && a === c) {
        answer = 1;
        return;
      }
      for (let [X, Y] of [
        [a, b],
        [a, c],
        [b, c],
      ]) {
        if (X < Y) [X, Y] = [X + X, Y - X];
        else if (X > Y) [X, Y] = [Y + Y, X - Y];
        else continue;
        const Z = S - X - Y;
        const nx = Math.min(X, Y, Z);
        const ny = Math.max(X, Y, Z);
        if (visited[nx][ny]) continue;
        visited[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  };

  if (S % 3 === 0) {
    bfs();
    return answer;
  } else {
    return answer;
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
