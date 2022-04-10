const solution = (input) => {
  const nums = input[0].split(" ").map((num) => +num);
  const [F, S, G, U, D] = nums;
  const visited = new Array(F + 1).fill(-1);
  let answer = 1000000;

  const q = [];
  q.push(S);
  visited[S] = 0;
  while (q.length > 0) {
    const nowPos = q.shift();
    if (visited[G] !== -1) {
      answer = visited[G];
      break;
    }
    for (let x of [U, D * -1]) {
      let nextPos = nowPos + x;
      if (visited[nextPos] !== -1 || nextPos < 1 || nextPos > 1000000) continue;
      visited[nextPos] = visited[nowPos] + 1;
      q.push(nextPos);
    }
  }
  if (answer === 1000000) return "use the stairs";
  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
