
function solution(n, k) {
  let answer;
  let que=[]
  let point=0;
  let num=1

  for(let i=0;i<n;i++){
    que.push(i+1)
  }
  

  while(que.length>1){
   let tmp=que.shift()
   
    if(num%k===0){
      num+=1;
      continue;
    }else{
      num+=1;
      que.push(tmp)
    }
  }
  answer=que[0]

  return answer;
}

console.log(solution(8, 3));