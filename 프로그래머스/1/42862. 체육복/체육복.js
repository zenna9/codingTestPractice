function solution(n, lost, reserve) {
    //여분을 가진 학생이 도둑맞았으면 리스트에서 제거
    const newReserve = reserve.filter((man)=> !lost.includes(man));
    const newLost = lost.filter((man)=> !reserve.includes(man));
    reserve = newReserve.sort();
    lost = newLost.sort();
    
    //function _ who의 체육복을 빌릴 수 있는가
    function canBorrow(who){ 
        const renderIdx = reserve.findIndex(i=> i === who );
        if(renderIdx !== -1 ){ // yes
            reserve.splice(renderIdx, 1);
            return true;  
        } else{
            return false;
        }
    }
    
    return lost.reduce((ex, now, index)=>{
        if( canBorrow(now-1) ) return ex+1 ; //앞번호 학생
        return canBorrow(now+1) ? ex+1 : ex ; //뒷번호 학생
    },n - lost.length)
}