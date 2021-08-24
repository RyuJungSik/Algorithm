
function solution(n) {
    let answer;

    const DFS=(index)=>{
        if(index===1){
            return index
        }
        else{
            return index*DFS(index-1)
        }
    }

    answer=DFS(5)
    return answer;
}

console.log(solution(5));
