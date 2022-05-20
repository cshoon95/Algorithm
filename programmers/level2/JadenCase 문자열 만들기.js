function solution(s) {
    var answer = '';
    
    answer = s.split(' ').map(char => char.charAt(0).toUpperCase() + '' + char.substring(1).toLowerCase()).join(' ')
    
    
    console.log(answer);
    return answer;
}