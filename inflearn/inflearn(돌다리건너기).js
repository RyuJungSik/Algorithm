
function solution(n) {
    let answer = 0;
    let dx=[]
    dx[1]=1
    dx[2]=2

    for(let i=3;i<=n+1;i++){
        dx[i]=dx[i-2]+dx[i-1]
    }
    answer=dx[n+1]
    return answer;
}

console.log(solution(7));
