function solution(m, n, board) {
  let answer = 0;
  const newBoard = [];
  //새로운 보드 생성 2차배열로 만듬
  for (let s of board) {
    newBoard.push(s.split(""));
  }
  for (let tc = 0; tc < m * n; tc++) {
    let flag = true;
    //터질 보드 기록하는 배열 생성
    const willPop = Array.from({ length: m }, () => new Array(n).fill(false));
    //2차배열로 순환하면서 동일한값이면 willPop에 저장
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let [B1, B2, B3, B4] = [
          newBoard[i][j],
          newBoard[i][j + 1],
          newBoard[i + 1][j],
          newBoard[i + 1][j + 1],
        ];
        if (
          B1 === B2 &&
          B2 === B3 &&
          B3 === B4 &&
          B1 !== "X" &&
          "A" <= B1 &&
          B1 <= "Z"
        ) {
          [
            willPop[i][j],
            willPop[i][j + 1],
            willPop[i + 1][j],
            willPop[i + 1][j + 1],
          ] = [true, true, true, true];
        }
      }
    }
    //사라진것을 갯수를 세준다.
    for (let arr of willPop) {
      for (let bool of arr) {
        if (bool === true) {
          flag = true;
          answer += 1;
        }
      }
    }
    if (!flag) break;
    //열을 하나의 배열로 만든 후  부족한 갯수만큼 X를 넣어주고 그후 다시 보드에 갱신
    for (let j = 0; j < n; j++) {
      let oneArr = [];
      for (let i = 0; i < m; i++) {
        if (!willPop[i][j]) oneArr.push(newBoard[i][j]);
      }
      while (oneArr.length < m) {
        oneArr = ["X", ...oneArr];
      }
      for (let i = 0; i < m; i++) {
        newBoard[i][j] = oneArr[i];
      }
    }
  }

  return answer;
}
