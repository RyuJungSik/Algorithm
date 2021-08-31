function solution() {
    let answer = "";
    let queue = [];
    queue.push(1)

    while(queue.length){
        let now=queue.shift()
        answer+=now+" ";
        
        for(let nv of [now*2,now*2+1]){
            if(nv>7) continue;
            queue.push(nv)
        }

    }

    return answer;
}

console.log(solution());
