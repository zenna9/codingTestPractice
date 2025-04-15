function solution(friends, gifts) {
  let max = 0; // 리턴할 최대값
  let frhash = {};
  friends.forEach((friend)=> frhash[friend] = 0);
  //foreach 2 : frinfr = friends hash 에 hash를 다넣음
  let frinfr = {};
  friends.forEach((friend)=> frinfr[friend]= Object.assign({},frhash) ); 
  //gifts : 전체 순회를 돌면서 split 한다음 
  gifts.forEach((gift, index)=>{
      let [giver,reciever] = gift.split(" ");
      frinfr[giver][reciever]++;
      //선물지수+
      frinfr[giver][giver]++;
      frinfr[reciever][reciever]--;
  });
  
  // frhash 순회 시작 : max만 가지고있으면 됨. 
  friends.forEach((one)=>{
      //counting = 체크중인 사람이 받을 선물 개수
      let counting = 0;
      friends.forEach((two)=>{
          if(one != two ){ // 내가 나에게 받은 선물을 확인하진 않음
              let oneC = frinfr[one][two];
              let twoC = frinfr[two][one];

              if ( oneC > twoC || 
                      (oneC == twoC && frinfr[one][one] > frinfr[two][two])){ // one이 선물을 받는 경우
                  counting++;
              }
          }
      });
      max =  Math.max(max,counting);
  });

  return max;
}