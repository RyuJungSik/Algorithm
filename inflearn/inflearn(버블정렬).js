
function solution(arr) {
  let answer = arr;
  len=arr.length;

  for(let i=0;i<len-1;i++){
    for(let v=i;v<len;v++){
      if(arr[v]>arr[v+1]){
        [arr[v], arr[v+1]]=[arr[v+1], arr[v]]
      }
    }

  }




  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
