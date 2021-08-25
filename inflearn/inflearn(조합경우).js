
function solution(n, r) {
    let answer;
    let mem=Array.from(Array(100), ()=>Array(100).fill(0))
    const DFS=(n, r)=>{
        if(mem[n][r]!=0) return mem[n][r]
        if(r===1){
            return n
        }else if(n===r){
            return 1
        }
        else{
            return mem[n][r]=DFS(n-1, r-1)+DFS(n-1, r)
        }
    }

    answer=DFS(33, 19)
    return answer;
}

console.log(solution(5, 3));
