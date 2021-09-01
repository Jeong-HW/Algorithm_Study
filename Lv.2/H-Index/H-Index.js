function solution(citations) {
  citations.sort((a, b) => b - a); //내림차순 정렬
  let result = 0;
  // 해당 논문의 인용된 횟수가 정렬된 논문의 해당 순번보다 작을 경우, 그 직전의 순번이 H-index이다.
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return (result = i);
    }
  }
  // [10,11,12]과 같이 모든 논문의 인용된 횟수가 논문의 순번보다 클 경우, 해당 논문의 개수가 H-index의 최대값이 된다
  return result > 0 ? result : citations.length;
}
