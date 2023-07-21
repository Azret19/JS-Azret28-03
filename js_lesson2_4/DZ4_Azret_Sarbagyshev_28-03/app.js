var button = document.querySelector ('.btn')
var inference1 = document.querySelector('.inference1')

button.addEventListener('click',  () => {
  var inference = prompt('Output text')
  return inference1.innerHTML = inference
})
//
var output = document.querySelector('.Output')
var red = document.querySelector('.Red')
var green = document.querySelector('.Green')

trafficL = prompt('Output trafficLight')
switch (trafficL.toLowerCase()) {
  case 'red':
    console.dir(document.body.style.backgroundColor = 'red')
    red.innerHTML = 'STOP!'
    break
  case 'green':
    console.dir(document.body.style.backgroundColor = 'green')
    green.innerHTML = 'GO!'
    break
  default:
    console.dir(document.body.style.backgroundColor = 'silver')
    output.innerHTML = 'Inter color: Red or Green'
}





















