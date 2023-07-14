var myMonth = 'april'
var myDay = 19
var Month = prompt('введите месяц')
var Day = Number(prompt('введите день'))
if(Month === myMonth && Day === myDay) {
    alert ('Мой день рождения')
    console.log('Ваш знак зодиака: Овен')
}else if (Month === 'march' && Day >= 21 && Day <= 31 || Month === 'april' && Day <= 20){
    console.log('Ваш знак зодиака: Овен')
}else if (Month === 'april' && Day >= 21 && Day <= 30 || Month === 'may' && Day <= 21){
    console.log('Ваш знак зодиака: Телец')
}else if (Month === 'may' && Day >= 22 && Day <= 31 || Month === 'june' && Day <= 21){
    console.log('Ваш знак зодиака: Близнецы')
}else if (Month === 'june' && Day >= 22 && Day <= 30 || Month === 'july' && Day <= 22){
    console.log('Ваш знак зодиака: Рак')
}else if (Month === 'july' && Day >= 23 && Day <= 31 || Month === 'august' && Day <= 21){
    console.log('Ваш знак зодиака: Лев')
}else if (Month === 'august' && Day >= 22 && Day <= 31 || Month === 'september' && Day <= 23){
    console.log('Ваш знак зодиака: Дева')
}else if (Month === 'september' && Day >= 24 && Day <= 30 || Month === 'october' && Day <= 23){
    console.log('Ваш знак зодиака: Весы')
}else if (Month === 'october' && Day >= 24 && Day <= 31  || Month === 'november' && Day <= 22){
    console.log('Ваш знак зодиака: Скорпион')
}else if (Month === 'november' && Day >= 23 && Day <= 30 || Month === 'december' && Day <= 22){
    console.log('Ваш знак зодиака: Стрелец')
}else if (Month === 'december' && Day >= 23 && Day <= 31  || Month === 'january' && Day <= 20){
    console.log('Ваш знак зодиака: Козерог')
}else if (Month === 'january' && Day >= 21 && Day <= 31  || Month === 'february' && Day <= 19){
    console.log('Ваш знак зодиака: Водолей')
}else if (Month === 'february' && Day >= 20 && Day <= 28 || Month === 'march' && Day <= 20){
    console.log('Ваш знак зодиака: Рыбы')
}else{
    console.log('error')
}









