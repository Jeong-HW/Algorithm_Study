function solution(nums) {
  // 중복된 값을 제거한 폰켓몬 개수 = 폰켓몬 종류의 수
  let unique_nums = new Set(nums); // Set객체를 사용하여 중복된 값을 제거한다
  let unique_arr = [...unique_nums]; // 전개구문을 사용하여 배열형태로 저장시킨다

  // 가져갈 수 있는 폰켓몬의 개수보다 폰켓몬 종류의 개수가 더 많으면 가질수 있는 폰켓몬 종류 수의 최대값은 가져갈 수 있는 폰켓몬의 개수가 된다
  if (unique_arr.length >= nums.length / 2) {
    return nums.length / 2;
  }
  // 반대로, 가져갈 수 있는 폰켓몬의 개수보다 폰켓몬 종류의 개수가 더 적으면 가질수 있는 폰켓몬 종류 수의 최대값은 폰켓몬 종류의 개수가 된다.
  else {
    return unique_arr.length;
  }
}
