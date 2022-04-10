const solution = (n, times) => {
  let answer = 1000000000 * 1000000000;
  let left = 0;
  let right = 1000000000 * 1000000000;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    let passPeople = 0;
    for (let time of times) {
      passPeople += parseInt(mid / time);
    }
    if (passPeople === n) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else if (passPeople > n) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
};
