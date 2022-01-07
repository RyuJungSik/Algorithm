const solution = (clothes) => {
  let answer = 1;
  const hash = new Map();
  for (let cloth of clothes) {
    if (hash.has(cloth[1])) {
      hash.set(cloth[1], [...hash.get(cloth[1]), cloth[0]]);
    } else {
      hash.set(cloth[1], [cloth[0]]);
    }
  }
  for (let key of hash.keys()) {
    answer *= hash.get(key).length + 1;
  }
  return answer - 1;
};
