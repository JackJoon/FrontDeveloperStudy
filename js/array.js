//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

const fruits = ['❤','👀'];


// for
for(let i=0; i < fruits.length; i++ ) {
    console.log(fruits[i]);
}
// for of
for(let fruit of fruits) {
    console.log(fruit);
}

//forEach
fruits.forEach((fruit, index, array)  => console.log(fruit, index, array));

//뒤에서 부터 remove
fruits.pop();

//배열에 add
fruits.push('🐱‍🏍')


// unshift 앞에서 부터 add
fruits.unshift('❤');

// unshift 앞에서 부터 remove
fruits.shift();

//splice
fruits.splice(1,1);
fruits.splice(1,1,'💋','😎');

//배열에 해당 하는 값을 boolean 으로 return
fruits.includes('💋');