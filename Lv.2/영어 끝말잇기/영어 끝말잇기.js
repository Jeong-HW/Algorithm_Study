function solution(n, words) {
  let used_words = []; // 이전에 등장했던 단어들을 저장시킬 배열
  used_words.push(words[0]); // 첫번째 단어를 먼저 저장시킨다
  for (let i = 0; i < words.length; i++) {
    let current_person = words[i];
    let next_person = words[i + 1] || null;
    // 다음 사람이 없다는 것은 즉, 모든 단어가 통과했다는 뜻
    if (next_person === null) {
      return [0, 0];
    }
    // 현재 단어와 다음 단어에 이어지지 않을 경우 혹은, 이미 등장했던 단어일 경우
    else if (
      current_person[current_person.length - 1] !== next_person[0] ||
      used_words.includes(next_person)
    ) {
      let person_num = ((i + 1) % n) + 1; // 나머지 값으로 계산할 경우엔 현재 그 사람의 순번
      let time = Math.floor((i + 1) / n) + 1; // 몫으로 계산할 경우에는 현재 몇번째 차례인지 알 수 있다
      return [person_num, time];
    }
    // 이미 등장한 단어는 배열에 저장시킨다
    used_words.push(next_person);
  }
}
