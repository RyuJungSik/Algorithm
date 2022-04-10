const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const board = Array.from({ length: N }, (_, idx) =>
    input[idx].split("").map(Number)
  );
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const dist = Array.from({ length: N }, () => new Array(M).fill(0));
  let cnt = 1;
  const hash = new Map();
  hash.set(0, 0);

  const bfs = (i, j, cnt) => {
    const q = [];
    q.push([i, j]);
    dist[i][j] = cnt;
    let tmp = 0;
    while (q.length) {
      const [x, y] = q.shift();
      tmp += 1;
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (board[nx][ny] === 1) continue;
        if (dist[nx][ny] !== 0) continue;
        dist[nx][ny] = cnt;
        q.push([nx, ny]);
      }
    }
    return tmp;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0 && dist[i][j] === 0) {
        const size = bfs(i, j, cnt);
        hash.set(cnt, size);
        cnt += 1;
      }
    }
  }
  const ans = Array.from({ length: N }, () => new Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dist[i][j] === 0) {
        let t = new Set();
        let t2 = 0;
        for (let k = 0; k < 4; k++) {
          const [ni, nj] = [i + dx[k], j + dy[k]];
          if (ni < 0 || ni >= N || nj < 0 || nj >= M) continue;
          t.add(dist[ni][nj]);
        }
        for (let x of [...t]) {
          t2 += hash.get(x);
        }
        ans[i][j] = (t2 + 1) % 10;
      } else {
        ans[i][j] = 0;
      }
    }
  }
  console.log(ans.map((v) => v.join("")).join("\n"));
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);
