const solution = (array, commands) => {
  const answer = [];
  commands.map((arr) => {
    const newArray = array.slice(arr[0] - 1, arr[1]);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[(arr[2] - 1) % newArray.length]);
  });
  return answer;
};
