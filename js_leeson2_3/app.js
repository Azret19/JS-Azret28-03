// var array = [123, 234, 345, 12, 67, 555]
// for (var i = 0; i < array.length; i++) {
//     var number = array[i].toString()
//     if (number[0].startsWith('1') || number[0].startsWith('2'|| number[0].startsWith('5')){
//         console.log(array[i])
//     }
// }

//функции
//function declaration

function cals(num1, num2) {
   return  console.log(num1 + num2)
}
cals(34, 37)

//function expression

var strLog = function (string) {
    return alert(string)
}
strLog(2)

var getMaxNum = function (num1, num2){
    if (num1 > num2){
        console.log(num1)
    }else{
        console.log(num2)
    }
}
getMaxNum(4, 6)

//arrow function и тернарные функции lambda function
var getMaxNum2 = (num1, num2) => console.log(num1 > num2 ? num1 : num2)
getMaxNum(2, 6)


