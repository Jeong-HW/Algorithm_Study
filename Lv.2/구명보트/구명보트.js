function solution(people, limit) {
  let count = 0;

  /* 
    [ 1번째 풀이 방식 ]
    => 순차적으로 people 배열의 요소들을 하나씩 꺼내와서 나머지 배열 요소들 중, 무게 제한을 넘지 않으면서 가장 큰 수를 골라와 없애주는 방식

    "문제점" : 문제가 해결되긴 하나, 실행 시간이 너무 오래 걸려 효율성 테스트 모두 통과되지 않았다
  */
  // while(people.length !== 0){
  //     let arr = [];
  //     let person1 = people.shift();
  //     let weight = limit - person1;
  //     arr = people.filter(el=>el <= weight)
  //     if(arr.length !== 0){
  //         let person2 = Math.max(...arr)
  //         people.splice(people.indexOf(person2),1)
  //     }
  //     count++;
  // }

  // 아래의 두 풀이 방식은 모두 내림차순 정렬을 이용히였다
  people.sort((a, b) => b - a);

  /* 
    [ 2번째 풀이 방식 ]
    => 첫 번째 풀이방식에서 막히고 난 뒤, 생각해보니 하나하나 비교 할 필요없이 내림차순으로 정렬된 배열에서 가장 큰 수와 가장 작은 수를 가져와 비교하면 쉽게 해결할 수 있는 문제였다
    두 사람의 무게를 비교하여 무게 제한을 넘으면 앞 사람 먼저 보내고, 넘지 않으면 두 명을 한꺼번에 보내는 방법이다
    만약, 맨 앞의 사람이 보트 제한 무게의 절반 이하가 되면 무조건 맨 뒤의 사람과 같이 보낼 수 있으므로 남은 사람은 남은 사람 수의 절반의 보트만 있으면 된다

    "문제점" : 1번째 풀이 방식보다 현저히 실행 시간이 줄어들었긴 하나, 이번에도 효율성 테스트에서 모두 통과되지 않았다
  */
  // while(people.length !== 0){
  //     let person1 = people.shift();       // 가장 큰 사람
  //     if(person1 <= limit / 2){
  //         return count += Math.ceil((people.length+1)/2)
  //     }
  //     else{
  //         let person2 = people.pop();     // 가장 작은 사람
  //         if(person1+person2 > limit){
  //             people.push(person2)
  //         }
  //         ++count
  //     }
  // }

  /*
    [ 3번째 풀이 방식]
    => 2번째 풀이 방식을 토대로 배열의 요소에 직접적으로 접근하는 방법 대신, 인덱스를 참조하여 푸는 방식으로 접근하였다
    가장 첫 번째 인덱스와 가장 마지막 인덱스를 기준으로 인덱스를 이동시키는 방법을 사용하였다
    그 결과, 직접적인 계산과정이 아닌 단순하게 인덱스 번호로 요소를 비교해주는 작업을 해주니 효율성 테스트를 통과하였다
  */

  let first = 0;
  let last = people.length - 1;
  while (first <= last) {
    if (people[first] <= limit / 2) {
      return (count += Math.ceil((last - first + 1) / 2)); // 생존자가 1명 일 경우를 생각하여 +1을 해준다
    }
    // 첫 번째 사람과 마지막 사람 모두 제한 무게를 넘지 않는다면 구출했다는 의미로 다음 인덱스를 체크한다.
    // 앞에서는 다음 인덱스를 확인해야하므로 증가시켜주고, 뒤에서부터는 앞으로 이동해야 하므로 감소시켜준다
    if (people[first] + people[last] <= limit) {
      first++;
      last--;
    }
    // 제한 무게를 초과할 경우 맨 앞의 사람만 보트를 태워 보낸다고 생각하면 된다
    else {
      first++;
    }
    count++;
  }

  return count;
}
