function solution(n, lost, reserve) {
  //앞 번호와 뒷 번호 모두 여별의 체육복이 있을 경우에 앞 번호 학생에게 체육복을 빌리도록 쉽게 계산하기 위해 오름차순으로 정렬시킨다
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let count = 0; // 잃어버린 사람들 중 체육복을 빌린 사람의 수

  /* 
  "여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다."
  이 문제 조건을 고려하여 잃어버린 학생과 여분의 체육복을 가진 학생들 중에 서로 일치하는 학생들을 제외시킨다
  */
  let tmp = lost;
  lost = lost.filter((el) => !reserve.includes(el));
  reserve = reserve.filter((el) => !tmp.includes(el));

  // 잃어버린 학생이 없을 경우, 전체 학생 수를 리턴한다
  if (lost.length === 0) {
    return n;
  } else {
    for (let i = 0; i < lost.length; i++) {
      // 앞 번호 학생이 여분의 체육복을 가지고 있을 경우
      if (reserve.includes(lost[i] - 1)) {
        // 여분의 체육복을 가지고 있는 학생이 빌려줬다 생각하고 배열에서 제거한다
        reserve.splice(reserve.indexOf(lost[i] - 1), 1);
        // 빌린 학생 수 증가
        ++count;
      }
      // 뒷 번호 학생이 여분의 체육복을 가지고 있을 경우
      else if (reserve.includes(lost[i] + 1)) {
        reserve.splice(reserve.indexOf(lost[i] + 1), 1);
        ++count;
      }
      // 앞 번호와 뒷 번호 학생 모두 여분의 체육복을 가지고 있을 경우
      else if (reserve.includes(lost[i] - 1) && reserve.includes(lost[i] + 1)) {
        reserve.splice(reserve.indexOf(lost[i] - 1), 1);
        ++count;
      }
    }

    // 잃어버린 사람들 중 빌린 사람을 제외한 못빌린 사람들 수
    let num = lost.length - count;

    // 전체 학생에서 못 빌린 학생 수를 제외시킨다
    return n - num;
  }
}
