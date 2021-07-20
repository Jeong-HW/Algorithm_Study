function solution(participant, completion) {
  // 참가자와 완주자의 이름이 담긴 배열을 정렬한다
  participant.sort();
  completion.sort();

  /* 
  1. 정렬시킨 배열의 요소들들 각각 하나씩 비교한다.
  2. 순서대로 정렬시킨 이름들 중, 일치하지 않는 이름이 나온다면 그 참자가는 완주하지 못한 선수이다.
  */
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] != completion[i]) return participant[i];
  }

  // for문이 끝났음에도 순서가 모두 일치한다면, 마지막 순서에 있는 참가자가 완주하지 못하였으므로 배열의 맨 마지막 값을 리턴한다
  return participant[participant.length - 1];
}
