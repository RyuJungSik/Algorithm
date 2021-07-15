function solution(board, moves) {
  let answer = 0;
  let stack = [];
  len=board.length
 
  for(var i of moves){
    var num;
    for(var j=0;j<len;j++){
    
      if(board[j][i-1]===0){
        continue;
      }else{
        
        if(stack.length===0){
          stack.push(board[j][i-1])
          board[j][i-1]=0;
        }else{
          num=stack.pop()
          if(num!==board[j][i-1]){
            stack.push(num)
            stack.push(board[j][i-1])
            board[j][i-1]=0;
          }else{
            answer+=2;
          }
        }
        break;
      }
      
    }

  }



  return answer;
}

let a = [[0, 0, 0, 0, 0],
[0, 0, 1, 0, 3],
[0, 2, 5, 0, 1],
[4, 2, 4, 4, 2],
[3, 5, 1, 3, 1]];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
