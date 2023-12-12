// 1
function numbersAverage(arr) {
  const numbers = arr.filter(element => typeof element === 'number');

  if (numbers.length > 0) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
  } else {
      return 0; 
  }
}

const array = [1, 2, 'a', 3, 'b', 4, 'c', 5, 6, 7, 8, 'd', 9, 10];
const result1 = numbersAverage(array);
console.log(result1);

// 2
function doMath(x, znak, y) {
  x = parseFloat(x);
  y = parseFloat(y);

  switch (znak) {
      case '+':
          return x + y;
      case '-':
          return x - y;
      case '*':
          return x * y;
      case '/':
          if (y !== 0) {
              return x / y;
          } else {
              return "На нуль ділити не можна!";
          }
      case '%':
          return x % y;
      case '^':
          return Math.pow(x, y);
      default:
          return "Непідтримуваний математичний оператор";
  }
}

const x = prompt("Введіть перше число: ");
const znak = prompt("Введіть математичний знак (+, -, *, /, %, ^): ");
const y = prompt("Введіть друге число: ");

const result2 = doMath(x, znak, y);
alert(result2);

// 3

function fill2DArray() {
  const rows = parseFloat(prompt("Введіть кількість рядків:"));
  const cols = parseFloat(prompt("Введіть кількість стовпців:"));

  const array2 = [];

  for (let a = 0; a < rows; a++) {
      const row = [];
      for (let b = 0; b < cols; b++) {
          const value = prompt(`Введіть значення для елементу [${i}][${j}]:`);
          row.push(value);
      }
      array2.push(row);
  }

  return array2;
}

// 4

const input = prompt("Введіть рядок:");
const remove = prompt("Введіть символи для видалення (без пробілів):").split('');

function removeChars(input, remove) {

  const charsSet = new Set(remove);

  const result4 = input.split('').filter(char => !charsSet.has(char)).join('');

  return result4;
}

const resultOfFunction = removeChars(input, remove);
console.log(resultOfFunction);

