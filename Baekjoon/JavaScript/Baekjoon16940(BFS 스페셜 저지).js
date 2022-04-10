const { BADFLAGS } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();

const solution = (n, input) => {
  let answer = 1;
  input = input.map((str) => str.split(" ").map((n) => +n));
  let order = input.pop();
  const graph = Array.from({ length: n }, () => Array());
  const check = new Array(n).fill(false);
  const parent = new Array(n).fill(-1);
  const q = [];

  input.forEach((item) => {
    graph[item[0] - 1].push(item[1] - 1);
    graph[item[1] - 1].push(item[0] - 1);
  });

  order.forEach((item, index) => (order[index] -= 1));

  q.push(0);
  check[0] = true;
  let m = 1;
  for (let i = 0; i < n; i++) {
    if (q.length === 0) {
      return 0;
    }
    let x = q.shift();
    if (x !== order[i]) {
      return 0;
    }
    let cnt = 0;
    for (let y of graph[x]) {
      if (check[y] === false) {
        parent[y] = x;
        cnt += 1;
      }
    }
    for (let j = 0; j < cnt; j++) {
      if (parent[order[m + j]] !== x) {
        return 0;
      }
      q.push(order[m + j]);
      check[order[m + j]] = true;
    }
    m += cnt;
  }

  return 1;
};

console.log(solution(n, input));
