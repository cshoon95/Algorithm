function solution(s){
    var answer = true;
    var p = 0;
    var y = 0;
    
    s.split("").forEach((item) => {
        if (['y', 'Y'].includes(item)) {
            y += 1;
        } else if (['p', 'P'].includes(item)) {
            p += 1;
        }
    })
    
    answer = (y === p) ? true : false;
    return answer;
}