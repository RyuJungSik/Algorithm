const solution = (numbers) => {
  let answer = -1;
  let sumValue = 0;
  numbers.map((num) => (sumValue += num));
  answer = 45 - sumValue;
  return answer;
};
