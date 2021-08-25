function solution(n, k, arr, m) {
    let answer=[];
    let tmp = []

    const DFS = (index, value) => {
        if (tmp.includes(arr[value-1])) return
        if (index === k) {
            let allSum=0
            tmp.push(arr[value-1])
            tmp.map((num)=>allSum+=num)
            if(allSum%m===0){
                answer.push([...tmp])
            }
            tmp.pop()
            return
        }
        else {
            for (let i = value + 1; i <= n; i++) {
                if (index != 0){
                    tmp.push(arr[value-1])
                } 
                DFS(index + 1, i)
                tmp.pop()
            }
        }
    }
    DFS(0, 0)





    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));


