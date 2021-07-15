
function solution(s) {
  let answer;
  let stack = [];
  for(var i of s){
    console.log(i)
    let tmp1;
    let tmp2;

    if(i==='+'){
      tmp1=Number(stack.pop());
      tmp2=Number(stack.pop());
      stack.push(tmp2+tmp1)
    }else if(i==='-'){
      tmp1=Number(stack.pop());
      tmp2=Number(stack.pop());
      stack.push(tmp2-tmp1)
    }else if(i==='*'){
      
      tmp1=Number(stack.pop());
      tmp2=Number(stack.pop());
      stack.push(tmp2*tmp1)
      
    }else if(i==='/'){
      tmp1=Number(stack.pop());
      tmp2=Number(stack.pop());
      stack.push(tmp2/tmp1)
    }else{
     stack.push(Number(i))
    }
    
   

  }

  answer=stack[0]
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
