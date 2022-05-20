function solution(s) {
    var answer = '';
    var arr = s.split(" ");
    
    return Math.min(...arr) + ' ' + Math.max(...arr);
    
}