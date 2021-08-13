function solution(lottos, win_nums) {
  /*
  결론부터 말하지면, 최고 순위는 지워진 번호가 당첨 번호와 일치할 때이고 최저 순위는 지워진 번호가 모두 당첨 번호와 불일치 할 경우이다
  그러므로 최대 당첨 개수 = (지워진 번호의 개수 + 당첨된 번호의 개수) / 최소 당첨 개수 = 당첨된 번호의 개수 이다.
  */
  // 맞춘 개수에 따라 일치하는 요소의 index+1 값이 곧 순위가 된다
  let ranking = [6, 5, 4, 3, 2];
  // 지워지지 않은 번호 중에서 당첨 번호의 개수
  let matching = lottos.filter((el) => win_nums.includes(el)).length;
  // 지워진 번호의 개수
  let unknown = lottos.filter((el) => el === 0).length;
  // ranking 배열 안에 맞춘 개수가 존재하면 일치하는 요소의 index+1(=순위)를 반환하고 없을 경우, 6(등)을 반환한다
  let max_ranking = ranking.indexOf(matching + unknown) + 1 || 6;
  let min_ranking = ranking.indexOf(matching) + 1 || 6;
  // 최대 순위와 최소 순위 배열로 리턴
  return [max_ranking, min_ranking];
}
