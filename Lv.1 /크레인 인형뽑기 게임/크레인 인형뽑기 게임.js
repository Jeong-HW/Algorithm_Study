function solution(board, moves) {
  let bucket = []; //바구니로 사용할 배열 변수
  /*
       "입출력 예시"
        [00000] i = 0 
        [00103] i = 1
        [02501] i = 2
        [42442] i = 3
        [35131] i = 4
     j = 12345
    */
  // board[i][j]
  // 라인 번호 : j + 1 (1을 빼줘야함)
  // 층 수 : i (역순)
  // bucket 순서 : 4 3 1 1 3 2 4 (0 제외)

  let count = 0; //사라진 인형의 개수
  for (let num of moves) {
    for (let i = 0; i < board.length; i++) {
      // 해당 라인에 인형이 있을 경우, bucket에 넣어준다
      if (board[i][num - 1] !== 0) {
        bucket.push(board[i][num - 1]);
        // 해당 위치의 인형을 뽑았으므로 0으로 바꿔준다
        board[i][num - 1] = 0;
        // break문을 넣어 해당 라인의 인형을 하나만 뽑고 반복문을 중지시킨다
        break;
      } else {
        // 해당 라인의 인형이 없을 경우, 다음 인형을 뽑도록 for문에서 탈출한다
        continue;
      }
    }

    // 두 인형이 연속해서 쌓이는 경우(배열 내 같은 값이 붙어있을 경우)
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === bucket[i + 1]) {
        count += 2;
        // 해당 두 인형을 배열에서 제거한다
        bucket.splice(i, 2);
      }
    }
  }

  return count;
}
