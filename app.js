var first_number = prompt("Введіть перше число:");

var second_number = prompt("Введіть друге число:");

var third_number = prompt("Введіть третє число:");

first_number = parseFloat(first_number);

second_number = parseFloat(second_number);

third_number = parseFloat(third_number);

var result = (first_number + second_number + third_number) / 3;

alert(`Середнє арифметичне чисел ${first_number}, ${second_number} і ${third_number} = ${result}`);

console.log()