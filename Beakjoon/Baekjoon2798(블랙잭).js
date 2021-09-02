const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\r');
const n = input[0].split(' ').map(item => +item)
const arr = input[1].split(' ').map(item => +item)
const solution = (n, arr) => {
    const gae = n[0]
    const score = n[1]
    let sum = 0
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] <= score) {
                    sum = Math.max(sum, arr[i] + arr[j] + arr[k])
                }
            }
        }
    }
    console.log(sum)
}
solution(n, arr)

