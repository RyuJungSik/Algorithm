
function solution(n) {
    let answer = 0;
    const DP=(n)=>{
        if(n===1) return 1
        if(n===2) return 2

        return DP(n-2)+DP(n-1)

    }
    answer=DP(7)

    return answer;
}

console.log(solution(7));
