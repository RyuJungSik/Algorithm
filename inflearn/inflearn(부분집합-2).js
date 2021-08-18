function solution(n) {
    let checkArr =Array.from({length:n+1}, ()=>0)
    
    const DFS=(k)=>{
       
        if(n+1===k){
            let tmp=""
            checkArr.shift()
            for(i=0;i<=n+1;i++){
                if(checkArr[i]===1) tmp+=String(i+1)
            }
            console.log(tmp)
        }else{
            checkArr[k]=1
            DFS(k+1)
            checkArr[k]=0
            DFS(k+1)
        }
    }
    DFS(1)
}

console.log(solution(3));
