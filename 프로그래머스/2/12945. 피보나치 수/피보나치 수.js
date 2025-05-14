function solution(n) {
    let nowN = 2;
    let fivo = [1, 1, 2];
    
    while(nowN < n){
        fivo[2] = (fivo[0]+fivo[1]) % 1234567;
        fivo[0] = fivo[1];
        fivo[1] = fivo[2];
        nowN++;
    }
    
    return fivo[1];
}