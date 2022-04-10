const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\n').map(item => +item);
const n = input[0]


const solution = (n, arr) => {
    let stack = []
    let arr2 = []
    let answer = []
    let count = 1
    for (let j=1;j<arr.length;j++) {
        while (count <=arr[j]) {
            answer.push('+')
            stack.push(count)
            count++
        }

        if (stack[stack.length - 1] == arr[j]) {
            stack.pop()
            answer.push('-')
        } else {
            return 'NO'
        }

    }

    return answer.join('\n')



}

console.log(solution(n, input))