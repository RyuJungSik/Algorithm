const solution = (arr1, arr2) => {
  let answer = Array.from({ length: arr1.length }, () =>
    new Array(arr2[0].length).fill(0)
  );
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let tmp = 0;
      for (let k = 0; k < arr2.length; k++) {
        tmp += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = tmp;
    }
  }
  return answer;
};
