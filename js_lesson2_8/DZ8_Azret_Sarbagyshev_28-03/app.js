const isPalindrom = (str) => {
    str = str.toLowerCase().replace(/\s|[,']/g, '')
    return str === str.split('').reverse().join('')
}
console.log(isPalindrom('Deified'))
console.log(isPalindrom('74547'))
console.log(isPalindrom("madam, I'm adam"))
console.log(isPalindrom('wrong'))








// const isPalindrom = (str) => {
//     str = str.toLowerCase().replace(/\s|[,']/g, '')
//     let test = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         test += str[i]
//     }
//     return str === test
// }
// console.log(isPalindrom('Deified'))
// console.log(isPalindrom('74547'))
// console.log(isPalindrom('wrong'))
// console.log(isPalindrom("madam, I'm adam"))

