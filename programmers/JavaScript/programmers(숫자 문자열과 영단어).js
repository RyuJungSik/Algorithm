const solution = (s) => {
  let answer = 0;
  const numHash = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);
  for (let i of numHash.keys()) {
    let reg = new RegExp(i, "gi");
    s = s.replace(reg, numHash.get(i));
  }
  answer = Number(s);
  return answer;
};
