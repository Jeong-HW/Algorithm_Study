function solution(d, budget) {
  let sum = 0;
  let result = 0;

  // 가장 예산이 작은 부서들부터 차례대로 합산할 시, 최대로 지원할 수 있는 부서의 수를 알 수 있으므로 정렬시킨다
  d.sort((a, b) => {
    return a - b;
  });

  for (let num of d) {
    // 부서들의 에산을 차례대로 sum 변수에 더한다
    sum += num;
    if (sum <= budget) {
      // 예산을 넘지 않는다면, 최대로 지원할 수 있는 부서의 수를 1 증가시킨다
      ++result;
      // 만약, 예산과 지금까지의 더한 부서들의 예산이 똑같다면 현재까지의 부서 개수를 리턴한다
      if (sum === budget) {
        return result;
      }
    }
    // 예산이 넘어버릴 경우, 개수를 증가시키지 않고 현재까지의 부서 개수를 리턴한다
    else {
      return result;
    }
  }

  // d = [100] , budget = [101]과 같이 길이가 1이고 sum 변수에 부서 예산을 더해도 예산을 넘지 않으므로
  // return 하지않고 for문이 끝나버리므로 이런 예외 상황에 대하여 최종적으로 결과값을 return 해준다
  return result;
}
