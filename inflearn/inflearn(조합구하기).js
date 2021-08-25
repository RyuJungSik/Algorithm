
function solution(n, m) {
    let answer = [];
    let tmp = []
    const DFS = (index, value) => {
        if (tmp.includes(value)) return
        if (index === m) {
            tmp.push(value)
            tmp = tmp.sort((a, b) => a - b)
            answer.push([...tmp])
            tmp.pop()
            return
        }
        else {
            for (let i = value + 1; i <= n; i++) {
                if (index != 0) tmp.push(value)
                DFS(index + 1, i)
                tmp.pop()
            }
        }
    }
    DFS(0, 0)

    return answer;
}

console.log(solution(4, 2));
