function solution(s) {
    let isUpper = true; // 대문자로 시작, 짝수
    
   return [...s].map((so)=>{
        if(so === " ") {
            isUpper = true;
            return " ";
        }
        const changedS = (isUpper) ? so.toUpperCase(): so.toLowerCase();
        isUpper = !isUpper;
        return changedS;
        
    }).join('');
}