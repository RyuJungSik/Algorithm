
function solution(arr) {
    let answer = [];
    let n=arr.length;
    let arr2=[...arr].sort((a,b)=>a-b)
    arr.map((p, i)=>{
        if(arr2[i]!==p) answer.push(i+1)
    })
    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
