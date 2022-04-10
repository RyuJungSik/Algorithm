function solution(s)
{
    var answer = -1;
    let stack=[]
    if(s.length%2!=0){
        return 0
    }
    
    for(let x of s){
        if(stack.length===0 || stack[stack.length-1]!=x){
            stack.push(x)
        }else{
            stack.pop()
        }
    }
    return (stack.length===0) ? 1 : 0

    return answer;
}