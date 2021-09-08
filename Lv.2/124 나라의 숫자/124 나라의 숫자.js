function solution(n) {
  // 3진법을 응용하여 0일때는 4로 대체한다. 규칙성을 생각하면 의외로 단순한 문제이다.
  let arr = ["4", "1", "2"];
  let result = "";
  while (n > 0) {
    result = arr[n % 3] + result;
    n = Math.floor((n - 1) / 3);
  }
  return result;
}
