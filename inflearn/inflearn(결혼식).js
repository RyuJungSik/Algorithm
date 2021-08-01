function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n=times.length;
    let T_line =[]
    let count=0
    times.map(t=>{
        T_line.push([t[0], "S"])
        T_line.push([t[1], "E"])
    })

    T_line.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt()
        else return a[0]-b[0]

    })

    console.log(T_line)
    T_line.map(time=>{
        if(time[1]==='S') count+=1
        else count-=1
        answer=Math.max(answer, count)

    })
    return answer;
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
