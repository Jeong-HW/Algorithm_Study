function solution(s) {
  let stack = []; // 스택으로 이용할 배열을 선언한다
  s = s.split(""); // 괄호 문자열을 배열로 만들어준다

  // 첫번째 방법 : 정확성 테스트는 통과하나 효율성 테스트는 통과하지 못했다
  // while(s.length > 0){
  //     let bracket = s.shift();
  //     if(stack[stack.length-1] === '(' && bracket === ')'){
  //         stack.pop();
  //     }
  //     else{
  //         stack.push(bracket)
  //     }
  // }

  // 두번째 방법 : while문 대신 for문을 이용하고 shift사용 대신 인덱스로 접근한다
  for (let i = 0; i < s.length; i++) {
    // 괄호를 차례대로 하나씩 꺼내본다
    let bracket = s[i];
    // 스택 맨 마지막에 저장된 괄호와 현재 꺼내본 괄호가 올바른 괄호일 경우, 스택의 맨 마지막 괄호를 제거한다. 아닐 경우, 방금 꺼낸 괄호를 스택에 넣는다
    stack[stack.length - 1] === "(" && bracket === ")"
      ? stack.pop()
      : stack.push(bracket);
  }
  // 해당 스택에 남아있는 괄호가 있을 경우, 올바른 괄호로 짝지어지지 않는 괄호가 남아있으므로 false를 리턴한다
  return stack.length > 0 ? false : true;
}
