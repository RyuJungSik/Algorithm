const solution = (input) => {
  let answer = 0;
  const N = +input.shift();
  const scoreBoard = [];
  input.map((str) => scoreBoard.push(str.split(" ").map(Number)));
  const allCase = [];
  const makeCase = (index, cur) => {
    if (index === 8) {
      cur.splice(3, 0, 0);
      allCase.push([...cur]);
      cur.splice(3, 1);
      return;
    } else {
      for (let i = 1; i < 9; i++) {
        if (cur.includes(i)) continue;
        cur.push(i);
        makeCase(index + 1, cur);
        cur.pop();
      }
    }
  };

  makeCase(0, []);
  for (let oneCase of allCase) {
    const nowSequence = [...oneCase];
    let oneCaseScore = 0;
    for (let i = 0; i < N; i++) {
      let outScore = 0;
      const nowGround = [0, 0, 0];

      while (outScore < 3) {
        let nowPlayerNumber = nowSequence[0];
        let nowHitNumber = scoreBoard[i][nowPlayerNumber];
        nowSequence.push(nowSequence.shift());

        if (nowHitNumber === 0) {
          outScore += 1;
          continue;
        } else if (nowHitNumber === 1) {
          if (nowGround[2] === 1) {
            nowGround[2] = 0;
            oneCaseScore += 1;
          }
          if (nowGround[1] === 1) {
            nowGround[1] = 0;
            nowGround[2] = 1;
          }
          if (nowGround[0] === 1) {
            nowGround[0] = 0;
            nowGround[1] = 1;
          }
          nowGround[0] = 1;
        } else if (nowHitNumber === 2) {
          if (nowGround[2] === 1) {
            nowGround[2] = 0;
            oneCaseScore += 1;
          }
          if (nowGround[1] === 1) {
            nowGround[1] = 0;
            oneCaseScore += 1;
          }
          if (nowGround[0] === 1) {
            nowGround[0] = 0;
            nowGround[2] = 1;
          }
          nowGround[1] = 1;
        } else if (nowHitNumber === 3) {
          if (nowGround[2] === 1) {
            nowGround[2] = 0;
            oneCaseScore += 1;
          }
          if (nowGround[1] === 1) {
            nowGround[1] = 0;
            oneCaseScore += 1;
          }
          if (nowGround[0] === 1) {
            nowGround[0] = 0;
            oneCaseScore += 1;
          }
          nowGround[2] = 1;
        } else if (nowHitNumber === 4) {
          for (let j = 0; j < 3; j++) {
            if (nowGround[j] === 1) {
              nowGround[j] = 0;
              oneCaseScore += 1;
            }
          }
          oneCaseScore += 1;
        }
      }
    }
    answer = Math.max(answer, oneCaseScore);
  }

  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
