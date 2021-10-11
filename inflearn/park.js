function solution(arr,money){  
    let answer=0;
    let p1=0
    let p2=0
    let sum=0
    let n=arr.length
    while (p1<n){
        if (answer<=p1-p2+1 && sum<=money){
            answer=p1-p2
        }
        if (sum>money){
            sum-=arr[p2]
            p2++
            continue
        }
        sum+=arr[p1]
        p1++
    }

    return answer;
  }
  console.log(solution([245,317,151,192],100));