function solution(priorities, location) {
  // 배열 내 같은 중요도를 가진 문서들이 존재하기 때문에 인쇄를 요청한 문서를 구분하기 위해 타입을 문자형로 바꿔준다
  // ex) [2, 1, 3, 2], 2 => [2, 1, '3', 2]
  priorities[location] = String(priorities[location]);

  // 인쇄 완료된 문서들을 순서대로 저장시킬 임의의 배열 변수를 선언한다
  let arr = [];

  while (priorities.length !== 0) {
    // 인쇄 대기 목록에서 순서대로 문서를 꺼내본다
    let document = priorities.shift();
    // 나머지 인쇄 대기 목록 중에서 중요도가 가장 큰 문서를 뽑는다
    let max_importance = Math.max(...priorities);
    // 나머지 인쇄 대기목록에서 중요도가 더 높은 문서가 없는 경우에는 인쇄 완료되었으므로 arr 변수에 push 한다
    if (document >= max_importance) {
      arr.push(document);
    }
    // 만약, 나머지 인쇄 대기목록에서 중요도가 더 높은 문서가 존재하면 맨 뒤로 보낸다.
    else {
      priorities.push(document);
    }
  }

  // 인쇄 완료된 문서 목록 arr = [ '3', 2, 2, 1 ]
  for (let num of arr) {
    // 맨 처음, 인쇄 요청한 문서의 타입을 문자형으로 바꾸었으므로 해당 문서를 찾은 뒤 순서를 리턴한다
    if (typeof num === "string") {
      return arr.indexOf(num) + 1;
    }
  }
}
