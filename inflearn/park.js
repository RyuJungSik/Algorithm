const isPrime=(num)=>{
    let flag=true
    for(let i=2;i< parseInt(Math.sqrt(num))+1;i++){
        if (num%i===0){
            flag=false
            return false
        }
    }
    return flag
}
function solution(s){  
    let answer=0
    let n=s.length
    let numarr=[]
    let tmp=""
    for (let i of s){
        if(!isNaN(i)===true){
            tmp+=i
        }else{
            if (tmp!=""){
             numarr.push(tmp)
            }
            
            tmp=""
        }
    }
    if(!isNaN(s[n-1])===true){
        numarr.push(tmp)
    }
    console.log(numarr)
    for(let i of numarr){
        if(isPrime(i)===true){
            answer+=1
        }
    }
    return answer;
  }
  console.log(solution("ab23cd21of11"));