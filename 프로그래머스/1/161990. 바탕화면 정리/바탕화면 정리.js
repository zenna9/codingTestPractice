function solution(wallpaper) {
    let answer = new Array(4);
    let minColArr = [];
    let maxColArr = [];
    
    wallpaper.map((row, rowIndex)=>{
        const colIndex = row.indexOf("#");
        if(colIndex === -1) return;
        console.log(rowIndex);
        
        if(answer[0]===undefined) answer[0] = rowIndex;
        answer[2] = rowIndex + 1;
        minColArr.push(colIndex);
        maxColArr.push(row.lastIndexOf("#"));
        
    });
    
    answer[1] = Math.min(...minColArr);
    answer[3] = Math.max(...maxColArr)+1;

    return answer;
}