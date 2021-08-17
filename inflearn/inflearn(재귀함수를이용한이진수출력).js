
function solution(n) {
    let answer = "";
   
    const hexToBin=(n)=>{
        if(parseInt(n/2)===0) {
            answer=String(n%2)
            return
        }
      
        hexToBin(parseInt(n/2))
        answer=answer+String(n%2)
    }

    hexToBin(n)

    return answer
}

console.log(solution(11));
