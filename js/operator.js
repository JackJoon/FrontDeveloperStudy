//비정상적인 스크립트 동작을 막기 위해 use strict을 선언한다.
'use strict'; // 타입 스크립트에서는 사용 할 필요 없다.

// String
console.log(`${1+2}`);

//or 조건 중 true 조건이 먼저 나오면 다음 조건은 검색하지 않는다


/**
 * == 값만 체크
 * === 값 + 타입 까지 체크
 * 객체 비교시에는 래퍼런스 체크한다.
 */
