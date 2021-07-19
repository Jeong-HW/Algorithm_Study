function solution(left, right) {
  let sum = 0; // left부터 right사이 수들의 합을 저장할 변수

  // i : left부터 right 범위 내에 있는 정수
  // j : 1부터 i사이에 존재하는 정수
  for (let i = left; i <= right; i++) {
    let count = 0; // 하나의 정수에 대한 약수의 개수를 저장할 변수
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++; // 약수일 경우, count 변수를 1 증가시켜준다
      }
    }

    // 약수의 개수를 모두 세어본 뒤, 약수의 개수가 홀수일 때와 짝수일 때를 나눠서 각각 계산한다
    if (count % 2 === 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }
  return sum;
}
