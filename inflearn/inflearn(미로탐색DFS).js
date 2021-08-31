
function solution(board) {
    let answer = 0;
    n = board.length;
    dy = [-1, 0, 1, 0]
    dx = [0, 1, 0, -1]
    ch = Array.from(Array(n), () => Array(n).fill(0))
    board[0][0] = 1

    const DFS = (y, x) => {
        if (y === 6 && x === 6) {
            answer += 1
            return
        } else {
            for (let i = 0; i < 4; i++) {
                let yy = y + dy[i]
                let xx = x + dx[i]
                if (yy >= 0 && yy <= 6 && xx >= 0 && xx <= 6 && board[yy][xx] === 0) {
                    board[yy][xx] = 1
                    DFS(yy, xx)
                    board[yy][xx] = 0
                }

            }
        }
    }
    DFS(0, 0)




    return answer;
}

let arr = [[0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));
