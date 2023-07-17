var cities = ['Bishkek', 'Los Angeles', 'Chicago','New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for(var city of cities){
    console.log(city)
}
var cities2 = ['Dallas','Bishkek','Los Angeles','Chicago','New York','Houston','Philadelphia','Seattle']
cities2.splice(0, 1)
console.log(cities2)
var cities3 = ['Philadelphia','Chicago','New York','Bishkek','Los Angeles','Houston','Dallas','Seattle']
cities3.splice(0,3,)
console.log(cities3)
// for (var q = 0; q < cities3.length; q++) {
//     if(cities3[q][0] === 's' ||cities3[q][0] === 'S' || cities3[q][3] === 's' ||cities3[q][3] === 'S' || cities3[q][5] === 's' ||cities3[q][5] === 'S'|| cities3[q][10] === 's' ||cities3[q][10] === 'S'){
//         console.log(` cities with letter s - ${cities3[q]} `)
//     }else{
//         console.log(`city - ${cities3[q]}`)
//     }
// }
var trafficLight1 ={
    colorRed: 'Stop!',
    colorYellow: 'Get ready!',
    colorGreen: 'Go!'
}
console.log(trafficLight1)
var trafficLight = prompt('Inter color')
switch (trafficLight.toLowerCase()) {
    case 'red':
        console.log(trafficLight1.colorRed)
        alert('STOP!')
        break
    case 'yellow':
        console.log(trafficLight1.colorYellow)
        alert('Get ready!')
        break
    case 'green':
        console.log(trafficLight1.colorGreen)
        alert('GO!')
        break
    default:
        alert('Inter color: Red, Yellow or Green')
}

