function solution(land) {
  /*
  Dynamic Programming (동적 계획법) =>  모든 경우의 수를 따져본 후 이를 조합해 최적의 해법을 찾는 방식
  원리 : 주어진 문제를 여러 개의 하위 문제로 나누어 풀고, 하위 문제들의 해결 방법을 결합하여 최종 문제를 해결하는 문제 해결 방식

  Dynamic Programming은 다음 두 가지 가정이 만족하는 조건에서 사용할 수 있다
  1. 큰 문제를 작은 문제로 나눌 수 있고, 이 작은 문제들은 중복된다. (Overlapping Sub-problems)
  2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 같다. 즉, 작은 문제에서 구한 정답을 큰 문제에서도 사용할 수 있다. (Optimal Substructure)
  */

  // 모든 행 마다 4열로 이루어져있기 때문에 0번 째 인덱스 부터 3번째 인덱스까지 같은 열을 제외한 나머지 3개의 숫자 중 가장 큰 숫자를 더하여 차례대로 내려가는 방식이다
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  // 최종적으로 맨 마지막 행에는 각 인덱스 별로 시작하여 나온 결과값들 중에서 가장 큰 값이 최적의 결과값이다
  return Math.max(...land[land.length - 1]);
}
