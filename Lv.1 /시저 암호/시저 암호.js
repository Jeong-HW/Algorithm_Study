function solution(s, n) {
  let Lower_alpha = "abcdefghijklmnopqrstuvwxyz"; // 소문자 look-up table
  let Upper_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 look-up table
  let result = ""; // 결과값을 저장할 문자열 변수

  for (let word of s) {
    // 문자가 공백일 경우, 공백 추가
    if (word === " ") {
      result = result + " ";
    }
    // 문자일 경우, 문자열이 담겨있는 배열에서 해당 문자의 인덱스 번호에 n을 더해준다
    // 문자열의 길이가 넘어갈 경우(ex. z에서 a로 다시 돌아가는 경우)에 대비하여 문자열 길이인 26으로 나누어준다
    else {
      // 소문자일 때
      if (word === word.toLowerCase()) {
        let index = (Lower_alpha.indexOf(word) + n) % 26;
        result = result + Lower_alpha[index];
      }
      // 대문자일 때
      else if (word === word.toUpperCase()) {
        let index = (Upper_alpha.indexOf(word) + n) % 26;
        result = result + Upper_alpha[index];
      }
    }
  }
  return result;
}
