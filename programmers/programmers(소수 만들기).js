const isPrime = (number) => {
  for (let i = 2; i < Math.sqrt(number) + 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = (nums) => {
  let answer = 0;
  const allNums = [];
  const per = (index, now) => {
    if (index === 3) {
      allNums.push(now[0] + now[1] + now[2]);
      return;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (now.length === 0 || now[now.length - 1] < nums[i]) {
          now.push(nums[i]);
          per(index + 1, now);
          now.pop();
        }
      }
    }
  };

  nums.sort();
  per(0, []);
  allNums.map((num) => {
    if (isPrime(num)) answer += 1;
  });
  return answer;
};
