function solution(x, n) {
    var answer = [];
    var total = 0;
    
    answer.push(x);
    for(let i=2; i<=n; i++) {
        total = x * i;
        answer.push(total)
    } 
    
    return answer;
}