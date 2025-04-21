function solution(a, b) {
    const newYear = new Date('2016-01-01') ;
    const chkDay = new Date(`2016-${String(a).padStart(2,"0")}-${String(b).padStart(2,"0")}`) ;

    const minus = ((chkDay - newYear)/1000/60/60/24) ;
    const DAY = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    
    return DAY[minus%7];
}

// new Date("2025-4-1") 처럼 월과 일을 2자리수로 맞추지 않으면 브라우저에 따라 잘못된 날짜를 생성한다는 것을 알게 되었다.

// 두 Date 사이의 날짜를 구하고 싶으면 : 차이/1000/60/60/24 (밀리초, 초, 분, 시)