let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
// ----------------------
// < 입력 값 >
// 3 310
// 50 40
// 100 70
// 200 150
// ----------------------
let n = Number(input[0].split(" ")[0]);
let t = Number(input[0].split(" ")[1]);


let test=new Array(n);
for(let i=0;i<n;i++){
  test[i]=input[i+1].split(" ");
}
// number화 시켜주기

for(let i=0;i<n;i++){
  for(let j=0;j<2;j++) test[i][j]=Number(test[i][j]);
}



let dp=new Array(t+1).fill(0);


for(let i=0;i<test.length;i++){
    let x=test[i][0];
    let y=test[i][1];
  
    for(let j=t;j>=x;j--){
      dp[j]=Math.max(dp[j],dp[j-x]+y);
    }
  }

console.log(dp[t])