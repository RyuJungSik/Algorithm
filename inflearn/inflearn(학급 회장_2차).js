function solution(s) {
    let answer;
    let sH=new Map();
    
    for(var i of s){
      if(sH.has(i)) sH.set(i, sH.get(i)+1)
      else sH.set(i, 1)
    }
    sum=0;
    for(let [key, value] of sH){
      if (sum<value){
        sum=value;
        answer=key
      }
    }
    


    
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));