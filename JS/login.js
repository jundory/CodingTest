const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//태그가 몇 개 없는 간단한 ui라 별도로 id 부여 x
const div = document.querySelector("div");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const list = document.querySelector("#ovr");
const USERNAME_KEY = "username";

const Myname = localStorage.getItem(USERNAME_KEY);

class Character {
    constructor(name, hp, damage){
        this.name = name,
        this.hp = hp,
        this.damage = damage
    }
    attacked(damage){
        this.hp -= damage;
        console.log(`${this.name}의 체력이 ${this.hp} 남았습니다.`);
                    if(this.hp <= 0) {
            console.log(`${this.name}이 사망하셨습니다. F5를 눌러 다시 시작하세요.`)
            battle = false;
            gameover = true;
        }
    }
//내가 적을 공격합니다. this 나 target 적
    attack(target){
        console.log(`${this.name}이 ${target.name}을 공격합니다.`)
        //Character를 상속받는 인스턴스인 attacked 함수의 파라미터에 this.att할당.
        target.attacked(this.damage);
        if (target.hp <= 0) {
                        console.log(`전투에 승리하셨습니다.`);
                      }
    }
}

const user = new Character(Myname, 100, 10);
const wizard = new Character("wizard", 70, 30);
const warrior = new Character("warrior", 200, 7);
const archer = new Character("archer", 100, 10);

const enemy = [wizard, warrior, archer];

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
    //호이스팅된 변수를 사용하면 null. Myname을 읽지 못하는 이유 질문할 것!
    const Mynamed = localStorage.getItem(USERNAME_KEY);
    div.classList.remove("hidden");
    alert(`환영합니다 ${Mynamed}님. 화면의 버튼을 눌러 적을 생성하세요.`);
}


//호이스팅 마친 후 여기부터 읽기 시작.
if(Myname === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onsubmit);
} else {
    div.classList.remove("hidden");
    wellcome();
}

const att = document.querySelector("#attack");
const run = document.querySelector("#run");
let gameover = false;
let battle = false;

function create(){
    const RandomMonster = enemy[Math.floor(Math.random() * 3)];
    div.classList.add("hidden");
    h1.classList.remove("hidden");
    h2.classList.remove("hidden");

    alert(`전방에 ${RandomMonster.name} 출현!`);
    console.log(RandomMonster);
    console.log(user);

    localStorage.setItem("enemy", JSON.stringify(RandomMonster));

    list.innerText = `콘솔창을 열어 자세한 정보를 확인하세요.
    나의 정보 : ${JSON.stringify(user)}
    적의 정보 : ${JSON.stringify(RandomMonster)}`
    h1.innerText = "어떻게 하시겠습니까?"

}
att.addEventListener("click", startBattle);

function startBattle(){
    user.attack(RandomMonster);
    console.log("hi");
}

//적 생성버튼을 누르면 발생하는 이벤트
div.addEventListener("click", create);

//빈 배열을 만들고 상대를 넣으니 상속을 받지 못해 실패.
// const ArrMons =[];
// function startBattle(){
//     const MyHero = new Character(Myname, 100, 10);
//     const Monster = localStorage.getItem("enemy");

//     if(Monster !== null){
//         const Mons = JSON.parse(Monster);
//         ArrMons.push(Mons);
//     }
//     console.log(MyHero);
//     console.log(ArrMons);
//     console.log(MyHero.attack(ArrMons[0]));
// }




//----------------------------------------------------------------------------------------


// class Character {
//     constructor(name, hp, damage){
//         this.name = name,
//         this.hp = hp,
//         this.damage = damage
//     }
//     attacked(damage){
//         this.hp -= damage;
//         console.log(`${this.name}의 체력이 ${this.hp} 남았습니다.`);
//                     if(this.hp <= 0) {
//             console.log(`${this.name}이 사망하셨습니다. F5를 눌러 다시 시작하세요.`)
//             battle = false;
//             gameover = true;
//         }
//     }
// //내가 적을 공격합니다. this 나 target 적
//     attack(target){
//         console.log(`${this.name}이 ${target.name}을 공격합니다.`)
//         //Character를 상속받는 인스턴스인 attacked 함수의 파라미터에 this.att할당.
//         target.attacked(this.damage);
//         if (target.hp <= 0) {
//                         console.log(`전투에 승리하셨습니다.`);
//                       }
//     }
// }

// class Hero extends Character {
//     //오버라이딩(super.메소드) = 부모클래스(Character)의 메소드(attacked)를 사용 및 확장함.
//     attaked(){
//         super.attacked();
//             if(this.hp <= 0) {
//             console.log(`${this.name}이 사망하셨습니다. F5를 눌러 다시 시작하세요.`)
//             battle = false;
//             gameover = true;
//         }
//     }

//     attack(){
//         super.attack();
//         if (target.hp <= 0) {
//             console.log(`전투에 승리하셨습니다.`);
//           }
//     }
// }

// const user = new Character(Myname, 100, 10);
// const wizard = new Character("wizard", 70, 30);
// const warrior = new Character("warrior", 200, 7);
// const archer = new Character("archer", 100, 10);

// const enemy = [wizard, warrior, archer];



//----------------------------------------------------------------------------------------
// const Hero = new Hero

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

//  att.addEventListener("click", fight);
// // def.addEventListener("click", defence)
// // run.addEventListener("click", runner)


