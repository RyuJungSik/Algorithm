
function solution(m, arr) {
    let answer = 0
    var n = arr.length
    var p1 = 0;
    var p2 = 0;
    var sum = 0;

    for(p1=0; p1<n; p1++) {
        sum += arr[p1]
        while (sum >m) {
            sum -= arr[p2]
            p2++;
        }
        answer += p1 - p2 + 1;

    }



    return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
