// //7) bigint - 9n
// // console.log(typeof 9n)
// //8) symbol
//
// //truthy and falsy выражения
// //falsy -> '', 0, false, null, undefined, NaN, -0, 0n
//
// // var example = !!26
// // console.log(example ? 'true' : 'false')
//
//
// const animal = {
//     name: 'Animal',
//     age: 10,
//     color: 'black',
//
//     voice(){
//         // console.log('I am animal')
//     }
// }
// // console.log(animal)
// // animal.voice()
//
// //ОПП - объекто-ориентированное программирование
//
// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//         this.color = options.color
//     }
//     voice(){
//         // console.log('I am animal')
//     }
// }
// const animalByClass = new Animal({
//     name: 'Animal',
//     age: 34,
//     hasTail: true,
//     color: 'black'
// })
// console.log(animal)
// console.log(animalByClass)
//
// //наследование
//
// class Pigs extends Animal{
//     constructor(options) {
//         super(options);
//         this.hooves = options.hooves
//     }
// }
//
// const peppa = new Pigs({
//     name: 'Peppa',
//     age: 3,
//     hasTail: true,
//     color:'pink',
//     hooves: 4
// })
//
// console.log(peppa)








const dragAndDrop = () =>{
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')

    const dragStart = function (){
        console.log('dnd')
        setTimeout(()=>{
            this.classList.add('hide')
        }, 0)

    }

    const dragEnd = function () {
        console.log('dnd')
        this.classList.remove('hide')
    }
    const dragOver = function () {
        console.log('over')
    }

    const dragEnter = function () {
        console.log('enter')
    }

    const dragLeave = function () {
        console.log('leave')
    }

    cells.forEach((i)=>{
        i.addEventListener('dragover', dragOver)
        i.addEventListener('dragenter', dragEnter);
        i.addEventListener('dragleave', dragLeave);
    })



    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
}

dragAndDrop()


