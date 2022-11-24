// [문제]
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 그 중, 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant,
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 
// [제한사항]
// 1. 마라톤 참여자 수의 범위는 1명 이상 100,000명 이하입니다.
// 2. completion의 길이는 participant보다 1 작습니다.
// 3. 참가자들의 이름은 알파벳 소문자로 이루어져있으며, 이름 길이의 범위는 1이상 20자 이하입니다.
// 4. 참가자들 중에, 동명이인이 있을 수 있습니다.

//함수선언문

function solution (p,c) {
    p.sort();
    c.sort();
    
    for (i=0; i<p.length; i++) {
        if (p[i] !== c[i]) {
            return p[i];
        }
    }
}

//함수표현식

let solution = (p,c) => {
    p.sort();
    c.sort();
    
    for (i=0; i<p.length; i++) {
        if (p[i] !== c[i]) {
            return p[i];
        }
    }
}


const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

console.log (solution(participant, completion));