const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
 
const solution = ( n, m, arr1, arr2) => {
    arr1=arr1.trim().split(' ')
    arr2=arr2.trim().split(' ')

   for(let j of arr2){
       s=new Set([...arr1])
       if(s.has(j)){
           console.log(1)
       }else{
           console.log(0)
       }
   }
}
solution(input[0], input[2], input[1], input[3])