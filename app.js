let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveSum = 0;
let positiveCounter = 0;

let minElement = array[0];
let minIndex = 0;

let maxElement = array[0];
let maxIndex = 0;

let negativeCounter = 0;

let sumOddPositive = 0;
let oddPositiveCounter = 0;

let sumEvenPositive = 0;
let evenPositiveCounter = 0;

let multiplicationPositives = 1;

let maxElementReset = Math.max(...array);

for (let i = 0; i < array.length; i++) {
    
    // 1

if (array[i] > 0) {
    positiveSum += array[i];
    positiveCounter++;
}

// 2

if (array[i] < minElement) {
    minElement = array[i];
    minIndex = i;
}

// 3

if (array[i] > maxElement) {
    maxElement = array[i];
    maxIndex = i;
}

// 4

if (array[i] < 0) {
    negativeCounter++;
}

// 5 

if (array[i] > 0) {
    if (array[i] % 2 === 0) {
        evenPositiveCounter++;
        sumEvenPositive += array[i];
    } else {
        oddPositiveCounter++;
        sumOddPositive += array[i];
    }
}

// 6

if (array[i] > 0) {
    multiplicationPositives *= array[i];
}

//7

if (array[i] != maxElementReset) {
    array[i] = 0;
}

}

console.log(`Сума позитивних елементів: ${positiveSum}. Їх кількість становить: ${positiveCounter}`);

console.log(`Мінімальний елемент: ${minElement}. Його індекс: ${minIndex}`);

console.log(`Максимальний елемент: ${maxElement}. Його індекс: ${maxIndex}`);

console.log(`Кількість негативних елементів: ${negativeCounter}`);

console.log(`Кількість непарних позитивних елементів: ${oddPositiveCounter}`);

console.log(`Сума непарних позитивних елементів: ${sumOddPositive}`);

console.log(`Сума парних позитивних елементів: ${sumEvenPositive}`);

console.log(`Кількість парних позитивних елементів: ${evenPositiveCounter}`);

console.log(`Добуток позитивних елементів: ${multiplicationPositives}`);

console.log(`Найбільший елемент з обнуленням інших: ${array}`);