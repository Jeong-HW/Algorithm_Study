function solution(n, arr1, arr2) {
  let result = [];

  // 각 배열의 요소들을 2진수(문자열)로 바꾼 뒤, 삼항 연산자를 이용하여 01001과 같이 맨 앞의 수가 0일 경우를 위해 강제로 0을 붙여준다
  arr1 = arr1.map((el) => {
    let binary_num = el.toString(2);
    return (el =
      binary_num.length < n
        ? "0".repeat(n - binary_num.length) + binary_num
        : binary_num);
  });
  arr2 = arr2.map((el) => {
    let binary_num = el.toString(2);
    return (el =
      binary_num.length < n
        ? "0".repeat(n - binary_num.length) + binary_num
        : binary_num);
  });

  // 두 배열의 각각의 요소들을 비교하여 하나라도 1일 경우 벽("#"), 둘다 0일경우 공백(" ")으로 하여 임시 변수에 저장 후, result 배열에 push한다
  for (let i = 0; i < n; i++) {
    let tmp = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        tmp = tmp + "#";
      } else {
        tmp = tmp + " ";
      }
    }
    result.push(tmp);
  }

  return result;
}
