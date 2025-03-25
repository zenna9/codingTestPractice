function solution(babbling) {
    const canSpeak = /^(aya|ye|woo|ma)+$/;
    const 연속발음 = /(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/; 
    
    return babbling.reduce((ex, now, index)=>{
        if(연속발음.test(now)){
            return ex;
        }else{
            return canSpeak.test(now) ? ex+1 : ex ;   
        }
    },0);
}