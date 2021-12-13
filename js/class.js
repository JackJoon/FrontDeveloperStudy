//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age;
    }

    speak() {
        console.log(`$(this.name} : hello!`);
    }
}

const leejt = new Person('ljt8692', 36)
console.log(leejt.name);
console.log(leejt.age);
leet.speak();

// Getter, Setter
class User{
    constructor(firstName, lastName, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    };

}

const user1 = new User('Steave', 'Job', -1);
console.log(user1.age);





