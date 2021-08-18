function solution(bridge_length, weight, truck_weights) {
  let bridge_weights = truck_weights[0]; // 다리 위 트럭들의 무게 (초기값: 대기 트럭 배열의 첫번째 값)
  let across_bridge = Array(bridge_length - 1).fill(0); // 다리를 건너는 트럭들 (초기값 설정으로 인해 '다리 길이-1' 만큼 0으로 채운 배열을 생성한다)
  across_bridge.push(truck_weights.shift()); // 초기값으로 대기 트럭 첫번째를 넣어준다
  let count = 1; // 경과 시간 (초기값을 넣어줬으므로 1부터 시작)

  // 다리를 건너는 트럭이 존재하지 않을 때까지 반복한다
  while (bridge_weights !== 0) {
    // 다리로 들어오는 트럭을 truck_weights 배열 맨 첫번째 값으로 가져온다. 존재하지 않을 경우 0으로 할당
    let in_truck = truck_weights.shift() || 0;
    // 다리를 지나는 트럭은 across_bridge 배열 맨 첫번째 값을 빼준다
    let out_truck = across_bridge.shift();
    // 다라 위 트럭들의 무게에서 나가는 트럭의 무게를 빼준다
    bridge_weights -= out_truck;
    // 만약, 다리로 들어올려는 트럭의 무게를 견딜 수 있다면
    if (bridge_weights + in_truck <= weight) {
      // 다리 위 트럭들의 무게 값에 더해주고, 맨 뒷 순서에 해당 트럭을 넣어준다
      bridge_weights += in_truck;
      across_bridge.push(in_truck);
    }
    // 반대로 지금 들어올려는 트럭이 다리에 들어올 시에 견딜 수 없다면,
    else {
      // 해당 트럭을 다시 truck_weights 배열 맨 앞으로 되돌려놓고 빈 값인 0을 맨 뒤에 넣어준다
      truck_weights.unshift(in_truck);
      across_bridge.push(0);
    }
    // 반복문이 한번 돌때마다 트럭들이 앞으로 한칸 씩 움직이므로 경과시간을 1초 씩 증가시켜준다
    count++;
  }
  return count;
}
