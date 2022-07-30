/**
 * 수포자는 수학을 포기한 사람의 준말입니다. 
 * 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
 * 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

function solution(answers) {
    const arr = [];
    const num1 = [1, 2, 3, 4, 5];
    const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];

    for (let i=0; i<answers.length; i++) {
        if (num1[i%5] === answers[i]) result[0]++;
        if (num2[i%8] === answers[i]) result[1]++;
        if (num3[i%10] === answers[i]) result[2]++;
    }

    console.log(Math.max(...result))
    let idx = 0;

    for (let i=0; i<result.length; i++) {
        if (result[i] === Math.max(...result)) {
            arr[idx] = i+1;
            idx++;
        }
    }

    return arr;

}