function solution(food) {
    let front = "" ; //앞부터
    let back = "" ; //뒤에서부터
    
    for(let i = 1 ; i < food.length ; i++){
        let string = (i+"").repeat(Math.trunc(food[i]/2));
        front += string;
        back = string+back;
    }
    return front+"0"+[...front].reverse().join('');
}