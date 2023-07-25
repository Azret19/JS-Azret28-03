const numbers = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67]
console.log(numbers)

const filterNumbers = numbers.filter((i)=> i % 2)
console.log(filterNumbers)
//

const books = [
    'Война и мир',
    'Улисс',
    'Лолита',
    'Звук и ярость',
    'Человек-невидимка',
    'На маяк',
    'Илиада и Одиссея',
    'Гордость и предубеждение',
]
const [...others] = books //b1, b2, b3, b4, b5, b6, b7, b8,
console.log(others)

const books1 = () => {
    for (let i = 0; i < books.length; i++) {
        if(books[i][2] === 'у' ||books[i][15] === 'у' ||books[i][0] === 'У'){
            console.log(` books with letter у - ${books[i]} `)
        }else{
            console.log(`other books - ${books[i]}`)
        }
    }
}
books1(books)


//==================

// const books1 = () => {
//     for (let i = 0; i < books.length; i++) {
//         if(books[i][2] === 'у' ||books[i][15] === 'у' ||books[i][0] === 'У'){
//             console.log(` books with letter у - ${books[i]} `)
//         }else{
//             console.log(`other books - ${books[i]}`)
//         }
//     }
// }
// books1(books)