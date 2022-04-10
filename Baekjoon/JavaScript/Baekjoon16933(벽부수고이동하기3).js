const solution = (input) => {
  const [N, M, K] = input.shift().split(" ").map(Number);
  const board = Array.from({ length: N }, (_, idx) =>
    input[idx].split("").map(Number)
  );
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const check = Array.from({ length: N }, () =>
    Array.from({ length: M }, () =>
      Array.from({ length: K + 1 }, () => new Array(2).fill(0))
    )
  );

  const q = [];
  //0 이 낮 1이 밤
  q.push([0, 0, 0, 0]);
  check[0][0][0][0] = 1;
  while (q.length) {
    const [x, y, z, day] = q.shift();
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (board[nx][ny] === 0 && check[nx][ny][z][1 - day] === 0) {
        check[nx][ny][z][1 - day] = check[x][y][z][day] + 1;
        q.push([nx, ny, z, 1 - day]);
      }
      if (
        z < K &&
        board[nx][ny] === 1 &&
        day === 0 &&
        check[nx][ny][z + 1][1 - day] === 0
      ) {
        check[nx][ny][z + 1][1 - day] = check[x][y][z][day] + 1;
        q.push([nx, ny, z + 1, 1 - day]);
      }
    }
    if (check[x][y][z][1 - day] === 0) {
      check[x][y][z][1 - day] = check[x][y][z][day] + 1;
      q.push([x, y, z, 1 - day]);
    }
  }
  const s = new Set(check[N - 1][M - 1].flat());
  const s2 = [...s];
  if (s2.length === 1 && s2[0] === 0) {
    return -1;
  } else {
    return Math.min(...s2.slice(1));
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
