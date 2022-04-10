const solution = (input) => {
  const N = +input.shift();
  const answerList = [];

  const recursive = (cur) => {
    if (cur.length > 10) {
      return;
    } else {
      for (let i = 9; i >= 0; i--) {
        if (cur.length === 0 || +cur[cur.length - 1] > i) {
          answerList.push(cur + String(i));
          recursive(cur + String(i));
        }
      }
    }
  };

  recursive("");
  answerList.sort((a, b) => {
    if (a.length === b.length) {
      return b - a;
    } else {
      return b.length - a.length;
    }
  });
  answerList.reverse();
  if (N > answerList.length) {
    return -1;
  } else {
    return +answerList[N - 1];
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
