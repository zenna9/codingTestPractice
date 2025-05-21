function solution(s){
    let stack = [];
    for ( let ss of s){
        if(stack.at(-1) === ss){
            stack.pop();
        }else{
            stack.push(ss);
        }
    }
    return (stack.length === 0)? 1 : 0 ;
    // let sArr = s;
    // for(let i =1 ; i < sArr.length ; i++){
    //     if(sArr[i]===sArr[i-1]){
    //         sArr = sArr.replaceAll(sArr[i]+sArr[i],"");
    //         i = 0;
    //     }
    // }
    // return (sArr.length === 0)? 1 : 0 ;
}