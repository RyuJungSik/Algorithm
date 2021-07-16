
function solution(arr) {
  let answer = arr;
  let stack1=[]
  let stack2=[]

  for(let i of arr){
    
    if(i<0){
      stack1.push(i)
    }else{
      stack2.push(i)
    }
  }

  answer=[...stack1, ...stack2]


  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
