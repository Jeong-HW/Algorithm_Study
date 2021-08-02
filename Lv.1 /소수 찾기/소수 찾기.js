function solution(n) {
  // "에라토스테네스의 체" 사용하기
  // 배열의 인덱스는 0부터 시작하므로 계산의 편의성을 위해 숫자의 범위를 0부터 n까지로 두었다
  // 0 ~ n : n+1개
  let arr = Array(n + 1).fill(true);

  // 주어진 수의 제곱근까지만 계산하여 불필요한 반복을 최소화한다
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        // 해당 수의 제곱 값들을 지운다(false로 바꾼다)
        arr[j] = false;
      }
    }
  }

  // 0과 1은 소수가 아니므로 false 값으로 바꿔준다
  arr.splice(0, 2, false, false);

  // true값만 걸러낸다 (소수들만 남겨진다)
  let result = arr.filter((el) => {
    return el !== false;
  });

  return result.length;
}
