function solution(s) {
    var answer = '';
    
    s.split("")
    .map((item, index) => {
        if (s.length % 2 === 0) {
             if ([Math.round(s.length / 2 -1), Math.round(s.length / 2)].includes(index)) {
                answer += item
             } 
        } else if (Math.round(s.length / 2 - 1) === index) {
            answer = item
        }
    })
    return answer;
}