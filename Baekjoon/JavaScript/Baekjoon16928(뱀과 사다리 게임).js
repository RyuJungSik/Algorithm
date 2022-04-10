const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  let answer = 0;

  const [N, M] = input[0].split(" ").map(Number);
  const hash = new Map();
  input.slice(1).forEach((line) => {
    const [from, to] = line.split(" ").map(Number);
    hash.set(from, to);
  });

  const q = [];
  q.push([1, 0]); //현재칸, 갯수
  const visited = new Array(101).fill(false);
  visited[1] = true;
  while (q.length > 0) {
    const now = q.shift();
    const [cur, idx] = [now[0], now[1]];
    if (cur === 100) {
      return idx;
    }
    for (let i = 1; i < 7; i++) {
      let nextCur = cur + i;
      if (nextCur > 100) break;
      if (hash.has(nextCur)) nextCur = hash.get(nextCur);
      if (visited[nextCur]) continue;
      visited[nextCur] = true;
      q.push([nextCur, idx + 1]);
    }
  }

  return answer;
};

console.log(solution(input));
