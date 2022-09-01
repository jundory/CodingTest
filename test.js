
// 평균값 구하기
// 낄낄낄낄낄낄낄낄낄ㅛ
// fetch 성공?


// function solution(arr) {
//     var answer = 0
//     for ( i=0; i<arr.length; i++) {
//         answer += arr[i]
//     }
//     return answer / arr.length
//     }
    


// 2. 임의의 배열의 값 합산

 //------------es6------------//
// let sum = arr.reduce((prev, cur)=>{
//  return prev + cur;   
// }, 0)

 //------------바닐라------------//
// function sum() {
//     let result = 0;
//     for(i=0; i<arr.length; i++) {
//         result += arr[i];
//     } return result;
// }

// var arr = [1,2,3,4,5];
//console.log(sum(arr));


// 3. 수박수박수박수박

// function solution(n) {
//     let answer = [];
//     for (i=0; i<n; i++) {
//     answer += i%2==0 ? "박" : "수";
//     } return answer;
// }
// console.log(solution(3));

//화살표함수로
// let solution = (n) => {
//     let answer = [];
//     for (i=0; i<n; i++) {
//     answer += i%2==0 ? "수" : "박";
//     } return answer;
// }
// console.log(solution(3));

//클로저함수 이해하기
let one;
one=1;
function addOne(num){
    console.log(one + num);
}
addOne(5);

function makeAdder(x) {
    return function(y){
        return x + y;
    }

}

const add3 = makeAdder(3);
console.log(add3(2)); //5 -> add3 함수가 선언됐음에도 makeAdder 함수에 접근함.

