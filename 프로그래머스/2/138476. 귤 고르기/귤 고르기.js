function solution(k, tangerine) {
    const sizing = {};
    tangerine.forEach((tang)=>{
        sizing[tang] = (sizing[tang]??0) +1;
    });
    
    const cntArr = Object.values(sizing).sort((a,b)=> b-a);
    let answer = 0;
    let box = 0;
    for(let i = 0 ; i < cntArr.length ; i++){
        answer += 1;
        box += cntArr[i];
        if(box>=k){return answer}
    }
}