const solution=(tickets)=>{
    let answer = [];
    const graph=new Map()
    let flag=false
    const visited=new Map()
    
    const dfs=(path)=>{
        if(flag) return
        if(path.length===tickets.length+1){
            answer=[...path]
            flag=true
            return
        } else{
            const nowNode=path[path.length-1]
            const nextNodes=graph.get(nowNode)
            if(!graph.has(nowNode)) return
            
            for(let i=0;i<nextNodes.length;i++){
                if(visited.get(nowNode)[i]===true) continue     
                visited.get(nowNode)[i]=true
                dfs([...path,nextNodes[i]])
                visited.get(nowNode)[i]=false
            }
        }
    }
    
    
    for(let [x,y] of tickets){
        if(!graph.has(x)){
            graph.set(x,[y])
            visited.set(x,[false])
        }else{
            graph.get(x).push(y)
            visited.get(x).push(false)
        }
    }
    
    for(let arr of graph.values()) arr.sort()
    dfs(["ICN"])
    return answer;
}