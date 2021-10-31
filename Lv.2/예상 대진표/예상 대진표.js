function solution(n, a, b) {
  /* 
  우리가 일상 생활에서 쉽게 접할 수 있는 월드컵 경기를 생각해보면 된다
  2의 N승으로 주어지는 게임 참가자 수에서 N이 곧 전체 라운드 수 이다
   */
  let total_round = Math.log2(n);
  for (let i = 1; i <= total_round; i++) {
    // 2명씩 같은 조로 묶여서 같은 경기를 펼치므로 2로 나눈 후 올림하였을 때, 같은 조임을 알 수 있다
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) {
      return i;
    }
  }
}
// 문제만 보면 조금 복잡할 수 있으나, 패턴을 이해하면 굉장히 쉽게 풀리는 문제였다.
