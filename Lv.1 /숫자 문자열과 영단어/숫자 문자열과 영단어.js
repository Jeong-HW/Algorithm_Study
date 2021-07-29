function solution(s) {
  let result = ""; //결과를 담을 문자열 변수
  let word = ""; //문자열 s에서 영단어만 추출하여 임시로 저장할 변수
  let num_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let table = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  // 숫자와 문자가 합쳐져있어보이지만 type 자체는 모두 string인 것을 인지해야한다
  for (let el of s) {
    // 숫자가 아닐 때 (문자열로 된 숫자 배열에 존재하지 않을 때)
    if (!num_arr.includes(el)) {
      // 영단어 하나씩 변수에 추가해준다
      word = word + el;
      // ex) "one4seveneight" 과 같이 seven과 eight이 붙어있는 경우를 생각하여 하나의 단어가 완성되었을 때, 해당 영단어를 table 객체변수에서 찾는다
      if (table[word]) {
        // 해당 영단어와 동일한 key의 value(숫자)를 추가해준다
        result = result + table[word];
        // 임시 변수인 word 초기화
        word = "";
      }
    }
    // 숫자일 때
    else {
      // ex) "one4seveneight"에서 one 다음 숫자 4가 올 경우, 이전의 영단어 one과 일치하는 숫자를 result 변수에 추가한다
      if (table[word]) {
        result = result + table[word];
      }
      // 영단어를 숫자로 변경하여 추가해준 이후, 숫자 4 (= el) 를 뒤에 추가해준다
      result = result + el;
      word = "";
    }
  }

  // 숫자로 형변환 후 리턴
  return Number(result);
}
