export class Character {
    constructor(name, hp, damage){
        this.name = name,
        this.hp = hp,
        this.damage = damage
    }

    // 아래서 올라온 attacked 함수의 this는 몬스터. 
    attacked(damage){
        this.hp -= damage;
        console.log(`${this.name}의 체력이 ${this.hp} 남았습니다.`);

        if(this.hp <= 0) {
            console.log(`${this.name}이 사망했습니다.`)
        }
    }
    
    attack(target){
        console.log(`${this.name}이 ${target.name}을 공격합니다.`)
        target.attacked(this.damage);
    }
}

export class Hero extends Character {
    //오버라이딩(super.메소드) = 부모클래스(Character)의 메소드(attacked)를 사용 및 확장함.
    //super는 부모클래스의 메소드를 똑같이 사용할 경우 사용
    attacked(damage){
        super.attacked(damage);
            if(this.hp <= 0) {
            console.log(`F5를 눌러 다시 시작하세요.`)
        }
    }

    attack(target){
        super.attack(target);
        if (target.hp <= 0) {
            console.log(`전투에 승리하셨습니다.`);
          }
    }
}
