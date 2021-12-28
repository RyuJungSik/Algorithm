const { BADFLAGS } = require("dns");
const fs = require("fs");
const { start } = require("repl");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
input = input.map((str) => str.split(" ").map((num) => +num));

const solution = (n, input) => {
  const graph = Array.from({ length: n }, () => Array());
  input.map(([x, y]) => {
    graph[x - 1].push(y - 1);
    graph[y - 1].push(x - 1);
  });
  let check = new Array(n).fill(false);
  let check2;
  let cycle;
  let flag = false;
  let [i, j] = [0, 0];
  const answer = new Array(n).fill(0);

  const dfs = (cur, cnt) => {
    if (flag === true) {
      return;
    } else {
      for (let nextNode of graph[cur]) {
        if (cnt >= 3 && i === nextNode) {
          flag = true;
          check[nextNode] = true;
          cycle = check.slice();
          return;
        }

        if (check[nextNode] === true) continue;
        check[nextNode] = true;
        dfs(nextNode, cnt + 1);
        check[nextNode] = false;
      }
    }
  };

  const bfs = (cur) => {
    const q = [];
    q.push([cur, 0]);
    while (q.length > 0) {
      let now = q.shift();
      let [nowNode, nowCnt] = [now[0], now[1]];
      check2[nowNode] = true;
      if (cycle[nowNode] === true) return nowCnt;
      for (let nextNode of graph[nowNode]) {
        if (check2[nextNode] === true) continue;
        q.push([nextNode, nowCnt + 1]);
      }
    }
  };

  for (i; i < n; i++) {
    check[i] = true;
    dfs(i, 1);
    if (flag === true) {
      break;
    }
    check[i] = false;
  }

  for (j; j < n; j++) {
    check2 = new Array(n).fill(false);
    answer[j] = bfs(j);
  }

  console.log(...answer);
};

solution(n, input);
