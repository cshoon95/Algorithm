function solution(n) {
    fibo1234567(n);
    return fibo1234567(n)
}

function fibo1234567(num) {
    const arr = new Array(num).fill(0);
    
    arr[0] = 0;
    arr[1] = 1;
    
    for(let i=2; i<=num; i++) {
        arr[i] = (arr[i-2] + arr[i-1])%1234567;
    }
    
    return arr[num];
}