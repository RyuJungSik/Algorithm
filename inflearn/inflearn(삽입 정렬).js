
function solution(arr) {
  let answer = arr;
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let tmp = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (tmp < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j] = tmp
      } else {
        arr[j + 1] = tmp
        break;
      }
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
