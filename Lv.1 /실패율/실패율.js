function solution(N, stages) {
  let users = stages.length; // 전체 사용자 수
  let failure_rate = {};

  // 각 스테이지 별로 실패한 사람들의 인원 수를 객체 변수 failure_rate에 저장한다
  // (key = 스테이지 번호 , value = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수)
  stages.forEach((stage) => {
    // N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타내므로 해당 스테이지까지 클리어한 유저는 제외하도록 한다
    if (stage <= N) {
      failure_rate[stage] = (failure_rate[stage] || 0) + 1;
    }
  });

  for (let i = 1; i <= N; i++) {
    // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 `0` 으로 정의한다.
    if (!failure_rate[i]) {
      failure_rate[i] = 0;
    } else {
      let losers = failure_rate[i];
      // 해당 스테이지의 실패율을 계산한다
      failure_rate[i] = failure_rate[i] / users;
      // 계산 이후, 다음 스테이지 실패율 계산을 위해 해당 스테이지의 도전자 수 만큼 빼준다
      users = users - losers;
    }
  }

  // 객체 정렬
  let arr = []; // 이중 배열로 저장하기 위한 임의의 변수
  // 객체의 요소들을 이중배열로 저장한다
  for (let stage in failure_rate) {
    arr.push([stage, failure_rate[stage]]);
  }

  // 각 요소의 1번째 인덱스 값(= 실패율)을 기준으로 내림차순 정렬한다
  arr.sort(function (a, b) {
    return b[1] - a[1];
  });

  // 최종적으로 실패율을 따로 저장하기 위한 변수
  let result = [];

  // 각 요소의 0번째 인덱스 값(= 스테이지 번호)을 Number로 형변환 후, 순서대로 result 변수에 push 한다
  for (let rate of arr) {
    result.push(Number(rate[0]));
  }

  return result;
}
