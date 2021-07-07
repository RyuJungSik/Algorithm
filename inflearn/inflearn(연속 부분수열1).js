
function solution(m, arr) {
    let answer = 0
    var p1=0;
    var p2=0;
    var n=arr.length;
    var sum=0;
    while(p1<n){
        
        if(sum===m){
            answer=answer+1;
            sum-=arr[p2];
            p2++;
            continue;
        }
        if(sum>m){
            sum-=arr[p2];
            p2++;
            continue;
        }

        sum+=arr[p1]
        p1++
        console.log(sum)

    }


    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));