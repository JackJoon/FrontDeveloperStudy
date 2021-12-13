//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.
// async
//As -IS
function fetchUser() {
    return new Promise((resolve, reject) =>  {
      resolve('lee');
    });
}
//To -be(async 호출 하면 Promise 를 호출 해 준다.)
async function fetchUser() {
    return 'lee';
}



const user = fetchUser();
user.then(console.log)
console.log(user);



// 2. await

function delay(){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await  delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

// As - Is
function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana().then((banana => `${apple} + ${banana}`));
        });
}

// To - be
async  function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await  bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


//3. Promise APIs   한번에 프라미스를 호출 해줄 수 있다.
function pickkAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickkAllFruits().then(console.log);


// 가장 먼저 실행 되는 프라미스를 리턴해준다.
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)