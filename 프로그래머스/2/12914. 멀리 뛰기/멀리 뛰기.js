function solution(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    const wayCnt = new Array(n).fill(0);
    wayCnt[0] = 1;
    wayCnt[1] = 2;
    for(let i =2 ; i < n ; i++){
        wayCnt[i] = (wayCnt[i-1]+wayCnt[i-2])%1234567;
    }
    console.log(wayCnt);
    return wayCnt.at(-1)
    // return (2**몫+더할값+(몫-1))%1234567;
}