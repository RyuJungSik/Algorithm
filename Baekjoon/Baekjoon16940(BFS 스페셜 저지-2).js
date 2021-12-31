const { BADFLAGS } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();

const solution = (n, input) => {
  let answer = 1;
  input = input.map((str) => str.split(" ").map((n) => +n));
  let b = input.pop();
  const graph = Array.from({ length: n }, () => Array());
  const check = new Array(n).fill(false);
  const parent = new Array(n).fill(-1);
  const q = [];

  input.forEach((item) => {
    graph[item[0] - 1].push(item[1] - 1);
    graph[item[1] - 1].push(item[0] - 1);
  });

  b.forEach((item, index) => (b[index] -= 1));
  order = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    order[b[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    graph[i].sort((a, b) => order[a] - order[b]);
  }

  const newOrder = [];
  check[0] = true;
  q.push(0);
  while (q.length > 0) {
    let now = q.shift();
    newOrder.push(now);
    for (let x of graph[now]) {
      if (check[x] === false) {
        check[x] = true;
        q.push(x);
      }
    }
  }
  if (JSON.stringify(newOrder) === JSON.stringify(b)) {
    return 1;
  } else {
    return 0;
  }
};

console.log(solution(n, input));
