const solution = (input) => {
  const n = Number(input.shift());
  const a = input.map((str) => str.split(" ").map(Number));
  const [dx, dy] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  let ans = 0;
  let size = 2;
  let exp = 0;
  let [x, y] = [0, 0];

  const bfs = (a, x, y, size) => {
    const ans = [];
    const d = Array.from({ length: n }, () => new Array(n).fill(-1));
    const q = [];
    q.push([x, y]);
    d[x][y] = 0;
    while (q.length) {
      [x, y] = q.shift();
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || d[nx][ny] !== -1)
          continue;
        let ok = false;
        let eat = false;
        if (a[nx][ny] === 0) ok = true;
        else if (a[nx][ny] < size) {
          ok = true;
          eat = true;
        } else if (a[nx][ny] === size) {
          ok = true;
        }
        if (ok) {
          q.push([nx, ny]);
          d[nx][ny] = d[x][y] + 1;
          if (eat) {
            ans.push([d[nx][ny], nx, ny]);
          }
        }
      }
    }
    if (ans.length === 0) return -1;
    ans.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      } else {
        if (a[1] !== b[1]) {
          return a[1] - b[1];
        } else {
          return a[2] - b[2];
        }
      }
    });
    return ans[0];
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i][j] === 9) {
        [x, y] = [i, j];
        a[i][j] = 0;
      }
    }
  }

  while (1) {
    const p = bfs(a, x, y, size);
    if (p === -1) {
      break;
    }
    const [dist, nx, ny] = p;
    a[nx][ny] = 0;
    ans += dist;
    exp += 1;
    if (size === exp) {
      size += 1;
      exp = 0;
    }
    [x, y] = [nx, ny];
  }
  return ans;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
