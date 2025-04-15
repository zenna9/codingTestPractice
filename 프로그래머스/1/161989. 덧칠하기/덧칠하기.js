function solution(n, m, section) {
    let filled = section[0]-1 ;  //어디까지 칠했나

    return section.reduce((ex, now, index) => {
        if(now > filled){
           filled = now + m - 1 ;
            return ex+1;
        }else {
            return ex;
        }
    },0);
}