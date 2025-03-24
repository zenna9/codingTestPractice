function solution(a, b) {
    return a.reduce((ex, now, index)=> ex + (now*b[index]), 0 );
}