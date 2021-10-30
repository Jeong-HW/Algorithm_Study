function solution(dirs) {
  let result = 0; // 처음 걸어본 길의 길이를 담을 변수
  let record = []; // 지나간 길들의 정보를 저장한 배열
  let current_point = [0, 0]; // 현재 위치한 좌표 ( 0번째 인덱스: x , 1번째 인덱스 : y )
  for (let i = 0; i < dirs.length; i++) {
    let action = dirs[i];
    /*
    road라는 변수에 시작한 위치의 좌표와 움직인 좌표를 문자열로 결합하여 할당한다
    ex) [0,0]에서 [0,1]로 이동하였을 때, 두 좌표 사이의 길은 지나갔으므로 
    [0,0] -> [0,1] = '0001' 이라는 문자열로 바꿔주는 것이다.
    여기서 중요한 점은 [0,0]에서 [0,1]으로 이동한 경우와 [0,1]에서 [0,0]으로 이동한 경우는 같은 경우이므로
    '0001' 과 '0100' 두 개의 값을 생성하여 record 배열에 저장시켜준다
    */
    let road = current_point.join(""); // 먼저 시작 좌표를 저장한다 [0,0] -> '00'
    // 명령어에 따라 현재 좌표값을 증감해주면서 좌표면의 경계 이상을 넘지 않도록 해준다
    if (action === "U" && current_point[1] + 1 <= 5) {
      current_point[1] += 1;
    } else if (action === "D" && current_point[1] - 1 >= -5) {
      current_point[1] -= 1;
    } else if (action === "R" && current_point[0] + 1 <= 5) {
      current_point[0] += 1;
    } else if (action === "L" && current_point[0] - 1 >= -5) {
      current_point[0] -= 1;
    }
    let acrossed_road1 = road + current_point.join(""); // '0001'
    let acrossed_road2 = current_point.join("") + road; // '0100'

    /*
    1번 조건식 : 죄표가 이동되었을 경우. 좌표가 이동하지 않았을 경우(= 두 변수의 값이 같을 경우)는 좌표의 경계지점에 맞닿아 있기에 움직일 수 없으므로 25번,26번째 줄 코드의 두 변수 값이 같다.
    2,3번 조건식 : 이미 지나간 길이 아닐 경우 
    */
    if (
      acrossed_road1 !== acrossed_road2 &&
      !record.includes(acrossed_road1) &&
      !record.includes(acrossed_road2)
    ) {
      // 지나간 길의 경로 정보를 담는 record 배열에 저장시킨 후, 한 칸씩 이동하므로 길이를 1씩 증가시켜준다
      record.push(acrossed_road1);
      record.push(acrossed_road2);
      result++;
    }
  }
  return result;
}
