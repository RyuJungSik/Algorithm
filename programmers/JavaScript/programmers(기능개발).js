const solution = (progresses, speeds) => {
  let answer = [];
  let q = [];
  for (let i = 0; i < progresses.length; i++) {
    q.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let prev = q[0];
  let cnt = 1;
  for (let i = 1; i < q.length; i++) {
    if (prev >= q[i]) {
      cnt += 1;
    } else {
      answer.push(cnt);
      cnt = 1;
      prev = q[i];
    }
  }
  answer.push(cnt);
  return answer;
};
