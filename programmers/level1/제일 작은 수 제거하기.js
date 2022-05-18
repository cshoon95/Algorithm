function solution(arr) {
    var answer = [];
    var min = Math.min.apply(null, arr);
    
    if (arr.length === 1) {
        answer.push(-1);
    }
    
    arr.filter((item) => {
        if (item != min) {
            return answer.push(item)
        }
    })
    
    return answer;
}