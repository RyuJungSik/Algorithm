const solution = (input) => {
  let answer = 101;
  const N = +input.shift();
  const cityPeopleNumber = input.shift().split(" ").map(Number);
  const board = Array.from({ length: N }, () => []);
  const visited=new Array(N).fill(false)

  for (let i = 0; i < N; i++) {
    let arr = input[i].split(" ").map(Number);
    for (let j = 1; j < arr.length; j++) {
      board[i].push(arr[j] - 1);
    }
  }

  const bfs=(area)=>{
    const q=[]
    const visited=new Array(N).fill(false)
    q.push(area[0])
    visited[area[0]]
    let temp=0
    let count=1
    while(q.length){
      const node=q.shift()
      temp+=cityPeopleNumber[node]
      for(let nextNode of board[node]){
        if(!area.includes(nextNode) || visited[nextNode]===true) continue
        visited[nextNode]=true
        count+=1
        q.push(nextNode)
      }
    }
    if(count===area.length) return temp

  }

  const choose=(n,count)=>{
    if(count===n){
      let [area1,area2]=[[],[]]
      for(let i=0;i<N;i++){
        if(visited[])
      }


    }

  }




  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
