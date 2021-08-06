function solution(dartResult) {
  let num_table = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let arr = [];
  let tmp = "";

  /*
  각 기회 별로 구분하여 배열 안에 각각 저장한다
  ex) "1S2D*3T" => [ '1S', '2D*', '3T' ]
  */
  for (let i = 0; i < dartResult.length; i++) {
    tmp = tmp + dartResult[i];
    if (i === dartResult.length - 1) {
      arr.push(tmp);
    }
    if (
      !num_table.includes(dartResult[i]) &&
      num_table.includes(dartResult[i + 1])
    ) {
      arr.push(tmp);
      tmp = "";
    }
  }

  arr.forEach((value, idx) => {
    let num = 0;
    let num_str = "";
    let str = "";
    // 각 요소마다 점수와 보너스[옵션]을 분리한다
    for (let el of value) {
      if (num_table.includes(el)) {
        num_str = num_str + el;
      } else {
        str = str + el;
      }
    }
    /*
    ex) [ '1S', '2D*', '3T' ]
    | 순서 | num_str | str |
    | :--: | :-----: | :-: |
    |  1   |    1    |  S  |
    |  2   |    2    |  D* |
    |  2   |    3    |  T  |
    */

    if (str[0] === "S") {
      num = Math.pow(num_str, 1);
    } else if (str[0] === "D") {
      num = Math.pow(num_str, 2);
    } else if (str[0] === "T") {
      num = Math.pow(num_str, 3);
    }

    // 점수와 보너스를 이용하여 계산한 값으로 요소를 교체한다
    arr[idx] = num;

    // 옵션값이 았을 경우, 그에 해당하는 조건에 맞춰 계산해준다
    if (str[1]) {
      if (str[1] === "*") {
        arr[idx] *= 2;
        arr[idx - 1] *= 2;
      } else if (str[1] === "#") {
        arr[idx] *= -1;
      }
    }
  });

  // 합계 리턴
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}
