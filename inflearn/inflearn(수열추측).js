function solution(n, f) {
    let answer=[]
    let tmp=[]
    let sum=0
    let flag=false
    let mem=Array.from(Array(100), ()=>Array(100).fill(0))
    let comList=[]
    const Com=(n, r)=>{
        if(r===0 || n===r) return 1
        else{
            return Com(n-1, r-1)+Com(n-1, r)
        }
    }

    for(let i=0;i<n;i++){
        comList.push(Com(n-1,i))
    }

    const DFS=(index, value)=>{
        if(flag===true) return
        else if(tmp.includes(value)) return
        else if(index===n){
            tmp.push(value)
            for(let i=0;i<tmp.length;i++){
                sum+=comList[i]*tmp[i]
            }
            if(sum===f) flag=true
            answer=[...tmp]
            tmp.pop()
            sum=0
            return
        }else{
            if(index!=0) tmp.push(value)
            for(let j=1;j<=n;j++){
                DFS(index+1, j)
            }
            tmp.pop()
        }
    }
    DFS(0, 0)
    console.log(answer)
    return answer;
}

console.log(solution(4, 16));
