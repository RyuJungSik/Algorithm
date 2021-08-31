function solution(n, arr) {
    let answer = 0;
    const m=arr.length;
    const graph=Array.from(Array(n+1), ()=>Array(n+1).fill(0))
    let ch=[]
    for(let [a,b] of arr){
        graph[a][b]=1
    }

    const DFS=(index, node)=>{
        if(node===5){
            console.log(ch)
            answer+=1
            return
        }else{
            for(let i=1;i<n+1;i++){
                if(graph[node][i]===1 && !ch.includes(i)){
                    ch.push(node)
                    DFS(index+1, i)
                    ch.pop()
                }
            }
        }
    }
    DFS(0,1)
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
