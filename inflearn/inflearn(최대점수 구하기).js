
function solution(m, ps, pt) {
    let answer=0
    let len=ps.length


    const DFS=(index, scoreSum, timeSum)=>{
        if(index===len){
            if(timeSum<=m){
                answer=Math.max(answer, scoreSum)
            }
            return
        }else{

            DFS(index+1, scoreSum+ps[index], timeSum+pt[index])
            DFS(index+1, scoreSum, timeSum)
        }
    }


    DFS(0, 0, 0)
    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));
