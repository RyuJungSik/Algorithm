
function solution(need, plan) {
  let answer = "YES";
  let len1=need.length;
  let len2=plan.length;
  let apoint=0;
  let bpoint=0;
  let arr=plan.split('')

  for(let i=0;i<len2;i++){
    let tmp=arr.shift()
    

    if(need[apoint]===tmp){
      console.log(tmp)
      apoint+=1;
    }
  }

 if(apoint!=len1){
   answer=false;
 }



  return answer;
}

let a = "CBA";
let b = "CBDGE";
console.log(solution(a, b));
