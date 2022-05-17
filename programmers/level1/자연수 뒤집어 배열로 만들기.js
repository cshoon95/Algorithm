function solution(n) {
    var answer = [];
    const nToStr = String(n);
    
    for(let i=nToStr.length; i>0; i--) {
        answer.push(Number(nToStr[i-1]));    
    }
    
    return answer;
}