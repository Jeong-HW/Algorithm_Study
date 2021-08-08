function solution(n) {
  let sum = 0; // 연속된 자연수들의 합을 저장할 변수
  let count = 1; // 방법의 수를 저장할 변수 (15 = 15 와 같은 문제 예시처럼 무조건 한번은 자기 자신으로 표현할 수 있기 때문에 초기값을 1로 준다)

  // 연속된 자연수들로 합을 구할 때 n의 1/2 이상 넘어갔을 경우, n이상의 수가 나오기 때문에 범위를 n/2까지만 잡아둔다 (효율성 증가)
  // Math.ceil() : 정수 올림
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    for (let j = i; j <= Math.ceil(n / 2); j++) {
      sum += j;
      if (sum === n) {
        sum = 0;
        count++;
        break;
      }
      if (sum > n) {
        sum = 0;
        break;
      }
    }
  }
  return count;
}
