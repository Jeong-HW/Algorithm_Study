function solution(numbers) {
  let answer = [];
  let tmp = [];

  // 배열 내의 모든 요소들을 각각 더해준 후, 임의의 배열 변수에 넣는다
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      tmp.push(sum);
    }
  }

  // Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장한다
  answer = [...new Set(tmp)];

  // 배열 내 요소들 오름차순으로 정렬
  answer.sort(function (a, b) {
    return a - b;
  });

  return answer;
}
