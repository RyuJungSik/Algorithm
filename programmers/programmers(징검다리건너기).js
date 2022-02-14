const solution = (stones, k) => {
  let answer = 0;
  let left = 1;
  let right = 200000000;

  const stonesCopy = [...stones];
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let maxZeroSeq = 0;

    for (let i = 0; i < stonesCopy.length; i++) {
      if (maxZeroSeq < k) {
        if (stonesCopy[i] - mid <= 0) {
          maxZeroSeq += 1;
        } else {
          maxZeroSeq = 0;
        }
      } else break;
    }
    if (maxZeroSeq < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
      answer = mid;
    }
  }

  return answer;
};
