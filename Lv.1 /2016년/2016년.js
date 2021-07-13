function solution(a, b) {
  let sum = 0; // 총 날짜 수를 저장할 변수
  let day_index = 0; // 총 날짜 수를 계산하여 'week' 배열에 부합하는 인덱스 번호를 저장할 변수

  // 1월 1일이 금요일이므로 첫번째 인덱스 값을 금요일로 지정한다
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  // 각각의 달마다 몇일인지 객체 형태로 구분시켜 저장한다
  const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  // 5월 24일로 예를 들어, 먼저 직전 달인 4월까지의 모든 일수를 더한다
  for (let i = 1; i <= a - 1; i++) {
    sum += month[i];
  }

  // 그리고 해당 달의 일수(b=24)를 더해준다
  sum = sum + b;

  // 최종적으로 총 일수에 7을 나눈 후 1을 빼주면 'week'배열 인덱스값인 해당 요일을 알 수 있다
  day_index = (sum % 7) - 1;

  if (day_index === -1) {
    // 그러나, 목요일의 경우에는 day_index값이 -1이 나오기에 따로 if문을 설정해준다
    // ex. 1월 7일의 경우 목요일이므로 week[6]이지만 7%7-1 = -1 이 나온다
    return week[6];
  } else {
    return week[day_index];
  }
}
