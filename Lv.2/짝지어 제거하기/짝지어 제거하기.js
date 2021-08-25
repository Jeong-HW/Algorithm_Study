function solution(s) {
  // 자료구조에서 Stack 개념을 이용하면 쉽게 접근할 수 있는 문제이다
  let stack = []; // 스택으로 사용할 임시의 배열 변수

  // 배열에 저장된 맨 마지막 요소가 현재 문자와 같은 문자라면 스택 내 해당 문자열을 제거한다
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    }
    // 다른 문자라면 스택에 넣는다
    else {
      stack.push(s[i]);
    }
  }

  // 삼항 연산자를 이용. 스택에 남은 문자열이 없다면 성공적으로 수행했으므로 1을 반환. 그렇지 않을 경우 0을 반환한다
  return stack.length === 0 ? 1 : 0;
}
