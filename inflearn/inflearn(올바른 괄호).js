
function solution(s) {
    let answer = "YES";
    var stack=[]
    var word=''
    len=s.length;
    
    for(var i in s){
       if(stack.length===0){
           if(s[i]===')'){
               return "NO"
           }
           stack.push(s[i])
       }else{
        word=stack.pop()
        if(word === s[i]){
            stack.push(word)
            stack.push(s[i]) 
        }
       }
      
    }
    console.log(stack)
    if(stack.length!=0){
        answer='NO'
    }
    
    return answer;
}

let a = "(()))(";
console.log(solution(a));
