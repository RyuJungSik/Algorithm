function solution(c, arr) {
    const arrLen=arr.length
    let answer=0
    const DFS=(index, sum)=>{
        if(index===arrLen){
            if(sum>answer && sum<=c){
                answer=sum
            }
        }else{
            DFS(index+1, sum+arr[index])
            DFS(index+1, sum)
        }
    }

    DFS(0, 0)
    return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
