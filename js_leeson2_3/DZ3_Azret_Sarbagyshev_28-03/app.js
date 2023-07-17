getDataType = (a, b, c, d ) => {
    console.log(a > b)
    console.log(typeof c )
    return console.log( typeof d)
}
getDataType(10, 12, 'hello world!', 42)

getDataType2 = (string) => {
    return string.split('').reverse().join('')

}
console.log(getDataType2('hello!'))


// function getDataType2 () {
//    return  console.log( typeof 'hello world!')
// }
// getDataType2()
//
// var getDataType3 = function () {
//    return  console.log(typeof 42)
// }
// getDataType3()

