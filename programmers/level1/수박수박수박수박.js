function solution(n) {
    var answer = '';
    
    for(var i=0; i<n; i++) {
         answer += i % 2 === 0 ? '수' : '박';   
    }
    
    return answer;
}