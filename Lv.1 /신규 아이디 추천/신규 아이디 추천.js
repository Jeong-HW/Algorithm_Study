function solution(new_id) {
  // 1,2단계
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .split(""); // 배열로 리턴 (w에 언더스코어(_) 포함)
  // 3단계
  for (let i = 1; i < new_id.length; i++) {
    if (new_id[i] === "." && new_id[i - 1] === new_id[i]) {
      new_id.splice(i - 1, 1);
      --i; //splice 하였을 경우, 배열이 변함과 동시에 인덱스도 바뀌기 때문에 i의 위치를 한칸씩 앞으로 땡겨준다
    }
  }
  // 4단계
  if (new_id[0] === ".") {
    new_id.splice(0, 1);
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id.splice(new_id.length - 1, 1);
  }
  // 5단계
  if (new_id.length === 0) {
    new_id.push("a");
  }
  // 6단계
  new_id.splice(15);
  if (new_id[new_id.length - 1] === ".") {
    new_id.splice(new_id.length - 1, 1);
  }
  new_id = new_id.join("");
  // 7단계
  if (new_id.length <= 2) {
    new_id = new_id + new_id[new_id.length - 1].repeat(3 - new_id.length);
  }
  return new_id;
}

// 정규표현식을 적극 활용하여 코드를 간결하게 리팩토링한 코드 [다른 풀이 참고]
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1단계
//         .replace(/[^\w-_.]/g, '') // 2단계
//         .replace(/\.+/g, '.') // 3단계
//         .replace(/^\.|\.$/g, '') // 4단계
//         .replace(/^$/, 'a') // 5단계
//         .slice(0, 15).replace(/\.$/, ''); // 6단계
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); // 7단계
// }
