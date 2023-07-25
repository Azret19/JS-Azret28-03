// методы массива

//filter
// var fruits = ['apple', 'pineapple', 'peach', 'banana', 'orange', 'melon', 'lemon']
// console.log(fruits)
//
// var filterFruits = fruits.filter((i) => i.length <= 6)
// console.log(filterFruits)
//
// var users = [
//     {name: 'John', age: 34},
//     {name: 'Daniel', age: 16},
//     {name: 'Azret', age: 39},
//     {name: 'Ishak', age: 13},
//     {name: 'Zarina', age: 45},
//     {name: 'Imran', age: 25},
//     {name: 'Edil', age: 12},
//     {name: 'Jack', age: 27},
//     {name: 'Oliver', age: 16},
// ]
// console.log(users)
//
// var result1 = users.filter((i) => i.name.toLowerCase().includes('a'))
// console.log(result1)
//
// var result2 = users.filter((i) => i.age < 18 )
// console.log(result1)

//map
var numbers = [2000000, 34, 56, 67, 78, 89]
console.log(numbers)
var newArray = numbers.map((i) => {
    return i / 88
})
console.log(newArray)

//forEach
numbers.forEach((i, index)=>{
    console.log(i * index)
})
console.log(numbers)

//find
// var searchUser = prompt('кого ищешь?').trim().toLowerCase()
// var users = [
//     {name: 'John', age: 34},
//     {name: 'Daniel', age: 16},
//     {name: 'Azret', age: 39},
//     {name: 'Ishak', age: 13},
//     {name: 'Zarina', age: 45},
//     {name: 'Imran', age: 25},
//     {name: 'Edil', age: 12},
//     {name: 'Jack', age: 27},
//     {name: 'Oliver', age: 16},
// ]
// var user = users.find((i) => {
//     return i.name.toLowerCase() === searchUser
// })
// console.log(user)
console.log(name)
//ES6+
//var, let, const
var name = '' //hoisting
console.log(name)

let name2 = 'egeb'
console.log(name2)

const arr = []
console.log(arr)

//rest-параметры
function getSum(...numbers) {
    let sum = numbers.reduce((num1, num2) => num1+=num2)
    console.log(sum)
}
getSum(3, 4, 5, 6, 7, 9)

//spread-операторы
const nums = [3, 4, 5, 6, 7, 9]
const [n1, n2, n3, ...others] = nums
console.log(n1, n2, n3, others)