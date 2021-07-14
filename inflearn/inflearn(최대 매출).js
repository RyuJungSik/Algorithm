function solution(k, arr) {
    let answer=0, sum=0;
    var n=arr.length;
    
    for(var i=0; i<n-3; i++){
        sum=parseInt(arr[i])+parseInt(arr[i+1])+parseInt(arr[i+2]);
       
        if(answer<=sum){
            answer=sum
        }
    }


    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));