//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

// Default Parameter
function showMessage(message, from = 'kkkkk') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

/**
 * Rest Parameter 배열갯수 리턴
  */

function prinAll(...args) {
    for(let i =0; i < args.length; i ++) {
        console.log(args[i])
    }
    for( const arg of args) {
        console.log(args)
    }

    args.forEach((args) => console.log(args));
}

prinAll('AAAA','BBBB','CCCC');

/**
 * Arrow Function
 */

// As - Is
const simplePrint = function() {
    console.log("simplePrint")
}

// To - Be
const simplePrint = () => console.log("simplePrint")

const simplePrint = () => {
    console.log("simplePrint");
    return
};

/**
 *  IIFE
 *  function 선언과 동시에 호출.
  */


(function hello() {
    console.log("hello");
})();