getDataType = (a, b) => {
    console.log(a > b)
}
getDataType(10, 12)

function getDataType2 () {
    return  console.log(typeof 'hello world!')
}
getDataType2()

var getDataType3 = function () {
    return  console.log(typeof 42)
}
getDataType3()

getDataType4 = (string) => {
    return string.split('').reverse().join('')

}
console.log(getDataType4('hello!'))




