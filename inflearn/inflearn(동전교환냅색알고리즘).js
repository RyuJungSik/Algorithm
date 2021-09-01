function solution(m, coin) {
    let answer = 0;
    n=coin.length
    dy=Array.from({length : 501}, ()=>10000)
    dy[0]=0
    for(let i of coin){
        for(let j=i;j<=m;j++){
            dy[j]=Math.min(dy[j], dy[j-i]+1)
        }
    }
    answer=dy[m]

    return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
