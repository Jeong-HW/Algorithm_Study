function solution(n) {
  // dynamic with meoization: O(N)
  // 이미 해결한 문제의 정답을 따로 기록해두고, 다시 해결하지 않는 기법

  let arr = [0, 1];
  if (n <= 1) {
    return arr[n];
  }
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }
  return arr[n];
}

/*
// 통과하지 못했던 다른 풀이 방식
// 재귀 함수 사용으로 인한 런타임 오류 발생
function solution(n) {
  let arr = [0, 1];

  let fibo = (n) => {
    // 이미 해결한 적이 있으면, 배열에 저장해둔 정답을 리턴한다.
    if (arr[n] !== undefined) {
      return arr[n] % 1234567;
    }
    // 새롭게 풀어야하는 경우, 문제를 풀고 배열에 저장한다.
    arr[n] = fibo(n - 1) + fibo(n - 2);
    return arr[n] % 1234567;
  };

  return fibo(n);
}
*/
