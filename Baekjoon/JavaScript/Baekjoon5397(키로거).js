const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input.shift()

const solution = (n, arr) => {
    for (let i of arr) {
        let Lstack = []
        let Rstack = []
        for (let j of i.trim()) {
            if (j === '<') {
                if (Lstack.length != 0) {
                    Rstack.push(Lstack.pop())
                }
            } else if (j === '>') {
                if (Rstack.length != 0) {
                    Lstack.push(Rstack.pop())
                }
            } else if (j === '-') {
                if (Lstack.length != 0) {
                    Lstack.pop()
                }
               
            } else {
                Lstack.push(j)
            }
        }
        console.log([...Lstack,...Rstack.reverse()].join('').trim())
    }
}
solution(n, input)