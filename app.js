const arrayLength = parseFloat(prompt("Введіть довжину масиву:"));

let array = [];

for (let i = 0; i < arrayLength; i++) {
    const element = parseFloat(prompt("Введіть елемент масиву:"));
    array.push(element);
}

console.log("Введений масив", array);

array.sort((a, b) => a - b);

console.log("Відсортований масив:", array);

array.splice(1, 3);

console.log("Масив після видалення елементів з 2 по 4:", array);