const solution = (n, info) => {
  let answer = [];
  let scoreGap = -1;
  const allCase = [];
  const permutation = (arr) => {
    if (arr.length === n) {
      allCase.push(arr);
      return;
    } else {
      for (let i = 0; i < 11; i++) {
        if (arr.length === 0 || arr[arr.length - 1] <= i)
          permutation([...arr, i]);
      }
    }
  };

  permutation([]);

  for (let lionShots of allCase) {
    const lionInfo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let [apeachScore, lionScore] = [0, 0];
    for (let shot of lionShots) {
      lionInfo[10 - shot] += 1;
    }
    for (let i = 0; i < 11; i++) {
      if (info[i] === 0 && lionInfo[i] === 0) continue;
      if (info[i] < lionInfo[i]) lionScore += 10 - i;
      else apeachScore += 10 - i;
    }
    if (apeachScore < lionScore) {
      let nowGap = lionScore - apeachScore;
      if (scoreGap < nowGap) {
        answer = [...lionInfo];
        scoreGap = nowGap;
      } else if (scoreGap === nowGap) {
        for (let i = 10; i >= 0; i--) {
          if (answer[i] === lionInfo[i]) continue;
          else if (answer[i] > lionInfo[i]) break;
          else {
            answer = [...lionInfo];
          }
        }
      }
    }
  }
  if (scoreGap === -1) return [-1];
  return answer;
};
