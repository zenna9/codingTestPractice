function solution(board, moves) {
    const basket = [];
    let answer = 0;
    const newBoard = Array.from({ length: board.length }, () => []);
    
    board.map((가로줄, 가로줄index)=>{
        가로줄.map((칸,칸index)=>{ 
            if(칸){ // 0이아니면
                newBoard[칸index].push(칸);
            }
        })
    });
    
    moves.map((move)=>{
        const 세로 = newBoard[move-1];
        if(세로.length === 0 ) return;
        
        const doll = 세로.shift();
            
        if(basket[basket.length-1] === doll){
            basket.pop();
            answer += 2;
        }else{
            basket.push(doll);
        }
        
    })
    
    return answer;
}