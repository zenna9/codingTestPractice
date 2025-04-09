function solution(s) {
    let sArr = [...s];
    let answer = [];
    sArr.forEach((thing,index)=>{
        let i;
        for(i = index-1 ; i > -1 ; i-- ){
            if(thing == sArr[i]) { //일치하는 글자를 찾은 경우
                //몇 칸 앞인지를(기준 문자 index - 확인 중인 문자 index) answer에 넣고 for문 종료
                answer.push(index-i) ; 
                break;
            };
        }
        if(i < 0 ) answer.push(-1); // 일치하는 글자가 없는 채로 for문이 종료 된 경우
    })
    return answer;
}