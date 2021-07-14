function solution(s) {
    let answer;
    var dic={'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0}
    
    for(var i in str){
        dic[str[i]]+=1;
    }
  answer=Object.keys(dic).reduce((a, b) => dic[a] > dic[b] ? a : b)
  
    
    
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));