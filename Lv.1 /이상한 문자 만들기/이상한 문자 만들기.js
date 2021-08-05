function solution(s) {
  let count = 0; // 각 단어의 알파엣 인덱스 번호를 가리킬 변수
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
      // 하나의 단어가 끝나고 공백이 올 경우 0으로 초기화
      count = 0;
    } else {
      // 짝수일 경우
      if (count % 2 === 0) {
        result += s[i].toUpperCase();
        count++;
      }
      // 홀수일 경우
      else {
        result += s[i].toLowerCase();
        count++;
      }
    }
  }
  return result;
}
