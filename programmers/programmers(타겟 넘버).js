function solution(numbers, target) {
  var answer = 0;


  const recursive=(count, sum)=>{
      if(count==numbers.length){
          if(sum==target){
              answer++;
          }
          return
      }
      recursive(count+1, sum+numbers[count])
      recursive(count+1, sum-numbers[count])

  }

  recursive(0, 0)
  return answer;

}