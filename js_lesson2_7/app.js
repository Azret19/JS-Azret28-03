



// //7) bigint - 9n
// // console.log(typeof 9n)
// //8) symbol
//
// //truthy and falsy выражения
// //falsy -> '', "", ``, 0, false, null, undefined, NaN, -0, 0n
//
// var example = !!24
// console.log(example ? "true": 'false')
//
//
// const animal = {
//     name: 'Animal',
//     age: 10,
//     color: 'black',
//
//     voice(){
//         console.log('A am animal')
//     }
// }
// // console.log(animal)
// // animal.voice()
//
// //ООП - Объектно ориентированное программирование
// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//         this.color = options.color
//     }
//     voice(){
//         console.log('I am animal!')
//     }
// }
//
// const animalByClass = new Animal({
//     name: 'Animal',
//     age: 34,
//     hasTail: true,
//     color: 'black'
// })
//
// console.log(animal)
// console.log(animalByClass)
//
// //наследование
//
// class Pigs extends Animal {
//     constructor(options) {
//         super(options);
//         this.hooves = options.hooves
//     }
// }
//
// const peppa = new Pigs({
//     name: 'Peppa',
//     age: 3,
//     color: 'pink',
//     hasTail: true,
//     hooves: 4
// })
//
// console.log(peppa)
//

const dragAndDrop = () => {
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')

    const dragStart = function () {
        console.log('dnd')
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)

    }

    const dragEnd = function () {
        console.log('end')
        this.classList.remove('hide')
    }

    const dragOver = function (e) {
        // console.log('over')
        e.preventDefault()
    }

    const dragEnter = function (e) {
        // console.log('enter')
        e.preventDefault()
        this.classList.add('hovered')
    }

    const dragLeave = function () {
        // console.log('leave')
        this.classList.remove('hovered')
    }

    const dragDrop = function () {
        this.append(card)
        this.classList.remove('hovered')
    }

    cells.forEach((i) => {
        // console.log(i)
        i.addEventListener('dragover', dragOver);
        i.addEventListener('dragenter', dragEnter);
        i.addEventListener('dragleave', dragLeave);
        i.addEventListener('drop', dragDrop);
    })

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
}

dragAndDrop()


//some/every
const numbers = [3, 5, 7, 9, 4];
const evenNum = numbers.some(i => i % 2 === 0)
console.log(evenNum)


const numbers2 = [3, 5, 7, 9, 4];
const nums = numbers2.map(i => i + 2)
console.log(nums)

//madam, i'm adam

const isLetter = (text) =>{
    return text.toLowerCase() !== text.toUpperCase()
}

const isEqual = (l1, l2) => {
    return l1.toLowerCase() === l2.toLowerCase()
}

const isPalindrom = (str) => {
    let start = 0
    let end = str.length - 1
    while(start < end){
        if(isLetter(str[start])){
            start++
            continue
        }
        if(isLetter(str[end])){
            end--
            continue
        }

        if(!isEqual(str[start], str[end])) return false;

        start++
        end--
    }
    return true
}
console.log(isPalindrom("madam, i'm ada4"))









