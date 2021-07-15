function solution(absolutes, signs) {
  let sum = 0; // absolutes 배열의 합계를 저장할 변수

  // forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다
  // value = 처리할 현재 요소
  // i = 처리할 현재 요소의 인덱스
  absolutes.forEach((value, i) => {
    if (signs[i]) {
      // true일 경우, 양의 정수이므로 더해준다
      sum += value;
    } else {
      // false일 경우, 음의 정수이므로 빼준다
      sum -= value;
    }
  });

  return sum;
}
