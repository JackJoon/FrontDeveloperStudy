//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

const fruits = ['❤','👀'];


// As-Is
{
    const first = fruits[0];
    const second = fruits[1];
    console.log(`${first} , ${second}`)
}

// To-Be

{
    const[first,sencond] = fruits;
    console.log(`${first} , ${second}`)
}


//Spread Syntax
{
    const obj1 = {key : 'key1'};
    const obj2 = {key : 'key2'};
    const array = [obj1, obj2];

    //array copy(주소값만 복사해 온다. 기존 Object 값을 변경 하면 다 바뀐다.)
    const arrayCopy = [...array];
    console.log(array, arrayCopy);


    //object copy
    const obj3 = {... obj1};
    console.log(obj3);

    //array
    const fruits1 = ['👀','😁'];
    const fruits2 = ['🤣','🐱‍👤'];
    const fruits3 = [...fruits1,...fruits2];
    console.log(fruits3);

    //object merge
    // 동일한 키를 가지고 있는 경우에는 최종 마지막에 있는 값을 엎어 친다.
    const aa = {aaa : '😊'};
    const bb = {bbb : '😊'};
    const cc = {...a,...b};
    console.log(cc)

    //Default Parameter
    //As-Is
    function printMessage (message){
        if(message == null ){
            console.log(message);
        }
    }

    //To-Be
    function printMessage (message= 'default Message'){
    }

    //Ternary Operator(삼항 연산자)
    //Template Liternals
    console.log(`${ab}, ${bb}`);

    //Optional chaining

    const ab1= {
        name : 'lee',
        job : {
                title: 'developer',
                manager : {
                        name : 'taek',
                },
        },
    };

    const ab2 = {
        name: 'jun',
    }

    {
        function printManager(person) {
            console.log(person.job.manager.name);   //As-Is
            console.log(person.job?.manager?.name);   //To-Be
        }
        printManager(ab1);

        printManager(ab2);  // As-IS 에서 Error!!!!!!!!! To-Be Success
    }
    {
        //logical OR
        // Or 연산자를 통해 기본값 처리
        // OR 연산자는 왼쪽 피연산자가 null, undefined 뿐만 아니라 falsy값이면 오른쪽 피연산자를 return한다
        const sad = "";
        const message = sad || 'defaultValue';

        console.log(message);

    }
    {
        //Nullish Coalescing
        // 기존 Or 연산자를 통해 기본값을 처리하려고 하였으나, 비교 하는 대상 값이 null 또는 undefined이면 true로 처리되는 맹점에 대해 대체한다.
        //??는 첫 번째 정의된(defined) 값을 반환합니다.
        const num = 0;

        //As-Is
        const message = num || 'undefined';
        console.log(message);

        //To-Be
        const name = num ?? 'undefined';
        console.log(name);
    }
}