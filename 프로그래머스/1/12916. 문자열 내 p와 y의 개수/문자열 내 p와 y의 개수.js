function solution(s){
    let yCount=0;
    let pCount=0;
    
    [...s].map((letter)=>{
        switch(letter){
            case "y": case "Y": 
                yCount++;break;
            case "p": case "P": 
                pCount++;break;
        }
    })
    
    return (yCount === pCount);
}