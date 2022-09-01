// 세 개의 정수 a와 b, 그리고 c가 주어집니다.
// a와 b사이의 수가 c의 간격을 두며 증가할때, 
// 출력되는 값 중에서 짝수의 수를 리턴하는 함수 solution을 만들어주세요

// [제한조건]
// 1. a와 b가 같은 경우엔 둘중 하나를 리턴하세요
// 2. a와 b는 0이상 100 이하입니다.
// 3. a와 b는 같을 수 있거나, b가 크도록 대소관계가 정해져있습니다.



  // function solution(a,b,c) {

  //   let even = [];
  //   for (i=a; i<=b; i=i+c){   
      
  //       if(i%2==0) {
  //           even.push (i);
  //       } else if (a == b) {
  //           return i;
  //           }
  //       }
  //   return even.length;
  // }

//좀 더 깔끔하게
  function solution(a,b,c) {
    let answer = 0;
    for (i=a; i<=b; i=i+c){   
        if (i%2 == 0) {
          answer ++;
        }
        }
    return answer;
  }
  console.log("짝수의 갯수는 " + solution(4,50,3) + "개")


  //--------필터 메소드--------//

//   let result = arr.filter((a,b,c)=> {
// for ()
//   })