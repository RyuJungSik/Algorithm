
function solution(s) {
    let answer="";
    let stack = [];
   
    for(var i of s){
       if(i==='('){
           stack.push(i)
       }else if(i===')'){
           stack.pop()
       }else{
        if(stack.length===0){
            answer+=i
        }

       }


    }


    return answer;
}

let str = "(AB(A))B((A))";
console.log(solution(str));