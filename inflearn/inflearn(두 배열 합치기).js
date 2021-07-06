
function solution(arr1, arr2) {
    let answer = [];
    while (true) {
        var a = arr1[0];
        var b = arr2[0];
        if (arr1.length === 0) {
            answer = [...answer, ...arr2]
            break;
        } else if (arr2.length === 0) {
            answer = [...answer, ...arr1]
            break;
        }


        if (a >= b) {
            if (answer.includes(b) === false) {
                answer.push(arr2.shift())
            }
            else {
                arr2.shift()
            }
        }
        else {
            if (answer.includes(a) === false) {
                answer.push(arr1.shift())
            }
            else {
                arr1.shift()
            }

        }
    }




    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));