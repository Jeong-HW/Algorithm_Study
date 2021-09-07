function solution(weights, head2head) {
  let result = []; // 결과값을 담을 배열
  let players_info = []; // 각 선수의 정보를 나타내는 요소가 배열로 들어갈 배열 (2중배열)
  for (let i = 0; i < head2head.length; i++) {
    let arr = Array(4).fill(0); //선수 개개인의 정보를 담을 임시 변수
    let count = 0;
    let win = head2head[i].split("").filter((value) => value === "W").length; // 이긴 횟수
    let total = head2head[i].split("").filter((value) => value !== "N").length; // 전체 경기 수
    let win_rate = win / total;
    for (let j = 0; j < head2head[i].length; j++) {
      // 자신보다 무거운 복서를 이겼을 경우
      if (head2head[i][j] === "W" && weights[i] < weights[j]) {
        ++count;
      }
    }
    arr[0] = i + 1; //선수번호
    arr[1] = win_rate || 0; //승률 (모든 선수가 아직 붙어본 적이 없는 경우 NaN이므로 0을 할당해준다)
    arr[2] = count; //자신보다 무거운 복서를 이긴 횟수
    arr[3] = weights[i]; //몸무게
    players_info.push(arr);
  }
  /*
  입출력 예시 첫번째의 경우,
  players_info = 
  [
    [ 1, 0.3333333333333333, 1, 50 ],
    [ 2, 0.3333333333333333, 0, 82 ],
    [ 3, 0.6666666666666666, 2, 75 ],
    [ 4, 0.6666666666666666, 0, 120 ]
  ]
  와 같이 할당된다
  */

  // 몸무게 -> 자신보다 무거운 복서를 이긴 횟수 -> 승률 순으로 순서대로 정렬시켜준다
  players_info
    .sort((a, b) => b[3] - a[3])
    .sort((a, b) => b[2] - a[2])
    .sort((a, b) => b[1] - a[1]);
  /*
  players_info = 
  [
    [ 3, 0.6666666666666666, 2, 75 ],
    [ 4, 0.6666666666666666, 0, 120 ],
    [ 1, 0.3333333333333333, 1, 50 ],
    [ 2, 0.3333333333333333, 0, 82 ]
  ]
  */

  // 결과값 변수에 정렬된 선수의 번호를 담아준다
  for (let arr of players_info) {
    result.push(arr[0]);
  }
  return result;
}
