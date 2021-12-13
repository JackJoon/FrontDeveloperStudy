//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

const promise = new Promise((resolve,reject) => {
    console.log('dddddddd');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// consumers : then , catch, finally
/**
 * then : promise 잘 수행이 되고 resolve 함수가 정상적으로 실행이 되었을 때
 * prmose catch를 호출을 하는 데 , 함수 안에서 다시 Promise를 리턴하여 catch 한다. 이것을 체이닝이라고 한다.
 */
promise.then((value) => {
    console.log(value);
    })
    .catch(error => {
       console.log(error);
    })
    .finally(() =>{
        console.log('finally');
    });

// Promise Chaining
const fetchNumber = new Promise((resolve ,reject) => {
    setTimeout(() => resolve(1),1000)
})

const fetchNumberssss = ts =>
    new Promise((resolve ,reject) => {
    setTimeout(() => resolve(1),1000)
})

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => fetchNumberssss(num))
.then(fetchNumberssss) // 위와 같이 받아온 한가지 value 바로 다른 함수의 한가지 value 호출 하였을때는 생략이 가능하다.
.then(num => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));