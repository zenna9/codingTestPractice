function solution(id_list, report, k) {
    let userInf = {};
    let answer = [];
    
    id_list.map((id, idx)=>{
        userInf[id] = {
            index : idx,
            reportedBy : new Set(),
        };
        answer.push(0);
    });
    
    report.map(rprt => {
        const [신고자, 피신고자] = rprt.split(" ");        
        userInf[피신고자].reportedBy.add(신고자);
        
    });
    
    id_list.map((user)=>{
        const 확인중인유저정보 = userInf[user];
        
        if(확인중인유저정보.reportedBy.size >= k){
            
            확인중인유저정보.reportedBy.forEach((신고자)=>{
                const 신고자인덱스 = userInf[신고자].index;
                answer[신고자인덱스] = answer[신고자인덱스]+1;
            })
        }
    })
    return answer
}