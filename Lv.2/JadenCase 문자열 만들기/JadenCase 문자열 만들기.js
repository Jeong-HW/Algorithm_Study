function solution(s) {
  // 결과값을 담을 변수
  let result = "";
  for (let i = 0; i < s.length; i++) {
    // 해당 인덱스가 0(맨 첫번째 문자)이거나 이전의 문자가 공백일 경우, 대문자로 변환하여 추가한다(공백이 이어서 올 경우는 상관없이 공백이 붙음)
    if (i === 0 || s[i - 1] === " ") {
      result = result + s[i].toUpperCase();
    }
    // 나머지 문자들은 소문자로 변환하여 추가한다
    else {
      result = result + s[i].toLowerCase();
    }
  }
  return result;
}
