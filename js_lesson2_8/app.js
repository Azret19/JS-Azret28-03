//some/every
const numbers = [3, 5, 7, 9, 1, 4];
const evenNum = numbers.some(i => i % 2 === 0)
console.log(evenNum)


const numbers2 = [3, 5, 7, 9, 1, 4];
const nums = numbers2.map(i => i + 2)
console.log(nums)

// madam, I'm adam

const isLetter = (text) => {
    return  text.toLowerCase() !== text.toUpperCase()
}
const isEqual = (l1, l2) => {
    return l1.toLowerCase() === l2.toLowerCase()
}
const isPalindrom = (str) => {
    let start = 0
    let end = str.length - 1
    while (start < end){
        if(!isLetter(str[start])){
            start++
            continue
        }
        if(!isLetter(str[end])){
            end--
            continue
        }

        if (!isEqual(str[start], str[end])) return false

        start++
        end--
    }
    return true
}
console.log(isPalindrom("madam, I'm adam"))

