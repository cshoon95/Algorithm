function solution(a, b) {
    var date = new Date();
    date.setMonth(a-1);
    date.setDate(b);
    date.setYear(2016);
    
    return date.toString().substring(0,3).toUpperCase();
}