const solution = (input) => {
  let answer = 100000;
  const [N, M, K] = input.shift().split(" ").map(Number);
  const board = [];
  const rotateInfo = [];
  const allCase = [];
  for (let i = 0; i < N; i++) board.push(input.shift().split(" ").map(Number));
  input.map((str) => rotateInfo.push(str.split(" ").map(Number)));

  const makeCase = (cur) => {
    if (cur.length === K) {
      allCase.push([...cur]);
    } else {
      for (let i = 0; i < K; i++) {
        if (cur.length === 0 || !cur.includes(i)) {
          cur.push(i);
          makeCase(cur);
          cur.pop();
        }
      }
    }
  };
  makeCase([]);

  for (let oneCase of allCase) {
    const boardCopy = [];
    board.map((arr) => boardCopy.push([...arr]));

    for (let x of oneCase) {
      const nowRotateInfo = rotateInfo[x];
      const [r, c, s] = nowRotateInfo;
      for (let k = 0; k < s; k++) {
        const tmpArr = [];
        for (let i = 0; i < 2 * (k + 1) + 1; i++) {
          tmpArr.push(boardCopy[r - 1 - k - 1][c - 1 - k - 1 + i]);
        }
        for (let i = 0; i < 2 * (k + 1); i++) {
          tmpArr.push(boardCopy[r - 1 - k - 1 + i + 1][c - 1 + k + 1]);
        }
        for (let i = 0; i < 2 * (k + 1); i++) {
          tmpArr.push(boardCopy[r - 1 + k + 1][c - 1 + k + 1 - 1 - i]);
        }
        for (let i = 0; i < 2 * (k + 1) - 1; i++) {
          tmpArr.push(boardCopy[r - 1 + k + 1 - 1 - i][c - 1 - k - 1]);
        }

        tmpArr.unshift(tmpArr.pop());

        for (let i = 0; i < 2 * (k + 1) + 1; i++) {
          boardCopy[r - 1 - k - 1][c - 1 - k - 1 + i] = tmpArr.shift();
        }
        for (let i = 0; i < 2 * (k + 1); i++) {
          boardCopy[r - 1 - k - 1 + i + 1][c - 1 + k + 1] = tmpArr.shift();
        }
        for (let i = 0; i < 2 * (k + 1); i++) {
          boardCopy[r - 1 + k + 1][c - 1 + k + 1 - 1 - i] = tmpArr.shift();
        }

        for (let i = 0; i < 2 * (k + 1) - 1; i++) {
          boardCopy[r - 1 + k + 1 - 1 - i][c - 1 - k - 1] = tmpArr.shift();
        }
      }
    }
    for (let x of boardCopy) {
      let tmpSum = 0;

      answer = Math.min(
        answer,
        x.reduce((acc, cur) => (acc += cur), 0)
      );
    }
  }

  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
