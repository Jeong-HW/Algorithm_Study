function solution(skill, skill_trees) {
  // 가능한 스킬 트리 개수를 담을 결과값 변수
  let result = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    // 선행스킬 순서와 같을 경우, 1씩 카운트해주기 위한 숫자 변수 선언
    let count = 0;
    // 하나의 스킬트리씩 접근하여 배열 형태로 분리시킨 후, 스킬 순서에 들어있는 스킬을 제외한 나머지 스킬들을 제거한 배열을 임시 배열 변수인 arr에 할당한다
    let arr = skill_trees[i].split("").filter((word) => skill.includes(word));
    for (let i = 0; i < arr.length; i++) {
      // 임시 변수에 담긴 스킬 배열에서 선행 스킬과 순서가 다를 경우 반복문을 바로 종료시킨다.
      if (arr[i] !== skill[i]) {
        break;
      }
      //순서가 맞을 경우 1씩 카운트 시켜준다
      count++;
    }
    // 반복문이 종료되고 해당 스킬 순서가 모두 일치할 경우, 가능한 스킬트리이므로 1씩 증가시켜준다
    if (count === arr.length) {
      result++;
    }
  }
  return result;
}
