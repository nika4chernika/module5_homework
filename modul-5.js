
// Задание 1

const value = +prompt('введите число')

if (typeof value === 'number' && !isNaN(value)) {
    if (value % 2 == 0) {
        console.log('Чётное число')
    }
    else {
        console.log('Нечётное число')
    }
} else {
    console.log('Упс! Кажется, Вы ошиблись!')
}


// Задание 2

let x = " ";

switch (typeof x) {
    case "number" :
        console.log("x - число");
        break;
    case "string":
        console.log("x - строка");
        break;
    case "Boolean":
        console.log("x - булев");
        break;
    default:
        console.log("Тип x не определён");
}


// Задание 3

const str = 'hello';
 
const reverse = [...str].reverse().join('');
console.log(reverse);


// Задание 4

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(0 , 100))


// Задание 5

let arr = [4, 8, 15, 16, 23, 42, 'банан', false];
let sum = 0;
console.log(arr.length)

for (let i of arr)
console.log(i)


// Задание 6

let arr = [1, 2, 1, 1]
let checkElements = 'true';
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        checkElements = 'false'
        break
    }
}

console.log(checkElements)


// Задание 7

let arr = [1, 1, 3, 4, 5, 7, null];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof (arr[i] == "number") && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else if (arr[i] % 2 !== 0) {
      oddCount++;
    } else {
      otherCount++;
    }
  }
}


// Задание 8

let clothes = new Map()

clothes.set("dress", "black");
clothes.set("jeans", "gray");
clothes.set("shirt", "white");


clothes.forEach ((value, key) => {
  console.log("ключ - " + `${key}` + ", значение - " + `${value}`)
})