function palindromeChecker(str) {
    const cleanedStr = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
function palindromeChecker2(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const halfOfLength = Math.floor(str.length / 2);
    return str.substr(0, Math.floor(halfOfLength)) === str.substr(Math.floor(str.length % 2 ? halfOfLength + 1 : halfOfLength)).split('').reverse().join('')
}
console.log(palindromeChecker2("racecar")); // true
console.log(palindromeChecker2("hello")); // false
console.log(palindromeChecker2("A man, a plan, a canal, Panama!")); // true
