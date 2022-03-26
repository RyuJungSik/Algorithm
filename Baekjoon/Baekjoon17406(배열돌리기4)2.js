const solution = (input) => {
  let answer = 100000;
  const [N, M, K] = input.shift().split(" ").map(Number);
  const board = [];
  const rotateInfo = [];
  const allCase = [];
  for (let i = 0; i < N; i++) board.push(input.shift().split(" ").map(Number));
  input.map((str) => rotateInfo.push(str.split(" ").map(Number)));

  const getMatrixValue = (matrix) => {
    let value = Infinity;
    for (let i = 0; i < N; i++) {
      value = Math.min(
        value,
        matrix[i].reduce((acc, cur) => (acc += cur), 0)
      );
    }
    return value;
  };

  const rotate = (matrix, start, end) => {
    const [sy, sx] = start; // 0 , 1
    const [ey, ex] = end; // 4 5
    let array = [];
    for (let i = 0; i < (sy + ey) / 2; i++) {
      for (let x = sx + i; x < ex - i; x++) {
        array.push(matrix[sy + i][x]);
      }
      for (let y = sy + i; y < ey - i; y++) {
        array.push(matrix[y][ex - i]);
      }
      for (let x = ex - i; x > sx + i; x--) {
        array.push(matrix[ey - i][x]);
      }
      for (let y = ey - i; y > sy + i; y--) {
        array.push(matrix[y][sx + i]);
      }
      array.unshift(array.pop());
      for (let x = sx + i; x < ex - i; x++) {
        matrix[sy + i][x] = array.shift();
      }
      for (let y = sy + i; y < ey - i; y++) {
        matrix[y][ex - i] = array.shift();
      }
      for (let x = ex - i; x > sx + i; x--) {
        matrix[ey - i][x] = array.shift();
      }
      for (let y = ey - i; y > sy + i; y--) {
        matrix[y][sx + i] = array.shift();
      }
    }
    return matrix;
  };

  const rotate = (matrix, oneCase) => {
    const [sy, sx] = start; // 0 , 1
    const [ey, ex] = end; // 4 5
    let array = [];
    for (let i = 0; i < (sy + ey) / 2; i++) {
      for (let x = sx + i; x < ex - i; x++) {
        array.push(matrix[sy + i][x]);
      }
      for (let y = sy + i; y < ey - i; y++) {
        array.push(matrix[y][ex - i]);
      }
      for (let x = ex - i; x > sx + i; x--) {
        array.push(matrix[ey - i][x]);
      }
      for (let y = ey - i; y > sy + i; y--) {
        array.push(matrix[y][sx + i]);
      }
      array.unshift(array.pop());
      for (let x = sx + i; x < ex - i; x++) {
        matrix[sy + i][x] = array.shift();
      }
      for (let y = sy + i; y < ey - i; y++) {
        matrix[y][ex - i] = array.shift();
      }
      for (let x = ex - i; x > sx + i; x--) {
        matrix[ey - i][x] = array.shift();
      }
      for (let y = ey - i; y > sy + i; y--) {
        matrix[y][sx + i] = array.shift();
      }
    }
    return matrix;
  };

  const makeCase = (cur) => {
    if (cur.length === K) {
      allCase.push([...cur]);
    } else {
      for (let i = 0; i < K; i++) {
        if (cur.length === 0 || !cur.includes(i)) {
          cur.push(i);
          makeCase(cur);
          cur.pop();
        }
      }
    }
  };
  makeCase([]);

  for (let oneCase of allCase) {
    let boardCopy = [];
    board.map((arr) => boardCopy.push([...arr]));

    for (let x of oneCase) {
      const nowRotateInfo = rotateInfo[x];
      const [r, c, s] = nowRotateInfo;
      const [start, end] = [
        [r - s - 1, c - s - 1],
        [r + s - 1, c + s - 1],
      ];
      boardCopy = rotate(boardCopy, start, end);
    }
    for (let x of boardCopy) {
      let tmpSum = 0;
      answer = Math.min(
        answer,
        x.reduce((acc, cur) => (acc += cur), 0)
      );
    }
  }

  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
