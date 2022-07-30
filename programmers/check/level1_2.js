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