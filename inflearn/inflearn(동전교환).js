function solution(m, arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    arr=arr.sort((a,b)=>b-a)
    let len = arr.length
    let flag=false
    const DFS = (index, sum) => {
        if(flag) return
        if (sum === m) {
            console.log(index)
            flag=true
            return
        } else if (sum > m) {
            return
        }
        else {
            for (let i = 0; i < len; i++) {
                DFS(index + 1, sum + arr[i])
            }
        }
    }
    DFS(0, 0);
    return answer;
}

solution(30, [1, 2, 5, 15, 10])
