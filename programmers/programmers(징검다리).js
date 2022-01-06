const solution = (distance, rocks, n) => {
  let answer = 0;
  const position = rocks.sort((a, b) => a - b);
  position.push(distance);
  let left = 0;
  let right = distance;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    console.log(left, mid, right);
    let prevPos = 0;
    let minDist = distance;
    let removeRocks = 0;

    for (let nowPos of position) {
      if (nowPos - prevPos < mid) {
        removeRocks += 1;
      } else {
        minDist = Math.min(minDist, nowPos - prevPos);
        prevPos = nowPos;
      }
    }
    if (n < removeRocks) {
      right = mid - 1;
    } else {
      answer = minDist;
      left = mid + 1;
    }
  }

  return answer;
};
