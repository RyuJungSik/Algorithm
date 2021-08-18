function solution(arr) {
    let answer="NO"
    arrLen=arr.length
    let checkArr=Array.from({length:arrLen+1}, ()=>0)

    const DFS=(k)=>{
        if(k===arrLen+1){
            let left=[]
            let right=[]
            checkArr.shift()
            for(let i in checkArr){
                if(checkArr[i]===0){
                    left.push(arr[i])
                }else{
                    right.push(arr[i])
                }
            }
            const sum1 = left.reduce(function add(sum, currValue) {
                return sum + currValue;
              }, 0);
              const sum2 = right.reduce(function add(sum, currValue) {
                return sum + currValue;
              }, 0);
            if(sum1===sum2) answer="YES"
            return
        }else{
            checkArr[k]=1
            DFS(k+1)
            checkArr[k]=0
            DFS(k+1)
        }
    }
    DFS(1)
    return answer;
}
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));


function solution(arr){
    let answer="NO", flag=0;
    let total=arr.reduce((a, b)=>a+b, 0);
    let n=arr.length;
    function DFS(L, sum){
        if(flag) return;
        if(L===n){
            if((total-sum)===sum){
                answer="YES";
                flag=1;
            }
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));