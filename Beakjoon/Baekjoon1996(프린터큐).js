const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input.shift()



const solution = (n, arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        let n = arr[i].trim().split(' ')[0]
        let m = arr[i].trim().split(' ')[1]
        let arr2 = arr[i+1].trim().split(' ').map((item)=>+item)
        let count = 0
        let where=m
        while (arr2.length>0) {
            let tmp = arr2[0]
            let flag = false
            
            if(arr2.length>1){
                arr2.map(item => {
                    if(item>tmp){
                        flag=true
                    }
                })
            }
            if(flag==true){
                if(where==0){
                    where=arr2.length-1
                }else{
                    where-=1
                }
                arr2.push(arr2.shift())
            }else{
                if(where==0){
                    console.log(count+1)
                    break
                }
                arr2.shift()
                count++
                where-=1
            }
        }
    }
}

solution(n, input)