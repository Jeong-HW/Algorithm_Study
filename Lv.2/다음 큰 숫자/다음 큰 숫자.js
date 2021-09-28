function solution(n) {
  // n을 2진수로 변환했울 때 1의 개수를 구해 변수 count에 할당한다 (정규표현식 사용)
  let count = n.toString(2).match(/1/g).length;
  // while문을 이용하여 n을 1씩 증가시키면서 다음 큰 숫자를 찾는다
  while (++n) {
    // 해당 숫자를 2진수로 변환했을 때 1의 개수를 구한다
    let num = n.toString(2).match(/1/g).length;
    // 처음 2진수 n의 1의 개수와 같다면 바로 리턴해준다
    if (num === count) {
      return n;
    }
  }
}
