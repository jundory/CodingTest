
function solution(numbers) {
    let answer = 0;
    for (i=0; i<=9; i++) {
        if (!numbers.includes(i)){
            answer += i;
        }
    }
    return answer;
}

var numbers = [4,5,6,7,8,9]
console.log (solution(numbers))