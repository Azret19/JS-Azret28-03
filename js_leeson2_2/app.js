// var day = prompt('day')
// var month = prompt('month')
// if(day >= 21 && month === 'март' && day <= 30 || day <= 20 && month === 'апрель' && day <= 30) {
//     console.log('Овен')
// }else if(day >= 21 && month === 'март' && day <= 30 || day <= 20 && month === 'апрель' && day <= 30){
//     console.log('Телец')
// }else {
//     console.log('error')
// }

// var number = 78 / 'qwerty'
// console.log(number)
//
// var age = Number(prompt('age'))
// switch (age){
//     case 18:
//         console.log('error')
//         break
//     case 19:
//         console.log('error')
//         break
//     case 20:
//         console.log('good')
//         break
//     default:
//         console.log('error')
// }

var human ={
    name: 'John',
    age: 23,
    phoneNumber: undefined,
    isMarried: true,
    f:{
        d: {

        }
    }
}
console.log(human.name)

human.course = 'GEEKS'
console.log(human)

delete human.f
console.log(human)

human['phoneNumber'] = null
console.log(human)
//методы
console.log(Object.keys(human))
console.log(Object.values(human))
console.log(Object.entries(human))
console.log(human.hasOwnProperty('name'))

//array
var array = ['a', 'b', 'c', 5, true, null, [], {}]
console.log(array[5])
console.log(array.length - 1)
console.log(array[8])
array [8] = 't'

//переопределение переменных
var num = 10;
num = 'text'
console.log(num)

//циклы
//while
var count = 0
while(count < 10){
    count++
    console.log(count)
}

// while (count > 0){
//     count++
//     console.log(count)
// }

//for
for (var i = 0; i < 20; i++) {
    console.log(i)
}
//for..i
var names = ['azret', 'john', 'aliya']
for (var i = 0; i < names.length; i++) {
    if(names[i][0] === 'a' ||names[i][0] === 'A'){
        console.log(` name with letter a - ${names[i]} `)
    }else{
        console.log(`other names - ${names[i]}`)
    }
}

//for..of []
var numbers = [1,2,3,4,5,6]
for(var num2 of numbers){
    console.log(num2)
}

//for..in {}
for (var key in human) {
    console.log(human[key])
}

//методы массива
var arr = ['a','b','c','d','e']
arr.reverse()
console.log(arr)
arr.push ('f')
console.log(arr)
arr.unshift('p')
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.length)
arr.splice(2)
console.log(arr)
