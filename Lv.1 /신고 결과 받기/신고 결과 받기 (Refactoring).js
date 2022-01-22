function solution(id_list, report, k) {
  report = [...new Set(report)]; // 중복 신고 제거
  let reported_list = report.map((item) => item.split(" ")[1]); // 신고당한 id들 (중복 포함)
  let reported_count = Array(id_list.length).fill(0); // 신고당한 횟수 (초기값 : 0)
  let suspended_list = []; // 정지된 유저
  let result = Array(id_list.length).fill(0); // 각 유저별로 처리 결과 메일을 받은 횟수

  // id_list에 담긴 id 순서에 맞춰서 신고당한 횟수를 추가해준다
  reported_list.forEach((value) => {
    reported_count[id_list.indexOf(value)] += 1;
  });

  // 신고당한 횟수가 k번이 넘는 유저를 넣는다 (reported_count와 id_list가 서로 가리키는 index값이 같음)
  /*
  reported_count : [  1,       2,       0,       2  ]
  id_list        : ["muzi", "frodo", "apeach", "neo"]
  suspended_list : ["frodo", "neo"]
  */
  reported_count.forEach((count, idx) => {
    count >= k && suspended_list.push(id_list[idx]);
  });

  report.forEach((str) => {
    let id = str.split(" "); // id[0] : 이용자id , id[1] : 신고한id
    // 신고한 id가 k번 넘게 신고를 받아 처리 결과 메일받을 경우 , 받을 메일을 1 추가해준다
    if (suspended_list.includes(id[1])) {
      result[id_list.indexOf(id[0])] += 1;
    }
  });

  return result;
}
