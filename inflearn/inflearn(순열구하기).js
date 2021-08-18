function solution(m, arr) {
    let answer = [];
    let tmp = Array.from({ length: m }, () => 0)
    const DFS = (index) => {
        if (index === m) {
            console.log(tmp)
            tmp.pop()
            return
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (!tmp.includes(arr[i])) {
                    tmp[index] = arr[i]
                    DFS(index + 1)
                }
            }
            tmp.pop()
        }
    }
    DFS(0)
}

let arr = [2, 4, 6, 8];
console.log(solution(2, arr));
