
function solution(arr1, arr2) {
    let answer = [];
    var p1=0, p2=0;
    var n1=arr1.length;
    var n2=arr2.length;

    while(p1<n1 && p2<n2){
        if(arr1[p1]>=arr2[p2]) answer.push(arr2[p2++])
        else answer.push(arr1[p1++])
    }
    
    while(p1<n1){
        answer.push(arr1[p1++])
    }
    while(p2<n2){
        answer.push(arr2[p2++])
    }


    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));