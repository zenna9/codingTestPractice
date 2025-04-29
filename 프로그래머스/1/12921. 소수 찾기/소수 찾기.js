function solution(n) {
    let sosu = [2];
    
    for(let chkNum = 3 ; chkNum <= n ; chkNum++){
        if(소수인가(chkNum, sosu)) sosu.push(chkNum);
    }
    
    return sosu.length;
}

function 소수인가(확인할_수, 소수리스트){
    let sosuIndex = 0;
    let 어디까지확인하나 = 확인할_수;
    for(let 소수 of 소수리스트){
        if(소수 > 어디까지확인하나) return true; // 소수로 나눈 수보다 큰 경우는 확인할 필요없음
        
        if(확인할_수 % 소수===0){
            return false;
        }
        
        어디까지확인하나 = parseInt(확인할_수/소수)+1;
    }
    return true;
}