function solution(A, B) {
  // 각 숫자가 담겨있는 배열A,B를 각각 오름차순, 내림차순으로 정렬시킨다
  // 이로 인해 배열을 순서대로 (배열A의 가장 작은 값) * (배열B의 가장 큰 값) 순서로 곱해준 후, 누적시키면 가장 최소값이 나온다
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }
  return result;
}
