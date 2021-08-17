function solution(c, stable) {
    let answer;
    stable=stable.sort((a,b)=>a-b);
    let start=1
    let fin=stable[stable.length-1]
    let mid=parseInt((start+fin)/2)
    


    while(start<=fin){
        let gae=1
        let lastPoint=stable[0]
        let len=[]
        stable.map(point=>{
            if(point-lastPoint>=mid){
                len.push(point-lastPoint)
                lastPoint=point
                gae++
            }
        })    
        if(gae<c){
            fin=mid-1
            mid=parseInt((start+fin)/2)

        }else{
            start=mid+1
            mid=parseInt((start+fin)/2)
        }
       
    }


    answer=mid
    return answer;
}

let arr = [5, 6, 8, 12, 14];
console.log(solution(3, arr));
