function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const datesInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let dateCount = 0;
    for (let i = 0; i < a - 1; i++) {
        dateCount += datesInMonth[i];
    }
    dateCount += b;    
    
    // 2016/1/1이 금요일이므로 days index 시작점 맞추기 위해 +4
    return days[(dateCount + 4) % 7];
}