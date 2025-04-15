function solution(players, callings) {
    
    let positions = {};
    players.forEach((player, index)=> positions[player]=index )
    
    callings.forEach((call)=>{ // index : 부른사람
        let callerP = positions[call]; //불린 사람의 원래 위치
        let loser = players[callerP-1]; // 순위를 뺏긴 사람
        
        players[callerP] = loser; // 순위를 뺏긴 사람을 호명자의 자리에 넣음
        players[callerP-1] = call; //호명자 앞자리는 호명자로 대체
        positions[call] = callerP-1;
        positions[loser] = callerP;
    })
    return players;
}