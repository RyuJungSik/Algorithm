const solution = (people, limit) => {
  let answer = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    const [nowWeight, nextWeight] = [people[left], people[right]];
    if (nowWeight + nextWeight <= limit) {
      right -= 1;
    }
    answer += 1;
    left += 1;
  }

  return answer;
};
