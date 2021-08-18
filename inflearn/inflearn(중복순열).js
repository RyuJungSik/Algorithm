function solution(n, m) {
    let answer = [];
    let tmp=[]
    const DFS=(index, value)=>{
        if(index===m) {
            tmp.push(value)
            console.log(tmp)
            tmp.pop()
            return
        }
        else{
            for(let i=0;i<n;i++){
                if(value!==0) tmp.push(value)
                DFS(index+1, i+1)
                tmp.pop()
            }
        }
    }
    DFS(0, 0)
  
    return answer;
}

console.log(solution(4, 3));
