function solution(input) {
  const N = +input.shift();
  const formula = input.shift();

  const allCase = [];
  allCase.push([]);

  function makeCase(num, cur) {
    if (cur.length === num) {
      return;
    } else {
      for (let i = 1; i < num - 1; i += 2) {
        if (cur.length === 0) {
          cur.push(i);
        } else if (cur[cur.length - 1] >= i || i - cur[cur.length - 1] <= 2) {
          continue;
        } else {
          cur.push(i);
        }
        allCase.push([...cur]);
        makeCase(num, cur);
        cur.pop();
      }
    }
  }

  makeCase(N, []);
  console.log(allCase);
  let result = -Infinity;
  for (const choice of allCase) {
    result = Math.max(result, calculate(choice, formula));
  }
  return result;
}

function calculate(choice, formulaString) {
  const picked = {};
  const formula = formulaString.split("");

  choice.forEach((pick) => (picked[pick] = true));
  const stack = [];
  for (let formulaIndex = 0; formulaIndex < formula.length; formulaIndex++) {
    const element = formula[formulaIndex];
    if ("+-*".includes(element)) {
      if (picked[formulaIndex]) {
        const partialCalc = operation(
          stack.pop(),
          +formula[++formulaIndex],
          element
        );
        stack.push(partialCalc);
      } else {
        stack.push(element);
      }
    } else {
      stack.push(+element);
    }
  }

  let res = stack.shift();
  while (stack.length) {
    const operator = stack.shift();
    const b = stack.shift();

    res = operation(res, b, operator);
  }

  return res;
}

const operation = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return 0;
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
