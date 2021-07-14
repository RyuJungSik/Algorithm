
function solution(str1, str2) {
    let answer = "YES";
    let sH1=new Map();
    let sH2=new Map();

    for(let i of str1){
        if(sH1.has(i)) sH1.set(i, sH1.get(i)+1)
        else sH1.set(i, 1)
    }

    for(let j of str2){
        if(sH2.has(j)) sH2.set(j, sH2.get(j)+1)
        else sH2.set(j, 1)
    }
   
    for(let [key, value] of sH1){
        if(sH2.get(key)!=value){
            answer = "NO"
        }


    }

    
 
    return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
