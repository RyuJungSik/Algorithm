
function solution(target, arr) {
    arr=arr.sort((a,b)=>a-b)
    let answer;
    let start=0
    let fin=arr.length-1
    let mid=parseInt((fin+start)/2)
    while(1){
        if (Number(arr[mid])===Number(target)){
            answer=mid+1;
            break;
        }else if(arr[mid]>target){
            fin=mid-1
            mid=parseInt((fin+start)/2)
        }else if(arr[mid]<target){
            start=mid+1
            mid=parseInt((fin+start)/2)
        }
    }

    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
