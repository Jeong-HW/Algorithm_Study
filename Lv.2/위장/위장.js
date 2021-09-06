function solution(clothes) {
  let obj = {};
  // 의상 종류에 따른 의상 수를 객체 형태로 저장한다
  for (let arr of clothes) {
    // clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있으므로 2번째 값인 의상의 종류를 key로 지정한다
    let type = arr[1];
    // 해당 의상 종류가 객체에 존재할 경우, 의상 수를 증가시켜주고 없을 경우에는 새롭게 생성한다
    obj[type] = obj[type] ? obj[type] + 1 : 1;
  }
  // (의상종류 별 의상 수 + 1)씩 모두 곱하는 이유는 의상종류 별 의상수에 그 의상을 안 입는 경우의 수도 곱하는 것이다.
  let result = Object.values(obj).reduce((acc, cur) => {
    return acc * (cur + 1);
  }, 1);
  // 추가적으로 -1을 하는 이유는 아무것도 모두 안 입는 경우의 수를 빼는 것이다.
  return result - 1;
}
