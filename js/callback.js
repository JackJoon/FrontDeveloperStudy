//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

/**
 * 호이스팅 함수가 상단으로 올라간다.
 */

 // Javascript is synchronous
setTimeout(function() {
    console.log('2');
},1000);

setTimeout(() => console.log('2'),1000);


//동기식 Callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

//비동기식 CallBack
function printWithDelay(print,timeout) {
    setTimeout(print,timeout)
}

printWithDelay(() => console.log('async callback'),2000);


//Callback Hell
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() =>  {

        },2000);
    }
    getRoles(user,onSuccess, onError) {

    }
}