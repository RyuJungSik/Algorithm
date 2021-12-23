const solution = (numbers, hand) => {
  let answer = "";
  let nowLeft = 9;
  let nowRight = 11;
  const pos = new Map();
  for (let i = 1; i < 10; i++) pos.set(i, i - 1);
  pos.set(0, 10);
  numbers.map((num) => {
    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      nowLeft = pos.get(num);
    } else if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      nowRight = pos.get(num);
    } else {
      let [nowX, nowY] = [parseInt(pos.get(num) / 3), pos.get(num) % 3];
      let [leftX, leftY] = [parseInt(nowLeft / 3), nowLeft % 3];
      let [rightX, rightY] = [parseInt(nowRight / 3), nowRight % 3];
      let [leftDis, rightDis] = [
        Math.abs(nowX - leftX) + Math.abs(nowY - leftY),
        Math.abs(nowX - rightX) + Math.abs(nowY - rightY),
      ];
      if (leftDis < rightDis) {
        answer += "L";
        nowLeft = pos.get(num);
      } else if (leftDis > rightDis) {
        answer += "R";
        nowRight = pos.get(num);
      } else {
        if (hand === "left") {
          answer += "L";
          nowLeft = pos.get(num);
        } else {
          answer += "R";
          nowRight = pos.get(num);
        }
      }
    }
  });
  return answer;
};
