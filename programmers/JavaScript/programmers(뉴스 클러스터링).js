function solution(str1, str2) {
    var answer = 0;
    let s1=str1.split('')
    let s2=str2.split('')
    let s1N=[]
    let s2N=[]
    for(let i=0;i<s1.length-1;i++){
        s1[i]=(s1[i]+s1[i+1]).toUpperCase()
    }
    s1.pop()
    for(let i=0;i<s2.length-1;i++){
        s2[i]=(s2[i]+s2[i+1]).toUpperCase()
    }
    s2.pop()
    console.log(s1,s2)
   for(let i of s1){
       if(i.charCodeAt(0)<65 || i.charCodeAt(0)>90 || i.charCodeAt(1)<65 || i.charCodeAt(1)>90){
           continue
       }
       s1N.push(i)
   }
    for(let i of s2){
       if(i.charCodeAt(0)<65 || i.charCodeAt(0)>90 || i.charCodeAt(1)<65 || i.charCodeAt(1)>90){
           continue
       }
       s2N.push(i)
   }
    console.log(s1N,s2N)

   ///////// 여기까지가 배열만드는 과정/////////////
    let goe=[]
    let hap=[]
    let s2C=[...s2N]
    for(let i of s1N){
        for(let j=0;j<s2C.length;j++){
            if(i===s2C[j]){
                goe.push(i)
                s2C.splice(j,1)
                break
            }
        }
    }
    
    let a=goe.length
    let b=s1N.length+s2N.length-a
    if (a===0 && b===0){
        answer=65536
    }else{
        answer=Math.floor((a/b)*65536)
    }
    
    return answer;
}