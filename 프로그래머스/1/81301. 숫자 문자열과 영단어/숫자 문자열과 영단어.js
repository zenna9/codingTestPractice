function solution(s) {
    const replaceArr = [
        ["zero" , "0"] ,
        ["one" , "1"] ,
        ["two" , "2"] ,
        ["three" , "3"] ,
        ["four" , "4"] ,
        ["five" , "5"] ,
        ["six" , "6"] ,
        ["seven" , "7"] ,
        ["eight" , "8"] ,
        ["nine" , "9"] 
    ];
    const numberString = replaceArr.reduce( (ex, now, index) => {
        return ex.replaceAll(now[0], now[1])
    }, s);
    
    return Number(numberString);
    
}