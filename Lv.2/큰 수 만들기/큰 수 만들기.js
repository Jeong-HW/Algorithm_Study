function solution(number, k) {
  // 스택의 개념을 응용하였다
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    // 스택에 저장된 숫자들과 비교시키기 위해 numbers의 숫자들을 순차적으로 변수 num에 할당한다
    let num = number[i];
    //제거할 숫자의 개수가 남아있고 스택에 저장된 맨 마지막 숫자가 num보다 작으면
    while (k > 0 && stack[stack.length - 1] < num) {
      // 스택에 저장된 맨 마지막 숫자를 제거한다
      stack.pop();
      // 숫자 하나를 제거하였으므로 k를 1 감소시켜준다
      --k;
    }
    // num을 스택에 저장한다
    stack.push(num);
  }
  // 그러나, 제거해야 할 숫자의 개수가 남아있을 경우에는(k > 0 일 경우) 맨 마지막애서 k개만큼 제거한다
  stack.splice(stack.length - k, k);
  return stack.join(""); // 문자열로 변환 후 리턴
}
