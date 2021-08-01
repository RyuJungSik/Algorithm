
function solution(size, arr) {
    const S=size;
    const N=arr.length;
    let answer=[]

    arr.forEach(element => {
        let tmp;
        if(!answer.includes(element)){
            if(answer.length===S){
                answer.shift()
            }
            answer.push(element)
        }else{
            answer.forEach((element2, index)=>{
                if(element2===element){
                    tmp=index
                }
            })
            answer.splice(tmp, 1)
            answer.push(element)
        }
    });

    
    return answer.reverse();
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7, 9, 10, 11, 12, 13];
console.log(solution(5, arr));
