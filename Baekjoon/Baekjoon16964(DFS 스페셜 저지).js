const { BADFLAGS } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();

const solution = (n, input) => {
  input = input.map((str) => str.split(" ").map((n) => +n));
  let b = input.pop();
  const graph = Array.from({ length: n }, () => Array());
  const check = new Array(n).fill(false);
  const order = new Array(n).fill(0);
  input.forEach((item) => {
    graph[item[0] - 1].push(item[1] - 1);
    graph[item[1] - 1].push(item[0] - 1);
  });
  b.forEach((item, index) => (b[index] -= 1));

  for (let i = 0; i < n; i++) {
    order[b[i]] = i;
  }
  for (let i = 0; i < n; i++) {
    graph[i].sort((x, y) => order[x] - order[y]);
  }

  check[0] = true;
  const newOrder = [];
  const dfs = (cur) => {
    newOrder.push(cur);
    for (let x of graph[cur]) {
      if (check[x] === false) {
        check[x] = true;
        dfs(x);
      }
    }
  };
  dfs(0);
  if (JSON.stringify(newOrder) === JSON.stringify(b)) return 1;
  else return 0;
};

console.log(solution(n, input));
