const solution = (input) => {
  let answer = 101;
  const N = +input.shift();
  const cityPeopleNumber = input.shift().split(" ").map(Number);
  const board = Array.from({ length: N }, () => []);

  for (let i = 0; i < N; i++) {
    let arr = input[i].split(" ").map(Number);
    for (let j = 1; j < arr.length; j++) {
      if (i < arr[j] - 1) board[i].push(arr[j] - 1);
    }
  }

  const isConnect = (BCities) => {
    console.log("isCon  안임");
    const q = [];
    const allCase = [];
    let flag = false;
    BCities.sort((a, b) => a - b);
    q.push([BCities[0]]);
    while (q.length) {
      console.log(q);
      const now = q.shift();
      allCase.push(now);
      for (let x of board[now[now.length - 1]]) {
        if (now.includes(x)) continue;
        now.push(x);
        q.push([...now]);
        now.pop();
      }
    }
    console.log(allCase);

    for (let x of allCase) {
      x.sort((a, b) => a - b);
      if (JSON.stringify(BCities) === JSON.stringify(x)) flag = true;
    }
    return flag;
  };

  for (let i = 0; i < N; i++) {
    const visited = Array(N).fill(false);
    const queue = [];
    queue.push([i]);
    while (queue.length) {
      if (queue.length >= N) continue;
      const nowNodes = queue.shift();
      const BCities = [];
      for (let i = 0; i < N; i++) {
        if (!nowNodes.includes(i)) BCities.push(i);
      }

      console.log(nowNodes);
      console.log(BCities);
      console.log(isConnect(BCities));
      console.log();
      if (isConnect(BCities) === true) {
        console.log("!!!!!!!!!");
        let AScore = 0;
        let BScore = 0;
        for (let i = 0; i < N; i++) {
          if (nowNodes.includes(i)) {
            AScore += cityPeopleNumber[i];
          } else {
            BScore += cityPeopleNumber[i];
          }
        }

        answer = Math.min(answer, Math.abs(AScore - BScore));
      }

      for (let x of board[nowNodes[nowNodes.length - 1]]) {
        nowNodes.push(x);
        queue.push([...nowNodes]);
        nowNodes.pop();
      }
    }
  }

  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
