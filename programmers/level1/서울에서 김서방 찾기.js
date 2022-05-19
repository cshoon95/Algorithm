function solution(seoul) {
    var answer = '';
    
    seoul.map((item, index) => {
        if (item === "Kim") {
            answer = '김서방은 ' + index + '에 있다'
        }
    })
    
    return answer;
}