// // arrow function
// var sayHello = (text) => console.log(text)
//
// sayHello('hello')
//
// //замыкание
// function init() {
//     var name = prompt('name')
//     var displayName = () => {
//         return console.log(name)
//     }
//     return displayName()
// }
// init()
//
// //callback-функции, анонимные функции
// //HOF - hide ordered function
//
// var alertName = (name) => {
//     return name()
// }
// var windowName = () => {
//     return alert('Azret')
// }
//
// alertName(windowName)
//
// alertName(()=>{
//     alert('name')
// })
//
// var button = document.querySelector('.btn')
//
// function clickButton() {
//      return console.log('click!')
// }
//
// button.addEventListener('click', clickButton)
// button.addEventListener('click', function (){
//     console.log()
// })

//взаимодействие с DOM
//class
console.dir(document.body.style.backgroundColor = 'silver')
var text = document.getElementsByClassName('text')
console.log(text)
// var arr = [1]
// console.log(arr)
text[1].style.color = 'red'
text[0].innerHTML = 'hello from js'
//id
var button = document.getElementById('btn')
console.log(button)
var button2 = document.getElementsByTagName('h1')
console.log(button2)
//
var btnClass = document.querySelector('.click')
var btnId = document.querySelector('#click')
var btn = document.querySelector('button')
// слушатель событий
btnClass.addEventListener('click', () => console.log('click'))
btnClass.onclick = () => console.log('click2')

var getPositionElement = (element, array) => {
    for (var i = 0; i < array.length; i++) {
        if(array[i] === element){
           return  console.log(i)
        }
    }
   return  console.log('404 not found')
}
getPositionElement(5, [1, 2, 3, 4, 5, 'hello'])
// var arr = [1, 2, 3, 4, 5, 'hello']
// console.log(arr.indexOf(4));













