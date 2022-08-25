var nums = [1,2,3,4,6,7,41,44,70,76,77]


function solution(nums) {
  let answer = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k]; 
          if (prime(sum) == true) {
        answer++;
        } 
      }
    }
  }

  return answer;
}

    function prime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num >= 2;
      }
    
    console.log (solution(nums));

  // -----------내가 짠 실행안되는 코드-------------- 
//  function prime(num) {      
//   if (num == 1) {      
//       return false;
//   }
//   for (i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0){
//       return false;
//           }
//       return true;
//       }
//     }
