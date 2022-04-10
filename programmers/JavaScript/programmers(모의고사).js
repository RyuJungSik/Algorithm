const solution = (answers) => {
  let answer = [];
  const score = [0, 0, 0];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (a[i % a.length] === answers[i]) score[0] += 1;
    if (b[i % b.length] === answers[i]) score[1] += 1;
    if (c[i % c.length] === answers[i]) score[2] += 1;
  }
  let max = Math.max.apply(null, score);
  for (let i = 0; i < 3; i++) {
    if (max === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
};
