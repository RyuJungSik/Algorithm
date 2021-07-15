function solution(s) {
  let answer = 0;
  let stack = [];
  
  for(let i in s){
    if(s[i]==='('){
      stack.push('(')
    }else{
      if(s[i-1]==='('){
        stack.pop()
        answer+=stack.length;
      }else{
        answer+=1;
        stack.pop();
      }
    }
  }
  return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
