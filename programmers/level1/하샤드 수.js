function solution(x) {
    var answer = true;
    var arr = [];
    var total = 0;
    
    for(var i=0; i<String(x).length; i++) {
        arr.push(Number(String(x)[i]));
    }
    
    arr.forEach((item) => {
        total += item;
    })
    
    answer = x % total === 0
    return answer;
}