function solution(board, moves) {
    const basket = [];
    let answer = 0;
    const newBoard = Array.from({ length: board.length }, () => []) 
    board.map((가로줄, 가로줄index)=>{
        가로줄.map((칸,칸index)=>{ // [0,0,1,0,3], 1
            if(칸){ // 0이아니면
                newBoard[칸index].push(칸);
            }
        })
    });
    
    console.log(newBoard)
    
    moves.map((move)=>{
        const 행 = newBoard[move-1];
        
        if(행.length === 0 ) return;
        
        const doll = 행.shift();
        console.log(`행 : ${행}`);
        console.log(`doll : ${doll}`);
        
        
        if(basket[basket.length-1] === doll){
            basket.pop();
            answer += 2;
        }else{
            basket.push(doll);
        }
        
    })
    // console.log(newBoard);
    return answer;
}