const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (n, k) => {
  let answer = 0;
  let chagedNStr = n.toString(k);
  let chagedNArr = chagedNStr.split("0");
  for (let x of chagedNArr) {
    if (isPrime(+x)) answer += 1;
  }

  return answer;
};
