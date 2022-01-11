const solution = (input) => {
  const [a, b] = input[0].split(" ").map(Number);
  const q = [];

  return answerList[0];
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
