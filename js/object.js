//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.
const obj1= {}; //'object literal';
const ojb2= new Object();  //'object constructor'

function print(personal) {
    console.log(personal.name);
    console.log(personal.age);
}

const leejt = {name: 'lee', age : 4};
print(leejt);

leejt.hasJob = true;        // propertie 추가가 이렇게도 가능하다.
console.log(leejt.hasjob);

delete leejt.hasjob;        // propertie 삭제가 이렇게도 가능하다.


// 계산된 프로퍼티스
console.log(leejt.name);
console.log(leejt['name']); //String 타입으로 정의 해야 된다.



const person1 = {name : 'bob', age : 2};
const person2 = {name : 'adal', age : 3};
const person3 = {name : 'man', age : 4};
const person4 = makePerson('lee', 34);
const person5 = new Person('haha', 35);


function makePerson(name, age) {
    return {
        name,
        age
    };


}


// in 연산자
console.log('name' in leejt);

// for.. in vs for..of
for (key in leejt) {
    console.log(key)
}
// for (value of iterable)
const array = [1,2,3,4,5];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(value of array) {
    console.log(value);
}

const user = {name : 'leejt', age : 5};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}

console.log(user3);

Object.assign(user4, user); // 복사(clone)