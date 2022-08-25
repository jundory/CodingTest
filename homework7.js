// 실패한 코드 (같은 숫자가 뒤에 다시 나올 경우 중복값처리가 안됨)

// function solution(arr) {
//   let answer = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i === arr.indexOf(arr[i])) answer.push(arr[i]);
//   }
//   return answer;
// }


const arr = [1,1,3,3,0,1,1];

function solution(arr) {
  let result = [];
  for(i=0; i<arr.length; i++) {
    result[result.length - 1] !== arr[i] ? result.push(arr[i]) : null;
  } return result;
}



// i=0, answer[-1] !== arr[0] 이 되고 undefinded !== 4는 true이므로 answer.push(arr[0]) 실행 -> answer =[4]
// i=1,  answer[0] !== arr[1] 이 되고 4 !== 4는 false이므로 null 실행 -> answer =[4]
// i=2, answer[0] !== arr[2] 가 되고  4 !== 4는 false이므로 위와 동일
// i=3, answer[0] !== arr[3] 이 되고  4 !== 3은 true이므로 answer.push(arr[3]) 실행 -> answer =[4,3]
// i=4, answer[1] !== arr[4] 가 되고 3 !== 3은 false이므로 null 실행 -> 최종결과 answer = [4,3] 출력.


//  var arr = [4,4,4,3,3];
  console.log(solution(arr));