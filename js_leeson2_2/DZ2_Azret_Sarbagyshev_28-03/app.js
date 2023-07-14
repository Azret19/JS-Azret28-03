var cities = ['Bishkek', 'Los Angeles', 'Chicago','New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
console.log(cities)
for (var city of cities) {
    console.log(city)
}
var cities2 = ['Bishkek', 'Los Angeles', 'Chicago','New York', 'Houston','Philadelphia', 'Seattle']
console.log(cities2)

var cities3 = ['Bishkek', 'Los Angeles','Houston', 'Dallas','Seattle']
console.log(cities3)

var trafficLight = prompt('Inter color')
switch (trafficLight.toLowerCase()){
    case 'red':
        alert('STOP!')
        break
    case 'yellow':
        alert('Get ready!')
        break
    case 'green':
        alert('GO!')
        break
    default:
        alert('Inter color: Red, Yellow or Green')
}

