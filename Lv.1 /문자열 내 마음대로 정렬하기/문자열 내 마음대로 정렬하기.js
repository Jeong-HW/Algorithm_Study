function solution(strings, n) {
  // 해당 인덱스의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치하게끔 사전에 미리 정렬시킨다.
  strings.sort();

  // 정렬된 문자들을 담을 배열
  let result = [];
  // 객체 형태로 해당 인덱스의 단어와 strings 배열 내 단어의 인덱스를 담을 배열
  let arr = [];

  /*
  strings = ["sun", "bed", "car"] , n = 1 을 예로 들면,
  15~21번줄 코드 실행 후 변수 arr에 들어간 값은
  [{ word: 'e', index: 0 },{ word: 'a', index: 1 },{ word: 'u', index: 2 }] 와 같이 삽입된다.
  */
  for (let words of strings) {
    let obj_info = {
      word: words[n],
      index: strings.indexOf(words),
    };
    arr.push(obj_info);
  }

  // 객체 내 word의 value값을 기준으로 정렬한다.
  arr.sort((a, b) => {
    if (a.word < b.word) {
      return -1;
    } else if (a.word > b.word) {
      return 1;
    } else {
      return 0;
    }
  });

  /* 
  정렬 이후에는 [{ word: 'a', index: 1 }, { word: 'e', index: 0 },{ word: 'u', index: 2 }] 와 같이 정렬되어 있는 것을 볼 수 있다.
  */

  // 순차적으로 정렬된 객체 내, index의 value값으로 저장한 단어의 인덱스 번호를 strings 배열에서 찾아와 result 배열에 넣어준다
  for (let obj of arr) {
    result.push(strings[obj.index]);
  }

  return result;
}
