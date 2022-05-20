function solution(numbers) {
    var answer = [];
    
    for(var i=0; i<numbers.length; i++) {
        for(var j=i+1; j<numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    
    return Array.from(new Set(answer)).sort((a,b) => a-b)
}