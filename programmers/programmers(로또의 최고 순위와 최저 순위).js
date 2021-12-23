const solution = (lottos, win_nums) => {
  let answer = [];
  let nowSame = 0;
  let zeroNum = 0;
  const rank = new Map([
    [6, 1],
    [5, 2],
    [4, 3],
    [3, 4],
    [2, 5],
    [1, 6],
    [0, 6],
  ]);
  lottos.map((num) => {
    if (num === 0) zeroNum += 1;
    else if (win_nums.includes(num)) nowSame += 1;
  });
  answer.push(rank.get(nowSame + zeroNum));
  answer.push(rank.get(nowSame));
  return answer;
};
