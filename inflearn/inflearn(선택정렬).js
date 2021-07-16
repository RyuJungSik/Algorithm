
function solution(arr) {
  let answer = arr;
  let len=arr.length;

  for(let i=0;i<len-1;i++){
    let idx=i;
    let value=arr[i];
    
    for(let j=i+1;j<len;j++){
      if(value>arr[j]){
        idx=j;
        value=arr[j]
      }
    }
    console.log(idx, value)
    let tmp=arr[i]
    arr[i]=arr[idx]
    arr[idx]=tmp


  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
