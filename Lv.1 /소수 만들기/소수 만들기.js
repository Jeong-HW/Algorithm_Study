function solution(nums) {
  let array = getCombination(nums);

  // 모든 수들의 조합이 담겨있는 array변수의 길이를 기준으로 모든 요소 값을 true로 채운 배열을 선언한다
  let tmp = Array(array.length).fill(true);

  for (let arr of array) {
    // 2중 배열이므로 하나의 요소마다 reduce함수를 이용하여 합을 구한다
    let sum = arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    // 제곱근을 이용한 소수 판별법
    // sum의 제곱근보다 작은 수에서 나눠지는 수가 안나온다면 sum의 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없기 때문이다.
    // 그래서 이때의 시간복잡도는 O(√ N) 로 빠르다.
    for (let i = 2; i <= Math.floor(Math.sqrt(sum)); i++) {
      if (sum % i === 0) {
        // 한 번이라도 나누어 졌으니 소수가 아니므로 false값으로 바꾸어준다
        tmp[array.indexOf(arr)] = false;
      }
    }
  }

  // false를 제외한 true만 걸러낸 후, 배열의 길이(= 소수의 개수) 만큼 리턴한다
  return tmp.filter((el) => el === true).length;
}

/*
조합 알고리즘 (재귀함수)
[매개변수]
1. params (Array) : 조합할 숫자가 담겨있는 배열
2. selectNumber (default parameter) : 사용자가 이 매개 변수의 값을 제공하지 않으면 기본값(default value)이 사용된다. 반대로 매개 변수의 값을 제공하면 사용자 제공 값이 기본값 대신 사용된다.

ex) 4Combination3 = 4C3
Input: [1, 2, 3, 4] 
Output: [ [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4] ]
*/
function getCombination(params, selectNumber = 3) {
  let result = [];

  if (selectNumber === 1) {
    return params.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  }

  params.forEach((fixed, index, origin) => {
    let rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    let combinations = getCombination(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    let attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    result.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return result;
}
