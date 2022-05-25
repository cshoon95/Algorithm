function solution(s, n) {
    return s.split("").map(element => {
        if (element == ' ') return ' ';
        const char = element.charCodeAt();

        if ((char + n > 90 && char <= 90) || char + n > 122) {
            return String.fromCharCode(char + n - 26);
        } else {
            return String.fromCharCode(char+n);
        }
    }).join("")
}