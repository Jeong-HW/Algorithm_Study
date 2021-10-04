function solution(brown, yellow) {
  let arr = []; // 노란색 격자의 수의 약수를 담을 배열
  // 예를 들어, 12의 약수에서 3이 12의 약수인 것을 알면 4도 약수인 것을 알 수 있듯이
  // 전체 길이의 절반 만큼 for문을 돌려 효율성을 증가시킨다
  for (let i = 1; i <= Math.round(yellow / 2); i++) {
    if (yellow % i === 0) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let height = arr[i]; //세로
    let width = yellow / arr[i]; //가로
    let round = (height + width) * 2; // 둘레의 길이
    // 노란색 격자가 모여 만들어진 큰 사각형의 둘레의 길이는 곧 맞닿아있는 갈색 격자의 수에서 4개를 뺀 수와 같다
    // 4개는 테두리에 맞닿아있지 않는 각각의 모서리에 존재하는 타일이다
    if (brown === round + 4) {
      // 마찬가지로 각 모서리에 타일이 하나씩 더 붙어있으므로 가로,세로 길이에 각각 2씩 더해주면 전체 카펫의 길이가 나온다
      return [width + 2, height + 2];
    }
  }
}
