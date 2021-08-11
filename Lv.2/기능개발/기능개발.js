function solution(progresses, speeds) {
  let arr = [];
  let result = [];
  // 각 기능 별로 걸리는 날짜를 계산하여 배열 변수 arr에 순서대로 넣는다
  for (let i = 0; i < progresses.length; i++) {
    arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  /* 
  두번째 입출력 예시의 경우, 각각의 기능들의 개발시간을 계산해보면 5일, 10일, 1일, 1일, 20일, 1일 걸리므로 arr = [5,10,1,1,20,1]
  현재 기능이 뒤에 오는 기능보다 개발시간이 오래 걸릴 수 있으므로, 현재 기능개발이 걸리는 시간을 기준값으로 하여 뒤에 오는 기능 개발시간들을 비교한다
  초기값으로 첫번째 기능개발이 걸리는 시간으로 넣어주고 2번째 기능부터 for문으로 차례대로 비교해주었다

  ex) 
    arr = [5,10,1,1,20,1]

    | tmp[0] | arr[i] | tmp      | result  |
    | ------ | ------ | -------- | ------- |
    | 5      | 10     | [10]     | [1]     |
    | 10     | 1      | [10,1]   | [1]     |
    | 10     | 1      | [10,1,1] | [1]     |
    | 10     | 20     | [20]     | [1,3]   |
    | 20     | 1      | [20,1]   | [1,3,2] | <- i = arr.length-1 이므로 tmp에 남아있는 개수를 마지막으로 넣어준다
  */
  let tmp = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    // 현재 기능의 개발이 끝나는 시간보다 먼저 끝난 기능들을 tmp 배열에 넣어준다
    if (arr[i] <= tmp[0]) {
      tmp.push(arr[i]);
    }
    // 현재 비교대상인 기능개발 시간보다 크면 먼저 배포가능한 기능들의 개수를 result 배열에 넣는다
    // 그리고 비교 대상인 기능을 바꿔준다
    else {
      result.push(tmp.length);
      tmp = [arr[i]];
    }
    // 마지막 인덱스까지 확인 했을 경우, 최종적으로 tmp에 남아있는 배열의 개수만큼 result 배열에 넣는다
    if (i === arr.length - 1) {
      result.push(tmp.length);
    }
  }

  return result;
}
