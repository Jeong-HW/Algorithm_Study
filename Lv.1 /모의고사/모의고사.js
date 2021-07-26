function solution(answers) {
  let result = []; // 가장 많은 문제를 맞힌 사람을 담을 배열
  let score_arr = []; // 수포자 각각의 점수를 담을 배열

  // 수포자들의 답안 패턴
  let pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 수포자 각각 점수 계산
  for (let arr of pattern) {
    let score = answers.reduce((acc, cur, idx) => {
      // 현재 가리키는 값이 수포자 정답 패턴과 일치할 경우, 점수 증가
      if (cur === arr[idx % arr.length]) {
        ++acc;
      }
      return acc;
    }, 0);
    // 해당 수포자의 점수를 배열에 push
    score_arr.push(score);
  }

  // 가장 높은 점수를 찾는다
  let Max_score = Math.max(...score_arr);

  // 가장 높은 점수와 동일한 점수를 가진 수포자를 결과값으로 return할 배열에 push
  for (let i = 0; i < score_arr.length; i++) {
    if (score_arr[i] === Max_score) {
      result.push(i + 1);
    }
  }
  return result;
}
