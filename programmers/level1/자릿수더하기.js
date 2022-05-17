function solution(n)
{
    var answer = 0;
    const nToStr = n.toString();
    
    for (let i=0; i<nToStr.length; i++) {
        answer += Number(nToStr.charAt(i));
    }
    
    return answer;
}