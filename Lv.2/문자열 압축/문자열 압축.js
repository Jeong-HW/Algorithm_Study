function solution(s) {
  let base_count = 1; // 문자열을 자를 기준이 되는 단위
  let result = 0; // 결과값을 담을 변수
  // 문자열의 절반 이상을 자르는 경우엔 무조건 겹치는 문자가 존재하지 않는다
  while (base_count <= Math.round(s.length / 2)) {
    let arr = [];
    // 단위를 기준으로 문자열을 잘라서 배열에 넣어준다
    for (let i = 0; i < s.length; i += base_count) {
      arr.push(s.substr(i, base_count));
    }

    let str = ""; // 압축한 문자열을 담을 변수
    let word = arr[0]; // 같은 문자인지 비교할 변수
    let count = 0; // 같은 문자의 개수를 세기 위한 변수
    // 마지막 값을 넣어주기 위해서 arr.length 까지 for문을 돌린다
    for (let i = 0; i <= arr.length; i++) {
      // 같은 문자일 경우
      if (word === arr[i]) {
        ++count;
      }
      // 다른 문자일 경우
      else {
        // 겹치는 문자가 없는 (= 1개 일 경우) 경우에는 숫자를 포함하지 않는다
        if (count === 1) {
          str = str + word;
        } else {
          str = str + count + word;
        }
        word = arr[i];
        count = 1;
      }
    }

    // 이중 삼항 연산자
    // 초기값이 0이므로 첫번째로 압축되어 나온 문자열의 길이를 넣어주고 그 이후로부터는 다음번에 압축되어 나온 문자열의 결과값을 비교하여 최소값을 찾는다
    result =
      result === 0 ? str.length : result > str.length ? str.length : result;

    base_count++;
  }
  return result;
}
