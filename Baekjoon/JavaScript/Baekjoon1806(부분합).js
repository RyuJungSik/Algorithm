const solution = (input) => {
  const [N, S] = input.shift().split(" ");
  const arr = input.shift().split(" ").map(Number);
  let answer = N + 1;
  let s = 0;
  let [p1, p2] = [0, 0];

  while (p2 < N) {
    if (s >= S) {
      answer = Math.min(answer, p2 - p1);
      s -= arr[p1];
      p1 += 1;
    } else {
      s += arr[p2];
      p2 += 1;
    }
  }
  if (answer === N + 1) {
    return 0;
  } else {
    return answer;
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
