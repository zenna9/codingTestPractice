function solution(record) {
    
    let enterRecord = []; //Enter true, Leave false
    let nickname = {};
    
    //한번의 순회로 입출입 수집, 닉네임 수집
    let doWho = record.filter((line)=>{
        const splited = line.split(" ");
        
        switch(splited[0]){
            case "Enter" : 
                nickname[splited[1]] = splited[2];
                enterRecord.push([true, splited[1]]);
                return true;
            case "Leave" : 
                enterRecord.push([false, splited[1]]);
                return true;
            case "Change" : 
                nickname[splited[1]] = splited[2];
                return false;
        }
        
    });
    return enterRecord.map((rec)=>{
        const who = nickname[rec[1]] + "님이 ";
        const does = rec[0] ? "들어왔습니다." : "나갔습니다.";
        return who+does;
    });
}