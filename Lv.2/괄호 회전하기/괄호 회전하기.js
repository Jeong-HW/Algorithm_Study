function solution(s) {
  // 애초에 괄호의 갯수가 홀수일 경우 짝이 안맞기 때문에 바로 0을 리턴시켜준다
  if (s.length % 2 === 1) return 0;
  let result = 0; // 결과값을 담을 변수
  s = s.split(""); // 문자열인 s를 배열로 변환한다
  let len = s.length; // 배열 s의 길이 값을 할당한다
  // 배열의 길이만큼 반복문을 돌린다 (반복문 최하단인 39번째 줄에서 변수 len의 크기를 1씩 감소시켜준다)
  while (len > 0) {
    // 스택 개념을 이용. "([])" 과 같은 예시에서 올바른 괄호인지 판단할 때 사용하기 편하다 (안쪽에서부터 바깥쪽 괄호 파악)
    let stack = [];
    // 순차적으로 괄호를 왼쪽으로 1칸씩 이동시켜준다
    let move_bracket = s.shift();
    s.push(move_bracket);
    for (let i = 0; i < s.length; i++) {
      let bracket = s[i];
      // 짝에 맞는 괄호가 만났을 경우, 스택의 맨 위에 저장되어 있는 괄호를 삭제시키고, 맞지 않을 경우엔 그대로 집어넣는다
      // switch-case문을 이용하여 명시적으로 보기 쉽게 작성하였지만, 코드를 더 간단하게 줄일 방법을 생각해봐야겠다.
      switch (bracket) {
        case "]":
          stack[stack.length - 1] === "[" && bracket === "]"
            ? stack.pop()
            : stack.push(bracket);
          break;
        case ")":
          stack[stack.length - 1] === "(" && bracket === ")"
            ? stack.pop()
            : stack.push(bracket);
          break;
        case "}":
          stack[stack.length - 1] === "{" && bracket === "}"
            ? stack.pop()
            : stack.push(bracket);
          break;
        default:
          stack.push(bracket);
          break;
      }
    }
    // 모든 괄호가 짝이 맞다면 스택에 남아있는 괄호는 없을 것이다.
    // 하지만, 스택에 남아있는 괄호가 있다는 것은 결국 짝이 맞지 않는 괄호가 존재한다는 뜻.
    if (stack.length === 0) {
      ++result;
    }
    --len;
  }
  return result;
}
