const GCD = (a, b) => {
  while (b > 0) {
    let [tmpA, tmpB] = [a, b];
    a = tmpB;
    b = tmpA % tmpB;
  }
  return a;
};

const LCM = (a, b) => {
  return parseInt((a * b) / GCD(a, b));
};

const solution = (arr) => {
  let answer = 0;
  const { length } = arr;
  const recursive = (index, lcm) => {
    if (index === length) {
      answer = lcm;
      return;
    } else {
      recursive(index + 1, LCM(lcm, arr[index]));
    }
  };
  recursive(1, arr[0]);
  return answer;
};
