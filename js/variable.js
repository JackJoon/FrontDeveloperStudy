//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

let globalName ='glboal name';
{
    let name = 'ellie';
    console.log(name);

    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

{
    age = 4;
    var age;
}

console.log(age);


const daysInWeek = 7;
const maxNumber  = 5;

// 4. Variable types rw(read/write)
const count = 17;
const size = 17.1;
console.log(`value : ${count}, type: ${typeof count}`); // ' <- backtic template literals
console.log(`value : ${size}, type: ${typeof size}`);


// boolean
// false  0, null, undefined, Nan, ''
// true any other value


// Symbol
const symbol1 = Symbol(('id'));
const symbol2 = Symbol(('id'));
console.log(symbol1 === symbol2); // false


const symbol1 = Symbol.for(('id'));
const symbol2 = Symbol.for(('id'));

console.log(symbol1 === symbol2); // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic Typing
let text ='hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text =1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' + / '2';
console.log(`value: ${text}, type: ${typeof text}`);

//object
const lee = {name : 'lee', age: 30};