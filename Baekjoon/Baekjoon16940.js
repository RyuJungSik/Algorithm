const { BADFLAGS } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();

const solution = (n, input) => {
  let answer = 1;
  input = input.map((str) => str.split(" ").map((n) => +n));
  let path = input.pop();
  const graph = Array.from({ length: n }, () => Array());
  input.forEach((item) => {
    graph[item[0] - 1].push(item[1] - 1);
    graph[item[1] - 1].push(item[0] - 1);
  });
  for (let i = 0; i < graph.length; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const pathList = Array(n).fill(0);
  const visited = Array(n).fill(false);
  const where = [];
  const bfs = () => {
    const q = [];
    q.push([0, 0]);
    visited[0] = true;
    while (q.length > 0) {
      const now = q.pop();
      const [nowNode, nowNum] = [now[0], now[1]];
      pathList[nowNode] = nowNum;

      for (let nextNode of graph[nowNode]) {
        if (visited[nextNode] === false) {
          visited[nextNode] = true;
          q.push([nextNode, nowNum + 1]);
        }
      }
    }
  };

  if (path[0] !== 1) return 0;
  bfs();
  console.log(pathList);
  for (let p = 0; p < path.length - 1; p++) {
    if (pathList[path[p] - 1] > pathList[path[p + 1] - 1]) return 0;
  }

  return 1;
};

console.log(solution(n, input));
