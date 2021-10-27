function solution(record) {
  const idMap = {}; // key:id , value:닉네임 형태로 저장할 객체 변수
  const arr = []; // ID + "들어왔습니다" or "나갔습니다" 형태로 문장을 저장시킬 배열 변수
  const result = []; // ID를 닉네임으로 치환하여 최종적으로 채팅방 메시지를 저장할 배열 변수

  record.forEach((value) => {
    // 구조 분해 할당을 이용한다
    const [action, id, name] = value.split(" ");
    if (action !== "Change") {
      arr.push({
        id,
        text: action === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.",
      });
    }
    // 닉네임을 바꿀 경우는 기존 유저가 새로운 닉네임으로 Enter하거나, Change 명령어가 들어올 때이다.
    // 하지만 굳이 조건문을 나눠서 아이디 값을 일일이 바꿀 필요없이 닉네임 값이 들어오면 새롭게 갱신 or 저장시켜주면 된다.
    // "Leave" 일 경우는 닉네임이 없으므로 조건식을 걸어준다
    if (name) {
      idMap[id] = name;
    }
  });

  /*
   입출력 예시 1번을 기준으로 보면,
   idMap에는 { uid1234: 'Prodo', uid4567: 'Ryan' } 형태로 저장된다.
   그리고 arr에는 
   [
    { id: 'uid1234', text: '님이 들어왔습니다.' },
    { id: 'uid4567', text: '님이 들어왔습니다.' },
    { id: 'uid1234', text: '님이 나갔습니다.' },
    { id: 'uid1234', text: '님이 들어왔습니다.' }
   ]
   형태로 저장된다.
   그러므로 해당 아이디에 해당하는 닉네임을 idMap에서 찾아 바꿔주기만 하면 된다.
  */
  arr.forEach((obj) => {
    result.push(idMap[obj.id] + obj.text);
  });
  return result;
}

/*
    [ 초기에 진행하였던 방식 ]
    닉네임이 바뀔 때 마다 (새로운 닉네임으로 Enter 혹은 Change 할 경우)
    지금까지 기록된 모든 값들이 저장되어있는 result를 순회하면서 닉네임을 바꾸었기에 시간 복잡도가 O(n)이 추가되어
    record 순회 O(n) * 닉네임 변경 O(n) = 총 시간 복잡도 O(n^2)가 되어서 시간 초과가 되었었다.
    그리고 생각보다 너무 복잡하게만 생각해서 너무 시간을 많이 잡아먹은 것도 한 몫 했다.
*/
// function solution(record) {
//      let result = [];//이중배열 형식
//      for(let i=0 ; i<record.length ; i++){
//          let info = []   // 0번째 인덱스: ID , 1번째 인덱스: 채팅방 메시지
//          let user_action = record[i].split(' ')[0]
//          let user_id = record[i].split(' ')[1]
//          let user_name = record[i].split(' ')[2]
//          info[0] = user_id
//          if(user_action === 'Enter'){
//              info[1] = user_name+'님이 들어왔습니다.'
//              result.push(info)
//              for(let arr of result){
//                  if(arr[0] === user_id && arr[1].replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣/\./' ']/g, '') !== user_name){
//                      arr[1] = user_name+ arr[1].replace(/[a-z/0-9]/gi,'');
//                  }
//              }
//          }
//          else if(user_action === 'Leave'){
//              for(let arr of result){
//                  if(arr[0] === user_id){
//                      info[1] = arr[1].replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣/\./' ']/g, '')+'님이 나갔습니다.'
//                  }
//              }
//              result.push(info)
//          }
//          else if(user_action === 'Change'){
//              for(let arr of result){
//                  if(arr[0] === user_id){
//                      arr[1] = user_name+arr[1].replace(/[a-z/0-9]/gi,'');
//                  }
//              }
//          }
//      }
//      let answer = [];
//      for(let arr of result){
//          answer.push(arr[1])
//      }
//      return answer
// }
