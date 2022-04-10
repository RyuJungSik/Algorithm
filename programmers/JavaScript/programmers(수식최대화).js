function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution(expression) {
  let answer = 0;
  const arr = permutation(["+", "-", "*"], 3);
  let num = expression.split(/[^0-9]/);
  num = num.map((number) => parseInt(number));
  const sign = [];
  for (let j of expression) {
    if (j === "*" || j === "+" || j === "-") {
      sign.push(j);
    }
  }

  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const copyNum = num.slice();
    const copySign = sign.slice();
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < copySign.length; k++) {
        if (copySign[k] === arr[i][j]) {
          if (copySign[k] === "*") {
            copyNum[k] *= copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          } else if (copySign[k] === "+") {
            copyNum[k] += copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          } else {
            copyNum[k] -= copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          }
        }
      }
    }
    if (Math.abs(copyNum[0]) >= maxNum) {
      maxNum = Math.abs(copyNum[0]);
    }
  }

  answer = maxNum;
  return answer;
}
