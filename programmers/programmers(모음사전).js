const solution = (word) => {
  let answer = 0;
  const vowels = ["A", "E", "I", "O", "U"];
  const dictionary = [];

  const dfs = (index, nowStr) => {
    if (index === 5) {
      return;
    } else {
      for (let x of vowels) {
        dictionary.push(nowStr + x);
        dfs(index + 1, nowStr + x);
      }
    }
  };

  dfs(0, "");
  answer = dictionary.indexOf(word) + 1;
  return answer;
};
