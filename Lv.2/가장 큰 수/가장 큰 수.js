function solution(numbers) {
  // 모든 number들을 string으로 바꿔주고 문자열을 그대로 연결한 수(b+a) - 바꿔 연결한 수(a+b)가 양수이면
  // ex) b(3) + a(30) - a(30) + b(3) => 330 - 303 = 양수
  // 3 30 순서를 그대로 유지한다.
  let result = numbers
    .map((value) => String(value))
    .sort((a, b) => b + a - (a + b))
    .join("");
  // 내림차순으로 정렬했기에 앞자리가 0인 경우, 모든 인자가 0이라는 것을 알 수 있다.
  return result[0] === "0" ? "0" : result;
}
