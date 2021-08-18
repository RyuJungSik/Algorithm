function solution(n) {
    let checkArr = []
    
    const DFS = (k) => {
        let answer=""
        if(k!==1 && k%2===0) checkArr.push(1)
        else if(k!==1) checkArr.push(0)

        if (k > Math.pow(2, n)-1){
            checkArr.map((value, index)=> {
                if(value===1){
                    answer+=String(index+1)
                }
            })
            console.log(answer)
            checkArr.pop()
            return
        }  
        else {
            DFS(2*k)
            DFS(2*k+1)
            checkArr.pop()
        }
    }
    DFS(1)
}

console.log(solution(3));
