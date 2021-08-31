
function solution(s, e) {
    let answer = 0;
    let dis = Array.from({ length: 10000 }, () => 0)
    let queue = []
    dis[s]=1
    let depth = 1
    queue.push(s)

    while (queue.length) {
        size = queue.length
        console.log(queue)
        if(queue.includes(e)){
            answer=depth-1
            break
        }
        for (i = 0; i < size; i++) {
            let now = queue.shift()
            for(let nv of[now+1, now-1, now+5]){
                if(dis[nv]===0){
                    dis[nv]=nv
                    queue.push(nv)
                }
            }
           
        }
        depth+=1



    }

    return answer;
}

console.log(solution(5, 14));
