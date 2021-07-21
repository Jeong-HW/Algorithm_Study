function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let cut = []; // array를 범위만큼 자른 배열을 담을 변수

    // slice 함수를 사용하여 첫번째 인덱스값과 두번째 인덱스값을 범위 기준으로 잘라서 저장한다
    cut = array.slice(commands[i][0] - 1, commands[i][1]);

    // 오름차순으로 정렬한다.
    cut.sort(function (a, b) {
      return a - b;
    });

    // 자른 배열에서 원하는 위치의 값을 넣어준다
    answer.push(cut[commands[i][2] - 1]);
  }
  return answer;
}
