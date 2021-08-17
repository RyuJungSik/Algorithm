function solution(n) {
    let answer = "";
    
    const DFS=(n)=>{
        if(n>7) return
        else{
            
            DFS(2*n)
            console.log(n)
            DFS(2*n+1)
        }
    }
    DFS(n)

    return answer;
}

console.log(solution(1));
