// /두 개의 정수 a와 b가 주어집니다.
// a와 b사이 모든 정수의 합을 리턴하는 함수 solution을 만들어주세요

// [제한조건]
// 1. a와 b가 같은 경우엔 둘중 하나를 리턴하세요
// 2. a와 b는 -10,000,000이상 10,000,000 이하입니다.
// 3. a와 B는 따로 대소관계가 정해져있지 않습니다.



function solution(a,b) {
    if (a > b) {
        [a,b] = [b,a];
    }
    let sum = 0;
    for (i=a; i<=b; i++){
            sum += i
        }
        return sum;
     }

  console.log (solution(6,3))