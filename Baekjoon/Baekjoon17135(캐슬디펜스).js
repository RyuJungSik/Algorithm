const solution = (input) => {
  const [N, M, D] = input.shift().split(" ").map(Number);
  let board = [];
  input.map((str) => board.push(str.split(" ").map(Number)));
  const allCase = [];
  let answer = 0;

  const makeCase = (M, cur) => {
    if (cur.length === 3) {
      allCase.push([...cur]);
      return;
    } else {
      for (let i = 0; i < M; i++) {
        if (cur.length === 0) {
          cur.push(i);
        } else {
          if (i <= cur[cur.length - 1]) continue;
          cur.push(i);
        }
        makeCase(M, cur);
        cur.pop();
      }
    }
  };
  makeCase(M, []);
  //쏘기
  //죽은 애 체크
  //전진
  for (let oneCase of allCase) {
    let boardCopy = [];
    for (let i = 0; i < N; i++) {
      boardCopy.push([...board[i]]);
    }

    let killNumber = 0;
    for (let oneStep = 0; oneStep < N; oneStep++) {
      let killpos = []; //n m d
      for (let oneShot = 0; oneShot < 3; oneShot++) {
        let [tmpX, tmpY, tmpD] = [-1, -1, N * M + 1];
        let [bowX, bowY] = [N, oneCase[oneShot]];
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < M; j++) {
            if (boardCopy[i][j] === 0) continue;
            let distance = Math.abs(i - bowX) + Math.abs(j - bowY);
            if (distance <= D) {
              if (distance > tmpD) {
                continue;
              } else if (distance < tmpD) {
                tmpX = i;
                tmpY = j;
                tmpD = distance;
              } else {
                if (tmpY < j) {
                  continue;
                } else {
                  tmpX = i;
                  tmpY = j;
                  tmpD = distance;
                }
              }
            }
          }
        }
        if (tmpX !== -1 && tmpY !== -1) {
          killpos.push([tmpX, tmpY]);
        }
      }

      for (let oneKillPos of killpos) {
        const [nowX, nowY] = [oneKillPos[0], oneKillPos[1]];
        if (boardCopy[nowX][nowY] === 1) {
          killNumber += 1;
          boardCopy[nowX][nowY] = 0;
        }
      }

      boardCopy.pop();
      let tmp = [];
      for (let j = 0; j < M; j++) {
        tmp.push(0);
      }
      boardCopy = [[...tmp], ...boardCopy];
    }
    answer = Math.max(answer, killNumber);
  }
  return answer;
};

const fs = require("fs");
const { format } = require("path");
const { kill } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
