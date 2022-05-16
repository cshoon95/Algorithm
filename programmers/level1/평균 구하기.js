function solution(arr) {
    let answer = 0;
    let total = 0;
    
    arr.forEach((num) => {
        total += num;
    })
    
    answer = total / arr.length;
    
    return answer;
}