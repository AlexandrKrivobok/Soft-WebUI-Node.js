function showRowOfSquares(len, minSq) {
    const start = Math.ceil(minSq**(1/2));
    let answer = '';
    let counter = 1;
    for (let i = start; counter <= len; i++) {
        answer += `${i}, `;
        counter++;
    }
    return answer.slice(0, -2);
}

console.log(showRowOfSquares(10, 65));

console.log(showRowOfSquares(3, 4));
