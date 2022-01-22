function solution(id_list, report, k) {
  let result = [];
  let reported_list = {}; // 이용자 id가 신고한 id들(배열)을 저장할 객체
  let reported_count = {}; // 해당 유저의 신고당한 횟수를 저장할 객체
  report = [...new Set(report)]; // 동일 신고 중복 제거
  for (let str of report) {
    let user_id = str.split(" ")[0]; // 이용자 id
    let reported_id = str.split(" ")[1]; // 신고한 id
    // 한 유저가 신고한 유저 목록을 정리하여 객체 안에 key : Array(...value) 형태로 저장한다
    reported_list[user_id]
      ? (reported_list[user_id] = reported_list[user_id].concat(reported_id))
      : (reported_list[user_id] = [reported_id]);
    // 유저 각각 신고당한 횟수를 계산한다 key : user id , value : 신고당한 횟수
    reported_count[reported_id]
      ? (reported_count[reported_id] += 1)
      : (reported_count[reported_id] = 1);
  }
  // 정지 기준이 되는 신고 횟수가 넘지 않은 경우, 제외한다
  for (let r in reported_count) {
    reported_count[r] < k && delete reported_count[r];
  }

  // 모든 유저들이 k번 이상 신고되지 않았을 경우
  if (Object.keys(reported_count).length === 0) {
    return Array(id_list.length).fill(0);
  } else {
    let list = Object.keys(reported_count); // k번 이상 신고당한 유저 목록
    for (let user of id_list) {
      let count = 0; // 유저가 받은 결과 메일 수
      let r_list = reported_list[user]; //해당 유저가 신고한 유저들 리스트
      if (r_list) {
        for (let p of list) {
          r_list.includes(p) && ++count;
        }
      }
      result.push(count);
    }
    return result;
  }
}
