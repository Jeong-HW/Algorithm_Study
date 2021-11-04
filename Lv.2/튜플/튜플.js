function solution(s) {
  let result = []; // 결과값을 담을 배열
  let arr = []; // 각 숫자와 개수를 담을 객체들을 저장할 배열
  s = s.replace(/[{\}]/gi, "").split(","); // 정규표현식을 이용하여 중괄호 제거 후, 쉼표를 기준으로 요소들을 잘라서 배열로 저장시킨다
  let numbers = [...new Set(s)]; // 중복된 숫자들을 제거하여 유일한 요소들만 저장시킨다
  // 집합의 원소들의 순서가 바뀌어도 첫번째 순서인 요소가 모든 집합에 들어있는 요소들의 개수를 세어보면 가장 많이 들어 있을 것이다.
  // 이 원리를 이용하여 요소들의 개수를 세어본 후, 개수만큼 정렬하면 튜플 내 원소들의 순서를 알 수 있다.
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    // 해당 숫자의 갯수를 구한다
    let count = s.filter((el) => el === num).length;
    arr.push({ num, count });
  }
  // 객체 내에 저장된 count(= 숫자의 개수)를 기준으로 배열 내 객체들을 정렬한다
  arr = arr.sort((a, b) => {
    return b.count - a.count;
  });
  // key가 num인 value들을 result 배열에 담는다
  arr.forEach((obj) => {
    result.push(Number(obj.num));
  });
  return result;
}
