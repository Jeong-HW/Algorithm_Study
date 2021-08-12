function solution(scores) {
  let avg_score = [];
  let result = "";

  for (let i = 0; i < scores.length; i++) {
    let arr = [];
    let count = 0;
    // 각각의 열에 담긴 학생들이 받은 점수를 임시 배열 변수(arr)에 받는다
    for (let j = 0; j < scores.length; j++) {
      arr.push(scores[j][i]);
    }

    // 해당 열의 최대값과 최소값을 구한 후, 변수에 할당한다
    let max_num = Math.max(...arr);
    let min_num = Math.min(...arr);

    // 자기 자신을 평가한 점수가 최고점 혹은 최저점일 때, 해당 열에서 유일한 점수인지 확인한다
    if (arr[i] === max_num || arr[i] === min_num) {
      count = arr.filter((el) => el === arr[i]).length;
      // 유일하다면 해당 점수는 제외시킨다
      if (count === 1) {
        arr.splice(i, 1);
      }
    }

    // 각 학생들의 평균점수를 담는 배열 변수(avg_score)에 평균값을 계산하여 push한다
    avg_score.push(
      arr.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / arr.length
    );
  }

  // 각 학생들의 평균점수를 기준으로 switch-case문을 이용하여 최종적으로 학점을 구하여 결과값(result) 변수에 추가한다
  for (let score of avg_score) {
    switch (parseInt(score / 10)) {
      case 10:
      case 9:
        result = result + "A";
        break;
      case 8:
        result = result + "B";
        break;
      case 7:
        result = result + "C";
        break;
      case 6:
      case 5:
        result = result + "D";
        break;
      default:
        result = result + "F";
    }
  }

  return result;
}
