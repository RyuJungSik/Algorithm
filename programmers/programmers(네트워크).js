function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(0)

    const go = (cur) => {
        visited[cur] = 1
        for (let i = 0; i < n; i += 1) {
            if (i == cur) {
                continue
            }
            if (computers[cur][i] == 1 && visited[i] == 0) {
                go(i)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (visited[i] == 0) {
            go(i)
            answer += 1
        }
    }

    return answer;
}