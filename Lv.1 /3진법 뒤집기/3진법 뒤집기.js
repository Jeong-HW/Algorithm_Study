function solution(n) {
  // 1. 10진수인 숫자 n을 toString()함수를 사용하여 3진법으로 변환한 문자열로 반환한다
  let result = n.toString(3);
  /* 
  2 - 1. 각 요소를 나누어 배열에 저장한다
  2 - 2. 배열의 순서를 역순으로 바꾼다
  2 - 3. 모든 요소를 묶어서 하나의 문자열로 반환한다
  */
  result = result.split("").reverse().join("");
  // 3. parseInt() 함수를 사용하여 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수로 반환한다.
  return parseInt(result, 3);
}
