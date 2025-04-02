function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let answer = 0;
    for(let di of d){
        budget -= di;
        if(budget>=0){
            answer++;
        }else{
            return answer;
        }
    }
    return answer;
}