const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\n');
inputList = input[0].split(' ').map(item => +item)

const solution = (arr) => {
    if (arr.join('') === "12345678") {
        console.log("ascending")
    } else if (arr.join('') === "87654321") {
        console.log("descending")
    } else {
        console.log("mixed")
    }
}

solution(inputList)