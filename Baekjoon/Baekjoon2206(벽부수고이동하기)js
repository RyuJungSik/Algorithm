const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const a = Array.from({ length: N }, (_, idx) =>
    input[idx].split("").map(Number)
  );
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const dist = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => new Array(2).fill(0))
  );
  const q = [];
  q.push([0, 0, 0]);
  dist[0][0][0] = 1;

  while (q.length) {
    const [x, y, z] = q.shift();
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (a[nx][ny] === 0 && dist[nx][ny][z] === 0) {
        dist[nx][ny][z] = dist[x][y][z] + 1;
        q.push([nx, ny, z]);
      }
      if (z === 0 && a[nx][ny] === 1 && dist[nx][ny][z + 1] === 0) {
        dist[nx][ny][z + 1] = dist[x][y][z] + 1;
        q.push([nx, ny, z + 1]);
      }
    }
  }
  console.log(dist);
  if (dist[N - 1][M - 1][0] !== 0 && dist[N - 1][M - 1][1] !== 0) {
    return Math.min(...dist[N - 1][M - 1]);
  } else if (dist[N - 1][M - 1][0] !== 0) {
    return dist[N - 1][M - 1][0];
  } else if (dist[N - 1][M - 1][1] !== 0) {
    return dist[N - 1][M - 1][1];
  } else {
    return -1;
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
