import {Character, Hero} from "./character.js"

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

//메모리 할당 문제? const 는 메모리 하나를 먹음 (비효율적?)
const div = document.querySelector("div");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const list = document.querySelector("#ovr");

const att = document.querySelector("#attack");
const run = document.querySelector("#run");

const USERNAME_KEY = "username";

//const 와 let의 차이. const로 할 경우 초기값인 null 할당
let MyName = () => {
    return localStorage.getItem(USERNAME_KEY)
}
//초기값 할당 (스코프 밖으로 빼기 위함)
let user, wizard, warrior, archer, enemy;
//create함수 안에서만 변수가 선언되므로 스코프 밖에서 미리 빈 값 할당.
let RandomMonster;


//적 생성버튼을 누르면 발생하는 이벤트
div.addEventListener("click", create);
// 공격을 눌렀을 시 아래의 함수 실행
att.addEventListener("click", startBattle);

goLogin()

//호이스팅 마친 후 여기부터 읽기 시작.
function goLogin(){
    if(!MyName()){
        loginForm.classList.remove("hidden");
        loginForm.addEventListener("submit", onsubmit);
    } else {
        div.classList.remove("hidden");
        wellcome();
    }
}


function makeCharacter() {
    user = new Hero(MyName(), 90, 15);
    wizard = new Character("wizard", 70, 30);
    warrior = new Character("warrior", 120, 7);
    archer = new Character("archer", 100, 10);
    enemy = [wizard, warrior, archer];
}


//로컬스토리지에 키 값 없을 경우
function onsubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    div.classList.remove("hidden");
    wellcome();
}


//로컬스토리지에 키 값이 있거나 생성되었을 경우
function wellcome(){
    div.classList.remove("hidden");
    alert(`환영합니다 ${MyName()}님. 화면의 버튼을 눌러 적을 생성하세요.`);
}


function create(){
    makeCharacter()

    RandomMonster = enemy[Math.floor(Math.random() * 3)];
    div.classList.add("hidden");
    h1.classList.remove("hidden");
    h2.classList.remove("hidden");
    
    alert(`전방에 ${RandomMonster.name} 출현!`);
    console.log(user);
    console.log(RandomMonster);

    //생성된 몬스터 로컬스토리지에 저장. 현재는 불필요
    localStorage.setItem("enemy", JSON.stringify(RandomMonster));
    
    list.classList.remove("hidden");
    list.innerText = `콘솔창을 열어 자세한 정보를 확인하세요.
    나의 정보 : ${JSON.stringify(user)}
    적의 정보 : ${JSON.stringify(RandomMonster)}`
    h1.innerText = "어떻게 하시겠습니까?"

// create함수 안에 넣어 remove이벤트리스너로 삭제했던 이벤트를 재생성
run.addEventListener("click", runner);
}


function runner(){
    alert(`${MyName()}님이 신속하게 몸을 숨겼습니다.`);
    list.classList.add("hidden");
    h1.classList.add("hidden");
    h2.classList.add("hidden");
    
    div.classList.remove("hidden"); 
   
    //기존의 몬스터를 없애기 위함 (이벤트 리스너의 중첩 기능 억제)
    run.removeEventListener("click", runner);
}


function startBattle(){
    user.attack(RandomMonster);
    if(RandomMonster.hp > 0){
        RandomMonster.attack(user);
    }
}


//-----------------------------------실패한 코드들-------------------------------------------

// 반복문 돌리려 한 자동 전투 함수
// function fight(){
//     const MyHero = new Hero();
//     console.log(``)
//     // while (!gameover){
//     //     battle = true;
//     //         while(battle){
//     //           Hero.attack()
//     //         }
//     // }
// }


//빈 배열을 만들고 상대를 넣으니 상속을 받지 못해 실패.
// const ArrMons =[];
// function startBattle(){
//     const MyHero = new Character(MyName, 100, 10);
//     const Monster = localStorage.getItem("enemy");

//     if(Monster !== null){
//         const Mons = JSON.parse(Monster);
//         ArrMons.push(Mons);
//     }
//     console.log(MyHero);
//     console.log(ArrMons);
//     console.log(MyHero.attack(ArrMons[0]));
// }