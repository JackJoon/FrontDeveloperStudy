//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.
let json = JSON.stringify(true);
console.log(json);


json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
        name : 'tori',
    color : 'white',
    size : null ,
    birthDate : new Date(),
    jump : () => {
            console.log(`${name} can jump!`);
    }
};

json = JSON.stringify(rabbit,['name','color']);


json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, name ${name}`);
})
console.log(json);




// JSON to Object

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();