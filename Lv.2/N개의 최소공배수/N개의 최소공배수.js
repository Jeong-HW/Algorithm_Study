function solution(arr) {
  // n개의 숫자를 담은 배열 arr에서 가장 큰 수를 찾는다
  let big_num = Math.max(...arr);
  // 배수 계산을 위한 변수
  let count = 1;
  // 가장 큰 수의 배수들을 순차적으로 나머지 숫자들로 나눴을 때, 모두 나머지가 0일 경우 해당 배수는 최소공배수가 된다.
  while (true) {
    // 가장 큰 수의 배수를 담을 변수를 선언한다
    let multiple = big_num * count;
    // 나눴을 때, 나머지가 0이 아닌 수들을 filter로 걸러낸 값들을 변수 result에 할당한다
    let result = arr.filter((num) => multiple % num !== 0);
    // 만약 모든 수가 0으로 나눠진다면 (빈 배열이라면), 해당 배수를 리턴한다.
    if (result.length === 0) {
      return multiple;
    }
    // 아니라면 다음 배수 계산을 위해 1 증가시켜준다
    count++;
  }
}
