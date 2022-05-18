function solution(num) {
    var answer = 0;
    
    while(1) {
        if (num === 1) {
            return answer;
        }
        
        num = (num % 2 === 0) ? num / 2 : num * 3 + 1;
        
        answer += 1;
        
        if (answer >= 500) {
            return -1;
        }
    }
    
    return answer;
}