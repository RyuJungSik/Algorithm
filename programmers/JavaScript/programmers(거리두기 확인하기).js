function solution(places) {
    // P자리앉음  O 빈테이블  X 파티션
    const answer = Array(5).fill(1)
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    let cnt = 0
    let flag = false


    for (let board of places) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const visited = Array.from(Array(5), () => Array(5).fill(false))
                flag = false

                const dfs = (board, index, x, y) => {
                    // if(cnt===0){
                    // console.log(index,x,y)
                    // }
                    if (flag === true) {
                        return
                    }
                    if (index >= 2) {
                        return
                    } else {
                        for (let d = 0; d < 4; d++) {
                            let nx = x + dx[d], ny = y + dy[d]
                            if (nx < 0 || nx > 5 || ny < 0 || ny > 5) {
                                continue
                            }
                            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && visited[nx][ny] === true) {
                                continue
                            }
                            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && visited[nx][ny] === false && board[nx][ny] === "P") {
                                flag = true
                                answer[cnt] = 0
                                break
                            }
                            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && visited[nx][ny] === false && board[nx][ny] === "O") {
                                visited[nx][ny] = true
                                dfs(board, index + 1, nx, ny)
                                visited[nx][ny] = false
                            }

                        }
                    }
                }
                if (board[i][j] === 'P') {
                    visited[i][j] = true
                    dfs(board, 0, i, j)
                }
            }
        }
        cnt += 1
    }

    return answer;
}