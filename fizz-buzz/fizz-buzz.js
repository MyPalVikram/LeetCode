/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    if (n === 1) {
        return ['1']
    }
    
    let answerCollection = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answerCollection.push('FizzBuzz');
        } else if (i % 3 === 0) {
            answerCollection.push('Fizz')
        } else if (i % 5 === 0) {
            answerCollection.push('Buzz')
        } else {
            answerCollection.push(i.toString());
        }
    }
    return answerCollection;
    
};