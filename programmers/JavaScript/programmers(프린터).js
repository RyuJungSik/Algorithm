const solution = (priorities, location) => {
  let answer = 0;
  const keyValue = [];

  //key : location, value : pri
  for (let i = 0; i < priorities.length; i++) {
    keyValue.push([i, priorities[i]]);
  }

  while (keyValue.length) {
    const [nowLoc, nowPri] = keyValue.shift();
    let flag = true;
    for (let [k, v] of keyValue) {
      if (nowPri < v) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer += 1;
      if (nowLoc === location) return answer;
    } else {
      keyValue.push([nowLoc, nowPri]);
    }
  }

  return answer;
};
