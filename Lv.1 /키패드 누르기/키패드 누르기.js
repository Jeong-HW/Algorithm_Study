function solution(numbers, hand) {
  var answer = "";
  let keypad = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
    [3, 6, 9, "#"],
  ];

  let left_finger = keypad[0][3]; //왼쪽 손가락의 가리키는 숫자
  let right_finger = keypad[2][3]; //오른쪽 손가락의 가리키는 숫자

  let xPoint_left = 0; //왼족 손가락이 가리키고 있는 숫자의 X좌표
  let xPoint_right = 2; //오른쪽 손가락이 가리키고 있는 숫자의 X좌표

  numbers.forEach(function (phone_num) {
    if (keypad[0].includes(phone_num)) {
      //왼쪽 키패드에 존재하는 번호
      xPoint_left = 0;
      answer = answer + "L";
      left_finger = phone_num;
    } else if (keypad[2].includes(phone_num)) {
      //오른쪽 키패드에 존재하는 번호
      xPoint_right = 2;
      answer = answer + "R";
      right_finger = phone_num;
    } else {
      //가운데 키패드에 존재하는 번호

      //왼쪽 손가락 위치에서 눌어야 할 숫자까지의 길이
      let left_len =
        Math.abs(1 - xPoint_left) +
        Math.abs(
          keypad[1].indexOf(phone_num) -
            keypad[xPoint_left].indexOf(left_finger)
        );
      //오른쪽 손가락 위치에서 눌어야 할 숫자까지의 길이
      let right_len =
        Math.abs(1 - xPoint_right) +
        Math.abs(
          keypad[1].indexOf(phone_num) -
            keypad[xPoint_right].indexOf(right_finger)
        );

      if (left_len > right_len) {
        right_finger = phone_num;
        xPoint_right = 1;
        answer = answer + "R";
      } else if (left_len < right_len) {
        left_finger = phone_num;
        xPoint_left = 1;
        answer = answer + "L";
      } else {
        if (hand === "left") {
          left_finger = phone_num;
          xPoint_left = 1;
          answer = answer + "L";
        } else {
          right_finger = phone_num;
          xPoint_right = 1;
          answer = answer + "R";
        }
      }
    }
  });

  return answer;
}
