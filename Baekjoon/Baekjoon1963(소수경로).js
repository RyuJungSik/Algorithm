const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const changeNumber = (target, index, newNum) => {
  const tmp = String(target).split("");
  tmp[index] = String(newNum);
  return +tmp.join("");
};

const solution = (input) => {
  const N = Number(input.shift());
  const a = input.map((str) => str.split(" ").map(Number));

  const bfs = (x, y) => {
    const q = [];
    const visited = new Array(9999).fill(-1);
    q.push(x);
    visited[x] = 0;
    while (q.length) {
      nowNum = q.shift();
      if (nowNum === y) {
        return visited[nowNum];
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 10; j++) {
          if (i === 0 && j === 0) continue;
          const nextNum = changeNumber(nowNum, i, j);
          if (!isPrime(nextNum)) continue;
          if (visited[nextNum] !== -1) continue;
          if (nextNum < 1000 || nextNum > 9999) continue;
          visited[nextNum] = visited[nowNum] + 1;
          q.push(nextNum);
        }
      }
    }
    return visited[y];
  };

  for (let i = 0; i < N; i++) {
    let [x, y] = a[i];
    let ans = bfs(x, y);
    if (ans === -1) console.log("Impossible");
    else console.log(ans);
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
