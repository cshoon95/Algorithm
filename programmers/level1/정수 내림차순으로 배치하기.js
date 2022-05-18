function solution(n) {
    var answer = 0;
    var arr = [];
    
    for(var i=0; i<String(n).length; i++) {
        arr.push(Number(String(n)[i]));
    }
    
    var ss = arr.sort((a, b) => {
        return b-a;
    })
    
    answer = Number(ss.join(''));
    
    return answer;
}