function solution(table, languages, preference) {
  // 각 직업군 별 점수 총합을 담을 변수. 모든 요소가 0으로 채워진 길이 5의 배열로 선언한다
  let sum = Array(5).fill(0);
  // 결과값을 담을 변수
  let result = [];
  for (let i = 0; i < table.length; i++) {
    /*
    입출력 첫번째 예시에서 table[0] 요소를 예로 들면 ex) "SI JAVA JAVASCRIPT SQL PYTHON C#" => [ 'C#', 'PYTHON', 'SQL', 'JAVASCRIPT', 'JAVA', 'SI' ]
    "제한조건"에서 { `table`의 원소는 `"직업군 5점언어 4점언어 3점언어 2점언어 1점언어"`형식의 문자열입니다. } 라는 조건식이 있으므로 
    매개변수 table의 각 요소인 문자열을 배열로 바꾸고 순서를 거꾸로 바꾸어주면 해당 언어의 직업군 언어 점수가 곧 인덱스 값에 +1을 한 값과 똑같다. 
    */
    table[i] = table[i].split(" ").reverse();
    for (let j = 0; j < languages.length; j++) {
      // 하나의 요소값인 배열을 기준으로 해당 개발자가 사용하는 언어를 찾아본다
      let score = table[i].indexOf(languages[j]);
      // 삼항 연산자를 이용하여 해당 언어가 있을 경우 인덱스+1 (언어 점수)를 할당하고 , 없을 경우 (-1일 경우) 0점으로 할당한다
      score = score < 0 ? 0 : score + 1;
      // "제한조건"에서 {`preference`의 i번째 원소는 `languages`의 i번째 원소의 언어 선호도입니다.} 라는 부분을 이용하여 해당하는 언어 점수와 언어 선호도를 곱한다
      sum[i] = sum[i] + score * preference[j];
    }
  }
  // 가장 높은 점수를 구하여 새로운 변수에 할당한다
  let max_score = Math.max(...sum);

  // 배열 sum의 인덱스 번호가 곧 배열 table의 해당 직업군의 인덱스 번호와 동일하기 때문에 가장 높은 점수와 일치하는 값의 인덱스 값이 곧 가장 높은 점수를 가진 직업군의 인덱스 값과 일치한다
  // 해당 직업군은 각 요소의 가장 마지막 인덱스 (즉, 5번째)에 위치하므로 결과값을 담을 result 배열에 push 한다
  sum.forEach((cur, idx) => {
    if (cur === max_score) {
      result.push(table[idx][5]);
    }
  });

  // 점수 총합이 같은 직업 군일 경우 사전순으로 나열한 후 가장 먼저 오는 값을 리턴해야하기에 정렬 후, 0번째 인덱스를 반환시킨다
  return result.sort()[0];
}
