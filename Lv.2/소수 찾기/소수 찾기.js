function solution(numbers) {
  // num = numbers 배열의 숫자들로 조합하였을 때, 가장 큰 수
  let num = Number(
    numbers
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  // "에라토스테네스의 체" 이용
  // 배열의 인덱스는 0부터 시작하므로 계산의 편의성을 위해 숫자의 범위를 0부터 n까지로 설정하였다
  // 0 ~ n : n+1개
  let arr = Array(num + 1).fill(true);
  // 주어진 수의 제곱근까지만 계산하여 불필요한 반복을 최소화한다
  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        // 해당 수의 제곱 값들을 지운다(false로 바꾼다)
        arr[j] = false;
      }
    }
  }
  // 0과 1은 소수가 아니므로 false 값으로 바꿔준다
  arr.splice(0, 2, false, false);

  let result = [];

  // 소수일 경우(true일 경우), 해당 인덱스 값을 result 배열에 push한다. (인덱스 값이 결국 소수값이다)
  arr.map((el, idx) => {
    if (el === true) {
      result.push(String(idx));
    }
  });

  let count = 0;

  for (let i = 0; i < result.length; i++) {
    let num_arr = numbers.split("");
    let prime_num_arr = result[i].split("");
    // 해당 소수가 numbers에 속하는 숫자들로만 이루어져있는지 every 매소드를 사용하여 판별한다.
    let isTrue = prime_num_arr.every((n) => num_arr.includes(n));
    if (isTrue) {
      // numbers 숫자들로만 이루어져 있으면 개수를 1 증가시킨다
      ++count;
      // 입출력 예시 1번의 경우 [7, 11, 17, 71]이 true값으로 나오지만 11같은 경우 1이 1개밖에 존재하지 않기 때문에 분별시켜줘야한다
      // 먼저, 중복값을 제외한 숫자들로만 존재하는 배열을 생성한다
      let unique_num = [...new Set(prime_num_arr)];
      // numbers에 존재하는 숫자들의 개수와 numbers의 숫자들로 이루어진 소수에 존재하는 숫자들의 개수를 비교한다
      for (let n of unique_num) {
        let a = num_arr.filter((el) => el === n).length;
        let b = prime_num_arr.filter((el) => el === n).length;
        // 11과 같은 경우처럼 1의 개수가 2개이고 numbers에서 1의 개수가 1개이므로 다시 개수를 1 감소시키고 for문을 중단시킨다
        if (b > a) {
          --count;
          break;
        }
      }
    }
  }

  return count;
}

/* 
[ 아쉬운 점 ]
제한 조건에서 numbers는 길이 1 이상 7 이하인 문자열이기에 시간 초과가 되지 않은 것 같다. 
너무 복잡한 로직으로 인해서 시간 복잡도를 줄일 방법을 모색해야 할 것 같다
*/
